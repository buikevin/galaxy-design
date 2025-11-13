import { Directive, Input, Output, EventEmitter } from '@angular/core';
import {
  RdxAccordionRootDirective,
  RdxAccordionItemDirective,
  RdxAccordionTriggerDirective,
  RdxAccordionContentDirective,
} from '@radix-ng/primitives/accordion';

/**
 * Accordion Root Directive
 * Apply to a container element to create an accordion
 * @example
 * <div uiAccordionRoot type="single">...</div>
 */
@Directive({
  selector: '[uiAccordionRoot]',
  standalone: true,
  hostDirectives: [
    {
      directive: RdxAccordionRootDirective,
      inputs: ['type', 'value'],
      outputs: ['valueChange'],
    },
  ],
})
export class UiAccordionRootDirective {
  @Input() type: 'single' | 'multiple' = 'single';
  @Input() value?: string | string[] | null;
  @Output() valueChange = new EventEmitter<string | string[] | null | undefined>();
}

/**
 * Accordion Item Directive
 * Apply to each accordion item
 * @example
 * <div uiAccordionItem value="item-1">...</div>
 */
@Directive({
  selector: '[uiAccordionItem]',
  standalone: true,
  hostDirectives: [
    {
      directive: RdxAccordionItemDirective,
      inputs: ['value'],
    },
  ],
})
export class UiAccordionItemDirective {
  @Input({ required: true }) value!: string;
}

/**
 * Accordion Trigger Directive
 * Apply to trigger buttons
 * @example
 * <button uiAccordionTrigger>Click to expand</button>
 */
@Directive({
  selector: '[uiAccordionTrigger]',
  standalone: true,
  hostDirectives: [RdxAccordionTriggerDirective],
})
export class UiAccordionTriggerDirective {}

/**
 * Accordion Content Directive
 * Apply to content containers
 * @example
 * <div uiAccordionContent>Content here</div>
 */
@Directive({
  selector: '[uiAccordionContent]',
  standalone: true,
  hostDirectives: [RdxAccordionContentDirective],
})
export class UiAccordionContentDirective {}
