# Theming

Customize the look and feel of Galaxy UI components to match your brand.

## Overview

Galaxy UI uses **CSS variables** for theming, making it easy to customize colors and other design tokens across all components.

## Default Theme

The default theme includes light and dark mode support:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 222.2 84% 4.9%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 212.7 26.8% 83.9%;
  }
}
```

## Color Variables

### Understanding HSL Values

Colors are defined using HSL (Hue, Saturation, Lightness) values **without** the `hsl()` function:

```css
/* ❌ Wrong */
--primary: hsl(222.2 47.4% 11.2%);

/* ✅ Correct */
--primary: 222.2 47.4% 11.2%;
```

The `hsl()` function is added in Tailwind config:

```js
colors: {
  primary: "hsl(var(--primary))",
}
```

### Core Colors

| Variable | Purpose | Example Usage |
|----------|---------|---------------|
| `--background` | Page background | `bg-background` |
| `--foreground` | Text color | `text-foreground` |
| `--card` | Card background | `bg-card` |
| `--card-foreground` | Card text | `text-card-foreground` |
| `--primary` | Primary actions | Buttons, links |
| `--primary-foreground` | Primary text | Text on primary background |
| `--secondary` | Secondary actions | Secondary buttons |
| `--secondary-foreground` | Secondary text | Text on secondary background |
| `--muted` | Muted background | Subtle backgrounds |
| `--muted-foreground` | Muted text | Placeholder text |
| `--accent` | Accent background | Hover states |
| `--accent-foreground` | Accent text | Text on accent background |
| `--destructive` | Destructive actions | Delete buttons |
| `--destructive-foreground` | Destructive text | Text on destructive background |
| `--border` | Border color | Component borders |
| `--input` | Input border | Form inputs |
| `--ring` | Focus ring | Focus states |

### Border Radius

```css
--radius: 0.5rem; /* Default border radius */
```

Used in Tailwind config:

```js
borderRadius: {
  lg: "var(--radius)",
  md: "calc(var(--radius) - 2px)",
  sm: "calc(var(--radius) - 4px)",
}
```

## Creating Custom Themes

### Method 1: CSS Variables

Create custom themes by overriding CSS variables:

::: code-group

```css [src/index.css]
@layer base {
  /* Custom theme */
  :root {
    --primary: 270 70% 55%; /* Purple */
    --primary-foreground: 0 0% 100%;
    --secondary: 340 80% 60%; /* Pink */
    --secondary-foreground: 0 0% 100%;
    --accent: 200 95% 50%; /* Blue */
    --accent-foreground: 0 0% 100%;
  }
}
```

```vue [App.vue]
<template>
  <div>
    <Button variant="default">Primary Button</Button>
    <Button variant="secondary">Secondary Button</Button>
  </div>
</template>
```

```tsx [App.tsx]
export default function App() {
  return (
    <div>
      <Button variant="default">Primary Button</Button>
      <Button variant="secondary">Secondary Button</Button>
    </div>
  )
}
```

:::

### Method 2: Multiple Themes

Create multiple theme classes:

```css
/* Theme 1: Ocean */
.theme-ocean {
  --primary: 200 95% 50%;
  --primary-foreground: 0 0% 100%;
  --secondary: 180 60% 45%;
  --secondary-foreground: 0 0% 100%;
}

/* Theme 2: Forest */
.theme-forest {
  --primary: 140 60% 45%;
  --primary-foreground: 0 0% 100%;
  --secondary: 120 40% 40%;
  --secondary-foreground: 0 0% 100%;
}

/* Theme 3: Sunset */
.theme-sunset {
  --primary: 25 95% 55%;
  --primary-foreground: 0 0% 100%;
  --secondary: 340 80% 60%;
  --secondary-foreground: 0 0% 100%;
}
```

Apply themes dynamically:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'

const theme = ref('theme-ocean')
</script>

<template>
  <div :class="theme">
    <select v-model="theme">
      <option value="theme-ocean">Ocean</option>
      <option value="theme-forest">Forest</option>
      <option value="theme-sunset">Sunset</option>
    </select>

    <Button>Themed Button</Button>
  </div>
</template>
```

```tsx [React]
import { useState } from 'react'
import { Button } from '@/components/ui/button'

export default function App() {
  const [theme, setTheme] = useState('theme-ocean')

  return (
    <div className={theme}>
      <select value={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="theme-ocean">Ocean</option>
        <option value="theme-forest">Forest</option>
        <option value="theme-sunset">Sunset</option>
      </select>

      <Button>Themed Button</Button>
    </div>
  )
}
```

```typescript [Angular]
import { Component, signal } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <div [class]="theme()">
      <select (change)="changeTheme($event)">
        <option value="theme-ocean">Ocean</option>
        <option value="theme-forest">Forest</option>
        <option value="theme-sunset">Sunset</option>
      </select>

      <ui-button>Themed Button</ui-button>
    </div>
  `
})
export class AppComponent {
  theme = signal('theme-ocean')

