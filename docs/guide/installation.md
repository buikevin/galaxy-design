# Installation

Guide to installing Galaxy UI into your project.

## Prerequisites

Before you begin, make sure you have:

- **Node.js** 18+ or **Bun** 1.0+
- **npm**, **yarn**, **pnpm**, or **bun**
- One of the frameworks: **Vue 3**, **React 18+**, or **Angular 20+**
- **Tailwind CSS** 3.4+ configured

## Step 1: Initialize Project

You don't need to install the CLI globally. Use it directly with your package manager:

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest init
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest init
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest init
```

```bash [bun]
bunx galaxy-ui-cli@latest init
```

:::

### Or Install Globally (Optional)

::: code-group

```bash [npm]
npm install -g @galaxy-ui-cli/cli
galaxy-ui-cli init
```

```bash [pnpm]
pnpm add -g @galaxy-ui-cli/cli
galaxy-ui-cli init
```

```bash [yarn]
yarn global add @galaxy-ui-cli/cli
galaxy-ui-cli init
```

```bash [bun]
bun add -g @galaxy-ui-cli/cli
galaxy-ui-cli init
```

:::

## Step 2: Configuration

The init command will run an interactive setup:

The CLI will:
1. ✅ Automatically detect your framework
2. ✅ Ask about configuration (TypeScript, base color, icon library)
3. ✅ Create `components.json` file
4. ✅ Install necessary dependencies
5. ✅ Create utility functions

### Interactive Configuration

```
? Framework detected: vue
? Use TypeScript? Yes
? Choose base color: › slate
? Icon library: › lucide
? Where is your global CSS file? › src/assets/styles/global.css
? Configure import alias for components? › @/components
? Configure import alias for utils? › @/lib/utils
```

## Step 3: Add Components

Add the components you need:

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add button
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add button
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add button
```

```bash [bun]
bunx galaxy-ui-cli@latest add button
```

```bash [global]
galaxy-ui-cli add button
```

:::

::: tip Automatic Dependency Installation
The CLI automatically installs required dependencies for each component. For example, when you add the `button` component, it will automatically install:
- `@radix-ui/react-slot` (or framework equivalent)
- `class-variance-authority` (for variant styling)

You don't need to manually install these dependencies!
:::

### Add Multiple Components

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add button input dialog
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add button input dialog
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add button input dialog
```

```bash [bun]
bunx galaxy-ui-cli@latest add button input dialog
```

```bash [global]
galaxy-ui-cli add button input dialog
```

:::

## Configuration File: components.json

The `components.json` file is created in your root directory:

```json
{
  "$schema": "https://ui.galaxy.com/schema.json",
  "framework": "vue",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/assets/styles/global.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  },
  "iconLibrary": "lucide"
}
```

## Framework Specific

### Vue 3

```bash
# Initialize
galaxy-ui-cli init

# Dependencies installed:
# - radix-vue
# - clsx
# - tailwind-merge
# - lucide-vue-next
```

### React

```bash
# Initialize
galaxy-ui-cli init

# Dependencies installed:
# - @radix-ui/react-slot
# - clsx
# - tailwind-merge
# - lucide-react
```

### Angular

```bash
# Initialize
galaxy-ui-cli init

# Dependencies installed:
# - @radix-ng/primitives
# - clsx
# - tailwind-merge
# - lucide-angular
```

## Tailwind CSS Configuration

Make sure Tailwind CSS is configured correctly:

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        // ... more colors
      },
    },
  },
  plugins: [],
}
```

### Global CSS

Add CSS variables to your global CSS file:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... more variables */
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... more variables */
  }
}
```

## Usage

After installation, import and use components:

::: code-group

```vue [Vue]
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

## Tailwind CSS Setup

If you haven't installed Tailwind CSS yet:

::: code-group

```bash [npm]
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

```bash [pnpm]
pnpm add -D tailwindcss postcss autoprefixer
pnpm dlx tailwindcss init -p
```

```bash [yarn]
yarn add -D tailwindcss postcss autoprefixer
yarn dlx tailwindcss init -p
```

```bash [bun]
bun add -D tailwindcss postcss autoprefixer
bunx tailwindcss init -p
```

:::

## Next Steps

- [CLI Usage](/guide/cli-usage) - Learn more about CLI commands
- [Configuration](/guide/configuration) - Customize components.json
- [Components](/components/overview) - Explore all components

## Having Issues?

If you encounter any problems:
- Check [GitHub Issues](https://github.com/buikevin/galaxy-design/issues)
- Create a new issue with detailed information
- Contact: kevinbui210191@gmail.com
