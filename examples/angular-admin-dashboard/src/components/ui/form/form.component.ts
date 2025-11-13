import { Component, Input, HostBinding, ChangeDetectionStrategy, Directive } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Directive({
  selector: 'form[ui-form]',
  standalone: true,
})
export class FormDirective {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(this.class);
  }
}

@Component({
  selector: 'ui-form-item',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormItemComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('space-y-2', this.class);
  }
}

@Component({
  selector: 'label[ui-form-label]',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormLabelComponent {
  @Input() class?: string;
  @Input() error = false;

  @HostBinding('class')
  get hostClasses(): string {
    return cn(
      'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      this.error && 'text-destructive',
      this.class
    );
  }
}

@Component({
  selector: 'ui-form-description',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormDescriptionComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('text-sm text-muted-foreground', this.class);
  }
}

@Component({
  selector: 'ui-form-message',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content></ng-content>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormMessageComponent {
  @Input() class?: string;

  @HostBinding('class')
  get hostClasses(): string {
    return cn('text-sm font-medium text-destructive', this.class);
  }
}
