# Scroll Area

Augments native scroll functionality for custom, cross-browser styling.

<ComponentPreview name="ScrollAreaDemo">
  <template #preview>
    <DemoContainer>
      <ScrollAreaDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
</script>

<template>
  <ScrollArea class="h-72 w-48 rounded-md border">
    <div class="p-4">
      <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
      <div v-for="tag in tags" :key="tag" class="text-sm">
        {{ tag }}
        <Separator class="my-2" />
      </div>
    </div>
  </ScrollArea>
</template>
```

```tsx [React]
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const tags = Array.from({ length: 50 }).map(
  (_, i) => `v1.2.0-beta.${i + 1}`
)

export default function App() {
  return (
    <ScrollArea className="h-72 w-48 rounded-md border">
      <div className="p-4">
        <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4>
        {tags.map((tag) => (
          <>
            <div key={tag} className="text-sm">
              {tag}
            </div>
            <Separator className="my-2" />
          </>
        ))}
      </div>
    </ScrollArea>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ScrollAreaComponent } from '@/components/ui/scroll-area';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollAreaComponent],
  template: `
    <ui-scroll-area class="h-72 w-48 rounded-md border">
      <div class="p-4">
        <h4 class="mb-4 text-sm font-medium leading-none">Tags</h4>
        @for (tag of tags; track tag) {
          <div class="text-sm">{{ tag }}</div>
        }
      </div>
    </ui-scroll-area>
  `
})
export class AppComponent {
  tags = Array.from({ length: 50 }).map((_, i) => `v1.2.0-beta.${i + 1}`)
}
```

```tsx [React Native]
import { ScrollView, View, Text } from 'react-native'
import { Separator } from '@/components/ui/separator'

const tags = Array.from({ length: 50 }).map(
  (_, i) => `v1.2.0-beta.${i + 1}`
)

export default function App() {
  return (
    <ScrollView className="h-72 w-48 rounded-md border">
      <View className="p-4">
        <Text className="mb-4 text-sm font-medium">Tags</Text>
        {tags.map((tag) => (
          <View key={tag}>
            <Text className="text-sm">{tag}</Text>
            <Separator className="my-2" />
          </View>
        ))}
      </View>
    </ScrollView>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';

class MyApp extends StatelessWidget {
  final tags = List.generate(50, (i) => 'v1.2.0-beta.${i + 1}');

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 288,
      width: 192,
      decoration: BoxDecoration(
        border: Border.all(color: Colors.grey),
        borderRadius: BorderRadius.circular(8),
      ),
      child: SingleChildScrollView(
        child: Padding(
          padding: const EdgeInsets.all(16.0),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              const Padding(
                padding: EdgeInsets.only(bottom: 16.0),
                child: Text(
                  'Tags',
                  style: TextStyle(
                    fontSize: 14,
                    fontWeight: FontWeight.w500,
                  ),
                ),
              ),
              ...tags.map((tag) => Padding(
                padding: const EdgeInsets.only(bottom: 8.0),
                child: Column(
                  children: [
                    Text(tag, style: const TextStyle(fontSize: 14)),
                    const Divider(height: 8),
                  ],
                ),
              )).toList(),
            ],
          ),
        ),
      ),
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
npx galaxy-ui-cli@latest add scroll-area
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add scroll-area
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add scroll-area
```

```bash [bun]
bunx galaxy-ui-cli@latest add scroll-area
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add scroll-area
```

:::

## Usage

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScrollArea } from '@/components/ui/scroll-area'
</script>

<template>
  <ScrollArea class="h-[200px] w-[350px] rounded-md border p-4">
    Jokester began sneaking into the castle in the middle of the night and leaving
    jokes all over the place: under the king's pillow, in his soup, even in the
    royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
    then, one day, the people of the kingdom discovered that the jokes left by
    Jokester were so funny that they couldn't help but laugh. And once they
    started laughing, they couldn't stop.
  </ScrollArea>
</template>
```

```tsx [React]
import { ScrollArea } from "@/components/ui/scroll-area"

export default function App() {
  return (
    <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
      Jokester began sneaking into the castle in the middle of the night and leaving
      jokes all over the place: under the king's pillow, in his soup, even in the
      royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
      then, one day, the people of the kingdom discovered that the jokes left by
      Jokester were so funny that they couldn't help but laugh. And once they
      started laughing, they couldn't stop.
    </ScrollArea>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ScrollAreaComponent } from '@/components/ui/scroll-area';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScrollAreaComponent],
  template: `
    <ui-scroll-area class="h-[200px] w-[350px] rounded-md border p-4">
      Jokester began sneaking into the castle in the middle of the night and leaving
      jokes all over the place: under the king's pillow, in his soup, even in the
      royal toilet. The king was furious, but he couldn't seem to stop Jokester. And
      then, one day, the people of the kingdom discovered that the jokes left by
      Jokester were so funny that they couldn't help but laugh. And once they
      started laughing, they couldn't stop.
    </ui-scroll-area>
  `
})
export class AppComponent {}
```

:::

## API Reference

### ScrollArea

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `class` | `string` | - | Custom CSS classes |
| `orientation` | `'vertical' \| 'horizontal'` | `'vertical'` | Scrollbar orientation |

## Examples

### Horizontal Scrolling

::: code-group

```vue [Vue]
<ScrollArea orientation="horizontal" class="w-96 whitespace-nowrap rounded-md border">
  <div class="flex w-max space-x-4 p-4">
    <div v-for="i in 10" :key="i" class="shrink-0">
      <div class="overflow-hidden rounded-md">
        <img
          :src="`https://images.unsplash.com/photo-${i}?w=250&h=330`"
          :alt="`Photo ${i}`"
          class="aspect-[3/4] h-fit w-fit object-cover"
        />
      </div>
    </div>
  </div>
</ScrollArea>
```

```tsx [React]
<ScrollArea orientation="horizontal" className="w-96 whitespace-nowrap rounded-md border">
  <div className="flex w-max space-x-4 p-4">
    {Array.from({ length: 10 }).map((_, i) => (
      <div key={i} className="shrink-0">
        <div className="overflow-hidden rounded-md">
          <img
            src={`https://images.unsplash.com/photo-${i}?w=250&h=330`}
            alt={`Photo ${i}`}
            className="aspect-[3/4] h-fit w-fit object-cover"
          />
        </div>
      </div>
    ))}
  </div>
</ScrollArea>
```

```typescript [Angular]
<ui-scroll-area orientation="horizontal" class="w-96 whitespace-nowrap rounded-md border">
  <div class="flex w-max space-x-4 p-4">
    @for (i of [1,2,3,4,5,6,7,8,9,10]; track i) {
      <div class="shrink-0">
        <div class="overflow-hidden rounded-md">
          <img
            [src]="'https://images.unsplash.com/photo-' + i + '?w=250&h=330'"
            [alt]="'Photo ' + i"
            class="aspect-[3/4] h-fit w-fit object-cover"
          />
        </div>
      </div>
    }
  </div>
</ui-scroll-area>
```

:::

## Accessibility

Adheres to the [WAI-ARIA Scrollbar Pattern](https://www.w3.org/WAI/ARIA/apg/patterns/scrollbar/).

- Provides custom scrollbars that are keyboard accessible
- Maintains proper focus management
- Supports both vertical and horizontal scrolling
- Compatible with screen readers

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
