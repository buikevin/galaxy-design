# Blocks Overview

Blocks are production-ready, composite UI patterns built from Galaxy UI base components. Unlike atomic components (Button, Input, etc.), blocks provide complete, real-world functionality that you can drop directly into your application.

## What are Blocks?

Blocks are **complete UI sections** composed of multiple base components working together:

- **Components** = Atomic elements (Button, Input, Avatar)
- **Blocks** = Composite patterns (Chat UI, Sidebar, Authentication Forms)

## Web vs Mobile Blocks

Galaxy UI provides blocks for both **Web** and **Mobile** platforms:

### Web Blocks
Available for **Vue**, **React**, and **Angular**:
- Chat UI
- Sidebar Navigation
- Authentication Forms
- Email Client
- Featured Sections (Hero, Features Grid)

### Mobile Blocks
Available for **React Native** and **Flutter**:
- Chat UI (Mobile-optimized)
- Drawer Navigation
- Authentication Forms (Mobile)

::: info
Mobile blocks are optimized for touch interfaces with appropriate sizing (48x48px minimum touch targets), native gestures, and mobile-first layouts.
:::

## Why Use Blocks?

### 1. **Save Development Time**
Get complex UI patterns in minutes instead of hours:

```bash
# Install a complete chat interface in one command
npx galaxy-design add chat-ui
```

### 2. **Production-Ready**
All blocks include:
- ✅ Accessibility (ARIA, keyboard navigation)
- ✅ Responsive design
- ✅ Dark mode support
- ✅ Type safety (TypeScript)
- ✅ Best practices

### 3. **Full Control**
Blocks are **copied into your project** (not installed as dependencies):
- Customize freely
- No breaking changes from updates
- Own the code completely

### 4. **Consistent Design**
Built on the same design system as base components:
- Unified theming
- Same Tailwind configuration
- Consistent spacing and colors

## How Blocks Work

### Installation

```bash
# Initialize Galaxy UI in your project
npx galaxy-design init

# Add a block
npx galaxy-design add chat-ui

# Add multiple blocks at once
npx galaxy-design add sidebar authentication email
```

### File Structure

When you add a block, it creates a complete folder with all necessary files:

```
src/components/ui/
└── chat-ui/
    ├── types.ts           # TypeScript types & interfaces
    ├── ChatMessage.vue    # Sub-components
    ├── MessageList.vue
    ├── MessageInput.vue
    ├── ChatUI.vue         # Main block component
    └── index.ts           # Exports
```

### Dependencies

Blocks automatically install their required base components. For example:

**Chat UI** requires:
- Avatar
- Button
- ScrollArea
- Textarea

These are installed automatically when you add the chat-ui block.

## Available Blocks

### Web Blocks (Vue/React/Angular)

| Block | Description | Components Used |
|-------|-------------|-----------------|
| [Chat UI](/blocks/web/chat-ui) | Complete messaging interface | Avatar, Button, ScrollArea, Textarea |
| [Sidebar](/blocks/web/sidebar) | Collapsible navigation sidebar | Button, Separator |
| [Authentication](/blocks/web/authentication) | Login/Register forms | Button, Input, Label, Checkbox, Separator |
| [Email Client](/blocks/web/email) | Gmail-like email interface | Button, Input, Avatar, ScrollArea |
| [Featured Sections](/blocks/web/featured) | Hero + Features grid | Button |

### Mobile Blocks (React Native/Flutter)

| Block | Description | Platforms |
|-------|-------------|-----------|
| [Chat UI](/blocks/mobile/chat-ui) | Mobile-optimized chat | RN, Flutter |
| [Drawer Navigation](/blocks/mobile/sidebar) | Mobile drawer menu | RN, Flutter |
| [Authentication](/blocks/mobile/authentication) | Mobile auth forms | RN, Flutter |

## Customization

Since blocks are copied into your project, you have complete freedom to customize:

### 1. **Styling**
Modify Tailwind classes directly:

```vue
<!-- Change button colors, spacing, etc -->
<Button class="bg-blue-500 px-8 py-4">
  Custom Styled Button
</Button>
```

### 2. **Functionality**
Add or remove features as needed:

```typescript
// Add emoji picker to chat input
const handleEmojiSelect = (emoji: string) => {
  messageContent.value += emoji
}
```

### 3. **Layout**
Adjust responsive breakpoints and sizing:

```vue
<!-- Make sidebar wider -->
<Sidebar width="320px" collapsed-width="80px" />
```

## Block vs Component

| Aspect | Components | Blocks |
|--------|-----------|--------|
| **Purpose** | Single UI element | Complete UI pattern |
| **Complexity** | Simple | Composite |
| **Examples** | Button, Input | Chat UI, Dashboard |
| **Files** | 1-3 files | 5-10 files |
| **Dependencies** | Minimal | Multiple components |
| **Use Case** | Building blocks | Ready-to-use sections |

## Best Practices

### 1. Start with Blocks
Use blocks for common patterns instead of building from scratch:

```bash
# ✅ Good: Use the authentication block
npx galaxy-design add authentication

# ❌ Avoid: Building auth forms from scratch
# Manually creating LoginForm, RegisterForm, validation logic, etc.
```

### 2. Customize After Installation
Install first, then customize to your needs:

```bash
# 1. Install the block
npx galaxy-design add chat-ui

# 2. Customize in your project
# Edit src/components/ui/chat-ui/ChatUI.vue
```

### 3. Combine with Components
Mix blocks and components as needed:

```vue
<template>
  <!-- Block -->
  <Sidebar :items="menuItems" />

  <main>
    <!-- Your custom content using components -->
    <Card>
      <CardHeader>
        <CardTitle>Dashboard</CardTitle>
      </CardHeader>
      <CardContent>
        <!-- ... -->
      </CardContent>
    </Card>
  </main>
</template>
```

## Next Steps

<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
  <a href="/blocks/web/chat-ui" class="block p-6 border rounded-lg hover:border-primary transition-colors">
    <h3 class="font-semibold mb-2">Web Blocks →</h3>
    <p class="text-sm text-muted-foreground">Explore blocks for Vue, React, and Angular</p>
  </a>

  <a href="/blocks/mobile/chat-ui" class="block p-6 border rounded-lg hover:border-primary transition-colors">
    <h3 class="font-semibold mb-2">Mobile Blocks →</h3>
    <p class="text-sm text-muted-foreground">Explore blocks for React Native and Flutter</p>
  </a>
</div>
