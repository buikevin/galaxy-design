#!/usr/bin/env node
/**
 * Galaxy UI MCP Server
 * Exposes component manifests, source files, and setup validation
 * as MCP tools for AI assistants.
 *
 * Reads bundled data from dist/data (published package) with fallback
 * to monorepo paths (development mode).
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import path, { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const pkgRoot = path.resolve(__dirname, '..');
const monorepoRoot = path.resolve(pkgRoot, '..', '..', '..');

// Bundled data (published package) with fallback to repo paths (dev mode)
const bundledData = join(pkgRoot, 'dist', 'data');
const manifestsDir = existsSync(join(bundledData, 'manifests'))
  ? join(bundledData, 'manifests')
  : join(monorepoRoot, 'packages/contracts/manifests');
const generatedDir = existsSync(join(bundledData, 'generated'))
  ? join(bundledData, 'generated')
  : join(monorepoRoot, 'packages/contracts/generated');
const sourcesDir = existsSync(join(bundledData, 'sources'))
  ? join(bundledData, 'sources')
  : null;

function readSourceFile(framework, componentId, file) {
  // Published package: sources bundled at dist/data/sources/<fw>/<id>/<file>
  if (sourcesDir) {
    const abs = path.join(sourcesDir, framework, componentId, file);
    if (existsSync(abs)) return readFileSync(abs, 'utf-8');
    return null;
  }
  // Dev mode: read from monorepo source trees
  const roots = {
    react: 'packages/react/src/components',
    vue: 'packages/vue/src/components',
    angular: 'packages/angular/src/components',
    'react-native': 'packages/react-native/src/components',
    flutter: 'packages/flutter/lib/components',
  };
  const abs = path.join(monorepoRoot, roots[framework], componentId, file);
  if (!existsSync(abs)) return null;
  return readFileSync(abs, 'utf-8');
}

function loadManifest(id) {
  return JSON.parse(readFileSync(path.join(manifestsDir, `${id}.json`), 'utf-8'));
}

function loadCoverage() {
  return JSON.parse(readFileSync(path.join(generatedDir, 'coverage.json'), 'utf-8'));
}

const TOOLS = [
  {
    name: 'list_components',
    description: 'List all available Galaxy UI components with their availability per framework',
    inputSchema: {
      type: 'object',
      properties: {
        framework: {
          type: 'string',
          enum: ['react', 'vue', 'angular', 'react-native', 'flutter'],
          description: 'Filter by framework (optional)',
        },
      },
    },
  },
  {
    name: 'get_component',
    description: 'Get detailed metadata for a specific component including props, files, and per-framework status',
    inputSchema: {
      type: 'object',
      required: ['id'],
      properties: {
        id: { type: 'string', description: 'Component ID (e.g. button, dialog)' },
      },
    },
  },
  {
    name: 'get_component_source',
    description: 'Read the source code of a specific component file',
    inputSchema: {
      type: 'object',
      required: ['framework', 'id', 'file'],
      properties: {
        framework: {
          type: 'string',
          enum: ['react', 'vue', 'angular', 'react-native', 'flutter'],
        },
        id: { type: 'string', description: 'Component ID' },
        file: { type: 'string', description: 'File name (e.g. Button.tsx)' },
      },
    },
  },
  {
    name: 'get_coverage',
    description: 'Get component availability coverage across all frameworks',
    inputSchema: { type: 'object', properties: {} },
  },
  {
    name: 'search_components',
    description: 'Search components by name or description',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search query' },
      },
    },
  },
];

const server = new Server(
  { name: 'nebula-mcp', version: '1.0.0' },
  { capabilities: { tools: {} } },
);

server.setRequestHandler(ListToolsRequestSchema, async () => {
  return { tools: TOOLS };
});

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'list_components': {
        const coverage = loadCoverage();
        const result = Object.entries(coverage.frameworks)
          .filter(([fw]) => !args?.framework || fw === args.framework)
          .map(([fw, data]) => ({
            framework: fw,
            available: data.available,
            total: data.available.length,
            missing: data.missing,
          }));
        return { content: [{ type: 'text', text: JSON.stringify(result, null, 2) }] };
      }

      case 'get_component': {
        const manifest = loadManifest(args.id);
        return { content: [{ type: 'text', text: JSON.stringify(manifest, null, 2) }] };
      }

      case 'get_component_source': {
        const content = readSourceFile(args.framework, args.id, args.file);
        if (content === null) {
          return { content: [{ type: 'text', text: `File not found: ${args.framework}/${args.id}/${args.file}` }] };
        }
        return { content: [{ type: 'text', text: content }] };
      }

      case 'get_coverage': {
        const coverage = loadCoverage();
        return { content: [{ type: 'text', text: JSON.stringify(coverage, null, 2) }] };
      }

      case 'search_components': {
        const query = (args.query || '').toLowerCase();
        const found = new Set();
        for (const file of readdirSync(manifestsDir)) {
          if (!file.endsWith('.json')) continue;
          const manifest = JSON.parse(readFileSync(path.join(manifestsDir, file), 'utf-8'));
          if (
            manifest.name.toLowerCase().includes(query) ||
            manifest.description.toLowerCase().includes(query) ||
            manifest.id.toLowerCase().includes(query)
          ) {
            found.add(manifest.id);
          }
        }
        return { content: [{ type: 'text', text: JSON.stringify([...found].sort(), null, 2) }] };
      }

      default:
        throw new Error(`Unknown tool: ${name}`);
    }
  } catch (error) {
    return {
      content: [{ type: 'text', text: `Error: ${error.message}` }],
      isError: true,
    };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.error(`Galaxy UI MCP server running on stdio (data: ${existsSync(join(bundledData, 'manifests')) ? 'bundled' : 'monorepo'})`);
}

main();
