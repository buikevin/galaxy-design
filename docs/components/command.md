# Command

Command palette for keyboard-first navigation and search.

::: warning Web Only
This component is only available for web frameworks (Vue, React, Angular). Keyboard-heavy command palettes are not suitable for mobile platforms.
:::

<ComponentPreview name="CommandDemo">
  <template #preview>
    <DemoContainer>
      <CommandDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group
```vue [Vue]
<template>
  <Command>
    <CommandInput placeholder="Type a command..." />
    <CommandList>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
        <CommandItem>Search</CommandItem>
      </CommandGroup>
    </CommandList>
  </Command>
</template>
```

```tsx [React]
import { Command } from '@/components/ui/command'
export default function App() {
  return <Command />
}
```

```typescript [Angular]
@Component({
  template: `<ui-command />`
})
export class DemoComponent {}
```
:::

  </template>
</ComponentPreview>

## Installation

::: code-group
```bash [React]
npx galaxy-ui-cli add command
```

```bash [Vue]
npx galaxy-ui-cli add command
```

```bash [Angular]
npx galaxy-ui-cli add command
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add command
```
:::

## Usage

::: code-group
```tsx [React]
import {
  Command,
  CommandDialog,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@/components/command'

export default function CommandDemo() {
  return (
    <Command className="rounded-lg border shadow-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  )
}
```

```vue [Vue]
<script setup lang="ts">
import { Command } from '@/components/command'
</script>

<template>
  <Command class="rounded-lg border shadow-md" placeholder="Type a command or search...">
    <template #default="{ search }">
      <div class="p-1">
        <div v-if="!search">No results found.</div>
        <div v-else>
          <div class="px-2 py-1.5 text-xs font-medium text-muted-foreground">
            Suggestions
          </div>
          <button class="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground">
            Calendar
          </button>
        </div>
      </div>
    </template>
  </Command>
</template>
```
:::


## API Reference

### Props

This component accepts the following props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| ... | ... | ... | ... |

## Components

- `Command` - Main command container
- `CommandInput` - Search input field
- `CommandList` - Scrollable list of items
- `CommandEmpty` - Shown when no results
- `CommandGroup` - Group of related items
- `CommandItem` - Individual command item
- `CommandSeparator` - Visual separator
- `CommandShortcut` - Keyboard shortcut display

## Examples

### Command Dialog

```tsx
const [open, setOpen] = useState(false)

useEffect(() => {
  const down = (e: KeyboardEvent) => {
    if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault()
      setOpen((open) => !open)
    }
  }
  document.addEventListener('keydown', down)
  return () => document.removeEventListener('keydown', down)
}, [])

return (
  <CommandDialog open={open} onOpenChange={setOpen}>
    <CommandInput placeholder="Type a command or search..." />
    <CommandList>
      <CommandEmpty>No results found.</CommandEmpty>
      <CommandGroup heading="Suggestions">
        <CommandItem>Calendar</CommandItem>
      </CommandGroup>
    </CommandList>
  </CommandDialog>
)
```

## Accessibility

- Keyboard navigation with arrow keys
- Type-ahead search filtering
- Proper ARIA labels and roles

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
