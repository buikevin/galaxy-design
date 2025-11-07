# Typography

Typography component for consistent text styles across your application.


<ComponentPreview name="TypographyDemo">
  <template #preview>
    <DemoContainer>
      <TypographyDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template><div>Demo</div></template>
```

```tsx [React]
export default function App() { return <div>Demo</div> }
```

```typescript [Angular]
@Component({ template: `<div>Demo</div>` })
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>
## Installation

::: code-group
```bash [React]
npx galaxy-design add typography
```

```bash [Vue]
npx galaxy-design add typography
```

```bash [Angular]
npx galaxy-design add typography
```
:::

## Usage

::: code-group
```tsx [React]
import { Typography } from '@/components/ui/typography'

export default function TypographyDemo() {
  return (
    <Typography variant="h1">
      Welcome to Galaxy UI
    </Typography>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Typography } from '@/components/ui/typography'
</script>

<template>
  <Typography variant="h1">
    Welcome to Galaxy UI
  </Typography>
</template>
```

```typescript [Angular]
import { Component } from '@angular/core'
import { TypographyComponent } from '@/components/ui/typography'

@Component({
  selector: 'app-typography-demo',
  standalone: true,
  imports: [TypographyComponent],
  template: `
    <ui-typography variant="h1">
      Welcome to Galaxy UI
    </ui-typography>
  `
})
export class TypographyDemo {}
```
:::


## API Reference

### Props

Component này chấp nhận các props sau:

| Prop | Kiểu | Mặc định | Mô tả |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'h1' \| 'h2' \| 'h3' \| 'h4' \| 'p' \| 'blockquote' \| 'code' \| 'lead' \| 'large' \| 'small' \| 'muted'` | `'p'` | Typography variant/style |
| `as` | `string` | - | HTML element to render as |
| `class` | `string` | - | Additional CSS classes |

## Examples

### Headings

::: code-group
```tsx [React]
<div className="space-y-4">
  <Typography variant="h1">Heading 1</Typography>
  <Typography variant="h2">Heading 2</Typography>
  <Typography variant="h3">Heading 3</Typography>
  <Typography variant="h4">Heading 4</Typography>
</div>
```

```vue [Vue]
<template>
  <div class="space-y-4">
    <Typography variant="h1">Heading 1</Typography>
    <Typography variant="h2">Heading 2</Typography>
    <Typography variant="h3">Heading 3</Typography>
    <Typography variant="h4">Heading 4</Typography>
  </div>
</template>
```

```html [Angular]
<div class="space-y-4">
  <ui-typography variant="h1">Heading 1</ui-typography>
  <ui-typography variant="h2">Heading 2</ui-typography>
  <ui-typography variant="h3">Heading 3</ui-typography>
  <ui-typography variant="h4">Heading 4</ui-typography>
</div>
```
:::

### Paragraph

::: code-group
```tsx [React]
<Typography variant="p">
  This is a paragraph with default styling. It provides consistent text
  rendering across your application with proper line height and spacing.
</Typography>
```

```vue [Vue]
<template>
  <Typography variant="p">
    This is a paragraph with default styling. It provides consistent text
    rendering across your application with proper line height and spacing.
  </Typography>
</template>
```

```html [Angular]
<ui-typography variant="p">
  This is a paragraph with default styling. It provides consistent text
  rendering across your application with proper line height and spacing.
</ui-typography>
```
:::

### Blockquote

::: code-group
```tsx [React]
<Typography variant="blockquote">
  "The only way to do great work is to love what you do." - Steve Jobs
</Typography>
```

```vue [Vue]
<template>
  <Typography variant="blockquote">
    "The only way to do great work is to love what you do." - Steve Jobs
  </Typography>
</template>
```

```html [Angular]
<ui-typography variant="blockquote">
  "The only way to do great work is to love what you do." - Steve Jobs
</ui-typography>
```
:::

### Inline Code

::: code-group
```tsx [React]
<Typography variant="p">
  Install the package using{' '}
  <Typography variant="code" as="code">
    npm install galaxy-ui
  </Typography>
</Typography>
```

```vue [Vue]
<template>
  <Typography variant="p">
    Install the package using
    <Typography variant="code" as="code">
      npm install galaxy-ui
    </Typography>
  </Typography>
</template>
```

```html [Angular]
<ui-typography variant="p">
  Install the package using
  <ui-typography variant="code" as="code">
    npm install galaxy-ui
  </ui-typography>
</ui-typography>
```
:::

### Lead Text

::: code-group
```tsx [React]
<Typography variant="lead">
  A modal dialog that interrupts the user with important content and expects
  a response.
