/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Collapsible components - A layered section that can expand and collapse
 */

import * as CollapsiblePrimitive from '@radix-ui/react-collapsible'

/**
 * Collapsible Component
 * 
 * Root component for the collapsible section. Manages the open/close state.
 * Built on top of Radix UI Collapsible primitive.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Root>} props - Collapsible props
 * @param {boolean} [props.open] - Controlled open state
 * @param {(open: boolean) => void} [props.onOpenChange] - Open state change handler
 * @param {boolean} [props.disabled] - Whether the collapsible is disabled
 * @param {React.RefObject<React.ElementRef<typeof CollapsiblePrimitive.Root>>} ref - Reference to the root element
 * @returns {JSX.Element} Collapsible root element
 */
const Collapsible = CollapsiblePrimitive.Root

/**
 * CollapsibleTrigger Component
 * 
 * The trigger element that toggles the collapsible content.
 * Can be any element (button, link, etc.).
 * 
 * @param {React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>} props - CollapsibleTrigger props
 * @param {string} [props.className] - CSS class names for the trigger
 * @param {boolean} [props.disabled] - Whether the trigger is disabled
 * @param {React.RefObject<React.ElementRef<typeof CollapsiblePrimitive.Trigger>>} ref - Reference to the trigger element
 * @returns {JSX.Element} Collapsible trigger element
 */
const CollapsibleTrigger = CollapsiblePrimitive.Trigger

/**
 * CollapsibleContent Component
 * 
 * The collapsible content panel that is shown when triggered.
 * Animates open and closed.
 * 
 * @param {React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>} props - CollapsibleContent props
 * @param {string} [props.className] - CSS class names for the content
 * @param {React.ReactNode} [props.children] - Content to display when expanded
 * @param {boolean} [props.forceMount] - Force mount the content
 * @param {React.RefObject<React.ElementRef<typeof CollapsiblePrimitive.Content>>} ref - Reference to the content element
 * @returns {JSX.Element} Collapsible content element
 */
const CollapsibleContent = CollapsiblePrimitive.Content

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
