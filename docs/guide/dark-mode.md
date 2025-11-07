# Dark Mode

Implement dark mode in your application with Galaxy UI components.

## Overview

Galaxy UI components support dark mode out of the box using the `class` strategy. Simply add the `dark` class to enable dark theme.

## Setup

### Installation

Dark mode is already configured when you initialize Galaxy UI:

```bash
npx galaxy-ui-cli@latest init
```

This creates the necessary CSS variables for both light and dark modes in your stylesheet.

### Tailwind Configuration

Ensure `darkMode: ["class"]` is set in your Tailwind config:

::: code-group

```js [tailwind.config.js]
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"], // ← Enable class-based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        // ... other colors
      },
    },
  },
}
```

:::

### CSS Variables

Your stylesheet should include both light and dark theme variables:

```css
@layer base {
  :root {
    /* Light mode colors */
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... other light mode colors */
  }

  .dark {
    /* Dark mode colors */
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --primary: 210 40% 98%;
    --primary-foreground: 222.2 47.4% 11.2%;
    /* ... other dark mode colors */
  }
}
```

## Implementation

### Basic Toggle

Add dark mode toggle to your application:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Button } from '@/components/ui/button'

const isDark = ref(false)

onMounted(() => {
  // Check system preference or stored preference
  isDark.value =
    localStorage.theme === 'dark' ||
    (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

  updateTheme()
})

function toggleTheme() {
  isDark.value = !isDark.value
  updateTheme()
}

function updateTheme() {
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.theme = 'dark'
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.theme = 'light'
  }
}
</script>

<template>
  <Button @click="toggleTheme">
    {{ isDark ? '☀️ Light' : '🌙 Dark' }}
  </Button>
</template>
```

```tsx [React]
import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check system preference or stored preference
    const dark =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)

    setIsDark(dark)
    updateTheme(dark)
  }, [])

  function updateTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.theme = 'dark'
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.theme = 'light'
    }
  }

  function toggleTheme() {
    const newDark = !isDark
    setIsDark(newDark)
    updateTheme(newDark)
  }

  return (
    <Button onClick={toggleTheme}>
      {isDark ? '☀️ Light' : '🌙 Dark'}
    </Button>
  )
}
```

```typescript [Angular]
import { Component, OnInit, signal } from '@angular/core'
import { ButtonComponent } from '@/components/ui/button'

@Component({
  selector: 'app-theme-toggle',
  standalone: true,
  imports: [ButtonComponent],
  template: `
    <ui-button (click)="toggleTheme()">
      {{ isDark() ? '☀️ Light' : '🌙 Dark' }}
    </ui-button>
  `
})
export class ThemeToggleComponent implements OnInit {
  isDark = signal(false)

  ngOnInit() {
    // Check system preference or stored preference
    const dark =
      localStorage.getItem('theme') === 'dark' ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)

    this.isDark.set(dark)
    this.updateTheme(dark)
  }

  toggleTheme() {
    const newDark = !this.isDark()
    this.isDark.set(newDark)
    this.updateTheme(newDark)
  }

  updateTheme(dark: boolean) {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }
}
```

:::

### Theme Service/Composable

Create a reusable theme manager:

::: code-group

```typescript [Vue - useTheme.ts]
import { ref, onMounted } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const theme = ref<Theme>('system')

  onMounted(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      theme.value = stored
    }
    applyTheme()
  })

  function applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme.value === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme.value)
    }

    localStorage.setItem('theme', theme.value)
  }

  function setTheme(newTheme: Theme) {
    theme.value = newTheme
    applyTheme()
  }

  return {
    theme,
    setTheme,
  }
}
```

```typescript [React - useTheme.ts]
import { useEffect, useState } from 'react'

export type Theme = 'light' | 'dark' | 'system'

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      setThemeState(stored)
    }
  }, [])

  useEffect(() => {
    applyTheme()
  }, [theme])

  function applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }

  function setTheme(newTheme: Theme) {
    setThemeState(newTheme)
  }

  return {
    theme,
    setTheme,
  }
}
```

```typescript [Angular - theme.service.ts]
import { Injectable, signal, effect } from '@angular/core'

export type Theme = 'light' | 'dark' | 'system'

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  theme = signal<Theme>('system')

  constructor() {
    // Load saved theme
    const stored = localStorage.getItem('theme') as Theme
    if (stored) {
      this.theme.set(stored)
    }

    // Apply theme when it changes
    effect(() => {
      this.applyTheme()
    })
  }

  setTheme(newTheme: Theme) {
    this.theme.set(newTheme)
  }

  private applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    const theme = this.theme()
    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }
}
```

:::

### Theme Dropdown

Create a dropdown to select theme:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTheme, type Theme } from '@/composables/useTheme'

const { theme, setTheme } = useTheme()

const themes: { value: Theme; label: string }[] = [
  { value: 'light', label: '☀️ Light' },
  { value: 'dark', label: '🌙 Dark' },
  { value: 'system', label: '💻 System' },
]
</script>

<template>
  <Select :model-value="theme" @update:model-value="setTheme">
    <SelectTrigger class="w-[150px]">
      <SelectValue placeholder="Select theme" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem v-for="t in themes" :key="t.value" :value="t.value">
        {{ t.label }}
      </SelectItem>
    </SelectContent>
  </Select>
</template>
```

