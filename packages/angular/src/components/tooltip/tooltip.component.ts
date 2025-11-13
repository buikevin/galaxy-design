import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxTooltip,
  RdxTooltipTrigger,
  RdxTooltipContent,
} from '@radix-ng/primitives/tooltip2';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-tooltip',
  standalone: true,
  imports: [CommonModule, RdxTooltip],
  template: `
    <span rdxTooltip>
      <ng-content></ng-content>
    </span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipComponent {}

@Component({
  selector: 'ui-tooltip-trigger',
  standalone: true,
  imports: [CommonModule, RdxTooltipTrigger],
  template: `
    <button rdxTooltipTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipTriggerComponent {
  @Input() class?: string;

  get triggerClasses(): string {
    return cn('', this.class);
  }
}

@Component({
  selector: 'ui-tooltip-content',
  standalone: true,
  imports: [CommonModule, RdxTooltipContent],
  template: `
    <div rdxTooltipContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.class
    );
  }
}
