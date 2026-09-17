# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.2.0] - 2026-09-18

### Changed

- Renamed the npm package from `@galaxy-stack/design-mcp` to
  `@galaxy-stack/nebula-mcp` as part of the Galaxy Stack organization plan
  (galaxy design product line moves to the
  [galaxy-nebula](https://github.com/galaxy-nebula) organization).
- Renamed the binary from `galaxy-ui-mcp` to `nebula-mcp`.
- MCP Registry name changed from `io.github.buikevin/galaxy-design-mcp` to
  `io.github.buikevin/nebula-mcp` (`server.json`).
- `@galaxy-stack/design-mcp@0.1.1` and earlier are deprecated; they still
  resolve but point new installs to this package.
- Smithery entry needs re-registration under the new server name:
  `https://smithery.ai/servers/galaxy-stack/nebula-mcp`.

## [0.1.1] - 2026

### Added

- `mcpName` field and `server.json` for the official MCP Registry; shortened
  description to satisfy registry limits.

## [0.1.0] - 2026

### Added

- Initial release: `list_components`, `get_component`, `get_component_source`,
  `get_coverage`, and `search_components` tools over Galaxy component
  manifests.
