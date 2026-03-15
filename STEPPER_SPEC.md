# Stepper Spec

## Goal
Build `stepper` for all 5 frameworks with this priority:

1. Keep the UI and anatomy as close as possible across frameworks.
2. Keep the state model consistent.
3. Normalize props after the visual and structural model is stable.

## Scope for V1
- Horizontal stepper only
- Click/tap to move between steps
- States:
  - `inactive`
  - `active`
  - `completed`
  - `disabled`
- Support title + optional description per step
- Support controlled and uncontrolled usage where the framework allows it

Out of scope for V1:
- Vertical stepper
- Wizard/content panels
- Branching flows
- Async validation between steps

## Source of Truth
- Vue: Radix Vue Stepper
- Angular: Radix NG Stepper
- React: custom implementation that mirrors the Vue/Angular contract
- React Native: custom implementation
- Flutter: custom implementation

Reason:
- Vue and Angular already have a Stepper primitive model.
- I could not confirm an equivalent official Radix UI React Stepper page from the current docs, so React should mirror the same public model instead of inventing a different one.
- React Native and Flutter should be custom so the UI stays visually aligned with the web implementations.

## Shared Anatomy
Parent:
- `Stepper`

Child parts:
- `StepperItem`
- `StepperTrigger`
- `StepperIndicator`
- `StepperTitle`
- `StepperDescription`
- `StepperSeparator`

## Visual Spec
- Layout:
  - Horizontal row
  - Each step item contains indicator + text block
  - Separator sits between items
- Indicator:
  - circle
  - `sm`: 24px
  - `default`: 32px
  - `lg`: 40px
- Separator:
  - 2px line
  - stretches to fill remaining space between steps
- Typography:
  - title: medium weight
  - description: smaller muted text
- Motion:
  - subtle color/background transition only
  - no framework-specific fancy motion in V1

## State Styling
- `inactive`
  - indicator: muted border, transparent background
  - title: normal foreground
  - description: muted foreground
- `active`
  - indicator: primary background, primary foreground
  - title: stronger foreground
- `completed`
  - indicator: primary border/background
  - icon/check or completed number treatment
- `disabled`
  - reduced opacity
  - non-interactive

## Common API Target

### `Stepper`
- `value?: number`
- `defaultValue?: number`
- `linear?: boolean`
- `orientation?: 'horizontal'`
- `size?: 'sm' | 'default' | 'lg'`
- `className` / `class`

Events:
- React: `onValueChange?(value: number): void`
- Vue: `update:modelValue`
- Angular: `valueChange`
- React Native: `onValueChange?(value: number): void`
- Flutter: `onValueChange?(int value)`

### `StepperItem`
- `step: number`
- `completed?: boolean`
- `disabled?: boolean`
- `className` / `class`

### `StepperTrigger`
- interactive step target
- should be keyboard accessible on web

### `StepperIndicator`
- renders number / active dot / completed mark

### `StepperTitle`
- title text

### `StepperDescription`
- optional description text

### `StepperSeparator`
- connector line between items

## Framework Strategy

### React
- Use custom compound components.
- Do not depend on a third-party stepper library for V1.
- Mirror the normalized API used by Vue/Angular.

### Vue
- Use Radix Vue Stepper as the primitive base.
- Wrap it so the exported API and classes match the shared design.

### Angular
- Use Radix NG Stepper as the primitive base.
- Wrap it so the exported API and selectors match the shared design.

### React Native
- Use `Pressable`, `View`, `Text`.
- Expose the same compound structure where practical.
- Accessibility:
  - `accessibilityRole="button"` on trigger
  - `accessibilityState={{ selected, disabled }}`

### Flutter
- Use a custom `GalaxyStepper`.
- Do not use Material `Stepper` as the main implementation for V1.
- Build from `Row`, `Column`, `Expanded`, `InkWell`/`GestureDetector`, `Semantics`.

## Normalization Rules
- Keep `size`, `linear`, current step, disabled state, and completed state consistent first.
- If a framework primitive exposes extra props, do not add them to the common API until at least 3 frameworks can support them cleanly.
- Framework-only props can live in framework registries later, but the shared API must stay minimal.

## Suggested Implementation Order
1. Vue
2. Angular
3. React
4. React Native
5. Flutter

Reason:
- Vue and Angular give the clearest primitive model first.
- React can then mirror that model.
- Mobile implementations can follow the locked visual/state contract.

## Registry Implication
Once implemented, `stepper` should move from `(not support)` to mapped registries with:
- summary entry in `registry.json`
- detailed entries in:
  - `registry-react.json`
  - `registry-vue.json`
  - `registry-angular.json`
  - `registry-react-native.json`
  - `registry-flutter.json`

## References
- Radix Vue Stepper: `https://www.radix-vue.com/components/stepper.html`
- Radix NG Stepper Storybook: `https://sb-primitives.radix-ng.com/?path=/docs/primitives-stepper--docs`
- Radix NG repo: `https://github.com/radix-ng/primitives`
- React Native accessibility: `https://reactnative.dev/docs/accessibility`
- Flutter Stepper reference: `https://api.flutter.dev/flutter/material/Stepper-class.html`
