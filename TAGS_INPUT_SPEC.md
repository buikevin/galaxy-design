# Tags Input Spec

## Goal
Build `tags-input` for all 5 frameworks with a single source of truth for:

1. anatomy
2. interaction model
3. visual language

Primary reference:
- Radix Vue `TagsInput`

This spec treats Radix Vue `TagsInput` as the behavioral and structural reference, then mirrors that model across Angular, React, React Native, and Flutter.

## Source of Truth
- Vue: Radix Vue `TagsInput`
- Angular: custom implementation mirroring Radix Vue
- React: custom implementation mirroring Radix Vue
- React Native: custom implementation mirroring Radix Vue
- Flutter: custom implementation mirroring Radix Vue

Reason:
- Radix Vue already provides the right compound anatomy for tags input.
- I do not currently have a stable public source to rely on for Radix NG `tags-input`.
- Custom implementations in React / Angular / mobile will keep the UI and API more consistent than mixing unrelated libraries.

## Shared Anatomy
Parent:
- `TagsInput`

Child parts:
- `TagsInputItem`
- `TagsInputItemText`
- `TagsInputItemDelete`
- `TagsInputInput`
- `TagsInputClear` (optional in V1)

## Scope for V1
- Add tags by typing and confirming
- Remove tags with delete/remove control
- Remove previous tag with `Backspace` when input is empty
- Focus stays inside the input container
- Same visual chip style across frameworks

Out of scope for V1:
- Drag reorder
- Autocomplete/combobox mode
- Async suggestion fetching
- Custom parsing pipelines
- Editable existing tags

## Shared Visual Model
- Container:
  - inline flex / wrap
  - minimum height equal to input height
  - border, background, focus ring identical to input family
- Tag item:
  - compact chip
  - same visual family as the standalone `tag` component
  - close/delete affordance on the right
- Input:
  - transparent background
  - no extra border
  - grows to fill remaining space

## Shared Tokens
- Container:
  - `min-height: 40px`
  - `padding-x: 12px`
  - `padding-y: 8px`
  - `gap: 8px`
- Tag chip:
  - `height: 24px`
  - `padding-x: 8px`
  - `gap: 4px`
  - `font-size: 12px`
  - `font-weight: 500`
  - `radius: 6px`
- Delete icon:
  - `12px`
  - idle opacity reduced
  - stronger on hover/focus for web

## Shared Behavior

### Add Tag
- User types text into input
- Confirm with:
  - `Enter`
- If trimmed value is non-empty and not duplicated:
  - append tag
  - clear input

### Remove Tag
- Clicking/tapping `TagsInputItemDelete` removes that tag

### Backspace Behavior
- If input is empty and there is at least one tag:
  - `Backspace` removes the last tag

### Duplicate Policy
- V1 default: duplicates are not added

### Placeholder Behavior
- Show placeholder only when there are no tags

## Keyboard Model
For web frameworks, mirror Radix Vue behavior as closely as practical:
- `Enter`: add current input as tag
- `Backspace`: remove previous tag when input is empty
- `ArrowLeft`: move focus semantics toward previous tag/item if implemented
- `ArrowRight`: move focus semantics toward next item if implemented
- `Home` / `End`: optional for V1, can be added after base behavior is stable

For V1 outside Vue, only the following are mandatory:
- `Enter`
- `Backspace`

Arrow/Home/End navigation can be added after parity of the base experience is stable.

## Accessibility

### Web
- Input must have an accessible label via surrounding form label or explicit ARIA attributes
- Remove button must have accessible text like:
  - `Remove {tag}`

### React Native
- Remove control should expose:
  - `accessibilityRole="button"`
  - `accessibilityLabel="Remove {tag}"`

### Flutter
- Use `Semantics` for delete action labels

## Common API Target

### `TagsInput`
- `value?: string[]`
- `defaultValue?: string[]`
- `placeholder?: string`
- `disabled?: boolean`
- `max?: number`
- `delimiter?: 'enter'` for V1
- `className` / `class`

Events:
- React: `onChange?(value: string[]): void`
- Vue: `update:modelValue`
- Angular: `valueChange`
- React Native: `onChange?(value: string[]): void`
- Flutter: `onChanged?(List<String> value)`

Additional callbacks:
- `onTagAdd?(tag: string): void`
- `onTagRemove?(tag: string): void`

### `TagsInputItem`
- `value: string`
- `disabled?: boolean`
- `className` / `class`

### `TagsInputItemText`
- visual text wrapper for the tag label

### `TagsInputItemDelete`
- delete/remove control

### `TagsInputInput`
- internal input surface

## Framework Strategy

### Vue
- Use Radix Vue `TagsInput` primitives
- Wrap them to match the shared design and naming

### Angular
- Custom compound implementation
- Mirror Radix Vue anatomy closely
- Do not simplify into a single monolithic component if that would break parity

### React
- Custom compound implementation
- Mirror the Radix Vue anatomy closely

### React Native
- Custom implementation using:
  - `View`
  - `Text`
  - `TextInput`
  - `Pressable`
- Mirror the same chip + input structure

### Flutter
- Custom implementation using:
  - `Wrap`
  - text input
  - delete tap targets
- Mirror the same chip + input structure

## Relationship to `tag`
- `tag` should later be designed as the standalone extraction of the `TagsInputItem` visual language
- Do not make `tag` diverge visually from `tags-input`

## Suggested Implementation Order
1. Vue
2. React
3. Angular
4. React Native
5. Flutter

Reason:
- Vue provides the clearest behavioral source
- React and Angular can mirror the compound model next
- mobile can then follow the locked visual and interaction contract

## Registry Implication
When revisiting registries later, `tags-input` should include child parts:
- `TagsInputItem`
- `TagsInputItemText`
- `TagsInputItemDelete`
- `TagsInputInput`

These should be captured in framework-specific registries when the component implementations are upgraded to the compound model.

## References
- Radix Vue Tags Input: `https://www.radix-vue.com/components/tags-input.html`
- React Native TextInput: `https://reactnative.dev/docs/textinput`
- Flutter InputChip reference: `https://api.flutter.dev/flutter/material/InputChip-class.html`