```tsx [React]
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { useTheme, type Theme } from '@/hooks/useTheme'

const themes: { value: Theme; label: string }[] = [
  { value: 'light', label: '☀️ Light' },
  { value: 'dark', label: '🌙 Dark' },
  { value: 'system', label: '💻 System' },
]

export default function ThemeSelect() {
  const { theme, setTheme } = useTheme()

  return (
    <Select value={theme} onValueChange={setTheme}>
      <SelectTrigger className="w-[150px]">
        <SelectValue placeholder="Select theme" />
      </SelectTrigger>
      <SelectContent>
        {themes.map((t) => (
          <SelectItem key={t.value} value={t.value}>
            {t.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  )
}
```

```typescript [Angular]
import { Component, inject } from '@angular/core'
import { SelectComponent, SelectTriggerComponent, SelectValueComponent, SelectContentComponent, SelectItemComponent } from '@/components/ui/select'
import { ThemeService, type Theme } from '@/services/theme.service'

interface ThemeOption {
  value: Theme
  label: string
}

@Component({
  selector: 'app-theme-select',
  standalone: true,
  imports: [SelectComponent, SelectTriggerComponent, SelectValueComponent, SelectContentComponent, SelectItemComponent],
  template: `
    <ui-select [value]="themeService.theme()" (valueChange)="themeService.setTheme($event)">
      <ui-select-trigger class="w-[150px]">
        <ui-select-value placeholder="Select theme" />
      </ui-select-trigger>
      <ui-select-content>
        @for (theme of themes; track theme.value) {
          <ui-select-item [value]="theme.value">
            {{ theme.label }}
          </ui-select-item>
        }
      </ui-select-content>
    </ui-select>
  `
})
export class ThemeSelectComponent {
  themeService = inject(ThemeService)

  themes: ThemeOption[] = [
    { value: 'light', label: '☀️ Light' },
    { value: 'dark', label: '🌙 Dark' },
    { value: 'system', label: '💻 System' },
  ]
}
```

:::

## System Preference

Respect user's system dark mode preference:

```javascript
// Detect system preference
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)')

// Listen for changes
prefersDark.addEventListener('change', (e) => {
  if (theme === 'system') {
    const newTheme = e.matches ? 'dark' : 'light'
    document.documentElement.classList.remove('light', 'dark')
    document.documentElement.classList.add(newTheme)
  }
})
```

## Prevent Flash of Unstyled Content

Add this script to your HTML `<head>` to prevent theme flash on page load:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My App</title>

    <!-- ✨ Prevent dark mode flash -->
    <script>
      // Execute before page renders
      (function() {
        const theme = localStorage.getItem('theme')
        if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
          document.documentElement.classList.add('dark')
        }
      })()
    </script>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>
```

## Custom Dark Mode Colors

Adjust colors specifically for dark mode:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
  }

  .dark {
    /* Adjust background - make it darker */
    --background: 222.2 84% 4.9%;

    /* Adjust foreground - make it lighter */
    --foreground: 210 40% 98%;

    /* Adjust primary - increase lightness for better visibility */
    --primary: 217 91% 70%; /* Lighter than light mode */

    /* Borders need higher contrast in dark mode */
    --border: 217.2 32.6% 25%; /* More visible */
  }
}
```

### Dark Mode Guidelines

