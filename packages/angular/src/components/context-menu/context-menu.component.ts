import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxContextMenuTriggerDirective,
  RdxContextMenuContentDirective,
  RdxContextMenuItemDirective,
} from '@radix-ng/primitives/context-menu';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-context-menu',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuComponent {}

@Component({
  selector: 'ui-context-menu-trigger',
  standalone: true,
  imports: [CommonModule, RdxContextMenuTriggerDirective],
  template: `
    <div rdxContextMenuTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuTriggerComponent {
  @Input() class?: string;

  get triggerClasses(): string {
    return cn('', this.class);
  }
}

@Component({
  selector: 'ui-context-menu-content',
  standalone: true,
  imports: [CommonModule, RdxContextMenuContentDirective],
  template: `
    <div rdxContextMenuContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md animate-in fade-in-80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
      this.class
    );
  }
}

@Component({
  selector: 'ui-context-menu-item',
  standalone: true,
  imports: [CommonModule, RdxContextMenuItemDirective],
  template: `
    <div rdxContextMenuItem [class]="itemClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContextMenuItemComponent {
  @Input() class?: string;
  @Input() inset: boolean = false;

  get itemClasses(): string {
    return cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.inset && 'pl-8',
      this.class
    );
  }
}
