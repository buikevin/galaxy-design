import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-card',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(
      'rounded-lg border bg-card text-card-foreground shadow-sm',
      this.class
    );
  }
}

@Component({
  selector: 'ui-card-header',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardHeaderComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('flex flex-col space-y-1.5 p-6', this.class);
  }
}

@Component({
  selector: 'ui-card-title',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTitleComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('text-2xl font-semibold leading-none tracking-tight', this.class);
  }
}

@Component({
  selector: 'ui-card-description',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardDescriptionComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('text-sm text-muted-foreground', this.class);
  }
}

@Component({
  selector: 'ui-card-content',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardContentComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('p-6 pt-0', this.class);
  }
}

@Component({
  selector: 'ui-card-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('flex items-center p-6 pt-0', this.class);
  }
}
