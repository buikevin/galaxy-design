import { Directive } from '@angular/core';
import {
  RdxTooltip,
  RdxTooltipTrigger,
  RdxTooltipContent,
} from '@radix-ng/primitives/tooltip2';

/**
 * Tooltip Root Directive
 * Apply to a container element to create a tooltip
 * @example
 * <span uiTooltipRoot>...</span>
 */
@Directive({
  selector: '[uiTooltipRoot]',
  standalone: true,
  hostDirectives: [RdxTooltip],
})
export class UiTooltipRootDirective {}

/**
 * Tooltip Trigger Directive
 * Apply to the element that triggers the tooltip
 * @example
 * <button uiTooltipTrigger>Hover me</button>
 */
@Directive({
  selector: '[uiTooltipTrigger]',
  standalone: true,
  hostDirectives: [RdxTooltipTrigger],
})
export class UiTooltipTriggerDirective {}

/**
 * Tooltip Content Directive
 * Apply to the tooltip content container
 * @example
 * <div uiTooltipContent>Tooltip text</div>
 */
@Directive({
  selector: '[uiTooltipContent]',
  standalone: true,
  hostDirectives: [RdxTooltipContent],
})
export class UiTooltipContentDirective {}
