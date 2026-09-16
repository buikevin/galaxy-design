/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Tooltip directive - Shows tooltip on hover
 */

import { Directive } from '@angular/core';
import {
  RdxTooltipRootDirective,
  RdxTooltipTriggerDirective,
  RdxTooltipContentDirective,
} from '@radix-ng/primitives/tooltip';

/**
 * Tooltip Root Directive
 * Apply to a container element to create a tooltip
 * @example
 * <span uiTooltipRoot>...</span>
 */
@Directive({
  selector: '[uiTooltipRoot]',
  standalone: true,
  hostDirectives: [RdxTooltipRootDirective],
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
  hostDirectives: [RdxTooltipTriggerDirective],
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
  hostDirectives: [RdxTooltipContentDirective],
})
export class UiTooltipContentDirective {}
