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
<template>
  <Sheet><SheetTrigger>Open</SheetTrigger><SheetContent>Sheet content</SheetContent></Sheet>
</template>
```

```tsx [React]
import { Sheet } from '@/components/ui/sheet'
export default function App() { return <Sheet /> }
```

```typescript [Angular]
@Component({ template: `<ui-sheet />` })
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>

## Cài đặt

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

Component này chấp nhận các props sau:

| Prop | Kiểu | Mặc định | Mô tả |
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

## Tác giả

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## Giấy phép

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
