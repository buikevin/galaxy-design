import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxPopoverRootDirective,
  RdxPopoverTriggerDirective,
  RdxPopoverContentDirective,
} from '@radix-ng/primitives/popover';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-popover',
  standalone: true,
  imports: [CommonModule, RdxPopoverRootDirective],
  template: `
    <div rdxPopoverRoot [open]="open">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  onOpenChange(open: boolean): void {
    this.open = open;
    this.openChange.emit(open);
  }
}

@Component({
  selector: 'ui-popover-trigger',
  standalone: true,
  imports: [CommonModule, RdxPopoverTriggerDirective],
  template: `
    <button rdxPopoverTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverTriggerComponent {
  @Input() class?: string;
  get triggerClasses(): string { return cn('', this.class); }
}

@Component({
  selector: 'ui-popover-content',
  standalone: true,
  imports: [CommonModule, RdxPopoverContentDirective],
  template: `
    <div rdxPopoverContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PopoverContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'z-50 w-72 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.class
    );
  }
}
