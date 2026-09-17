# galaxy-design-mcp-server

MCP server exposing Galaxy UI components for AI assistants.

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
    "galaxy-ui": {
      "command": "npx",
      "args": ["-y", "galaxy-design-mcp-server"]
    }
  }
}
```
