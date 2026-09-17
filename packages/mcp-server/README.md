# @galaxy-stack/nebula-mcp

MCP server exposing Galaxy Nebula components for AI assistants.

> Renamed from `@galaxy-stack/design-mcp` as part of the Galaxy Stack
> organization plan. The old package name is deprecated but continues to
> resolve for existing installations.

## Tools

- `list_components` — list all components with per-framework availability
- `get_component` — get detailed manifest for a component
- `get_component_source` — read source code for a specific file
- `get_coverage` — get coverage matrix across frameworks
- `search_components` — search by name or description

## Usage

Add to Claude Desktop config:

```json
{
  "mcpServers": {
    "galaxy-nebula": {
      "command": "npx",
      "args": ["-y", "@galaxy-stack/nebula-mcp"]
    }
  }
}
```

## Installation

```bash
npm install -g @galaxy-stack/nebula-mcp
# or run directly
npx -y @galaxy-stack/nebula-mcp
```

## Related

- CLI: [@galaxy-stack/nebula-cli](https://www.npmjs.com/package/@galaxy-stack/nebula-cli)
- Repository: [galaxy-nebula/galaxy-design](https://github.com/galaxy-nebula/galaxy-design)
- Deprecated predecessor: `@galaxy-stack/design-mcp` (0.1.1)
