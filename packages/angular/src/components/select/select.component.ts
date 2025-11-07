import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxSelectComponent,
  RdxSelectTriggerDirective,
  RdxSelectValueDirective,
  RdxSelectIconDirective,
  RdxSelectContentDirective,
  RdxSelectItemDirective,
  RdxSelectItemIndicatorDirective,
} from '@radix-ng/primitives/select';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [
    CommonModule,
    RdxSelectComponent,
    RdxSelectTriggerDirective,
    RdxSelectValueDirective,
    RdxSelectIconDirective,
    RdxSelectContentDirective,
  ],
  template: `
    <div
      rdxSelect
      [value]="value || ''"
      (onValueChange)="onValueChange($event)"
      [disabled]="disabled"
      [class]="selectClasses"
    >
      <button
        rdxSelectTrigger
        type="button"
        [class]="triggerClasses"
      >
        <span rdxSelectValue [placeholder]="placeholder"></span>
        <span rdxSelectIcon>
          <svg class="h-4 w-4 opacity-50" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </span>
      </button>

      <div rdxSelectContent [class]="contentClasses">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent {
  @Input() value?: string;
  @Input() placeholder: string = 'Select...';
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string>();

  get selectClasses(): string {
    return cn('relative', this.class);
  }

  get triggerClasses(): string {
    return cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:border-ring'
    );
  }

  get contentClasses(): string {
    return cn(
      'relative z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'
    );
  }

  onValueChange(value: string): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

@Component({
  selector: 'ui-select-item',
  standalone: true,
  imports: [CommonModule, RdxSelectItemDirective, RdxSelectItemIndicatorDirective],
  template: `
    <div
      rdxSelectItem
      [value]="value"
      [class]="itemClasses"
    >
      <span rdxSelectItemIndicator class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span class="pl-8">
        <ng-content></ng-content>
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectItemComponent {
  @Input() value!: string;
  @Input() class?: string;

  get itemClasses(): string {
    return cn(
      'relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.class
    );
  }
}
