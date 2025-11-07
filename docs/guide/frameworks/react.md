# React

Learn how to use Galaxy UI with React 18+.

## Requirements

- **React**: 18.0.0 or higher
- **TypeScript**: 5.0.0 or higher (recommended)
- **Tailwind CSS**: 3.4.0 or higher
- **Vite**: 5.0.0 or higher (recommended) or Create React App

## Installation

Initialize Galaxy UI in your React project:

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
1. Detect that you're using React
2. Install required dependencies
3. Create `components.json`
4. Setup Tailwind CSS configuration
5. Create utility functions

## Project Setup

### Vite + React (Recommended)

Create a new project with Vite:

```bash
# Create project
npm create vite@latest my-app -- --template react-ts

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

### TypeScript Configuration

Update `tsconfig.json`:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
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
    "jsx": "react-jsx",

    /* Linting */
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true
  },
  "include": ["src"]
}
```

## Adding Components

Add components to your project:

```bash
npx galaxy-ui-cli@latest add button
```

This will:
1. Create `src/components/ui/button/` directory
2. Copy component files (Button.tsx, variants.ts, index.ts)
3. Install dependencies (`@radix-ui/react-slot`, `class-variance-authority`)

## Usage

### Basic Example

```tsx
import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="p-4">
      <Button>Click me</Button>
    </div>
  )
}

export default App
```

### With Variants

```tsx
import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="flex gap-2">
      <Button variant="default">Default</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="destructive">Destructive</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="link">Link</Button>
    </div>
  )
}
```

### With Sizes

```tsx
import { Button } from '@/components/ui/button'

function App() {
  return (
    <div className="flex items-center gap-2">
      <Button size="sm">Small</Button>
      <Button size="default">Default</Button>
      <Button size="lg">Large</Button>
    </div>
  )
}
```

### Form Example

```tsx
import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ email, password })
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <Button type="submit" className="w-full">
        Sign In
      </Button>
    </form>
  )
}
```

### Dialog Example

```tsx
import { useState } from 'react'
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

function DialogDemo() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
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
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="destructive" onClick={() => setOpen(false)}>
            Delete
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
```

## React Hooks

### useToast (Coming Soon)

For notifications and alerts:

```tsx
import { useToast } from '@/hooks/use-toast'

function MyComponent() {
  const { toast } = useToast()

  return (
    <Button
      onClick={() => {
        toast({
          title: "Success",
          description: "Your changes have been saved.",
        })
      }}
    >
      Save Changes
    </Button>
  )
}
```

## React Router Integration

### With React Router v6

```tsx
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-2 p-4">
        <Button asChild variant="ghost">
          <Link to="/">Home</Link>
        </Button>
        <Button asChild variant="ghost">
          <Link to="/about">About</Link>
        </Button>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  )
}
```

## Form Libraries

### With React Hook Form

```tsx
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type FormData = {
  email: string
  password: string
}

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          {...register('email', { required: true })}
          placeholder="Enter your email"
        />
        {errors.email && <span className="text-sm text-destructive">Email is required</span>}
      </div>

      <Button type="submit">Submit</Button>
    </form>
  )
}
```

## State Management

### With Zustand

```tsx
import { create } from 'zustand'
import { Button } from '@/components/ui/button'

type Store = {
  count: number
  increment: () => void
  decrement: () => void
}

const useStore = create<Store>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}))

function Counter() {
  const { count, increment, decrement } = useStore()

  return (
    <div className="flex items-center gap-4">
      <Button onClick={decrement}>-</Button>
      <span className="text-2xl font-bold">{count}</span>
      <Button onClick={increment}>+</Button>
    </div>
  )
}
```

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import { Button, type ButtonProps } from '@/components/ui/button'
import { ComponentPropsWithoutRef } from 'react'

// Extend component props
type CustomButtonProps = ButtonProps & {
  loading?: boolean
}

function CustomButton({ loading, children, ...props }: CustomButtonProps) {
  return (
    <Button disabled={loading} {...props}>
      {loading ? 'Loading...' : children}
    </Button>
  )
}
```

## Best Practices

### Component Composition

```tsx
// ✅ Good: Compose components
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

function LoadingButton({ loading, children, ...props }) {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
      {children}
    </Button>
  )
}
```

### Using asChild

```tsx
// ✅ Good: Use asChild for custom elements
<Button asChild>
  <a href="/link">Link Button</a>
</Button>

// ❌ Bad: Nesting buttons
<Button>
  <a href="/link">Link Button</a>
</Button>
```

### Handling Events

```tsx
// ✅ Good: Type-safe event handlers
<Button onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  // Your logic
}}>
  Click me
</Button>
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
2. Restart TypeScript server in VS Code: `Cmd+Shift+P` → "TypeScript: Restart TS Server"

### Styles not applying

1. Verify Tailwind CSS is configured correctly
2. Check `tailwind.config.js` content paths include components
3. Restart dev server

## Next Steps

- [Vue Guide](/guide/frameworks/vue) - Learn about Vue integration
- [Angular Guide](/guide/frameworks/angular) - Learn about Angular integration
- [Components](/components/overview) - Explore available components
- [Examples](https://github.com/buikevin/galaxy-ui-cli/tree/main/examples/react-example) - View React examples
