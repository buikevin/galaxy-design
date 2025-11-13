import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, TemplateRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxAlertDialogRootDirective,
  RdxAlertDialogTriggerDirective,
  RdxAlertDialogContentDirective,
  RdxAlertDialogTitleDirective,
  RdxAlertDialogCancelDirective,
} from '@radix-ng/primitives/alert-dialog';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-alert-dialog',
  standalone: true,
  imports: [CommonModule, RdxAlertDialogRootDirective],
  template: `
    <ng-template #dialogContent>
      <ng-content></ng-content>
    </ng-template>
    <div rdxAlertDialogRoot [content]="dialogContent"></div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();
  @ViewChild('dialogContent', { static: true }) dialogContent!: TemplateRef<any>;
}

@Component({
  selector: 'ui-alert-dialog-trigger',
  standalone: true,
  imports: [CommonModule, RdxAlertDialogTriggerDirective],
  template: `<button rdxAlertDialogTrigger [class]="triggerClasses"><ng-content></ng-content></button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogTriggerComponent {
  @Input() class?: string;
  get triggerClasses(): string { return cn('', this.class); }
}

@Component({
  selector: 'ui-alert-dialog-content',
  standalone: true,
  imports: [CommonModule, RdxAlertDialogContentDirective],
  template: `
    <div rdxAlertDialogContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogContentComponent {
  @Input() class?: string;
  get contentClasses(): string {
    return cn('fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg', this.class);
  }
}

@Component({
  selector: 'ui-alert-dialog-title',
  standalone: true,
  imports: [CommonModule, RdxAlertDialogTitleDirective],
  template: `<h2 rdxAlertDialogTitle [class]="titleClasses"><ng-content></ng-content></h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogTitleComponent {
  @Input() class?: string;
  get titleClasses(): string { return cn('text-lg font-semibold', this.class); }
}

@Component({
  selector: 'ui-alert-dialog-description',
  standalone: true,
  imports: [CommonModule],
  template: `<p [class]="descClasses"><ng-content></ng-content></p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogDescriptionComponent {
  @Input() class?: string;
  get descClasses(): string { return cn('text-sm text-muted-foreground', this.class); }
}

@Component({
  selector: 'ui-alert-dialog-action',
  standalone: true,
  imports: [CommonModule, RdxAlertDialogCancelDirective],
  template: `<button rdxAlertDialogCancel [class]="actionClasses"><ng-content></ng-content></button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogActionComponent {
  @Input() class?: string;
  get actionClasses(): string { return cn('', this.class); }
}

@Component({
  selector: 'ui-alert-dialog-cancel',
  standalone: true,
  imports: [CommonModule, RdxAlertDialogCancelDirective],
  template: `<button rdxAlertDialogCancel [class]="cancelClasses"><ng-content></ng-content></button>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogCancelComponent {
  @Input() class?: string;
  get cancelClasses(): string { return cn('', this.class); }
}

@Component({
  selector: 'ui-alert-dialog-header',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="headerClasses"><ng-content></ng-content></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogHeaderComponent {
  @Input() class?: string;
  get headerClasses(): string { return cn('flex flex-col space-y-2 text-center sm:text-left', this.class); }
}

@Component({
  selector: 'ui-alert-dialog-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="footerClasses"><ng-content></ng-content></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertDialogFooterComponent {
  @Input() class?: string;
  get footerClasses(): string { return cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', this.class); }
}
