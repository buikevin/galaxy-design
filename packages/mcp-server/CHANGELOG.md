# Changelog

All notable changes to **@galaxy-stack/nebula-mcp** (formerly `@galaxy-stack/design-mcp`) are documented here.

## [1.0.0] — 2026-09-19

Nebula milestone — first stable major release.

### Changed — BREAKING

- Package renamed: `@galaxy-stack/design-mcp` → **`@galaxy-stack/nebula-mcp`**
- Binary renamed: `galaxy-ui-mcp` → **`nebula-mcp`**
- Server identity: `nebula-mcp` (report via MCP serverInfo)
- Official MCP Registry name: `io.github.galaxy-nebula/nebula-mcp`

### Added

- npm Trusted Publishing (OIDC) via GitHub Actions — `publish-mcp.yml`
- Smithery MCPB bundle publication (remote endpoint: `nebula-mcp--galaxy-stack.run.tools`)
- Official MCP Registry listing (`registry.modelcontextprotocol.io`)
- 700 component sources + 7 registries bundled in `dist/data`

### Migration from 0.1.1

```bash
npm uninstall @galaxy-stack/design-mcp   # if installed locally
npm install @galaxy-stack/nebula-mcp     # or: npx -y @galaxy-stack/nebula-mcp
```

## [0.1.1] — 2026-09-17

- `mcpName` field for official MCP Registry ownership verification
- `server.json` for `registry.modelcontextprotocol.io`

## [0.1.0] — 2026-09-17

Initial public release.

- 5 tools: `list_components`, `get_component`, `get_component_source`, `get_coverage`, `search_components`
- 62 canonical manifests + 7 registry artifacts + 700 component sources bundled
- Monorepo dev-mode fallback (reads `packages/contracts` directly)
