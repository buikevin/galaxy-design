import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdxToggleDirective } from '@radix-ng/primitives/toggle';
import { cn } from '@/lib/utils';

type ToggleVariant = 'default' | 'outline';
type ToggleSize = 'default' | 'sm' | 'lg';

@Component({
  selector: 'ui-toggle',
  standalone: true,
  imports: [CommonModule, RdxToggleDirective],
  template: `
    <button
      rdxToggle
      [pressed]="pressed"
      (pressedChange)="onPressedChange($event)"
      [disabled]="disabled"
      [class]="toggleClasses"
    >
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ToggleComponent {
  @Input() pressed: boolean = false;
  @Input() disabled: boolean = false;
  @Input() variant: ToggleVariant = 'default';
  @Input() size: ToggleSize = 'default';
  @Input() class?: string;
  @Output() pressedChange = new EventEmitter<boolean>();

  get toggleClasses(): string {
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

  onPressedChange(pressed: boolean): void {
    this.pressed = pressed;
    this.pressedChange.emit(pressed);
  }
}
