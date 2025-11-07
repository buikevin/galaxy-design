# Vue

Learn how to use Galaxy UI with Vue 3.

## Requirements

- **Vue**: 3.3.0 or higher
- **TypeScript**: 5.0.0 or higher (recommended)
- **Tailwind CSS**: 3.4.0 or higher
- **Vite**: 5.0.0 or higher (recommended)

## Installation

Initialize Galaxy UI in your Vue project:

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

The CLI will:
1. Detect that you're using Vue
2. Install required dependencies (`radix-vue`, etc.)
3. Create `components.json`
4. Setup Tailwind CSS configuration
5. Create utility functions

## Project Setup

### Vite + Vue (Recommended)

Create a new project with Vite:

```bash
# Create project
npm create vite@latest my-app -- --template vue-ts

# Navigate to project
cd my-app

# Install dependencies
npm install

# Initialize Galaxy UI
npx galaxy-ui-cli@latest init
```

### Vite Configuration

Ensure your `vite.config.ts` has path aliases:

```ts
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

### TypeScript Configuration

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    },

    /* Bundler mode */
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src/**/*.ts", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

## Adding Components

Add components to your project:

```bash
npx galaxy-ui-cli@latest add button
```

This will:
1. Create `src/components/ui/button/` directory
2. Copy component files (Button.vue, variants.ts, index.ts)
3. Install dependencies (`radix-vue`, `class-variance-authority`)

## Usage

### Basic Example

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="p-4">
    <Button>Click me</Button>
  </div>
</template>
```

### With Variants

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
</script>

<template>
  <div class="flex gap-2">
    <Button variant="default">Default</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="destructive">Destructive</Button>
    <Button variant="outline">Outline</Button>
    <Button variant="ghost">Ghost</Button>
    <Button variant="link">Link</Button>
  </div>
</template>
```

### With Events

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'

const handleClick = () => {
  console.log('Button clicked!')
}
</script>

<template>
  <Button @click="handleClick">
    Click me
  </Button>
</template>
```

### Form Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

const email = ref('')
const password = ref('')

const handleSubmit = () => {
  console.log({ email: email.value, password: password.value })
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4 max-w-md">
    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input
        id="email"
        v-model="email"
        type="email"
        placeholder="Enter your email"
      />
    </div>

    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input
        id="password"
        v-model="password"
        type="password"
        placeholder="Enter your password"
      />
    </div>

    <Button type="submit" class="w-full">
      Sign In
    </Button>
  </form>
</template>
```

### Dialog Example

```vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'

const open = ref(false)
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <Button>Open Dialog</Button>
    </DialogTrigger>
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Are you sure?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete your account.
        </DialogDescription>
      </DialogHeader>
      <DialogFooter>
        <Button variant="outline" @click="open = false">
          Cancel
        </Button>
        <Button variant="destructive" @click="open = false">
          Delete
        </Button>
      </DialogFooter>
    </DialogContent>
  </Dialog>
</template>
```

## Composition API

### Using Composables

```vue
<script setup lang="ts">
import { ref, computed } from 'vue'
import { Button } from '@/components/ui/button'

const count = ref(0)
const doubled = computed(() => count.value * 2)

const increment = () => count.value++
</script>

<template>
  <div class="space-y-4">
    <p>Count: {{ count }}</p>
    <p>Doubled: {{ doubled }}</p>
    <Button @click="increment">Increment</Button>
  </div>
</template>
```

### With Reactive

```vue
<script setup lang="ts">
import { reactive } from 'vue'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

const form = reactive({
  name: '',
  email: '',
})

const handleSubmit = () => {
  console.log(form)
}
</script>

<template>
  <form @submit.prevent="handleSubmit" class="space-y-4">
    <Input v-model="form.name" placeholder="Name" />
    <Input v-model="form.email" type="email" placeholder="Email" />
    <Button type="submit">Submit</Button>
  </form>
</template>
```

## Vue Router Integration

### With Vue Router v4

```vue
<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { Button } from '@/components/ui/button'
</script>

<template>
  <div>
    <nav class="flex gap-2 p-4">
      <Button as-child variant="ghost">
        <RouterLink to="/">Home</RouterLink>
      </Button>
      <Button as-child variant="ghost">
        <RouterLink to="/about">About</RouterLink>
      </Button>
    </nav>

    <RouterView />
  </div>
</template>
```

### Programmatic Navigation

```vue
<script setup lang="ts">
import { useRouter } from 'vue-router'
import { Button } from '@/components/ui/button'

const router = useRouter()

const navigateToAbout = () => {
  router.push('/about')
}
</script>

<template>
  <Button @click="navigateToAbout">
    Go to About
  </Button>
</template>
```

## State Management

### With Pinia

```ts
// stores/counter.ts
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),
  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
