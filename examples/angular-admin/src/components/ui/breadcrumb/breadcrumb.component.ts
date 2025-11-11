import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'nav[ui-breadcrumb]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbComponent {
  @HostBinding('attr.aria-label') ariaLabel = 'breadcrumb';
}

@Component({
  selector: 'ol[ui-breadcrumb-list]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbListComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(
      'flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5',
      this.class
    );
  }
}

@Component({
  selector: 'li[ui-breadcrumb-item]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbItemComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('inline-flex items-center gap-1.5', this.class);
  }
}

@Component({
  selector: 'a[ui-breadcrumb-link]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbLinkComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('transition-colors hover:text-foreground', this.class);
  }
}

@Component({
  selector: 'span[ui-breadcrumb-page]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbPageComponent {
  @Input() class?: string;

  @HostBinding('attr.role') role = 'link';
  @HostBinding('attr.aria-disabled') ariaDisabled = 'true';
  @HostBinding('attr.aria-current') ariaCurrent = 'page';

  @HostBinding('class')
  get hostClasses(): string {
    return cn('font-normal text-foreground', this.class);
  }
}

@Component({
  selector: 'li[ui-breadcrumb-separator]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-content></ng-content>
    <svg
      *ngIf="!hasContent"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="m9 18 6-6-6-6" />
    </svg>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbSeparatorComponent {
  @Input() class?: string;
  @Input() hasContent = false;

  @HostBinding('attr.role') role = 'presentation';
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';

  @HostBinding('class')
  get hostClasses(): string {
    return cn('[&>svg]:size-3.5', this.class);
  }
}

@Component({
  selector: 'span[ui-breadcrumb-ellipsis]',
  standalone: true,
  imports: [CommonModule],
  template: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      class="h-4 w-4"
    >
      <circle cx="12" cy="12" r="1" />
      <circle cx="19" cy="12" r="1" />
      <circle cx="5" cy="12" r="1" />
    </svg>
    <span class="sr-only">More</span>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BreadcrumbEllipsisComponent {
  @Input() class?: string;

  @HostBinding('attr.role') role = 'presentation';
  @HostBinding('attr.aria-hidden') ariaHidden = 'true';

  @HostBinding('class')
  get hostClasses(): string {
    return cn('flex h-9 w-9 items-center justify-center', this.class);
  }
}
