# Radio Group

A set of checkable buttons where only one can be checked at a time.

<ComponentPreview name="RadioGroupDemo">
  <template #preview>
    <DemoContainer>
      <RadioGroupDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
</script>

<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label for="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>
```

```tsx [React]
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

export default function App() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">Option One</Label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">Option Two</Label>
      </div>
    </RadioGroup>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { RadioGroupComponent } from '@/components/ui/radio-group';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RadioGroupComponent],
  template: `
    <ui-radio-group [(value)]="selectedValue">
      <div class="flex items-center space-x-2">
        <ui-radio-group-item value="option-one"></ui-radio-group-item>
        <ui-label>Option One</ui-label>
      </div>
      <div class="flex items-center space-x-2">
        <ui-radio-group-item value="option-two"></ui-radio-group-item>
        <ui-label>Option Two</ui-label>
      </div>
    </ui-radio-group>
  `
})
export class AppComponent {
  selectedValue = 'option-one';
}
```

```tsx [React Native]
import { View } from 'react-native'
import { RadioGroup, RadioButton } from '@/components/ui/radio-group'
import { Text } from '@/components/ui/text'

export default function App() {
  return (
    <RadioGroup defaultValue="option-one">
      <View className="flex-row items-center gap-2">
        <RadioButton value="option-one" />
        <Text>Option One</Text>
      </View>
      <View className="flex-row items-center gap-2">
        <RadioButton value="option-two" />
        <Text>Option Two</Text>
      </View>
    </RadioGroup>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/radio_group.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  String _selectedValue = 'option-one';

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        GalaxyRadioListTile(
          title: const Text('Option One'),
          value: 'option-one',
          groupValue: _selectedValue,
          onChanged: (value) => setState(() => _selectedValue = value!),
        ),
        GalaxyRadioListTile(
          title: const Text('Option Two'),
          value: 'option-two',
          groupValue: _selectedValue,
          onChanged: (value) => setState(() => _selectedValue = value!),
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
npx galaxy-design@latest add radio-group
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add radio-group
```

```bash [yarn]
yarn dlx galaxy-design@latest add radio-group
```

```bash [bun]
bunx galaxy-design@latest add radio-group
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add radio-group
```

:::

## Usage


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

### Vue
```vue
<script setup lang="ts">
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Label } from '@/components/ui/label'
</script>

<template>
  <RadioGroup default-value="option-one">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-one" value="option-one" />
      <Label for="option-one">Option One</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="option-two" value="option-two" />
      <Label for="option-two">Option Two</Label>
    </div>
  </RadioGroup>
</template>
```

### React
```tsx
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

<RadioGroup defaultValue="option-one">
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-one" id="option-one" />
    <Label htmlFor="option-one">Option One</Label>
  </div>
  <div className="flex items-center space-x-2">
    <RadioGroupItem value="option-two" id="option-two" />
    <Label htmlFor="option-two">Option Two</Label>
  </div>
</RadioGroup>
```

### Angular
```typescript
@Component({
  template: `
    <ui-radio-group [(value)]="selectedValue">
      <div class="flex items-center space-x-2">
        <ui-radio-group-item value="option-one" />
        <ui-label>Option One</ui-label>
      </div>
    </ui-radio-group>
  `
})
```

**Bùi Trọng Hiếu (kevinbui)** - MIT © 2025


## Accessibility

- **Keyboard Navigation**: [TODO]
- **Screen Reader**: [TODO]
- **Focus Management**: [TODO]
- **WCAG Compliance**: WCAG 2.1 Level AA compliant

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
