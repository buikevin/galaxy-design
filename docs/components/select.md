# Select

Displays a list of options for the user to pick from—triggered by a button.

<ComponentPreview name="SelectDemo">
  <template #preview>
    <DemoContainer>
      <SelectDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Select } from '@/components/ui/select'
</script>

<template>
  <Select>Example content</Select>
</template>
```

```tsx [React]
import { Select } from "@/components/ui/select"

export default function App() {
  return <Select>Example content</Select>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SelectComponent } from '@/components/ui/select';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SelectComponent],
  template: `<ui-select>Example content</ui-select>`
})
export class AppComponent {}
```

```tsx [React Native]
import { Select, SelectItem } from '@/components/ui/select'

export default function App() {
  return (
    <Select placeholder="Select an option">
      <SelectItem label="Option 1" value="option-1" />
      <SelectItem label="Option 2" value="option-2" />
      <SelectItem label="Option 3" value="option-3" />
    </Select>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/select.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxySelect(
      items: [
        SelectItem(label: 'Option 1', value: 'option-1'),
        SelectItem(label: 'Option 2', value: 'option-2'),
        SelectItem(label: 'Option 3', value: 'option-3'),
      ],
      onChanged: (value) {},
      hint: const Text('Select an option'),
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
npx galaxy-design@latest add select
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add select
```

```bash [yarn]
yarn dlx galaxy-design@latest add select
```

```bash [bun]
bunx galaxy-design@latest add select
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add select
```

:::


::: tip Dependencies
This component automatically installs the following dependencies:
- **React**: `@radix-ui/react-select`
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
| `value` | `string` | `undefined` | The selected value | All |
| `defaultValue` | `string` | `undefined` | Default selected value | All |
| `disabled` | `boolean` | `false` | Whether the select is disabled | All |


## Subcomponents

### SelectTrigger

Button that opens the select dropdown

### SelectContent

Container for select options

### SelectItem

Individual selectable option

### SelectValue

Displays the selected value



## Accessibility

- **Keyboard Navigation**: Arrow keys to navigate, Enter to select, Escape to close
- **Screen Reader**: Uses proper ARIA select pattern
- **Focus Management**: Focus management between trigger and options
- **WCAG Compliance**: WAI-ARIA design pattern compliant


## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)