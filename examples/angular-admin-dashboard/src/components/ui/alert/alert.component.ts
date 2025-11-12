import { Component, Input, HostBinding, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { type AlertVariants, alertVariants } from './variants';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-alert',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  @Input() variant: AlertVariants['variant'] = 'default';
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(alertVariants({ variant: this.variant }), this.class);
  }
}

@Component({
  selector: 'ui-alert-title',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertTitleComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('mb-1 font-medium leading-none tracking-tight', this.class);
  }
}

@Component({
  selector: 'ui-alert-description',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDescriptionComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('text-sm [&_p]:leading-relaxed', this.class);
  }
}
