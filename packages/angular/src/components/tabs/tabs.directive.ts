import { Directive, Input, Output, EventEmitter } from '@angular/core';
import {
  RdxTabsRootDirective,
  RdxTabsListDirective,
  RdxTabsTriggerDirective,
  RdxTabsContentDirective,
} from '@radix-ng/primitives/tabs';

/**
 * Tabs Root Directive
 * Apply to a container element to create tabs
 * @example
 * <div uiTabsRoot defaultValue="tab1">...</div>
 */
@Directive({
  selector: '[uiTabsRoot]',
  standalone: true,
  hostDirectives: [
    {
      directive: RdxTabsRootDirective,
      inputs: ['value', 'defaultValue'],
      outputs: ['valueChange'],
    },
  ],
})
export class UiTabsRootDirective {
  @Input() value?: string;
  @Input() defaultValue?: string;
  @Output() valueChange = new EventEmitter<string | undefined>();
}

/**
 * Tabs List Directive
 * Apply to the tabs list container
 * @example
 * <div uiTabsList>...</div>
 */
@Directive({
  selector: '[uiTabsList]',
  standalone: true,
  hostDirectives: [RdxTabsListDirective],
})
export class UiTabsListDirective {}

/**
 * Tabs Trigger Directive
 * Apply to tab trigger buttons
 * @example
 * <button uiTabsTrigger value="tab1">Tab 1</button>
 */
@Directive({
  selector: '[uiTabsTrigger]',
  standalone: true,
  hostDirectives: [
    {
      directive: RdxTabsTriggerDirective,
      inputs: ['value', 'disabled'],
    },
  ],
})
export class UiTabsTriggerDirective {
  @Input({ required: true }) value!: string;
  @Input() disabled: boolean = false;
}

/**
 * Tabs Content Directive
 * Apply to tab content containers
 * @example
 * <div uiTabsContent value="tab1">Content for tab 1</div>
 */
@Directive({
  selector: '[uiTabsContent]',
  standalone: true,
  hostDirectives: [
    {
      directive: RdxTabsContentDirective,
      inputs: ['value'],
    },
  ],
})
export class UiTabsContentDirective {
  @Input({ required: true }) value!: string;
}
