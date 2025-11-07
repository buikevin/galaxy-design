# @galaxy-ui/mcp-server

Model Context Protocol (MCP) server for Galaxy UI - enables AI assistants like Claude to automatically discover and use Galaxy UI components.

## 🎯 What is this?

This MCP server exposes Galaxy UI's component registry to AI assistants, allowing them to:
- Discover available UI components across all frameworks (React, Vue, Angular, React Native, Flutter)
- Get detailed information about components (dependencies, files, usage)
- Search for components by functionality
- Get installation instructions

When integrated with Claude Desktop or other MCP-compatible AI tools, Claude will automatically suggest and use Galaxy UI components when helping you build UIs!

## 📦 Installation

### Option 1: Global Installation (Recommended)

```bash
npm install -g @galaxy-ui/mcp-server
```

### Option 2: Local Installation

```bash
cd /path/to/galaxy-ui/packages/mcp-server
bun install
bun run build
```

## 🔧 Integration with Claude Desktop

### Step 1: Find Claude Desktop Config

The config file location depends on your OS:

- **macOS**: `~/Library/Application Support/Claude/claude_desktop_config.json`
- **Windows**: `%APPDATA%\Claude\claude_desktop_config.json`
- **Linux**: `~/.config/Claude/claude_desktop_config.json`

### Step 2: Edit Config File

Add the Galaxy UI MCP server to your config:

```json
{
  "mcpServers": {
    "galaxy-ui": {
      "command": "node",
      "args": [
        "/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui/packages/mcp-server/dist/index.js"
      ],
      "env": {}
    }
  }
}
```

**Note**: Replace the path with your actual path to the built MCP server.

### Step 3: Restart Claude Desktop

Close and reopen Claude Desktop completely. The MCP server will automatically start when Claude launches.

### Step 4: Verify Integration

In Claude Desktop, you should see a 🔌 icon indicating MCP servers are connected. You can now ask Claude:

```
"Show me available Galaxy UI components for React"
"What dependencies does the Button component need?"
"How do I install Galaxy UI in my Vue project?"
```

Claude will automatically use the MCP server to answer!

## 🛠️ Integration with VS Code (Claude Code Extension)

If you're using the Claude Code extension in VS Code:

### Step 1: Find VS Code Claude Config

- **macOS**: `~/Library/Application Support/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`
- **Windows**: `%APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- **Linux**: `~/.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

### Step 2: Edit Config File

```json
{
  "mcpServers": {
    "galaxy-ui": {
      "command": "node",
      "args": [
        "/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui/packages/mcp-server/dist/index.js"
      ],
      "disabled": false,
      "autoApprove": []
    }
  }
}
```

### Step 3: Reload VS Code

Reload VS Code window (Cmd/Ctrl + Shift + P → "Reload Window")

## 📖 Available Tools

The MCP server provides 4 tools that Claude can use:

### 1. `list_components`

Lists all available components for a framework.

**Parameters**:
- `framework` (required): react, vue, angular, react-native, or flutter
- `category` (optional): form, layout, feedback, data-display, overlay, navigation, charts

**Example**:
```
Claude: "List all form components for React"
→ Uses list_components with framework=react, category=form
```

### 2. `get_component_details`

Gets detailed information about a specific component.

**Parameters**:
- `framework` (required): react, vue, angular, react-native, or flutter
- `component` (required): component name (e.g., "button", "input")

**Example**:
```
Claude: "Show me details for the React Select component"
→ Uses get_component_details with framework=react, component=select
```

### 3. `search_components`

Searches for components across all frameworks.

**Parameters**:
- `query` (required): search term
- `framework` (optional): filter by framework

**Example**:
```
Claude: "Find components for displaying charts"
→ Uses search_components with query="chart"
```

### 4. `get_installation_guide`

Gets installation instructions for Galaxy UI.

**Parameters**:
- `framework` (required): react, vue, angular, react-native, or flutter

**Example**:
```
Claude: "How do I install Galaxy UI for Vue?"
→ Uses get_installation_guide with framework=vue
```

## 🧪 Testing the MCP Server

You can test the MCP server manually:

```bash
# Build first
cd /path/to/galaxy-ui/packages/mcp-server
bun run build

# Run the server
node dist/index.js
```

The server will start and wait for MCP protocol messages on stdin.

To test with MCP Inspector (debugging tool):

```bash
npm install -g @modelcontextprotocol/inspector

mcp-inspector node dist/index.js
```

This opens a web UI where you can test the tools interactively.

## 📝 Example Usage in Claude

Once integrated, you can ask Claude things like:

```
User: "I need to build a form with a button, input, and select dropdown using Galaxy UI in React"

Claude: Let me check what components are available in Galaxy UI for React.
[Uses list_components tool]

I can see Galaxy UI has:
- Button component
- Input component
- Select component

Let me get the installation details.
[Uses get_installation_guide and get_component_details tools]

Here's how to set it up:

1. First, install Galaxy UI CLI:
   npm install -g galaxy-ui-cli

2. Initialize Galaxy UI in your React project:
   npx galaxy-ui-cli init --framework react

3. Add the components:
   npx galaxy-ui-cli add button input select

The Button component requires:
- @radix-ui/react-slot
- class-variance-authority

...
```

## 🐛 Troubleshooting

### MCP Server Not Connecting

1. Check the path in your config is correct
2. Make sure the server was built (`bun run build`)
3. Check Claude Desktop logs:
   - macOS: `~/Library/Logs/Claude/`
   - Windows: `%APPDATA%\Claude\logs\`

### Tools Not Appearing

1. Restart Claude Desktop completely
2. Check the 🔌 icon in Claude Desktop
3. Try asking: "What MCP servers are available?"

### Component Not Found

Make sure the registries exist:
```bash
ls /path/to/galaxy-ui/packages/mcp-server/registries/
```

You should see:
- registry-react.json
- registry-vue.json
- registry-angular.json
- registry-react-native.json
- registry-flutter.json

## 📚 Resources

- MCP Documentation: https://modelcontextprotocol.io
- Galaxy UI Documentation: https://galaxy-ui.vercel.app
- Claude Desktop: https://claude.ai/download

## 📄 License

MIT
