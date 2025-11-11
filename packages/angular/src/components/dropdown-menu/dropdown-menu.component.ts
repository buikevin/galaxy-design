import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxDropdownMenuTriggerDirective,
  RdxDropdownMenuContentDirective,
  RdxDropdownMenuItemDirective,
  RdxDropdownMenuSeparatorDirective,
} from '@radix-ng/primitives/dropdown-menu';
import { cn } from '@/lib/utils';

/**
 * Dropdown Menu Wrapper Component
 * Simple container - actual dropdown logic is handled by Radix directives
 */
@Component({
  selector: 'ui-dropdown-menu',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuComponent {}

/**
 * Dropdown Menu Trigger Button
 * Use with [rdxDropdownMenuTrigger] pointing to a template reference
 *
 * Example:
 * <ui-dropdown-menu-trigger [rdxDropdownMenuTrigger]="menuContent">
 *   Click me
 * </ui-dropdown-menu-trigger>
 */
@Component({
  selector: 'ui-dropdown-menu-trigger',
  standalone: true,
  imports: [CommonModule, RdxDropdownMenuTriggerDirective],
  template: `
    <button [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownMenuTriggerComponent {
  @Input() class?: string;

  get triggerClasses(): string {
    return cn(
      'inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      this.class
    );
  }
}

/**
 * Dropdown Menu Content Container
 * Must be used inside an ng-template with rdxDropdownMenuContent directive
 *
 * Example:
 * <ng-template #menuContent>
 *   <ui-dropdown-menu-content rdxDropdownMenuContent>
 *     <ui-dropdown-menu-item>Item 1</ui-dropdown-menu-item>
 *   </ui-dropdown-menu-content>
 * </ng-template>
 */
@Component({
  selector: 'ui-dropdown-menu-content',
  standalone: true,
  imports: [CommonModule, RdxDropdownMenuContentDirective],
  template: `
    <div [class]="contentClasses">
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
