import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RdxSwitchInputDirective, RdxSwitchRootDirective, RdxSwitchThumbDirective } from '@radix-ng/primitives/switch';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-switch',
  standalone: true,
  imports: [CommonModule, RdxSwitchRootDirective, RdxSwitchInputDirective, RdxSwitchThumbDirective],
  template: `
    <button
      rdxSwitchRoot
      type="button"
      [class]="switchClasses"
      [id]="id || null"
      [required]="required"
      [defaultChecked]="defaultChecked"
      [checked]="checked"
      (checkedChange)="handleCheckedChange($event)"
      [disabled]="disabled"
      [aria-label]="ariaLabel || null"
      [aria-labelledby]="ariaLabelledBy || null"
    >
      <input rdxSwitchInput type="checkbox" class="sr-only" />
      <span rdxSwitchThumb [class]="thumbClasses"></span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  @Input() id?: string;
  @Input() required: boolean = false;
  @Input() ariaLabel?: string;
  @Input() ariaLabelledBy?: string;
  @Input() defaultChecked: boolean = false;
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() checkedChange = new EventEmitter<boolean>();
  @Output() onCheckedChange = new EventEmitter<boolean>();

  handleCheckedChange(checked: boolean): void {
    this.checked = checked;
    this.checkedChange.emit(checked);
    this.onCheckedChange.emit(checked);
  }

  get switchClasses(): string {
    return cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.checked ? 'bg-primary' : 'bg-input',
      this.class
    );
  }

  get thumbClasses(): string {
    return cn(
      'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform',
      this.checked ? 'translate-x-5' : 'translate-x-0'
    );
  }
}
