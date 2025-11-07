# Label

Renders an accessible label associated with form controls.

<ComponentPreview name="LabelDemo">
  <template #preview>
    <DemoContainer>
      <LabelDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
</template>
```

```tsx [React]
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { LabelComponent } from '@/components/ui/label';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LabelComponent, InputComponent],
  template: `
    <div class="space-y-2">
      <ui-label for="email">Email</ui-label>
      <ui-input id="email" type="email" placeholder="Enter your email"></ui-input>
    </div>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { View } from 'react-native'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'

export default function App() {
  return (
    <View className="gap-2">
      <Label>Email</Label>
      <Input placeholder="Enter your email" />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/label.dart';
import 'package:your_app/components/ui/input.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Column(
      crossAxisAlignment: CrossAxisAlignment.start,
      children: [
        const GalaxyLabel(text: 'Email'),
        const SizedBox(height: 8),
        GalaxyInput(hintText: 'Enter your email'),
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
npx galaxy-design@latest add label
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add label
```

```bash [yarn]
yarn dlx galaxy-design@latest add label
```

```bash [bun]
bunx galaxy-design@latest add label
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add label
```

:::

## Usage

### Vue

```vue
<script setup lang="ts">
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Email</Label>
    <Input id="email" type="email" placeholder="Enter your email" />
  </div>
</template>
```

### React

```tsx
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"

export default function App() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="Enter your email" />
    </div>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import { LabelComponent } from '@/components/ui/label';
import { InputComponent } from '@/components/ui/input';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LabelComponent, InputComponent],
  template: `
    <div class="space-y-2">
      <ui-label for="email">Email</ui-label>
      <ui-input id="email" type="email" placeholder="Enter your email" />
    </div>
  `
})
export class AppComponent {}
```

## Examples

### Basic Form

::: code-group

```vue [Vue]
<template>
  <div class="space-y-4">
    <div class="space-y-2">
      <Label for="username">Username</Label>
      <Input id="username" placeholder="johndoe" />
    </div>
    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input id="password" type="password" />
    </div>
  </div>
</template>
```

```tsx [React]
<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="username">Username</Label>
    <Input id="username" placeholder="johndoe" />
  </div>
  <div className="space-y-2">
    <Label htmlFor="password">Password</Label>
    <Input id="password" type="password" />
  </div>
</div>
```

```html [Angular]
<div class="space-y-4">
  <div class="space-y-2">
    <ui-label for="username">Username</ui-label>
    <ui-input id="username" placeholder="johndoe" />
  </div>
  <div class="space-y-2">
    <ui-label for="password">Password</ui-label>
    <ui-input id="password" type="password" />
  </div>
</div>
```

:::

### With Required Indicator

::: code-group

```vue [Vue]
<template>
  <div class="space-y-2">
    <Label for="required-field">
      Name
      <span class="text-destructive">*</span>
    </Label>
    <Input id="required-field" required />
  </div>
</template>
```

```tsx [React]
<div className="space-y-2">
  <Label htmlFor="required-field">
    Name
    <span className="text-destructive">*</span>
  </Label>
  <Input id="required-field" required />
</div>
```

```html [Angular]
<div class="space-y-2">
  <ui-label for="required-field">
    Name
    <span class="text-destructive">*</span>
  </ui-label>
  <ui-input id="required-field" required />
</div>
```

:::

### With Checkbox

::: code-group

```vue [Vue]
<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" />
    <Label
      for="terms"
      class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      Accept terms and conditions
    </Label>
  </div>
</template>
```

```tsx [React]
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label
    htmlFor="terms"
    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </Label>
</div>
```

```html [Angular]
<div class="flex items-center space-x-2">
  <ui-checkbox id="terms" />
  <ui-label
    for="terms"
    class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
  >
    Accept terms and conditions
  </ui-label>
</div>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `for` / `htmlFor` | `string` | - | The id of the form control to associate with |
| `class` / `className` | `string` | - | Additional CSS classes |

### Framework-Specific

#### Vue
- Uses Radix Vue `Label` component
- Props: `for`, `asChild`

#### React
- Uses Radix UI `Label` component
- Props: `htmlFor`, `asChild`

#### Angular
- Custom implementation with `HostBinding`
- Props: `for`, `class`

## Accessibility

- Properly associates label with form control using `for` attribute
- Supports click to focus associated input
- Works with screen readers
- Supports disabled state styling (`peer-disabled`)

## Styling

The Label component uses these base styles:

```css
text-sm font-medium leading-none
peer-disabled:cursor-not-allowed
peer-disabled:opacity-70
```

You can override or extend these styles by passing custom classes.

## Related Components

- [Input](/components/input) - Text input field
- [Checkbox](/components/checkbox) - Checkbox input
- [Radio Group](/components/radio-group) - Radio button group
- [Select](/components/select) - Select dropdown

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
