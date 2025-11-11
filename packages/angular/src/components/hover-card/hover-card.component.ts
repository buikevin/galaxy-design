import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxHoverCardRootDirective,
  RdxHoverCardTriggerDirective,
  RdxHoverCardContentDirective,
} from '@radix-ng/primitives/hover-card';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-hover-card',
  standalone: true,
  imports: [CommonModule, RdxHoverCardRootDirective],
  template: `
    <div rdxHoverCardRoot
         [open]="open"
         [openDelay]="openDelay"
         [closeDelay]="closeDelay"
         (openChange)="onOpenChange($any($event))">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverCardComponent {
  @Input() open = false;
  @Input() openDelay = 700;
  @Input() closeDelay = 300;
  @Output() openChange = new EventEmitter<boolean>();

  onOpenChange(open: any): void {
    const isOpen = typeof open === 'boolean' ? open : false;
    this.open = isOpen;
    this.openChange.emit(isOpen);
  }
}

@Component({
  selector: 'ui-hover-card-trigger',
  standalone: true,
  imports: [CommonModule, RdxHoverCardTriggerDirective],
  template: `
    <div rdxHoverCardTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverCardTriggerComponent {
  @Input() class?: string;
  get triggerClasses(): string { return cn('', this.class); }
}

@Component({
  selector: 'ui-hover-card-content',
  standalone: true,
  imports: [CommonModule, RdxHoverCardContentDirective],
  template: `
    <div rdxHoverCardContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HoverCardContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'z-50 w-64 rounded-md border bg-popover p-4 text-popover-foreground shadow-md outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.class
    );
  }
}
