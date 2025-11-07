#!/usr/bin/env node

import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import {
  CallToolRequestSchema,
  ListToolsRequestSchema,
  Tool,
} from '@modelcontextprotocol/sdk/types.js';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Types
interface ComponentInfo {
  name: string;
  type: string;
  description: string;
  dependencies: string[];
  devDependencies: string[];
  registryDependencies: string[];
  files: string[];
  category: string;
}

interface Registry {
  name: string;
  components: Record<string, ComponentInfo>;
}

// Load registries
const FRAMEWORKS = ['react', 'vue', 'angular', 'react-native', 'flutter'];
const registries = new Map<string, Registry>();

function loadRegistries() {
  for (const framework of FRAMEWORKS) {
    try {
      // Load component registry
      const registryPath = join(__dirname, '..', 'registries', `registry-${framework}.json`);
      const data = readFileSync(registryPath, 'utf-8');
      const registry = JSON.parse(data) as Registry;

      // Load blocks registry and merge
      try {
        const blocksPath = join(__dirname, '..', 'registries', `blocks-${framework}.json`);
        const blocksData = readFileSync(blocksPath, 'utf-8');
        const blocksRegistry = JSON.parse(blocksData) as Registry;

        // Merge blocks into components
        registry.components = {
          ...registry.components,
          ...blocksRegistry.components
        };

        console.error(`Loaded ${framework}: ${Object.keys(registry.components).length} components (including blocks)`);
      } catch (blocksError) {
        console.error(`No blocks registry for ${framework} (this is ok)`);
      }

      registries.set(framework, registry);
    } catch (error) {
      console.error(`Failed to load ${framework} registry:`, error);
    }
  }
}

// MCP Server
const server = new Server(
  {
    name: '@galaxy-ui/mcp-server',
    version: '0.1.0',
  },
  {
    capabilities: {
      tools: {},
    },
  }
);

// Tools Definition
const TOOLS: Tool[] = [
  {
    name: 'list_components',
    description: 'List all available Galaxy UI components for a specific framework. Returns component names, descriptions, and categories.',
    inputSchema: {
      type: 'object',
      properties: {
        framework: {
          type: 'string',
          description: 'The framework to list components for',
          enum: FRAMEWORKS,
        },
        category: {
          type: 'string',
          description: 'Optional: Filter by component category (form, layout, feedback, data-display, overlay, navigation, charts, blocks)',
          enum: ['form', 'layout', 'feedback', 'data-display', 'overlay', 'navigation', 'charts', 'blocks'],
        },
      },
      required: ['framework'],
    },
  },
  {
    name: 'get_component_details',
    description: 'Get detailed information about a specific Galaxy UI component including dependencies, files, and usage instructions.',
    inputSchema: {
      type: 'object',
      properties: {
        framework: {
          type: 'string',
          description: 'The framework of the component',
          enum: FRAMEWORKS,
        },
        component: {
          type: 'string',
          description: 'The component name (e.g., "button", "input", "select")',
        },
      },
      required: ['framework', 'component'],
    },
  },
  {
    name: 'search_components',
    description: 'Search for Galaxy UI components across all frameworks by name or description. Useful for finding components that match specific functionality.',
    inputSchema: {
      type: 'object',
      properties: {
        query: {
          type: 'string',
          description: 'Search query (searches in component names and descriptions)',
        },
        framework: {
          type: 'string',
          description: 'Optional: Filter by specific framework',
          enum: FRAMEWORKS,
        },
      },
      required: ['query'],
    },
  },
  {
    name: 'get_installation_guide',
    description: 'Get installation instructions for Galaxy UI CLI and how to add components to your project.',
    inputSchema: {
      type: 'object',
      properties: {
        framework: {
          type: 'string',
          description: 'The framework you want to use',
          enum: FRAMEWORKS,
        },
      },
      required: ['framework'],
    },
  },
];

