import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxSwitchRootDirective,
  RdxSwitchThumbDirective
} from '@radix-ng/primitives/switch';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-switch',
  standalone: true,
  imports: [CommonModule, RdxSwitchRootDirective, RdxSwitchThumbDirective],
  template: `
    <button
      rdxSwitchRoot
      [checked]="checked"
      [disabled]="disabled"
      [class]="switchClasses"
      (checkedChange)="onCheckedChange($event)"
    >
      <span rdxSwitchThumb [class]="thumbClasses"></span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() checkedChange = new EventEmitter<boolean>();

  get switchClasses(): string {
    return cn(
      'peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input',
      this.class
    );
  }

  get thumbClasses(): string {
    return cn(
      'pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0'
    );
  }

  onCheckedChange(checked: boolean): void {
    this.checked = checked;
    this.checkedChange.emit(checked);
  }
}
