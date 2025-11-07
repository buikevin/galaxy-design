# Dialog

A window overlaid on either the primary window or another dialog window.

<ComponentPreview name="DialogDemo">
  <template #preview>
    <DemoContainer>
      <DialogDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Dialog } from '@/components/ui/dialog'
</script>

<template>
  <Dialog>Example content</Dialog>
</template>
```

```tsx [React]
import { Dialog } from "@/components/ui/dialog"

export default function App() {
  return <Dialog>Example content</Dialog>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DialogComponent } from '@/components/ui/dialog';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DialogComponent],
  template: `<ui-dialog>Example content</ui-dialog>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Button, ButtonText } from '@/components/ui/button'

export default function App() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button><ButtonText>Open Dialog</ButtonText></Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Dialog Title</DialogTitle>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/dialog.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {
        showDialog(
          context: context,
          builder: (context) => GalaxyDialog(
            title: 'Dialog Title',
            content: const Text('Dialog content'),
          ),
        );
      },
      child: const Text('Open Dialog'),
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
npx galaxy-ui-cli@latest add dialog
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add dialog
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add dialog
```

```bash [bun]
bunx galaxy-ui-cli@latest add dialog
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add dialog
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-dialog`
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
| `open` | `boolean` | `false` | Whether the dialog is open | All |
| `modal` | `boolean` | `true` | Whether the dialog is modal | All |


## Subcomponents

### DialogTrigger

Button to open the dialog

### DialogContent

The dialog content container

### DialogHeader

Header section of dialog

### DialogTitle

Title of the dialog

### DialogDescription

Description text

### DialogFooter

Footer section for actions



## Accessibility

- **Keyboard Navigation**: Escape to close, Tab to navigate within
- **Screen Reader**: Uses dialog role with proper labeling
- **Focus Management**: Focus trapped within dialog when open
- **WCAG Compliance**: WCAG 2.1 Level AA compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)