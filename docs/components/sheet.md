# Sheet

Slide-over panel that slides in from the edge of the screen.

<ComponentPreview name="SheetDemo">
  <template #preview>
    <DemoContainer>
      <SheetDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
</script>

<template>
  <Sheet>
    <SheetTrigger as-child>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
      </SheetHeader>
      <div class="py-4">
        <p class="text-sm">Make changes to your profile here.</p>
      </div>
    </SheetContent>
  </Sheet>
</template>
```

```tsx [React]
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'

export default function App() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <div className="py-4">
          <p className="text-sm">Make changes to your profile here.</p>
        </div>
      </SheetContent>
    </Sheet>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { SheetComponent } from '@/components/ui/sheet';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [SheetComponent, ButtonComponent],
  template: `
    <ui-sheet>
      <ui-button trigger variant="outline">Open</ui-button>
      <div content>
        <h2>Edit profile</h2>
        <p>Make changes to your profile here.</p>
      </div>
    </ui-sheet>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet'
import { Button, ButtonText } from '@/components/ui/button'
import { View, Text } from 'react-native'

export default function App() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">
          <ButtonText>Open</ButtonText>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
        </SheetHeader>
        <View className="py-4">
          <Text className="text-sm">Make changes to your profile here.</Text>
        </View>
      </SheetContent>
    </Sheet>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/sheet.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyButton(
      onPressed: () {
        showModalBottomSheet(
          context: context,
          builder: (context) => GalaxySheet(
            title: 'Edit profile',
            content: const Padding(
              padding: EdgeInsets.all(16.0),
              child: Text(
                'Make changes to your profile here.',
                style: TextStyle(fontSize: 14),
              ),
            ),
          ),
        );
      },
      variant: ButtonVariant.outline,
      child: const Text('Open'),
    );
  }
}
```
:::

  </template>
</ComponentPreview>

## Installation

::: code-group
```bash [React]
npx galaxy-ui-cli add sheet
```

```bash [Vue]
npx galaxy-ui-cli add sheet
```

```bash [Angular]
npx galaxy-ui-cli add sheet
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add sheet
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/sheet'

export default function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { Sheet } from '@/components/sheet'
import { Button } from '@/components/button'

const open = ref(false)
</script>

<template>
  <Sheet v-model:open="open">
    <Button variant="outline" @click="open = true">Open</Button>
    <template #content>
      <div class="p-6">
        <h2 class="text-lg font-semibold">Edit profile</h2>
        <p class="text-sm text-muted-foreground">
          Make changes to your profile here.
        </p>
      </div>
    </template>
  </Sheet>
</template>
```
:::


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `side` | `'top' \| 'right' \| 'bottom' \| 'left'` | `'right'` | Side from which the sheet slides in |
| `open` | `boolean` | `false` | Controls the open state |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when open state changes |

## Examples

### Different Sides

::: code-group
```tsx [React]
<Sheet>
  <SheetContent side="top">Content from top</SheetContent>
</Sheet>

<Sheet>
  <SheetContent side="left">Content from left</SheetContent>
</Sheet>
```
:::

## Accessibility

- Focus trap when open
- Escape key closes the sheet
- Backdrop click closes the sheet
- Proper ARIA labels

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
