#!/usr/bin/env node
/**
 * Galaxy UI MCP Server
 * Exposes component manifests, source files, and setup validation
 * as MCP tools for AI assistants.
 */

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, '..', '..', '..');

function readJson(filePath) {
  return JSON.parse(readFileSync(filePath, 'utf-8'));
}

function loadManifest(id) {
  return JSON.parse(
    readFileSync(path.join(repoRoot, 'packages/contracts/manifests', `${id}.json`), 'utf-8'),
  );
}

function loadCoverage() {
  return JSON.parse(
    readFileSync(path.join(repoRoot, 'packages/contracts/generated', 'coverage.json'), 'utf-8'),
  );
}

function readSourceFile(framework, componentId, file) {
  const roots = {
    react: 'packages/react/src/components',
    vue: 'packages/vue/src/components',
    angular: 'packages/angular/src/components',
    'react-native': 'packages/react-native/src/components',
    flutter: 'packages/flutter/lib/components',
  };
  const abs = path.join(repoRoot, roots[framework], componentId, file);
  if (!existsSync(abs)) return null;
  return readFileSync(abs, 'utf-8');
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
  { name: 'galaxy-ui-mcp', version: '0.1.0' },
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
        const manifestDir = path.join(repoRoot, 'packages', 'contracts', 'manifests');
        const found = new Set();
        for (const file of readdirSync(manifestDir)) {
          if (!file.endsWith('.json')) continue;
          const manifest = JSON.parse(readFileSync(path.join(manifestDir, file), 'utf-8'));
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
  console.error('Galaxy UI MCP server running on stdio');
}

main();
