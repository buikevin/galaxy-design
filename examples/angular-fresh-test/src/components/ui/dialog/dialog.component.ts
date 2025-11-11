import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxDialogContentDirective,
  RdxDialogTitleDirective,
  RdxDialogDescriptionDirective,
  RdxDialogCloseDirective,
} from '@radix-ng/primitives/dialog';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div>
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogComponent {
  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  onOpenChange(open: boolean): void {
    this.open = open;
    this.openChange.emit(open);
  }
}

@Component({
  selector: 'ui-dialog-trigger',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogTriggerComponent {
  @Input() class?: string;
  get triggerClasses(): string { return cn('', this.class); }
}

@Component({
  selector: 'ui-dialog-content',
  standalone: true,
  imports: [CommonModule, RdxDialogContentDirective],
  template: `
    <div class="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"></div>
    <div rdxDialogContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogContentComponent {
  @Input() class?: string;
  get contentClasses(): string {
    return cn(
      'fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg',
      this.class
    );
  }
}

@Component({
  selector: 'ui-dialog-title',
  standalone: true,
  imports: [CommonModule, RdxDialogTitleDirective],
  template: `<h2 rdxDialogTitle [class]="titleClasses"><ng-content></ng-content></h2>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogTitleComponent {
  @Input() class?: string;
  get titleClasses(): string { return cn('text-lg font-semibold leading-none tracking-tight', this.class); }
}

@Component({
  selector: 'ui-dialog-description',
  standalone: true,
  imports: [CommonModule, RdxDialogDescriptionDirective],
  template: `<p rdxDialogDescription [class]="descClasses"><ng-content></ng-content></p>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogDescriptionComponent {
  @Input() class?: string;
  get descClasses(): string { return cn('text-sm text-muted-foreground', this.class); }
}

@Component({
  selector: 'ui-dialog-header',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="headerClasses"><ng-content></ng-content></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogHeaderComponent {
  @Input() class?: string;
  get headerClasses(): string { return cn('flex flex-col space-y-1.5 text-center sm:text-left', this.class); }
}

@Component({
  selector: 'ui-dialog-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<div [class]="footerClasses"><ng-content></ng-content></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogFooterComponent {
  @Input() class?: string;
  get footerClasses(): string { return cn('flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2', this.class); }
}
