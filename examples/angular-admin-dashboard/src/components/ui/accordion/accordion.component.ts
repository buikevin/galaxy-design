import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxAccordionRootDirective,
  RdxAccordionItemDirective,
  RdxAccordionTriggerDirective,
  RdxAccordionContentDirective,
} from '@radix-ng/primitives/accordion';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-accordion',
  standalone: true,
  imports: [CommonModule, RdxAccordionRootDirective],
  template: `
    <div
      rdxAccordionRoot
      [type]="type"
      [(value)]="value"
      [class]="accordionClasses"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionComponent {
  @Input() type: 'single' | 'multiple' = 'single';
  @Input() value?: string | string[] | null;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string | string[] | null | undefined>();

  get accordionClasses(): string {
    return cn('', this.class);
  }
}

@Component({
  selector: 'ui-accordion-item',
  standalone: true,
  imports: [CommonModule, RdxAccordionItemDirective],
  template: `
    <div rdxAccordionItem [value]="value" [class]="itemClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionItemComponent {
  @Input() value!: string;
  @Input() class?: string;

  get itemClasses(): string {
    return cn('border-b', this.class);
  }
}

@Component({
  selector: 'ui-accordion-trigger',
  standalone: true,
  imports: [CommonModule, RdxAccordionTriggerDirective],
  template: `
    <h3 class="flex">
      <button rdxAccordionTrigger [class]="triggerClasses">
        <ng-content></ng-content>
        <svg
          class="h-4 w-4 shrink-0 transition-transform duration-200"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
    </h3>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionTriggerComponent {
  @Input() class?: string;

  get triggerClasses(): string {
    return cn(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180',
      this.class
    );
  }
}

@Component({
  selector: 'ui-accordion-content',
  standalone: true,
  imports: [CommonModule, RdxAccordionContentDirective],
  template: `
    <div rdxAccordionContent [class]="contentClasses">
      <div class="pb-4 pt-0">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down',
      this.class
    );
  }
}
