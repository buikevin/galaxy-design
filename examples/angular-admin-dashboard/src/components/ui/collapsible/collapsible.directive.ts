import { Directive, Input } from '@angular/core';
import {
  RdxCollapsibleRootDirective,
  RdxCollapsibleTriggerDirective,
  RdxCollapsibleContentDirective,
} from '@radix-ng/primitives/collapsible';

/**
 * Collapsible Root Directive
 * Apply to a container to make it collapsible
 * @example
 * <div uiCollapsibleRoot [open]="isOpen">
 *   <button uiCollapsibleTrigger>Toggle</button>
 *   <div uiCollapsibleContent>Content</div>
 * </div>
 */
@Directive({
  selector: '[uiCollapsibleRoot]',
  standalone: true,
  hostDirectives: [
    {
      directive: RdxCollapsibleRootDirective,
      inputs: ['open', 'disabled'],
      outputs: ['openChange'],
    },
  ],
})
export class UiCollapsibleRootDirective {}

/**
 * Collapsible Trigger Directive
 * Apply to a button to trigger the collapsible
 * @example
 * <button uiCollapsibleTrigger>Toggle</button>
 */
@Directive({
  selector: '[uiCollapsibleTrigger]',
  standalone: true,
  hostDirectives: [RdxCollapsibleTriggerDirective],
})
export class UiCollapsibleTriggerDirective {}

/**
 * Collapsible Content Directive
 * Apply to the collapsible content container
 * @example
 * <div uiCollapsibleContent>Content here</div>
 */
@Directive({
  selector: '[uiCollapsibleContent]',
  standalone: true,
  hostDirectives: [RdxCollapsibleContentDirective],
})
export class UiCollapsibleContentDirective {}