</Typography>
```

```vue [Vue]
<template>
  <Typography variant="lead">
    A modal dialog that interrupts the user with important content and expects
    a response.
  </Typography>
</template>
```

```html [Angular]
<ui-typography variant="lead">
  A modal dialog that interrupts the user with important content and expects
  a response.
</ui-typography>
```
:::

### Large Text

::: code-group
```tsx [React]
<Typography variant="large">
  Large text for emphasis
</Typography>
```

```vue [Vue]
<template>
  <Typography variant="large">
    Large text for emphasis
  </Typography>
</template>
```

```html [Angular]
<ui-typography variant="large">
  Large text for emphasis
</ui-typography>
```
:::

### Small Text

::: code-group
```tsx [React]
<Typography variant="small">
  Small text for secondary information
</Typography>
```

```vue [Vue]
<template>
  <Typography variant="small">
    Small text for secondary information
  </Typography>
</template>
```

```html [Angular]
<ui-typography variant="small">
  Small text for secondary information
</ui-typography>
```
:::

### Muted Text

::: code-group
```tsx [React]
<Typography variant="muted">
  Muted text with reduced opacity for less important content
</Typography>
```

```vue [Vue]
<template>
  <Typography variant="muted">
    Muted text with reduced opacity for less important content
  </Typography>
</template>
```

```html [Angular]
<ui-typography variant="muted">
  Muted text with reduced opacity for less important content
</ui-typography>
```
:::

### Complete Example

::: code-group
```tsx [React]
<div className="space-y-6 max-w-3xl">
  <Typography variant="h1">Building Better UIs</Typography>

  <Typography variant="lead">
    Galaxy UI provides a comprehensive set of components to help you build
    beautiful and accessible user interfaces.
  </Typography>

  <Typography variant="h2">Getting Started</Typography>

  <Typography variant="p">
    Start by installing the CLI tool using{' '}
    <Typography variant="code" as="code">npm install -g galaxy-ui</Typography>.
    Then initialize your project with the components you need.
  </Typography>

  <Typography variant="blockquote">
    "Design is not just what it looks like and feels like. Design is how it works."
  </Typography>

  <Typography variant="h3">Features</Typography>

  <Typography variant="p">
    Our component library includes everything you need to build modern web applications.
  </Typography>

  <Typography variant="small">
    Last updated: January 2025
  </Typography>
</div>
```

```vue [Vue]
<template>
  <div class="space-y-6 max-w-3xl">
    <Typography variant="h1">Building Better UIs</Typography>

    <Typography variant="lead">
      Galaxy UI provides a comprehensive set of components to help you build
      beautiful and accessible user interfaces.
    </Typography>

    <Typography variant="h2">Getting Started</Typography>

    <Typography variant="p">
      Start by installing the CLI tool using
      <Typography variant="code" as="code">npm install -g galaxy-ui</Typography>.
      Then initialize your project with the components you need.
    </Typography>

    <Typography variant="blockquote">
      "Design is not just what it looks like and feels like. Design is how it works."
    </Typography>

    <Typography variant="h3">Features</Typography>

    <Typography variant="p">
      Our component library includes everything you need to build modern web applications.
    </Typography>

    <Typography variant="small">
      Last updated: January 2025
    </Typography>
  </div>
</template>
```

```html [Angular]
<div class="space-y-6 max-w-3xl">
  <ui-typography variant="h1">Building Better UIs</ui-typography>

  <ui-typography variant="lead">
    Galaxy UI provides a comprehensive set of components to help you build
    beautiful and accessible user interfaces.
  </ui-typography>

  <ui-typography variant="h2">Getting Started</ui-typography>

  <ui-typography variant="p">
    Start by installing the CLI tool using
    <ui-typography variant="code" as="code">npm install -g galaxy-ui</ui-typography>.
    Then initialize your project with the components you need.
  </ui-typography>

  <ui-typography variant="blockquote">
    "Design is not just what it looks like and feels like. Design is how it works."
  </ui-typography>

  <ui-typography variant="h3">Features</ui-typography>

  <ui-typography variant="p">
    Our component library includes everything you need to build modern web applications.
  </ui-typography>

  <ui-typography variant="small">
    Last updated: January 2025
  </ui-typography>
</div>
```
:::

## Accessibility

- Uses semantic HTML elements (h1, h2, p, blockquote, code, etc.)
- Maintains proper heading hierarchy
- Ensures adequate contrast ratios
- Provides consistent text sizing and spacing

## Author

**Bui Trong Hieu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bui Trong Hieu (kevinbui)
