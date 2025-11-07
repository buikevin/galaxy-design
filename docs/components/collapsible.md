# Collapsible

An interactive component which expands/collapses a panel.

<ComponentPreview name="CollapsibleDemo">
  <template #preview>
    <DemoContainer>
      <CollapsibleDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
</script>

<template>
  <Collapsible>
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects.
    </CollapsibleContent>
  </Collapsible>
</template>
```

```tsx [React]
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible"

export default function App() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects.
      </CollapsibleContent>
    </Collapsible>
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { CollapsibleComponent } from '@/components/ui/collapsible';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CollapsibleComponent],
  template: `
    <ui-collapsible>
      <ui-collapsible-trigger>Can I use this in my project?</ui-collapsible-trigger>
      <ui-collapsible-content>
        Yes. Free to use for personal and commercial projects.
      </ui-collapsible-content>
    </ui-collapsible>
  `
})
export class AppComponent {}
```

```tsx [React Native]
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { Text } from 'react-native'

export default function App() {
  return (
    <Collapsible>
      <CollapsibleTrigger>
        <Text>Can I use this in my project?</Text>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <Text>Yes. Free to use for personal and commercial projects.</Text>
      </CollapsibleContent>
    </Collapsible>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/collapsible.dart';

class MyApp extends StatefulWidget {
  @override
  _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
  bool _isExpanded = false;

  @override
  Widget build(BuildContext context) {
    return GalaxyCollapsible(
      isExpanded: _isExpanded,
      onToggle: () {
        setState(() {
          _isExpanded = !_isExpanded;
        });
      },
      header: const Text('Can I use this in my project?'),
      content: const Text('Yes. Free to use for personal and commercial projects.'),
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
npx galaxy-ui-cli@latest add collapsible
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add collapsible
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add collapsible
```

```bash [bun]
bunx galaxy-ui-cli@latest add collapsible
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add collapsible
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
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui'
import { ref } from 'vue'

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-model:open="isOpen">
    <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
    <CollapsibleContent>
      Yes. Free to use for personal and commercial projects.
    </CollapsibleContent>
  </Collapsible>
</template>
```

### React

```tsx
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui'

export default function CollapsibleDemo() {
  return (
    <Collapsible>
      <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
      <CollapsibleContent>
        Yes. Free to use for personal and commercial projects.
      </CollapsibleContent>
    </Collapsible>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core';
import {
  CollapsibleComponent,
  CollapsibleTriggerComponent,
  CollapsibleContentComponent
} from '@/components/ui';

@Component({
  selector: 'app-collapsible-demo',
  standalone: true,
  imports: [CollapsibleComponent, CollapsibleTriggerComponent, CollapsibleContentComponent],
  template: `
    <ui-collapsible [open]="isOpen" (openChange)="isOpen = $event">
      <ui-collapsible-trigger (triggerClick)="isOpen = !isOpen">
        Can I use this in my project?
      </ui-collapsible-trigger>
      <ui-collapsible-content [isOpen]="isOpen">
        Yes. Free to use for personal and commercial projects.
      </ui-collapsible-content>
    </ui-collapsible>
  `
})
export class CollapsibleDemoComponent {
  isOpen = false;
}
```


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
