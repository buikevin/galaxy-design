# Configuration

Learn how to configure Galaxy UI for your project using `components.json`.

## components.json

The `components.json` file is created when you run `galaxy-design init`. It stores your project configuration and preferences.

### File Location

The file is created in your project root:

```
your-project/
├── components.json    ← Configuration file
├── package.json
├── tailwind.config.js
└── src/
```

### Example Configuration

```json
{
  "$schema": "https://ui.galaxy.com/schema.json",
  "framework": "react",
  "typescript": true,
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/index.css",
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

## Configuration Options

### framework

**Type**: `"vue" | "react" | "angular"`
**Required**: Yes

The framework you're using:

```json
{
  "framework": "react"
}
```

### typescript

**Type**: `boolean`
**Default**: `true`

Whether your project uses TypeScript:

```json
{
  "typescript": true
}
```

### tailwind

Configuration for Tailwind CSS.

#### tailwind.config

**Type**: `string`
**Default**: `"tailwind.config.js"`

Path to your Tailwind config file:

```json
{
  "tailwind": {
    "config": "tailwind.config.js"
  }
}
```

#### tailwind.css

**Type**: `string`
**Required**: Yes

Path to your global CSS file where Tailwind directives are imported:

```json
{
  "tailwind": {
    "css": "src/index.css"
  }
}
```

**Framework-specific defaults:**
- **Vue**: `"src/assets/styles/global.css"`
- **React**: `"src/index.css"`
- **Angular**: `"src/styles.css"`

#### tailwind.baseColor

**Type**: `"slate" | "gray" | "zinc" | "neutral" | "stone"`
**Default**: `"slate"`

The base color palette for your components:

```json
{
  "tailwind": {
    "baseColor": "slate"
  }
}
```

#### tailwind.cssVariables

**Type**: `boolean`
**Default**: `true`

Whether to use CSS variables for theming. Keep this `true` for Galaxy UI:

```json
{
  "tailwind": {
    "cssVariables": true
  }
}
```

### aliases

Path aliases for importing components and utilities.

#### aliases.components

**Type**: `string`
**Default**: `"@/components"`

Where components will be installed:

```json
{
  "aliases": {
    "components": "@/components"
  }
}
```

With this setting, components are installed to:
- `src/components/ui/button/`
- `src/components/ui/input/`
- etc.

#### aliases.utils

**Type**: `string`
**Default**: `"@/lib/utils"`

Where utility functions are located:

```json
{
  "aliases": {
    "utils": "@/lib/utils"
  }
}
```

### iconLibrary

**Type**: `"lucide" | "heroicons" | "none"`
**Default**: `"lucide"`

Icon library to use:

```json
{
  "iconLibrary": "lucide"
}
```

**Available options:**
- `"lucide"` - Lucide Icons (recommended)
- `"heroicons"` - Heroicons
- `"none"` - No icon library

## Path Aliases Setup

Galaxy UI uses path aliases for clean imports. Make sure your project is configured correctly.

### Vue (Vite)

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### React (Vite)

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
```

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### Angular

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/components/*"],
      "@/lib/*": ["src/lib/*"]
    }
  }
}
```

## Modifying Configuration

You can manually edit `components.json` to change settings. The CLI will respect your changes.

### Example: Change Component Path

```json
{
  "aliases": {
    "components": "@/app/components"
  }
}
```

Now components will be installed to `src/app/components/ui/`.

### Example: Use Different CSS File

```json
{
  "tailwind": {
    "css": "src/styles/main.css"
  }
}
```

The CLI will now update `src/styles/main.css` instead.

## Schema Validation

The `$schema` field provides autocomplete and validation in editors:

```json
{
  "$schema": "https://ui.galaxy.com/schema.json"
}
```

This enables:
- ✅ Autocompletion in VS Code
- ✅ Validation of configuration options
- ✅ Inline documentation

## Environment-Specific Config

You can have different configurations for different environments:

```bash
# Development
components.dev.json

# Production
components.prod.json

# Staging
components.staging.json
```

## Troubleshooting

### Configuration not detected

1. Check file name is exactly `components.json`
2. Verify file is in project root
3. Ensure valid JSON syntax

### Path aliases not working

1. Check TypeScript configuration
2. Verify Vite/build tool configuration
3. Restart TypeScript server in editor
4. Clear cache and rebuild

### Components installing to wrong location

1. Check `aliases.components` value
2. Verify path alias setup in build config
3. Ensure path starts with `@/`

## Next Steps

- [Tailwind Config](/guide/tailwind) - Configure Tailwind CSS
- [CLI Usage](/guide/cli-usage) - Learn CLI commands
- [Add Components](/guide/cli-usage#add-components) - Start adding components
