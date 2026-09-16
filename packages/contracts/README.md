# @galaxy-ui/contracts

Canonical component manifests for Galaxy UI. This package is the pilot for the
manifest-driven source of truth described in `OPTIMIZATION_REPORT.md` (P1.1).

## Layout

- `schemas/component-manifest.schema.json` — manifest JSON Schema.
- `manifests/*.json` — one file per component (normalized props/children plus
  per-framework files, exports, and dependencies). Normalized root props merge
  framework-local props across frameworks (`className/class`,
  `modelValue/value`, `onValueChange/valueChange`, ...) with per-framework
  name/type/default overrides; framework-local props stay under
  `frameworks.<framework>.props` for CLI fidelity.
- `scripts/lib/manifests.mjs` — shared validation logic that checks manifests
  against real source files, exports, and imports.
- `scripts/generate-registries.mjs` — emits framework registries, summary, and
  coverage data into `generated/`.
- `generated/` — generated artifacts (do not edit by hand).

## Commands

```bash
npm run manifests:validate   # check manifests against source truth
npm run manifests:generate   # (re)generate artifacts
npm run manifests:check      # fail when generated artifacts are stale
npm run manifests:build:artifact  # versioned release artifact + sha256 manifest
```

`build:artifact` writes `dist/registry/<version>/` where `<version>` is the
contracts version plus the current git commit (`0.1.0+a1978198a3d9`). Each file
is checksummed in `manifest.json`, and the manifest carries a `digest` (sha256
over the sorted checksum list) that a CLI release can bundle as its trust
anchor for P1.4 CDN distribution.

## Pilot components

`button`, `dialog`, `select`, `date-picker`, `gauge-chart` plus two drift
reference cases (`toast`, `toolbar`) are covered. Each manifest records:

- normalized props with per-framework name/type overrides;
- anatomy children with per-framework export names;
- per-framework files, public exports, entry point, and dependencies;
- availability status per framework (`missing`, `partial`, `complete`).

The validator intentionally fails on drift between manifest and source
(missing files, missing exports, undeclared imports, stale artifacts).