  changeTheme(event: Event) {
    const target = event.target as HTMLSelectElement
    this.theme.set(target.value)
  }
}
```

:::

### Method 3: Theme Generator

Use online tools to generate color schemes:

1. **Realtime Colors** - [realtimecolors.com](https://realtimecolors.com)
2. **Coolors** - [coolors.co](https://coolors.co)
3. **Adobe Color** - [color.adobe.com](https://color.adobe.com)

Convert colors to HSL format:

```js
// Example: Convert hex to HSL
function hexToHSL(hex) {
  // Remove #
  hex = hex.replace(/^#/, '')

  // Convert to RGB
  const r = parseInt(hex.substring(0, 2), 16) / 255
  const g = parseInt(hex.substring(2, 4), 16) / 255
  const b = parseInt(hex.substring(4, 6), 16) / 255

  // Find min/max
  const max = Math.max(r, g, b)
  const min = Math.min(r, g, b)
  const diff = max - min

  // Calculate H, S, L
  let h = 0
  let s = 0
  const l = (max + min) / 2

  if (diff !== 0) {
    s = l > 0.5 ? diff / (2 - max - min) : diff / (max + min)

    switch (max) {
      case r: h = ((g - b) / diff + (g < b ? 6 : 0)) / 6; break
      case g: h = ((b - r) / diff + 2) / 6; break
      case b: h = ((r - g) / diff + 4) / 6; break
    }
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`
}

// Usage
hexToHSL('#3b82f6') // "217 91% 60%"
```

## Component-Specific Styling

### Override Component Classes

All components accept `className` prop:

::: code-group

```vue [Vue]
<Button class="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>
```

```tsx [React]
<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</Button>
```

```typescript [Angular]
<ui-button class="bg-gradient-to-r from-purple-500 to-pink-500">
  Gradient Button
</ui-button>
```

:::

### Custom Variants

Modify component variants file:

```typescript
// components/ui/button/variants.ts
import { cva } from 'class-variance-authority'

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',

        // ✨ Add custom variant
        gradient: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)
```

Use custom variant:

```vue
<Button variant="gradient">Custom Gradient</Button>
```

## Best Practices

### 1. Use Semantic Colors

```css
/* ✅ Good: Semantic naming */
--primary: 270 70% 55%;
--success: 140 60% 45%;
--warning: 45 95% 55%;
--error: 0 84% 60%;

/* ❌ Bad: Color-specific naming */
--blue: 217 91% 60%;
--green: 140 60% 45%;
--yellow: 45 95% 55%;
--red: 0 84% 60%;
```

### 2. Maintain Contrast Ratios

Ensure text is readable (WCAG AA compliance):

- **Normal text**: Minimum 4.5:1 contrast ratio
- **Large text**: Minimum 3:1 contrast ratio

Use tools like [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 3. Test Both Light and Dark Modes

```css
:root {
  --primary: 270 70% 55%;
}

.dark {
  /* Adjust lightness for dark mode */
  --primary: 270 70% 65%;
}
```

### 4. Document Your Theme

Create a theme configuration file:

```typescript
// config/theme.ts
export const theme = {
  colors: {
    primary: {
      hsl: '270 70% 55%',
      name: 'Purple',
      usage: 'Primary actions, links',
    },
    secondary: {
      hsl: '340 80% 60%',
      name: 'Pink',
      usage: 'Secondary actions',
    },
  },
  borderRadius: {
    default: '0.5rem',
    usage: 'Cards, buttons, inputs',
  },
}
```

## Examples

### Brand Theme

```css
/* Corporate brand colors */
:root {
  --primary: 210 100% 50%; /* Brand blue */
  --primary-foreground: 0 0% 100%;
  --secondary: 150 60% 50%; /* Brand green */
  --secondary-foreground: 0 0% 100%;
  --accent: 30 100% 50%; /* Brand orange */
  --accent-foreground: 0 0% 100%;
}
```

### Minimal Theme

```css
/* Minimal, neutral theme */
:root {
  --primary: 0 0% 10%;
  --primary-foreground: 0 0% 100%;
  --secondary: 0 0% 96%;
  --secondary-foreground: 0 0% 10%;
  --accent: 0 0% 90%;
  --accent-foreground: 0 0% 10%;
  --radius: 0.25rem; /* Smaller radius */
}
```

### Vibrant Theme

```css
/* Colorful, vibrant theme */
:root {
  --primary: 280 100% 60%; /* Vibrant purple */
  --primary-foreground: 0 0% 100%;
  --secondary: 340 100% 65%; /* Vibrant pink */
  --secondary-foreground: 0 0% 100%;
  --accent: 180 100% 50%; /* Vibrant cyan */
  --accent-foreground: 0 0% 10%;
  --radius: 1rem; /* Larger radius */
}
```

## Resources

- [Tailwind CSS Colors](https://tailwindcss.com/docs/customizing-colors)
- [HSL Color Picker](https://hslpicker.com)
- [Coolors Generator](https://coolors.co)
- [Material Design Color Tool](https://material.io/resources/color)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker)

## Next Steps

- [Dark Mode](/guide/dark-mode) - Implement dark mode
- [Configuration](/guide/configuration) - Customize components.json
- [Components](/components/overview) - Explore components
