import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxNavigationMenuDirective,
  RdxNavigationMenuListDirective,
  RdxNavigationMenuItemDirective,
  RdxNavigationMenuTriggerDirective,
  RdxNavigationMenuContentDirective,
  RdxNavigationMenuLinkDirective,
  RdxNavigationMenuIndicatorDirective,
  RdxNavigationMenuViewportDirective,
} from '@radix-ng/primitives/navigation-menu';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-navigation-menu',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuDirective],
  template: `
    <nav rdxNavigationMenuRoot [class]="rootClasses">
      <ng-content></ng-content>
    </nav>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuComponent {
  @Input() class?: string;

  get rootClasses(): string {
    return cn('relative z-10 flex max-w-max flex-1 items-center justify-center', this.class);
  }
}

@Component({
  selector: 'ui-navigation-menu-list',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuListDirective],
  template: `
    <div rdxNavigationMenuList [class]="listClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuListComponent {
  @Input() class?: string;

  get listClasses(): string {
    return cn('group flex flex-1 list-none items-center justify-center space-x-1', this.class);
  }
}

@Component({
  selector: 'ui-navigation-menu-item',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuItemDirective],
  template: `
    <div rdxNavigationMenuItem>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuItemComponent {}

@Component({
  selector: 'ui-navigation-menu-trigger',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuTriggerDirective],
  template: `
    <button rdxNavigationMenuTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuTriggerComponent {
  @Input() class?: string;

  get triggerClasses(): string {
    return cn(
      'group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50',
      this.class
    );
  }
}

@Component({
  selector: 'ui-navigation-menu-content',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuContentDirective],
  template: `
    <div rdxNavigationMenuContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'left-0 top-0 w-full data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52 md:absolute md:w-auto',
      this.class
    );
  }
}

@Component({
  selector: 'ui-navigation-menu-link',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuLinkDirective],
  template: `
    <a rdxNavigationMenuLink [class]="linkClasses">
      <ng-content></ng-content>
    </a>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuLinkComponent {
  @Input() class?: string;

  get linkClasses(): string {
    return cn(
      'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
      this.class
    );
  }
}

@Component({
  selector: 'ui-navigation-menu-viewport',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuViewportDirective],
  template: `
    <div class="absolute left-0 top-full flex justify-center">
      <div rdxNavigationMenuViewport [class]="viewportClasses"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuViewportComponent {
  @Input() class?: string;

  get viewportClasses(): string {
    return cn(
      'origin-top-center relative mt-1.5 h-[var(--radix-navigation-menu-viewport-height)] w-full overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-90 md:w-[var(--radix-navigation-menu-viewport-width)]',
      this.class
    );
  }
}

@Component({
  selector: 'ui-navigation-menu-indicator',
  standalone: true,
  imports: [CommonModule, RdxNavigationMenuIndicatorDirective],
  template: `
    <div rdxNavigationMenuIndicator [class]="indicatorClasses">
      <div class="relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md"></div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavigationMenuIndicatorComponent {
  @Input() class?: string;

  get indicatorClasses(): string {
    return cn(
      'top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden data-[state=visible]:animate-in data-[state=hidden]:animate-out data-[state=hidden]:fade-out data-[state=visible]:fade-in',
      this.class
    );
  }
}