// Tool Handlers
server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: TOOLS,
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  const { name, arguments: args } = request.params;

  try {
    switch (name) {
      case 'list_components': {
        const { framework, category } = args as { framework: string; category?: string };
        const registry = registries.get(framework);

        if (!registry) {
          return {
            content: [
              {
                type: 'text',
                text: `Registry for ${framework} not found`,
              },
            ],
          };
        }

        let components = Object.entries(registry.components);

        if (category) {
          components = components.filter(([_, comp]) => comp.category === category);
        }

        const componentList = components.map(([id, comp]) => ({
          id,
          name: comp.name,
          description: comp.description,
          category: comp.category,
          type: comp.type,
        }));

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                framework,
                count: componentList.length,
                components: componentList,
              }, null, 2),
            },
          ],
        };
      }

      case 'get_component_details': {
        const { framework, component } = args as { framework: string; component: string };
        const registry = registries.get(framework);

        if (!registry) {
          return {
            content: [
              {
                type: 'text',
                text: `Registry for ${framework} not found`,
              },
            ],
          };
        }

        const componentInfo = registry.components[component.toLowerCase()];

        if (!componentInfo) {
          return {
            content: [
              {
                type: 'text',
                text: `Component "${component}" not found in ${framework} registry`,
              },
            ],
          };
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                framework,
                component: component.toLowerCase(),
                details: componentInfo,
                installation: `npx galaxy-design add ${component.toLowerCase()}`,
              }, null, 2),
            },
          ],
        };
      }

      case 'search_components': {
        const { query, framework } = args as { query: string; framework?: string };
        const searchResults: Array<{
          framework: string;
          component: string;
          name: string;
          description: string;
          category: string;
        }> = [];

        const frameworksToSearch = framework ? [framework] : FRAMEWORKS;

        for (const fw of frameworksToSearch) {
          const registry = registries.get(fw);
          if (!registry) continue;

          for (const [id, comp] of Object.entries(registry.components)) {
            const matchesName = comp.name.toLowerCase().includes(query.toLowerCase());
            const matchesDesc = comp.description.toLowerCase().includes(query.toLowerCase());

            if (matchesName || matchesDesc) {
              searchResults.push({
                framework: fw,
                component: id,
                name: comp.name,
                description: comp.description,
                category: comp.category,
              });
            }
          }
        }

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                query,
                count: searchResults.length,
                results: searchResults,
              }, null, 2),
            },
          ],
        };
      }

      case 'get_installation_guide': {
        const { framework } = args as { framework: string };

        const guide = {
          framework,
          steps: [
            {
              step: 1,
              title: 'Install Galaxy UI CLI',
              command: 'npm install -g galaxy-design',
              description: 'Install the CLI tool globally to manage Galaxy UI components',
            },
            {
              step: 2,
              title: 'Initialize your project',
              command: `npx galaxy-design init --framework ${framework}`,
              description: 'Set up Galaxy UI in your project with the required dependencies',
            },
            {
              step: 3,
              title: 'Add components',
              command: 'npx galaxy-design add <component-name>',
              description: 'Add any component to your project. Example: npx galaxy-design add button',
            },
          ],
          documentation: 'https://galaxy-ui.vercel.app',
          examples: `
Example usage:
\`\`\`bash
# Add a button component
npx galaxy-design add button

# Add multiple components
npx galaxy-design add button input select

# List available components
npx galaxy-design list
\`\`\`
          `,
        };

        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(guide, null, 2),
            },
          ],
        };
      }

      default:
        return {
          content: [
            {
              type: 'text',
              text: `Unknown tool: ${name}`,
            },
          ],
        };
    }
  } catch (error) {
    return {
      content: [
        {
          type: 'text',
          text: `Error: ${error instanceof Error ? error.message : String(error)}`,
        },
      ],
    };
  }
});

// Start server
async function main() {
  loadRegistries();

  console.error('Galaxy UI MCP Server starting...');
  console.error(`Loaded ${registries.size} framework registries`);

  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error('Galaxy UI MCP Server running');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