```

```vue
<script setup lang="ts">
import { useCounterStore } from '@/stores/counter'
import { Button } from '@/components/ui/button'

const counter = useCounterStore()
</script>

<template>
  <div class="flex items-center gap-4">
    <Button @click="counter.decrement">-</Button>
    <span class="text-2xl font-bold">{{ counter.count }}</span>
    <Button @click="counter.increment">+</Button>
  </div>
</template>
```

## TypeScript Support

All components are fully typed with TypeScript:

```vue
<script setup lang="ts">
import { Button, type ButtonProps } from '@/components/ui/button'
import type { HTMLAttributes } from 'vue'

interface CustomButtonProps extends ButtonProps {
  loading?: boolean
}

defineProps<CustomButtonProps>()
</script>

<template>
  <Button :disabled="loading">
    {{ loading ? 'Loading...' : $slots.default }}
  </Button>
</template>
```

## Best Practices

### Component Composition

```vue
<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-vue-next'

defineProps<{
  loading?: boolean
}>()
</script>

<template>
  <Button :disabled="loading">
    <Loader2 v-if="loading" class="mr-2 h-4 w-4 animate-spin" />
    <slot />
  </Button>
</template>
```

### Using as-child

```vue
<!-- ✅ Good: Use as-child for custom elements -->
<Button as-child>
  <a href="/link">Link Button</a>
</Button>

<!-- ❌ Bad: Nesting buttons -->
<Button>
  <a href="/link">Link Button</a>
</Button>
```

### Handling Events

```vue
<script setup lang="ts">
const handleClick = (event: MouseEvent) => {
  event.preventDefault()
  // Your logic
}
</script>

<template>
  <Button @click="handleClick">
    Click me
  </Button>
</template>
```

## Script Setup

All examples use `<script setup>` syntax which is the recommended way in Vue 3:

```vue
<script setup lang="ts">
// Direct imports and declarations
import { ref } from 'vue'
import { Button } from '@/components/ui/button'

// Reactive state
const count = ref(0)

// Functions
const increment = () => count.value++
</script>
```

## Troubleshooting

### Module not found errors

```bash
# Clear cache and reinstall
rm -rf node_modules .vite
npm install
```

### TypeScript errors

1. Check `tsconfig.json` has correct `paths` configuration
2. Restart Volar server in VS Code: `Cmd+Shift+P` → "Volar: Restart Vue Server"

### Styles not applying

1. Verify Tailwind CSS is configured correctly
2. Check `tailwind.config.js` content paths include components
3. Restart dev server

### Radix Vue warnings

If you see warnings about Radix Vue primitives, ensure you have the latest version:

```bash
npm install radix-vue@latest
```

## Next Steps

- [React Guide](/guide/frameworks/react) - Learn about React integration
- [Angular Guide](/guide/frameworks/angular) - Learn about Angular integration
- [Components](/components/overview) - Explore available components
- [Examples](https://github.com/buikevin/galaxy-design/tree/main/examples/vue-example) - View Vue examples
