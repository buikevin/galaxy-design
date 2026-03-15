# Registry Mapping Plan

## Goal
Create an extended registry schema to power `galaxy-ai` tooling.

Planned additions per component:
- `frameworks`: list of supported frameworks (aligned with CLI: `react`, `vue`, `angular`, `nextjs`, `nuxtjs`, `react-native`, `flutter`).
- `props`: structured list of component props with per-framework overrides.

## Mapping Requirements
- Read component code in **all supported frameworks** before updating `galaxy-design-cli/src/registry.json`.
- Include **full props** where possible, including props from underlying primitives (Radix UI / Radix Vue / Radix NG).
- If a framework implementation is missing in repo, mark it explicitly and skip until code is available.

## Prop Sources (Reference)
- Radix UI (React): `https://www.radix-ui.com/primitives/docs/components/accordion`
- Radix Vue: `https://www.radix-vue.com/components/accordion.html`
- Radix NG: `https://www.radix-ng.com/primitives/components/accordion`

## Standardized Prop Schema
```json
{
  "name": "string",
  "type": {
    "kind": "primitive | union | array | function | custom | literal",
    "name": "string (for primitive/custom)",
    "values": "array (for union)",
    "of": "type (for array)",
    "signature": "string (for function)",
    "value": "any (for literal)"
  },
  "default": "any",
  "description": "string",
  "frameworks": ["react", "vue", "angular", "nextjs", "nuxtjs", "react-native", "flutter"],
  "overrides": {
    "framework": {
      "name": "string (optional)",
      "type": "type (optional)",
      "default": "any (optional)",
      "description": "string (optional)"
    }
  }
}
```

## Child Components
Some components expose nested parts (e.g., `AccordionItem`, `AccordionTrigger`, `AccordionContent`).  
For these, include a `children` array on the parent component:
```json
{
  "children": [
    {
      "name": "AccordionItem",
      "props": [
        { "name": "value", "type": { "kind": "primitive", "name": "string" } }
      ]
    }
  ]
}
```

## Cross-Framework Normalization
- Prefer a shared API surface whenever the same component exists across multiple frameworks.
- Use framework-specific props only when the underlying libraries cannot expose an equivalent prop cleanly.
- For components backed by different libraries, define a common conceptual schema first, then map each framework onto that schema.

### `resizable` Strategy
- Target a shared model based on `group / panel / handle`.
- Preferred implementation libraries:
  - React: `react-resizable-panels`
  - Vue: `Radix Vue Splitter`
  - Angular: `angular-split`
- Common props target:
  - `ResizablePanelGroup`: `direction`, `autoSaveId`, `keyboardResizeBy`, `onLayout`, `className/class`
  - `ResizablePanel`: `defaultSize`, `minSize`, `maxSize`, `collapsedSize`, `collapsible`, `order`, `className/class`
  - `ResizableHandle`: `disabled`, `withHandle`, `className/class`
- If a framework cannot support one of the common props directly, keep the prop in the normalized schema and document the framework-specific limitation in the framework registry.

### `stepper` Strategy
- See `STEPPER_SPEC.md`.
- Priority order:
  - UI parity across 5 frameworks
  - shared state model
  - normalized props
- Preferred implementation libraries:
  - Vue: `Radix Vue Stepper`
  - Angular: `Radix NG Stepper`
  - React: custom implementation mirroring Vue/Angular
  - React Native: custom implementation
  - Flutter: custom implementation

### `rate` Strategy
- See `RATE_SPEC.md`.
- Use a custom implementation for all 5 frameworks.
- Priority order:
  - UI parity across 5 frameworks
  - shared interaction model
  - normalized props

### `tags-input` Strategy
- See `TAGS_INPUT_SPEC.md`.
- Use Radix Vue `TagsInput` as the source of truth for anatomy and interaction.
- Preferred implementation libraries:
  - Vue: `Radix Vue TagsInput`
  - Angular: custom implementation mirroring Radix Vue
  - React: custom implementation mirroring Radix Vue
  - React Native: custom implementation
  - Flutter: custom implementation
- `tag` should later be designed as the standalone extraction of the `TagsInputItem` visual language.

## Proposed Props Shape (Option B)
```json
{
  "name": "modelValue",
  "type": "string",
  "default": "",
  "description": "Two-way binding value",
  "frameworks": ["vue", "nuxtjs"],
  "overrides": {
    "angular": { "name": "ngModel", "type": "string" },
    "react": { "name": "value", "type": "string" }
  }
}
```

## Status Checklist
- [ ] Schema draft reviewed
- [ ] Generation/maintenance strategy decided (manual vs generated from source)

## Components Mapping Checklist

