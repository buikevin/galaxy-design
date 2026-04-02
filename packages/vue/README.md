# @galaxy-ui/vue

Beautiful, accessible Vue 3 components built with Radix Vue and Tailwind CSS.

## Status

This package now has a root library build pipeline for workspace verification and packaging.

Current verified artifact targets:

- `dist/index.js`
- `dist/index.d.ts`

Component source still lives in `src/`, and the package also exposes `@galaxy-ui/source` for source-workspace usage.

## Source Usage

The root source entry is:

```bash
packages/vue/src/index.ts
```

## Publish Readiness

Before publishing this package independently, keep validating it with:

```bash
npm run build
npm pack --dry-run
```

## Components

This package includes 23+ accessible components:

- Form: Button, Input, Label, Select, Checkbox, Radio Group, Switch, Slider, Textarea
- Layout: Accordion, Card, Separator, Tabs, Collapsible
- Feedback: Alert, Badge, Progress, Skeleton, Toast
- Navigation: Breadcrumb, Dropdown Menu, Navigation Menu, Popover, Tooltip
- Modals: Alert Dialog, Dialog, Hover Card

## Documentation

Visit [Galaxy UI Documentation](https://github.com/buikevin/galaxy-design) for workspace context and implementation details.

## Author

Created by **Bùi Trọng Hiếu (kevinbui)**

- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
