import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxRadioGroupDirective,
  RdxRadioItemDirective,
  RdxRadioIndicatorDirective,
} from '@radix-ng/primitives/radio';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  imports: [CommonModule, RdxRadioGroupDirective],
  template: `
    <div
      rdxRadioRoot
      [value]="value"
      (valueChange)="onValueChange($event)"
      class="grid gap-2"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent {
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null | undefined>();

  onValueChange(value: string | null | undefined) {
    this.value = value ?? null;
    this.valueChange.emit(value);
  }
}

@Component({
  selector: 'ui-radio-group-item',
  standalone: true,
  imports: [CommonModule, RdxRadioItemDirective, RdxRadioIndicatorDirective],
  template: `
    <button
      rdxRadioItem
      [value]="value"
      [disabled]="disabled"
      [class]="itemClasses"
    >
      <span rdxRadioIndicator class="flex items-center justify-center">
        <svg class="h-2.5 w-2.5 fill-current" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" />
        </svg>
      </span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupItemComponent {
  @Input() value!: string;
  @Input() disabled: boolean = false;
  @Input() class?: string;

  get itemClasses(): string {
    return cn(
      'aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground',
      this.class
    );
  }
}
