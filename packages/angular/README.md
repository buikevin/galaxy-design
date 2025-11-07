# @galaxy-ui/angular

Beautiful, accessible Angular components built with Radix NG and Tailwind CSS.

## Installation

```bash
npm install @galaxy-ui/angular
```

Or use the Galaxy UI CLI:

```bash
npx @galaxy-ui/cli init
npx @galaxy-ui/cli add button
```

## Usage

```typescript
import { Component } from '@angular/core';
import { ButtonComponent } from '@galaxy-ui/angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button variant="default">Click me</ui-button>`
})
export class AppComponent {}
```

## Components

This package includes 23+ accessible components:

- Form: Button, Input, Label, Select, Checkbox, Radio Group, Switch, Slider, Textarea
- Layout: Accordion, Card, Separator, Tabs, Collapsible
- Feedback: Alert, Badge, Progress, Skeleton, Toast
- Navigation: Breadcrumb, Dropdown Menu, Navigation Menu, Popover, Tooltip
- Modals: Alert Dialog, Dialog, Hover Card

## Documentation

Visit [Galaxy UI Documentation](https://github.com/buikevin/galaxy-design) for detailed guides and examples.

## Author

Created by **Bùi Trọng Hiếu (kevinbui)**

- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
