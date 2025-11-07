# Tailwind CSS Configuration

Galaxy UI requires **Tailwind CSS v3.4+** for proper styling and theming.

## Requirements

::: warning Tailwind CSS Version
Galaxy UI currently supports **Tailwind CSS v3.4+** only. Tailwind v4 is not yet supported due to breaking changes in the configuration system.
:::

- **Tailwind CSS**: `^3.4.0`
- **PostCSS**: `^8.4.0`
- **Autoprefixer**: `^10.4.0`

## Installation

The CLI automatically installs Tailwind CSS when you run `init`:

::: code-group

```bash [npm]
npx galaxy-design@latest init
```

```bash [pnpm]
pnpm dlx galaxy-design@latest init
```

```bash [yarn]
yarn dlx galaxy-design@latest init
```

```bash [bun]
bunx galaxy-design@latest init
```

:::

### Manual Installation

If you need to install Tailwind CSS manually:

::: code-group

```bash [npm]
npm install -D tailwindcss@^3.4.0 postcss autoprefixer
```

```bash [pnpm]
pnpm add -D tailwindcss@^3.4.0 postcss autoprefixer
```

```bash [yarn]
yarn add -D tailwindcss@^3.4.0 postcss autoprefixer
```

```bash [bun]
bun add -D tailwindcss@^3.4.0 postcss autoprefixer
```

:::

## Configuration Files

Galaxy UI uses three configuration files for Tailwind CSS:

### 1. tailwind.config.js

Create this file in your project root:

```js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
    "./components/**/*.{js,ts,jsx,tsx,vue}",
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
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [],
}
```

### 2. postcss.config.cjs

Create this file for PostCSS configuration:

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

::: tip File Extension
Use `.cjs` extension for CommonJS modules. This ensures compatibility with both Vite and other build tools.
:::

### 3. CSS Variables File

Add these CSS variables to your main CSS file (e.g., `src/index.css` or `src/styles/global.css`):

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
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
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
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

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

## Framework-Specific Setup

### Vue 3

For Vite + Vue projects, Tailwind CSS works out of the box with the configuration above.

```js
// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
  // PostCSS will be automatically detected
})
```

### React

For Vite + React projects:

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // PostCSS will be automatically detected
})
```

### Angular

For Angular projects, add Tailwind to `angular.json`:

```json
{
  "projects": {
    "your-app": {
      "architect": {
        "build": {
          "options": {
            "styles": [
              "src/styles.css"
            ]
          }
        }
      }
    }
  }
}
```

## Customization

### Changing Colors

You can customize the color palette by modifying the CSS variables:

```css
:root {
  --primary: 221 83% 53%; /* Blue */
  --primary-foreground: 0 0% 100%; /* White */
}
```

### Adding Custom Utilities

Extend Tailwind configuration with custom utilities:

```js
// tailwind.config.js
export default {
  theme: {
    extend: {
      // Your custom configuration
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [
    // Custom plugins
  ],
}
```

## Troubleshooting

### Styles not applying

1. **Check PostCSS config**: Ensure `postcss.config.cjs` exists
2. **Verify content paths**: Make sure all component paths are in `content` array
3. **Clear cache**: Delete `node_modules/.vite` or `.next` cache
4. **Restart dev server**: Stop and start your development server

### Dark mode not working

1. **Check darkMode config**: Ensure `darkMode: ["class"]` in tailwind.config.js
2. **Add dark class**: Add `dark` class to `<html>` or `<body>` element
3. **Verify CSS variables**: Check that `.dark` variables are defined

### Build errors

If you see PostCSS errors during build:

```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Or with your package manager
pnpm install
yarn install
bun install
```

## Next Steps

- [Theming](/guide/theming) - Learn how to customize themes
- [Dark Mode](/guide/dark-mode) - Implement dark mode
- [Components](/components/overview) - Explore available components
