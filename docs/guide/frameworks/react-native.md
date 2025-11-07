# React Native

Build beautiful mobile applications with Galaxy UI components for React Native.

## Overview

Galaxy UI for React Native provides 37 production-ready components styled with **NativeWind v4** (Tailwind CSS for React Native). All components are fully typed with TypeScript and follow React Native best practices.

## Prerequisites

Before you begin, make sure you have:

- **React Native** 0.74+ (with New Architecture support)
- **Node.js** 18+ or **Bun** 1.0+
- **NativeWind** v4 configured
- **Expo** 51+ or bare React Native project

## Installation

### Step 1: Initialize Galaxy UI

```bash
# Using npx
npx galaxy-ui-cli@latest init

# Using bunx
bunx galaxy-ui-cli@latest init
```

The CLI will:
1. ✅ Detect React Native automatically
2. ✅ Install NativeWind v4 dependencies
3. ✅ Create `components.json` configuration
4. ✅ Set up utility functions
5. ✅ Configure Tailwind CSS

### Step 2: Add Components

```bash
# Add a single component
npx galaxy-ui-cli@latest add button

# Add multiple components
npx galaxy-ui-cli@latest add button input dialog
```

## Configuration

Galaxy UI creates a `components.json` file in your project root:

```json
{
  "$schema": "https://ui.galaxy.com/schema.json",
  "framework": "react-native",
  "typescript": true,
  "styling": "nativewind",
  "nativewind": {
    "version": "v4",
    "config": "tailwind.config.js"
  },
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## NativeWind v4 Setup

Make sure NativeWind v4 is properly configured:

### babel.config.js

```js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "nativewind/babel",
      "react-native-reanimated/plugin",
    ],
  };
};
```

### tailwind.config.js

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
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
        // ... more colors
      },
    },
  },
  plugins: [],
};
```

### global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --background: 0 0% 100%;
  --foreground: 222.2 84% 4.9%;
  --primary: 222.2 47.4% 11.2%;
  --primary-foreground: 210 40% 98%;
  /* ... more variables */
}

.dark {
  --background: 222.2 84% 4.9%;
  --foreground: 210 40% 98%;
  --primary: 210 40% 98%;
  --primary-foreground: 222.2 47.4% 11.2%;
  /* ... more variables */
}
```

## Usage Examples

### Button Component

```tsx
import { Button, ButtonText } from '@/components/ui/button';
import { View } from 'react-native';

export default function App() {
  return (
    <View className="flex-1 items-center justify-center gap-4 p-4">
      {/* Default button */}
      <Button variant="default">
        <ButtonText>Default Button</ButtonText>
      </Button>

      {/* Secondary button */}
      <Button variant="secondary">
        <ButtonText>Secondary Button</ButtonText>
      </Button>

      {/* Outline button */}
      <Button variant="outline">
        <ButtonText>Outline Button</ButtonText>
      </Button>

      {/* With custom handler */}
      <Button onPress={() => console.log('Pressed!')}>
        <ButtonText>Click Me</ButtonText>
      </Button>
    </View>
  );
}
```

### Input Component

```tsx
import { Input } from '@/components/ui/input';
import { View, Text } from 'react-native';
import { useState } from 'react';

export default function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View className="flex-1 p-4 gap-4">
      <View className="gap-2">
        <Text className="text-sm font-medium">Email</Text>
        <Input
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      <View className="gap-2">
        <Text className="text-sm font-medium">Password</Text>
        <Input
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>
    </View>
  );
}
```

### Dialog Component

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from '@/components/ui/dialog';
import { Button, ButtonText } from '@/components/ui/button';

export default function DialogExample() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <ButtonText>Open Dialog</ButtonText>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Confirm Action</DialogTitle>
          <DialogDescription>
            Are you sure you want to continue? This action cannot be undone.
          </DialogDescription>
        </DialogHeader>

        <DialogFooter>
          <DialogClose asChild>
            <Button variant="outline">
              <ButtonText>Cancel</ButtonText>
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="default">
              <ButtonText>Confirm</ButtonText>
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Available Components

Galaxy UI for React Native includes 37 mobile-optimized components:

### Form & Input
- Button
- Input
- Checkbox
- Radio Group
- Select
- Slider
- Switch
- Textarea
- Label

### Layout
- Separator
- Accordion
- Collapsible
- Tabs
- Aspect Ratio
- Sheet
- Toolbar

### Navigation
- Navigation Menu
- Pagination

### Data Display
- Avatar
- Progress
- Badge
- Typography
- Empty
- Skeleton

### Overlays
- Dialog
- Alert Dialog
- Popover
- Tooltip

### Date & Time
- Calendar
- Calendar Range

### Interactive
- Toggle
- Toggle Group

## Dark Mode

Galaxy UI supports dark mode out of the box with NativeWind v4:

```tsx
import { useColorScheme } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  const colorScheme = useColorScheme();

  return (
    <>
      <StatusBar style={colorScheme === 'dark' ? 'light' : 'dark'} />
      {/* Your app content */}
    </>
  );
}
```

## TypeScript Support

All components are fully typed with TypeScript:

```tsx
import type { ButtonProps } from '@/components/ui/button';

const CustomButton: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <Button {...props}>
      {children}
    </Button>
  );
};
```

## Best Practices

### 1. Use Composition

```tsx
import { Button, ButtonText } from '@/components/ui/button';
import { Loader } from '@/components/ui/loader';

function LoadingButton({ loading, children, ...props }) {
  return (
    <Button disabled={loading} {...props}>
      {loading && <Loader className="mr-2" />}
      <ButtonText>{children}</ButtonText>
    </Button>
  );
}
```

### 2. Customize with Tailwind

```tsx
<Button className="bg-purple-600 active:bg-purple-700">
  <ButtonText className="text-white font-bold">
    Custom Button
  </ButtonText>
</Button>
```

### 3. Handle Platform Differences

```tsx
import { Platform } from 'react-native';

<Button
  className={Platform.select({
    ios: 'rounded-full',
    android: 'rounded-md',
  })}
>
  <ButtonText>Platform Button</ButtonText>
</Button>
```

## Performance Tips

1. **Use `useMemo` for complex calculations**
```tsx
const filteredData = useMemo(() =>
  data.filter(item => item.active),
  [data]
);
```

2. **Use `React.memo` for expensive components**
```tsx
const MemoizedComponent = React.memo(MyComponent);
```

3. **Avoid inline functions in render**
```tsx
// ❌ Bad
<Button onPress={() => handlePress(id)}>

// ✅ Good
const handleButtonPress = useCallback(() => {
  handlePress(id);
}, [id]);

<Button onPress={handleButtonPress}>
```

## Troubleshooting

### NativeWind not working

Make sure you have:
1. Installed NativeWind v4: `npm install nativewind@^4.0.0`
2. Added `nativewind/babel` to `babel.config.js`
3. Imported `global.css` in your App entry file

### Components not styled correctly

Check that your `tailwind.config.js` includes the correct content paths:
```js
content: [
  "./app/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
],
```

## Next Steps

- [Components Overview](/components/overview) - Browse all available components
- [CLI Usage](/guide/cli-usage) - Learn more about the CLI
- [Theming](/guide/theming) - Customize your theme

## Resources

- [NativeWind Documentation](https://www.nativewind.dev/)
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)

## Support

Having issues? Check our [GitHub Issues](https://github.com/buikevin/galaxy-design/issues) or contact kevinbui210191@gmail.com
