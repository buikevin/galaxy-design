import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxTooltip,
  RdxTooltipTrigger,
  RdxTooltipContent,
  RdxTooltipContentWrapper,
  RdxTooltipPortal,
  RdxTooltipPortalPresence,
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
  imports: [
    CommonModule,
    RdxTooltipContent,
    RdxTooltipContentWrapper,
    RdxTooltipPortal,
    RdxTooltipPortalPresence
  ],
  template: `
    <ng-template rdxTooltipPortalPresence>
      <div rdxTooltipPortal>
        <div rdxTooltipContentWrapper [side]="side" [class]="wrapperClasses">
          <div rdxTooltipContent>
            <ng-content></ng-content>
          </div>
        </div>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TooltipContentComponent {
  @Input() class?: string;
  @Input() side: 'top' | 'right' | 'bottom' | 'left' = 'top';

  get wrapperClasses(): string {
    return cn(
      'z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md',
      this.class
    );
  }
}
