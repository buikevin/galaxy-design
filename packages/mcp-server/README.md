# @galaxy-stack/nebula-mcp

[![npm version](https://img.shields.io/npm/v/@galaxy-stack/nebula-mcp.svg)](https://www.npmjs.com/package/@galaxy-stack/nebula-mcp)
[![npm downloads](https://img.shields.io/npm/dm/@galaxy-stack/nebula-mcp.svg)](https://www.npmjs.com/package/@galaxy-stack/nebula-mcp)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**Nebula MCP Server** — exposes [Galaxy UI](https://galaxy-design.vercel.app) components to AI assistants through the [Model Context Protocol](https://modelcontextprotocol.io). Works with Claude Desktop, Cursor, Windsurf, Cline, and any MCP-compatible client.

## Tools

| Tool | Description |
|---|---|
| `list_components` | All components with per-framework availability (React, Vue, Angular, React Native, Flutter) |
| `get_component` | Detailed manifest — props, files, dependencies, framework status |
| `get_component_source` | Actual source code for a specific component file |
| `get_coverage` | Coverage matrix across all 5 frameworks (67 components) |
| `search_components` | Search by name or description |

All component data + 700 source files are **bundled inside the package** — zero setup, works offline.

## Install

### Smithery (recommended)

```bash
npx -y @smithery/cli@latest install galaxy-stack/design-mcp --client claude
```

### npx (manual)

Add to your MCP client config:

```json
{
  "mcpServers": {
    "galaxy-ui": {
      "command": "npx",
      "args": ["-y", "@galaxy-stack/nebula-mcp"]
    }
  }
}
```

- **Claude Desktop**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Cursor**: `~/.cursor/mcp.json`

### Remote endpoint

Paste into clients that support remote MCP (Claude web Custom Connectors):

```
https://nebula-mcp--galaxy-stack.run.tools
```

## Try it

> "List Galaxy UI components for React"

> "Show me the source code of the Vue Select component"

> "Which components are missing in Flutter?"

## Registries

- **npm**: [@galaxy-stack/nebula-mcp](https://www.npmjs.com/package/@galaxy-stack/nebula-mcp)
- **Smithery**: [smithery.ai/servers/galaxy-stack/nebula-mcp](https://smithery.ai/servers/galaxy-stack/nebula-mcp)
- **Official MCP Registry**: [io.github.galaxy-nebula/nebula-mcp](https://registry.modelcontextprotocol.io)

## Publishing (maintainers)

1. Bump `version` in `package.json`
2. Push to `main` — GitHub Actions workflow `publish-mcp.yml` builds contracts artifacts, bundles data, verifies the version is new, and publishes via **npm Trusted Publishing (OIDC)** — no NPM_TOKEN required
3. Rebuild the MCPB bundle and run `smithery mcp publish` for Smithery

## License

MIT © [Bùi Trọng Hiếu (kevinbui)](https://github.com/buikevin)
