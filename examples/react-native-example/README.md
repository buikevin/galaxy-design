# Galaxy UI React Native Example

Dự án showcase tất cả 37 components Galaxy UI cho React Native với Expo và NativeWind v4.

## Công nghệ sử dụng

- **Expo** - Framework React Native
- **NativeWind v4** - Tailwind CSS cho React Native
- **React Navigation** - Navigation cho ứng dụng
- **TypeScript** - Type safety
- **Galaxy UI CLI** - Component library

## Cài đặt

```bash
npm install
```

## Chạy dự án

### iOS Simulator
```bash
npm run ios
```

### Android Emulator
```bash
npm run android
```

### Web
```bash
npm run web
```

### Development Server
```bash
npm start
```

## Cấu trúc dự án

```
react-native-example/
├── App.tsx                 # Entry point với React Navigation
├── src/
│   ├── screens/           # 38 screens (Home + 37 components)
│   │   ├── HomeScreen.tsx
│   │   ├── ButtonScreen.tsx
│   │   ├── InputScreen.tsx
│   │   └── ...
│   └── navigation/
│       └── types.ts       # TypeScript navigation types
├── components/
│   └── ui/                # 37 Galaxy UI components
│       ├── button/
│       ├── input/
│       ├── card/
│       └── ...
├── lib/
│   └── utils.ts           # Utility functions (cn)
├── global.css             # Tailwind CSS và theme variables
├── tailwind.config.js     # Tailwind configuration
└── babel.config.js        # Babel config với NativeWind

```

## 37 Components có sẵn

### Form Components
- Button, Input, Label, Select
- Checkbox, Radio Group, Switch
- Slider, Textarea, Date Picker

### Layout Components
- Separator, Accordion, Collapsible
- Tabs, Aspect Ratio, Sheet

### Navigation Components
- Navigation Menu, Menubar
- Context Menu, Dropdown Menu
- Pagination

### Overlay Components
- Dialog, Alert Dialog
- Popover, Tooltip, Hover Card

### Data Display Components
- Avatar, Progress, Table
- Typography, Empty, Skeleton

### Interactive Components
- Toggle, Toggle Group

## Thêm components mới

Sử dụng Galaxy UI CLI để thêm components:

```bash
# Thêm một component
npx galaxy-ui-cli add button

# Thêm nhiều components
npx galaxy-ui-cli add button input card

# Thêm tất cả components
npx galaxy-ui-cli add --all
```

## Customize

### Theme Colors

Edit `global.css` để thay đổi theme colors:

```css
:root {
  --primary: 222.2 47.4% 11.2%;
  --secondary: 210 40% 96.1%;
  /* ... */
}
```

### Tailwind Config

Edit `tailwind.config.js` để customize Tailwind:

```js
module.exports = {
  theme: {
    extend: {
      // Your customizations
    },
  },
};
```

## Path Aliases

Project sử dụng path aliases:

- `@/components` → `./components`
- `@/lib` → `./lib`

Configured trong `tsconfig.json`.

## Lưu ý

- Components sử dụng NativeWind classes (Tailwind CSS syntax)
- Mọi screen đều có 2-3 examples cho mỗi component
- Navigation header màu xanh với back button
- Support TypeScript với type-safe navigation

## Docs

- [Galaxy UI CLI Docs](https://galaxy-ui-cli.vercel.app)
- [NativeWind Docs](https://www.nativewind.dev)
- [Expo Docs](https://docs.expo.dev)
- [React Navigation Docs](https://reactnavigation.org)

## License

MIT