1. **Increase lightness** for colors in dark mode
2. **Use softer backgrounds** (not pure black #000)
3. **Increase border contrast** for better visibility
4. **Test readability** - ensure text is clear

## Component-Specific Dark Mode

Override specific components in dark mode:

```css
/* Custom button style in dark mode */
.dark .btn-custom {
  background: hsl(217 91% 70%);
  color: hsl(222.2 84% 4.9%);
}

/* Card with different dark background */
.dark .card-special {
  background: hsl(217.2 32.6% 10%);
  border-color: hsl(217.2 32.6% 20%);
}
```

## Testing Dark Mode

### Manual Testing

1. Toggle dark mode in your app
2. Check all pages and components
3. Verify text readability
4. Check hover/focus states
5. Test form inputs and buttons
6. Verify images/icons contrast

### Automated Testing

::: code-group

```typescript [Playwright]
import { test, expect } from '@playwright/test'

test('dark mode toggle works', async ({ page }) => {
  await page.goto('/')

  // Click theme toggle
  await page.click('[data-testid="theme-toggle"]')

  // Verify dark class added
  const html = page.locator('html')
  await expect(html).toHaveClass(/dark/)

  // Verify localStorage
  const theme = await page.evaluate(() => localStorage.getItem('theme'))
  expect(theme).toBe('dark')
})
```

```typescript [Cypress]
describe('Dark Mode', () => {
  it('toggles dark mode', () => {
    cy.visit('/')

    // Click theme toggle
    cy.get('[data-testid="theme-toggle"]').click()

    // Verify dark class
    cy.get('html').should('have.class', 'dark')

    // Verify localStorage
    cy.window().then((win) => {
      expect(win.localStorage.getItem('theme')).to.equal('dark')
    })
  })
})
```

:::

## Best Practices

### 1. Provide Theme Toggle

Always give users control over theme preference:

```vue
<!-- ✅ Good: User control -->
<ThemeToggle />

<!-- ❌ Bad: Force dark mode -->
<div class="dark">...</div>
```

### 2. Respect System Preference

Default to system preference when no saved preference exists:

```javascript
// ✅ Good
const theme = localStorage.theme ||
  (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

// ❌ Bad: Always default to light
const theme = localStorage.theme || 'light'
```

### 3. Persist User Preference

Save theme to localStorage:

```javascript
// ✅ Good: Save preference
localStorage.setItem('theme', theme)

// ❌ Bad: Lose preference on reload
```

### 4. Test Contrast

Ensure sufficient contrast in both modes:

- Light mode: Dark text on light background
- Dark mode: Light text on dark background
- Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### 5. Avoid Pure Black

Use dark gray instead of pure black (#000):

```css
/* ✅ Good: Dark gray */
.dark {
  --background: 222.2 84% 4.9%; /* Very dark blue-gray */
}

/* ❌ Bad: Pure black */
.dark {
  --background: 0 0% 0%;
}
```

## Troubleshooting

### Flash of unstyled content

**Problem**: Page flashes light mode before dark mode applies

**Solution**: Add inline script to HTML head (see [Prevent Flash section](#prevent-flash-of-unstyled-content))

### Dark mode not applying

**Problem**: Classes aren't working

**Solution**: Check Tailwind config has `darkMode: ["class"]`

### Colors not changing

**Problem**: Colors look the same in dark mode

**Solution**: Ensure `.dark` CSS variables are defined in your stylesheet

### Theme not persisting

**Problem**: Theme resets on page reload

**Solution**: Save to localStorage and load on mount

## Examples

### Complete Theme Provider

::: code-group

```vue [Vue - ThemeProvider.vue]
<script setup lang="ts">
import { onMounted, provide, ref } from 'vue'

export type Theme = 'light' | 'dark' | 'system'

const theme = ref<Theme>('system')

provide('theme', {
  theme,
  setTheme: (newTheme: Theme) => {
    theme.value = newTheme
    applyTheme()
  },
})

onMounted(() => {
  const stored = localStorage.getItem('theme') as Theme
  if (stored) theme.value = stored
  applyTheme()

  // Listen for system preference changes
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener('change', () => {
    if (theme.value === 'system') applyTheme()
  })
})

function applyTheme() {
  const root = document.documentElement
  root.classList.remove('light', 'dark')

  if (theme.value === 'system') {
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
    root.classList.add(systemTheme)
  } else {
    root.classList.add(theme.value)
  }

  localStorage.setItem('theme', theme.value)
}
</script>

<template>
  <slot />
</template>
```

```tsx [React - ThemeProvider.tsx]
import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

export type Theme = 'light' | 'dark' | 'system'

type ThemeContext = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContext | undefined>(undefined)

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('system')

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    if (stored) setThemeState(stored)
  }, [])

  useEffect(() => {
    applyTheme()

    // Listen for system preference changes
    const media = window.matchMedia('(prefers-color-scheme: dark)')
    const listener = () => {
      if (theme === 'system') applyTheme()
    }
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [theme])

  function applyTheme() {
    const root = document.documentElement
    root.classList.remove('light', 'dark')

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      root.classList.add(systemTheme)
    } else {
      root.classList.add(theme)
    }

    localStorage.setItem('theme', theme)
  }

  function setTheme(newTheme: Theme) {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) throw new Error('useTheme must be used within ThemeProvider')
  return context
}
```

:::

## Resources

- [Tailwind CSS Dark Mode](https://tailwindcss.com/docs/dark-mode)
- [MDN: prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

## Next Steps

- [Theming](/guide/theming) - Customize colors and design tokens
- [Configuration](/guide/configuration) - Configure components.json
- [Components](/components/overview) - Explore components
