/* eslint-disable @typescript-eslint/no-explicit-any */

declare module '@rn-primitives/*' {
  import * as React from 'react';

  type PrimitiveComponent = React.ComponentType<any> & {
    displayName?: string;
  };

  export const Root: PrimitiveComponent;
  export const Trigger: PrimitiveComponent;
  export const Content: PrimitiveComponent;
  export const Close: PrimitiveComponent;
  export const Overlay: PrimitiveComponent;
  export const Portal: PrimitiveComponent;
  export const Provider: PrimitiveComponent;
  export const Title: PrimitiveComponent;
  export const Description: PrimitiveComponent;
  export const Group: PrimitiveComponent;
  export const Menu: PrimitiveComponent;
  export const RadioGroup: PrimitiveComponent;
  export const Value: PrimitiveComponent;
  export const Icon: PrimitiveComponent;
  export const Viewport: PrimitiveComponent;
  export const Label: PrimitiveComponent;
  export const Item: PrimitiveComponent;
  export const CheckboxItem: PrimitiveComponent;
  export const RadioItem: PrimitiveComponent;
  export const ItemIndicator: PrimitiveComponent;
  export const ItemText: PrimitiveComponent;
  export const Separator: PrimitiveComponent;
  export const Header: PrimitiveComponent;
  export const Footer: PrimitiveComponent;
  export const Cancel: PrimitiveComponent;
  export const Action: PrimitiveComponent;
  export const Thumb: PrimitiveComponent;
  export const Track: PrimitiveComponent;
  export const Range: PrimitiveComponent;
  export const Indicator: PrimitiveComponent;
  export const Sub: PrimitiveComponent;
  export const SubTrigger: PrimitiveComponent;
  export const SubContent: PrimitiveComponent;
  export const Arrow: PrimitiveComponent;
  export const Handle: PrimitiveComponent;
  export const Input: PrimitiveComponent;
  export const ItemIcon: PrimitiveComponent;
  export const Checkbox: PrimitiveComponent;
  export const Toggle: PrimitiveComponent;
  export const List: PrimitiveComponent;
}