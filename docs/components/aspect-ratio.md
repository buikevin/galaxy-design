# Aspect Ratio

Displays content within a desired ratio.


<ComponentPreview name="AspectRatioDemo">
  <template #preview>
    <DemoContainer>
      <AspectRatioDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio :ratio="16 / 9" class="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
      alt="Photo by Drew Beamer"
      class="rounded-md object-cover"
    />
  </AspectRatio>
</template>
```

```tsx [React]
import { AspectRatio } from '@/components/ui/aspect-ratio'

export default function App() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
        alt="Photo by Drew Beamer"
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AspectRatioComponent } from '@/components/ui/aspect-ratio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AspectRatioComponent],
  template: `
    <ui-aspect-ratio [ratio]="16 / 9" class="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
        alt="Photo by Drew Beamer"
        class="rounded-md object-cover"
      />
    </ui-aspect-ratio>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Image } from 'react-native'

export default function App() {
  return (
    <AspectRatio ratio={16 / 9}>
      <Image
        source={{ uri: 'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd' }}
        style={{ width: '100%', height: '100%', borderRadius: 8 }}
        resizeMode="cover"
      />
    </AspectRatio>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/aspect_ratio.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return GalaxyAspectRatio(
      ratio: 16 / 9,
      child: ClipRRect(
        borderRadius: BorderRadius.circular(8),
        child: Image.network(
          'https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd',
          fit: BoxFit.cover,
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
npx galaxy-design@latest add aspect-ratio
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add aspect-ratio
```

```bash [yarn]
yarn dlx galaxy-design@latest add aspect-ratio
```

```bash [bun]
bunx galaxy-design@latest add aspect-ratio
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add aspect-ratio
```

:::

## Usage

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AspectRatio } from '@/components/ui/aspect-ratio'
</script>

<template>
  <AspectRatio :ratio="16 / 9" class="bg-muted">
    <img
      src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
      alt="Photo by Drew Beamer"
      class="rounded-md object-cover"
    />
  </AspectRatio>
</template>
```

```tsx [React]
import { AspectRatio } from "@/components/ui/aspect-ratio"

export default function App() {
  return (
    <AspectRatio ratio={16 / 9} className="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
        alt="Photo by Drew Beamer"
        className="rounded-md object-cover"
      />
    </AspectRatio>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AspectRatioComponent } from '@/components/ui/aspect-ratio';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AspectRatioComponent],
  template: `
    <ui-aspect-ratio [ratio]="16 / 9" class="bg-muted">
      <img
        src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd"
        alt="Photo by Drew Beamer"
        class="rounded-md object-cover"
      />
    </ui-aspect-ratio>
  `
})
export class AppComponent {}
```

:::

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `ratio` | `number` | `1 / 1` | The desired aspect ratio |

## Accessibility

Adheres to the `img` [role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/img/).

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
