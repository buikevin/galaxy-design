# Rate Spec

## Goal
Build `rate` for all 5 frameworks with a single visual contract.

Priority:
1. Visual parity across frameworks
2. Shared interaction model
3. Shared props

## Scope for V1
- Star rating only
- 5 items by default
- Controlled and uncontrolled usage where the framework supports it
- Optional half value support
- Optional clear support

Out of scope for V1:
- Arbitrary custom character sets
- Tooltips
- Advanced animation
- Theme-specific brand variants

## Shared Visual Model
- Use a custom star shape as the source of truth
- Do not use framework-native rating widgets as the primary implementation
- Each star is rendered with:
  - muted base layer
  - active filled overlay
- Fill states:
  - `0%`
  - `50%`
  - `100%`

## Shared Tokens
- `count = 5`
- `size`:
  - `sm = 16`
  - `default = 20`
  - `lg = 24`
- `gap = 4`
- `activeColor = #fadb14`
- `inactiveColor = rgba(0,0,0,0.06)` or theme-equivalent muted token
- `hoverScale = 1.1`

## Common API Target
- `value?: number`
- `defaultValue?: number`
- `count?: number`
- `allowHalf?: boolean`
- `allowClear?: boolean`
- `disabled?: boolean`
- `readOnly?: boolean`
- `size?: 'sm' | 'default' | 'lg'`

Events:
- React: `onValueChange?(value: number): void`
- Vue: `update:modelValue`
- Angular: `valueChange`
- React Native: `onValueChange?(value: number): void`
- Flutter: `onValueChange?(double value)`

## Interaction Model
- Hover or pointer preview on web
- Click/tap selects current value
- If `allowHalf` is true:
  - left half selects `n - 0.5`
  - right half selects `n`
- If `allowClear` is true:
  - selecting the same value again clears to `0`

## Accessibility
- Web should follow a rating pattern close to the radio-group model
- Keyboard support:
  - Arrow Left / Right
  - Home / End
  - Enter / Space
- React Native:
  - use `accessibilityRole`
  - expose `accessibilityState`
  - expose `accessibilityValue`
- Flutter:
  - use `Semantics`

## Framework Strategy

### React
- Custom implementation
- Use inline SVG for the shared star path

### Vue
- Custom implementation
- Use the same SVG/path and style tokens as React

### Angular
- Custom implementation
- Keep the same DOM shape and styling model as React/Vue where possible

### React Native
- Custom implementation with `Pressable`, `View`, `Text`
- Use overlay clipping for half fill

### Flutter
- Custom implementation with `GestureDetector` or `InkWell`
- Use `Stack` + clip-based fill for half state

## Design Direction
- Visually closer to Ant Design `Rate`
- Keep stars compact, bright, and lightweight
- Avoid outline-only icon styling if the goal is AntD-like parity

## References
- Ant Design Rate: `https://ant.design/components/rate`
- WAI radio rating example: `https://www.w3.org/WAI/ARIA/apg/patterns/radio/examples/radio-rating/`
- React Native accessibility: `https://reactnative.dev/docs/accessibility`
- Flutter gesture reference: `https://api.flutter.dev/flutter/widgets/GestureDetector-class.html`
