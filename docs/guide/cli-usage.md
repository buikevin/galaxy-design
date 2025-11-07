# CLI Usage

Galaxy UI CLI provides commands to easily add components to your project.

## Commands

### `init`

Initialize your project for Galaxy UI components.

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

```bash [global]
galaxy-design init
```

:::

This command will:

1. **Detect your framework** - Automatically detects if you're using Vue, React, or Angular
2. **Create config file** - Creates `galaxy-ui.config.json` in your project root
3. **Set up directories** - Creates the `components/ui` directory structure
4. **Configure paths** - Updates your `tsconfig.json` with path aliases
5. **Install dependencies** - Installs required peer dependencies (Radix primitives, etc.)

#### Options

```bash
--cwd <path>        # Working directory (default: current directory)
--yes, -y           # Skip all prompts and use defaults
```

Example:

```bash
npx galaxy-design@latest init --yes
```

### `add`

Add components to your project.

::: code-group

```bash [npm]
npx galaxy-design@latest add [components...]
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add [components...]
```

```bash [yarn]
yarn dlx galaxy-design@latest add [components...]
```

```bash [bun]
bunx galaxy-design@latest add [components...]
```

```bash [global]
galaxy-design add [components...]
```

:::

#### Examples

Add a single component:

```bash
npx galaxy-design@latest add button
```

Add multiple components:

```bash
npx galaxy-design@latest add button input dialog
```

Add all form components:

```bash
npx galaxy-design@latest add button input checkbox radio-group select slider switch textarea label
```

#### Options

```bash
--cwd <path>        # Working directory
--overwrite         # Overwrite existing files
--yes, -y           # Skip confirmation prompts
--path <path>       # Custom path for components (default: components/ui)
```

Example:

```bash
npx galaxy-design@latest add button --overwrite --yes
```

### `list`

List all available components.

::: code-group

```bash [npm]
npx galaxy-design@latest list
```

```bash [pnpm]
pnpm dlx galaxy-design@latest list
```

```bash [yarn]
yarn dlx galaxy-design@latest list
```

```bash [bun]
bunx galaxy-design@latest list
```

```bash [global]
galaxy-design list
```

:::

This will display all 23 available components with their descriptions.

### `diff`

Check for differences between local and registry versions.

::: code-group

```bash [npm]
npx galaxy-design@latest diff [component]
```

```bash [pnpm]
pnpm dlx galaxy-design@latest diff [component]
```

```bash [yarn]
yarn dlx galaxy-design@latest diff [component]
```

```bash [bun]
bunx galaxy-design@latest diff [component]
```

```bash [global]
galaxy-design diff [component]
```

:::

Example:

```bash
npx galaxy-design@latest diff button
```

## Configuration File

The init command creates a `galaxy-ui.config.json` file:

```json
{
  "$schema": "https://galaxy-ui.dev/schema.json",
  "framework": "vue",
  "style": "default",
  "tailwind": {
    "config": "tailwind.config.js",
    "css": "src/assets/index.css",
    "baseColor": "slate",
    "cssVariables": true
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

### Configuration Options

| Option | Type | Description |
|--------|------|-------------|
| `framework` | `"vue" \| "react" \| "angular"` | Your framework |
| `style` | `"default" \| "new-york"` | Component style variant |
| `tailwind.config` | `string` | Path to Tailwind config |
| `tailwind.css` | `string` | Path to global CSS file |
| `tailwind.baseColor` | `string` | Base color palette |
| `tailwind.cssVariables` | `boolean` | Use CSS variables |
| `aliases.components` | `string` | Component path alias |
| `aliases.utils` | `string` | Utils path alias |

## Package Manager Detection

The CLI automatically detects your package manager based on lock files:

- `package-lock.json` → npm
- `pnpm-lock.yaml` → pnpm
- `yarn.lock` → yarn
- `bun.lockb` → bun

It will use the detected package manager for installing dependencies.

## Tips

### Always use the latest version

Using `@latest` ensures you get the most recent version:

```bash
npx galaxy-design@latest add button
```

### Create aliases for convenience

Add to your shell profile (`.bashrc`, `.zshrc`, etc.):

```bash
alias gui="npx galaxy-design@latest"
```

Then use:

```bash
gui add button
gui init
```

### Use with CI/CD

In CI/CD environments, use the `--yes` flag to skip prompts:

```bash
npx galaxy-design@latest init --yes
npx galaxy-design@latest add button input --yes
```

## Troubleshooting

### "Component not found"

Make sure you're using the correct component name. Use `galaxy-design list` to see all available components.

### "Framework not detected"

The CLI couldn't detect your framework. Make sure you have the framework's package.json dependencies installed:

- Vue: `vue` package
- React: `react` and `react-dom` packages
- Angular: `@angular/core` package

### "Path alias not configured"

Make sure your `tsconfig.json` or `jsconfig.json` has the path aliases:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

## Next Steps

- [Configuration](/guide/configuration) - Customize your setup
- [Components](/components/overview) - Browse available components
- [Theming](/guide/theming) - Customize the look and feel

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
