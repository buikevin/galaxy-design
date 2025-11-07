import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxDropdownMenuRootDirective,
  RdxDropdownMenuTriggerDirective,
  RdxDropdownMenuContentDirective,
  RdxDropdownMenuItemDirective,
  RdxDropdownMenuSeparatorDirective,
} from '@radix-ng/primitives/dropdown-menu';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-dropdown-menu',
  standalone: true,
  imports: [CommonModule, RdxDropdownMenuRootDirective],
  template: `
    <div rdxDropdownMenuRoot [open]="open" (openChange)="onOpenChange($event)">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  onOpenChange(open: boolean): void {
    this.open = open;
    this.openChange.emit(open);
  }
}

@Component({
  selector: 'ui-dropdown-menu-trigger',
  standalone: true,
  imports: [CommonModule, RdxDropdownMenuTriggerDirective],
  template: `
    <button rdxDropdownMenuTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuTriggerComponent {
  @Input() class?: string;
  get triggerClasses(): string { return cn('', this.class); }
}

@Component({
  selector: 'ui-dropdown-menu-content',
  standalone: true,
  imports: [CommonModule, RdxDropdownMenuContentDirective],
  template: `
    <div rdxDropdownMenuContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
      this.class
    );
  }
}

@Component({
  selector: 'ui-dropdown-menu-item',
  standalone: true,
  imports: [CommonModule, RdxDropdownMenuItemDirective],
  template: `
    <div rdxDropdownMenuItem [class]="itemClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuItemComponent {
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

@Component({
  selector: 'ui-dropdown-menu-separator',
  standalone: true,
  imports: [CommonModule, RdxDropdownMenuSeparatorDirective],
  template: `<div rdxDropdownMenuSeparator class="-mx-1 my-1 h-px bg-muted"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuSeparatorComponent {}
