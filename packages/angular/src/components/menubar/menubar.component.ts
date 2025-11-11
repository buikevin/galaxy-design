import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxMenubarTriggerDirective,
  RdxMenubarContentDirective,
  RdxMenubarItemDirective,
  RdxMenubarSeparatorDirective,
} from '@radix-ng/primitives/menubar';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-menubar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="menubarClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarComponent {
  @Input() class?: string;

  get menubarClasses(): string {
    return cn(
      'flex h-10 items-center space-x-1 rounded-md border bg-background p-1',
      this.class
    );
  }
}

@Component({
  selector: 'ui-menubar-trigger',
  standalone: true,
  imports: [CommonModule, RdxMenubarTriggerDirective],
  template: `
    <button rdxMenubarTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarTriggerComponent {
  @Input() class?: string;

  get triggerClasses(): string {
    return cn(
      'flex cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm font-medium outline-none focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground',
      this.class
    );
  }
}

@Component({
  selector: 'ui-menubar-content',
  standalone: true,
  imports: [CommonModule, RdxMenubarContentDirective],
  template: `
    <div rdxMenubarContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'z-50 min-w-[12rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.class
    );
  }
}

@Component({
  selector: 'ui-menubar-item',
  standalone: true,
  imports: [CommonModule, RdxMenubarItemDirective],
  template: `
    <div rdxMenubarItem [class]="itemClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarItemComponent {
  @Input() class?: string;
  @Input() inset: boolean = false;

  get itemClasses(): string {
    return cn(
      'relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      this.inset && 'pl-8',
      this.class
    );
  }
}

@Component({
  selector: 'ui-menubar-separator',
  standalone: true,
  imports: [CommonModule, RdxMenubarSeparatorDirective],
  template: `<div rdxMenubarSeparator class="-mx-1 my-1 h-px bg-muted"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenubarSeparatorComponent {}
