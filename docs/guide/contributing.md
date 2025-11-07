# Contributing

Thank you for your interest in contributing to Galaxy UI! This guide will help you get started.

## Getting Started

### Prerequisites

- **Node.js**: 18.0.0 or higher
- **Package Manager**: npm, pnpm, yarn, or bun
- **Git**: For version control

### Fork and Clone

1. **Fork the repository**

   Visit [github.com/buikevin/galaxy-ui-cli](https://github.com/buikevin/galaxy-ui-cli) and click "Fork"

2. **Clone your fork**

   ```bash
   git clone https://github.com/YOUR_USERNAME/galaxy-ui-cli.git
   cd galaxy-ui-cli
   ```

3. **Add upstream remote**

   ```bash
   git remote add upstream https://github.com/buikevin/galaxy-ui-cli.git
   ```

### Install Dependencies

```bash
# Install dependencies
npm install

# or
bun install
```

## Project Structure

```
galaxy-ui-cli/
├── packages/
│   ├── cli/                 # CLI tool source
│   │   ├── src/
│   │   │   ├── commands/    # CLI commands (init, add)
│   │   │   ├── utils/       # Utility functions
│   │   │   └── registries/  # Component registries
│   │   └── package.json
│   │
│   ├── react/               # React components
│   │   └── src/components/
│   │
│   ├── vue/                 # Vue components
│   │   └── src/components/
│   │
│   └── angular/             # Angular components
│       └── src/components/
│
├── docs/                    # VitePress documentation
│   ├── .vitepress/
│   ├── guide/
│   ├── components/
│   └── vi/                  # Vietnamese docs
│
└── examples/                # Example projects
    ├── react-example/
    ├── vue-example/
    └── angular-example/
```

## Development Workflow

### 1. Create a Branch

```bash
# Update main branch
git checkout main
git pull upstream main

# Create feature branch
git checkout -b feat/your-feature-name

# or for bug fixes
git checkout -b fix/bug-description
```

### 2. Make Changes

Follow our [coding standards](#coding-standards) and [commit conventions](#commit-conventions).

### 3. Test Changes

```bash
# Build CLI
npm run build

# Test CLI locally
cd examples/react-example
node ../../packages/cli/dist/bin.js add button

# Run dev server
npm run dev
```

### 4. Commit Changes

```bash
git add .
git commit -m "feat: add new button variant"
```

### 5. Push and Create PR

```bash
git push origin feat/your-feature-name
```

Then create a Pull Request on GitHub.

## Contribution Types

### 🐛 Bug Fixes

1. **Search existing issues** to avoid duplicates
2. **Create an issue** describing the bug
3. **Fix the bug** and add tests
4. **Submit PR** referencing the issue

### ✨ New Features

1. **Open a discussion** for major features
2. **Get approval** before starting work
3. **Implement feature** with tests and docs
4. **Submit PR** with detailed description

### 📝 Documentation

1. **Identify gaps** in documentation
2. **Write clear, concise docs**
3. **Add code examples**
4. **Submit PR**

### 🎨 New Components

Adding a new component requires work across multiple packages:

#### React Component

```bash
# Create component directory
mkdir -p packages/react/src/components/new-component

# Create component files
touch packages/react/src/components/new-component/NewComponent.tsx
touch packages/react/src/components/new-component/index.ts
```

**NewComponent.tsx**:
```tsx
import * as React from 'react'
import { cn } from '@/lib/utils'

export interface NewComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  // Component-specific props
}

const NewComponent = React.forwardRef<HTMLDivElement, NewComponentProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn('new-component-base-classes', className)}
        {...props}
      />
    )
  }
)
NewComponent.displayName = 'NewComponent'

export { NewComponent }
```

**index.ts**:
```typescript
export * from './NewComponent'
```

#### Vue Component

```bash
mkdir -p packages/vue/src/components/new-component
touch packages/vue/src/components/new-component/NewComponent.vue
touch packages/vue/src/components/new-component/index.ts
```

**NewComponent.vue**:
```vue
<script setup lang="ts">
import { cn } from '@/lib/utils'
import { computed } from 'vue'

interface Props {
  class?: string
}

const props = defineProps<Props>()

const className = computed(() => cn('new-component-base-classes', props.class))
</script>

<template>
  <div :class="className">
    <slot />
  </div>
</template>
```

#### Angular Component

```bash
mkdir -p packages/angular/src/components/new-component
touch packages/angular/src/components/new-component/new-component.component.ts
touch packages/angular/src/components/new-component/index.ts
```

**new-component.component.ts**:
```typescript
import { Component, Input } from '@angular/core'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-new-component',
  standalone: true,
  template: `
    <div [class]="className">
      <ng-content />
    </div>
  `
})
export class NewComponentComponent {
  @Input() class?: string

  get className() {
    return cn('new-component-base-classes', this.class)
  }
}
```

#### Update Registries

Add component to all three registry files:

**packages/cli/src/registries/registry-react.json**:
```json
{
  "new-component": {
    "name": "NewComponent",
    "type": "other",
    "description": "Description of new component",
    "dependencies": [],
    "devDependencies": [],
    "registryDependencies": [],
    "files": ["NewComponent.tsx", "index.ts"],
    "category": "other"
  }
}
```

Repeat for `registry-vue.json` and `registry-angular.json`.

#### Create Documentation

```bash
touch docs/components/new-component.md
```

**new-component.md**:
````markdown
# New Component

Description of the component and its purpose.

## Import

::: code-group

```tsx [React]
import { NewComponent } from '@/components/ui/new-component'
```

```vue [Vue]
import { NewComponent } from '@/components/ui/new-component'
```

```typescript [Angular]
import { NewComponentComponent } from '@/components/ui/new-component'
```

:::

## Usage

::: code-group

```tsx [React]
export default function Example() {
  return <NewComponent>Content</NewComponent>
}
```

```vue [Vue]
<template>
  <NewComponent>Content</NewComponent>
</template>
```

```typescript [Angular]
@Component({
  template: `<ui-new-component>Content</ui-new-component>`
})
```

:::

## API

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `class` | `string` | - | Additional CSS classes |

## Examples

### Basic

[Add examples here]
````

#### Update Sidebar

Add component to [docs/.vitepress/config.ts](../docs/.vitepress/config.ts):

```typescript
{
  text: 'Components',
  items: [
    // ... existing items
    { text: 'New Component', link: '/components/new-component' },
  ],
}
```

## Coding Standards

### TypeScript

- Use **TypeScript** for all code
- Enable **strict mode**
- Add types for all props and functions
- Avoid `any` type

```typescript
// ✅ Good
interface Props {
  variant: 'default' | 'secondary'
  onClick?: () => void
}

// ❌ Bad
interface Props {
  variant: any
  onClick: Function
}
```

### Component Style

- Use **functional components**
- Use **React.forwardRef** for React components
- Export interfaces/types
- Add `displayName` for React components

```tsx
// ✅ Good
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'secondary'
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', ...props }, ref) => {
    return <button ref={ref} {...props} />
  }
)
Button.displayName = 'Button'
```

### Styling

- Use **Tailwind CSS** classes
- Use **cn()** utility for class merging
- Support **dark mode**

```tsx
// ✅ Good
<div className={cn('bg-background text-foreground', className)} />

// ❌ Bad
<div className={`bg-white text-black ${className}`} />
```

### File Naming

- **React**: PascalCase (Button.tsx)
- **Vue**: PascalCase (Button.vue)
- **Angular**: kebab-case (button.component.ts)

## Commit Conventions

We follow [Conventional Commits](https://www.conventionalcommits.org/):

```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types

- `feat`: New feature
- `fix`: Bug fix
- `docs`: Documentation only
- `style`: Code style (formatting, no code change)
- `refactor`: Code refactoring
- `test`: Adding tests
- `chore`: Maintenance tasks

### Examples

```bash
# Feature
feat(cli): add support for pnpm package manager

# Bug fix
fix(react): fix button disabled state styling

# Documentation
docs: update installation guide

# Breaking change
feat(vue)!: change dialog API to use composable

BREAKING CHANGE: Dialog now requires useDialog composable
```

## Pull Request Guidelines

### PR Title

Follow commit conventions:

```
feat(react): add tooltip component
fix(cli): resolve path alias on Windows
docs: add dark mode guide
```

### PR Description

Use this template:

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Checklist
- [ ] Code follows project style guidelines
- [ ] Self-reviewed code
- [ ] Added/updated tests
- [ ] Added/updated documentation
- [ ] Changes generate no new warnings
- [ ] Tested in all frameworks (React, Vue, Angular)

## Screenshots (if applicable)
[Add screenshots]

## Related Issues
Fixes #123
```

### Review Process

1. **Automated checks** must pass (linting, type checking)
2. **Maintainer review** - may request changes
3. **Approval** - PR will be merged
4. **Release** - Changes included in next release

## Testing

### Component Testing

Test components in all three frameworks:

```bash
# React
cd examples/react-example
npm run dev

# Vue
cd examples/vue-example
npm run dev

# Angular
cd examples/angular-example
npm run dev
```

### CLI Testing

```bash
# Build CLI
cd packages/cli
npm run build

# Test init command
cd ../../examples/react-example
rm -rf components components.json
node ../../packages/cli/dist/bin.js init

# Test add command
node ../../packages/cli/dist/bin.js add button
```

## Documentation

### Writing Guidelines

1. **Be clear and concise**
2. **Use code examples** for all features
3. **Include all frameworks** (React, Vue, Angular)
4. **Add TypeScript types**
5. **Show both basic and advanced usage**

### Code Examples

Always provide examples for all frameworks:

```markdown
::: code-group

\`\`\`tsx [React]
// React example
\`\`\`

\`\`\`vue [Vue]
// Vue example
\`\`\`

\`\`\`typescript [Angular]
// Angular example
\`\`\`

:::
```

### Local Docs Development

```bash
cd docs
npm install
npm run dev
```

Visit `http://localhost:5173`

## Community

### Getting Help

- **GitHub Issues**: Bug reports and feature requests
- **GitHub Discussions**: Questions and discussions
- **Discord**: Real-time chat (coming soon)

### Code of Conduct

Be respectful and constructive. We follow the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/).

## License

By contributing, you agree that your contributions will be licensed under the project's MIT License.

## Questions?

- Read the [documentation](/)
- Search [existing issues](https://github.com/buikevin/galaxy-ui-cli/issues)
- Open a [new discussion](https://github.com/buikevin/galaxy-ui-cli/discussions)

Thank you for contributing! 🎉
