# Accordion

A vertically stacked set of interactive headings that each reveal a section of content.

<ComponentPreview name="AccordionDemo">
  <template #preview>
    <DemoContainer>
      <AccordionDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Accordion } from '@/components/ui/accordion'
</script>

<template>
  <Accordion>Example content</Accordion>
</template>
```

```tsx [React]
import { Accordion } from "@/components/ui/accordion"

export default function App() {
  return <Accordion>Example content</Accordion>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AccordionComponent } from '@/components/ui/accordion';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AccordionComponent],
  template: `<ui-accordion>Example content</ui-accordion>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Accordion, AccordionItem, AccordionHeader, AccordionContent } from '@/components/ui/accordion'

export default function App() {
  return (
    <Accordion>
      <AccordionItem value="item-1">
        <AccordionHeader>Section 1</AccordionHeader>
        <AccordionContent>Content for section 1</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionHeader>Section 2</AccordionHeader>
        <AccordionContent>Content for section 2</AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ExpansionPanelList(
      children: [
        ExpansionPanel(
          headerBuilder: (context, isExpanded) => const ListTile(title: Text('Section 1')),
          body: const Padding(
            padding: EdgeInsets.all(16),
            child: Text('Content for section 1'),
          ),
        ),
        ExpansionPanel(
          headerBuilder: (context, isExpanded) => const ListTile(title: Text('Section 2')),
          body: const Padding(
            padding: EdgeInsets.all(16),
            child: Text('Content for section 2'),
          ),
        ),
      ],
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-design@latest add accordion
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add accordion
```

```bash [yarn]
yarn dlx galaxy-design@latest add accordion
```

```bash [bun]
bunx galaxy-design@latest add accordion
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add accordion
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-accordion`
- **Vue**: `radix-vue`
- **Angular**: `@radix-ng/primitives`

No manual installation needed!
:::

## Usage

### Basic Example

Basic usage examples will be added here.

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `type` | `'single' | 'multiple'` | `'single'` | Whether multiple items can be open at once | All |
| `collapsible` | `boolean` | `false` | Allow all items to be closed (single mode only) | All |
| `defaultValue` | `string | string[]` | `undefined` | Default open item(s) | All |


## Subcomponents

### AccordionItem

Container for each accordion item

### AccordionTrigger

Clickable trigger to toggle accordion item

### AccordionContent

Collapsible content area



## Accessibility

- **Keyboard Navigation**: Space/Enter to toggle, Tab to navigate
- **Screen Reader**: Uses proper ARIA accordion pattern
- **Focus Management**: Focus management between triggers
- **WCAG Compliance**: WAI-ARIA design pattern compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)