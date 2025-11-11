import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxToggleGroupDirective,
  RdxToggleGroupItemDirective,
} from '@radix-ng/primitives/toggle-group';
import { cn } from '@/lib/utils';

type ToggleGroupType = 'single' | 'multiple';
type ToggleGroupVariant = 'default' | 'outline';
type ToggleGroupSize = 'default' | 'sm' | 'lg';

@Component({
  selector: 'ui-toggle-group',
  standalone: true,
  imports: [CommonModule, RdxToggleGroupDirective],
  template: `
    <div
      rdxToggleGroup
      [type]="type"
      [value]="value"
      (valueChange)="onValueChange($event)"
      [class]="groupClasses"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleGroupComponent {
  @Input() type: ToggleGroupType = 'single';
  @Input() value?: string | string[];
  @Input() variant: ToggleGroupVariant = 'default';
  @Input() size: ToggleGroupSize = 'default';
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string | string[]>();

  get groupClasses(): string {
    return cn('flex items-center justify-center gap-1', this.class);
  }

  onValueChange(value: string | string[]): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

@Component({
  selector: 'ui-toggle-group-item',
  standalone: true,
  imports: [CommonModule, RdxToggleGroupItemDirective],
  template: `
    <button
      rdxToggleGroupItem
      [value]="value"
      [disabled]="disabled"
      [class]="itemClasses"
    >
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleGroupItemComponent {
  @Input() value!: string;
  @Input() disabled: boolean = false;
  @Input() variant: ToggleGroupVariant = 'default';
  @Input() size: ToggleGroupSize = 'default';
  @Input() class?: string;

  get itemClasses(): string {
    const baseClasses =
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground';

    const variantClasses = {
      default: 'bg-transparent',
      outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
    };

    const sizeClasses = {
      default: 'h-10 px-3',
      sm: 'h-9 px-2.5',
      lg: 'h-11 px-5',
    };

    return cn(
      baseClasses,
      variantClasses[this.variant],
      sizeClasses[this.size],
      this.class
    );
  }
}