Legend:
- `[x]`: framework has been mapped into framework-specific registry
- `[ ]`: not mapped yet or framework implementation is missing

| Component | React | Vue | Angular | React Native | Flutter |
| --- | --- | --- | --- | --- | --- |
| accordion | [x] | [x] | [x] | [x] | [x] |
| alert | [x] | [x] | [x] | [x] | [x] |
| alert-dialog | [x] | [x] | [x] | [x] | [x] |
| area-chart | [x] | [x] | [x] | [x] | [x] |
| aspect-ratio | [x] | [x] | [x] | [x] | [x] |
| autocomplete (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| avatar | [x] | [x] | [x] | [x] | [x] |
| badge | [x] | [x] | [x] | [x] | [x] |
| bar-chart | [x] | [x] | [x] | [x] | [x] |
| breadcrumb | [x] | [x] | [x] | [ ] | [ ] |
| button | [x] | [x] | [x] | [x] | [x] |
| button-group (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| calendar | [x] | [x] | [x] | [ ] | [ ] |
| calendar-range | [x] | [x] | [x] | [ ] | [ ] |
| card | [x] | [x] | [x] | [x] | [x] |
| carousel (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| checkbox | [x] | [x] | [x] | [x] | [x] |
| collapsible | [x] | [x] | [x] | [x] | [x] |
| command | [x] | [x] | [x] | [ ] | [ ] |
| context-menu | [x] | [x] | [x] | [x] | [x] |
| date-picker | [x] | [ ] | [ ] | [x] | [x] |
| date-range-picker | [x] | [ ] | [ ] | [ ] | [ ] |
| date-time-picker | [x] | [ ] | [ ] | [ ] | [ ] |
| dialog | [x] | [x] | [x] | [x] | [x] |
| donut-chart | [x] | [x] | [x] | [x] | [x] |
| drawer (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| dropdown-menu | [x] | [x] | [x] | [x] | [x] |
| empty | [x] | [x] | [x] | [x] | [x] |
| form | [x] | [x] | [x] | [ ] | [ ] |
| gauge-chart | [ ] | [ ] | [x] | [x] | [x] |
| hover-card | [x] | [x] | [x] | [x] | [x] |
| input | [x] | [x] | [x] | [x] | [x] |
| kbd | [x] | [x] | [x] | [ ] | [ ] |
| label | [x] | [x] | [x] | [x] | [x] |
| line-chart | [x] | [x] | [x] | [x] | [x] |
| list (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| menubar | [x] | [x] | [x] | [x] | [x] |
| mixed-chart | [x] | [x] | [x] | [x] | [x] |
| navigation-menu | [x] | [x] | [x] | [x] | [x] |
| pagination | [x] | [x] | [x] | [x] | [x] |
| pie-chart | [x] | [x] | [x] | [x] | [x] |
| popconfirm (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| popover | [x] | [x] | [x] | [x] | [x] |
| progress | [x] | [x] | [x] | [x] | [x] |
| radar-chart | [x] | [x] | [x] | [x] | [x] |
| radio-group | [x] | [x] | [x] | [x] | [x] |
| rate (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| resizable | [x] | [x] | [x] | [ ] | [ ] |
| scatter-chart | [x] | [x] | [x] | [x] | [x] |
| scroll-area | [x] | [x] | [x] | [ ] | [ ] |
| select | [x] | [x] | [x] | [x] | [x] |
| separator | [x] | [x] | [x] | [x] | [x] |
| sheet | [x] | [x] | [x] | [x] | [x] |
| sidebar (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| skeleton | [x] | [x] | [x] | [x] | [x] |
| slider | [x] | [x] | [x] | [x] | [ ] |
| spinner | [x] | [x] | [x] | [x] | [x] |
| stepper (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| switch | [x] | [x] | [x] | [x] | [x] |
| table | [x] | [x] | [x] | [x] | [x] |
| table-paginated (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| tabs | [x] | [x] | [x] | [x] | [x] |
| tag (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| tags-input | [x] | [x] | [x] | [ ] | [ ] |
| textarea | [x] | [x] | [x] | [x] | [x] |
| time-picker | [x] | [ ] | [ ] | [ ] | [ ] |
| timeline (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| toast | [x] | [x] | [x] | [ ] | [ ] |
| toggle | [x] | [x] | [x] | [x] | [x] |
| toggle-group | [x] | [x] | [x] | [x] | [x] |
| toolbar | [x] | [x] | [x] | [ ] | [ ] |
| tooltip | [x] | [x] | [x] | [x] | [x] |
| tour (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| tree (not support) | [ ] | [ ] | [ ] | [ ] | [ ] |
| typography | [x] | [x] | [x] | [x] | [x] |
