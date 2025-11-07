---
layout: home

hero:
  name: "Galaxy UI"
  text: "Universal Component Library"
  tagline: Beautiful, accessible components for Vue, React, Angular, React Native, and Flutter - from web to mobile
  image:
    src: /galaxy-logo.png
    alt: Galaxy UI
  actions:
    - theme: brand
      text: Get Started
      link: /guide/introduction
    - theme: alt
      text: View Components
      link: /components/overview
    - theme: alt
      text: GitHub
      link: https://github.com/buikevin/galaxy-design

features:
  - icon: 🎨
    title: Universal Platform Support
    details: Build with Vue 3, React, Angular, React Native, or Flutter. Same beautiful components across web and mobile.

  - icon: ♿
    title: Accessible by Default
    details: Built on Radix primitives with ARIA support, keyboard navigation, and focus management.

  - icon: 🎭
    title: Customizable
    details: Styled with Tailwind CSS. Easy to customize and extend to match your brand.

  - icon: 📦
    title: Copy-Paste Components
    details: Own your code. No npm dependencies. Copy components directly into your project.

  - icon: 🌙
    title: Dark Mode
    details: First-class dark mode support with easy theme customization.

  - icon: 🚀
    title: Developer Experience
    details: CLI tool for easy installation. TypeScript support. Modern tooling.

  - icon: 🔧
    title: Radix Primitives
    details: Built on Radix Vue, Radix UI, and Radix NG for rock-solid accessibility.

  - icon: 📱
    title: Responsive
    details: Mobile-first design that works beautifully on all screen sizes.

  - icon: 🌐
    title: i18n Ready
    details: Bilingual documentation (English/Vietnamese) and internationalization support.
---

## Quick Start

::: code-group

```bash [npm]
# Initialize your project
npx galaxy-ui-cli@latest init

# Add components
npx galaxy-ui-cli@latest add button input dialog
```

```bash [pnpm]
# Initialize your project
pnpm dlx galaxy-ui-cli@latest init

# Add components
pnpm dlx galaxy-ui-cli@latest add button input dialog
```

```bash [yarn]
# Initialize your project
yarn dlx galaxy-ui-cli@latest init

# Add components
yarn dlx galaxy-ui-cli@latest add button input dialog
```

```bash [bun]
# Initialize your project
bunx galaxy-ui-cli@latest init

# Add components
bunx galaxy-ui-cli@latest add button input dialog
```

:::

## Platform Support

### Web Frameworks

::: code-group

```vue [Vue 3]
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <Button variant="default">Click me</Button>
</template>
```

```tsx [React]
import { Button } from "@/components/ui/button"

export default function App() {
  return <Button variant="default">Click me</Button>
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ButtonComponent } from '@/components/ui/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `<ui-button variant="default">Click me</ui-button>`
})
export class AppComponent {}
```

:::

### Mobile Platforms

::: code-group

```tsx [React Native]
import { Button } from '@/components/ui/button'

export default function App() {
  return (
    <Button variant="default">
      <ButtonText>Click me</ButtonText>
    </Button>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/button.dart';

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Button(
      variant: ButtonVariant.defaultVariant,
      onPressed: () {},
      child: Text('Click me'),
    );
  }
}
```

:::

## Why Galaxy UI?

### 🎯 Universal Platform Support
Choose your favorite framework - web or mobile. We support Vue 3, React, Angular, React Native, and Flutter with the same beautiful components.

### 📱 Web to Mobile
**197 components** across **5 platforms**:
- **Web**: 41 components × 3 frameworks (Vue, React, Angular)
- **Mobile**: 37 components × 2 platforms (React Native with NativeWind, Flutter with Material 3)

### 🔓 You Own The Code
Unlike npm packages, you copy the component code directly into your project. Modify it as you need. No version conflicts.

### ♿ Accessibility First
Built on battle-tested Radix primitives for web. WCAG compliant out of the box with keyboard navigation and screen reader support.

### 🎨 Fully Customizable
Every component uses Tailwind CSS (web) or equivalent styling (mobile). Easy to customize colors, spacing, and styles to match your brand.

## Inspired By The Best

Galaxy UI stands on the shoulders of giants:

- **[Radix UI](https://www.radix-ui.com/)** - Unstyled, accessible React components
- **[Radix Vue](https://www.radix-vue.com/)** - Radix primitives for Vue
- **[Radix NG](https://www.radix-ng.com/)** - Radix primitives for Angular
- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste React components
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Copy-paste Vue components
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework

## Author

Created by **Bùi Trọng Hiếu (kevinbui)**

- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com
- Repository: [buikevin/galaxy-design](https://github.com/buikevin/galaxy-design)

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
