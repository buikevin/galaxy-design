/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Sheet modal drawer sliding from 4 sides with dialog semantics
 */

import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { A11yModule } from '@angular/cdk/a11y';
import { Subject, takeUntil } from 'rxjs';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-sheet-trigger',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button type="button" [class]="triggerClasses" (click)="triggered.emit()">
      <ng-content />
    </button>
  `,
})
export class SheetTriggerComponent {
  @Input() class?: string;
  @Output() triggered = new EventEmitter<void>();

  get triggerClasses(): string {
    return cn('', this.class);
  }
}

@Component({
  selector: 'ui-sheet-close',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [class]="closeClasses"
      (click)="closeRequest.emit()"
      aria-label="Close"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        class="h-4 w-4"
      >
        <path d="M18 6 6 18" />
        <path d="m6 6 12 12" />
      </svg>
    </button>
  `,
})
export class SheetCloseComponent {
  @Input() class?: string;
  @Output() closeRequest = new EventEmitter<void>();

  get closeClasses(): string {
    return cn(
      'absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
      this.class
    );
  }
}

@Component({
  selector: 'ui-sheet',
  standalone: true,
  imports: [CommonModule, A11yModule],
  template: `
    <div
      *ngIf="open"
      class="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
      aria-hidden="true"
      (click)="close()"
    ></div>
    <div
      *ngIf="open"
      role="dialog"
      aria-modal="true"
      cdkTrapFocus
      [class]="sheetClass"
    >
      <ng-content />
      <ui-sheet-close
        class="absolute right-4 top-4"
        (closeRequest)="close()"
      ></ui-sheet-close>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetComponent implements AfterContentInit, OnChanges, OnDestroy {
  @Input() class?: string;
  @Input() open: boolean = false;
  @Input() side: 'top' | 'right' | 'bottom' | 'left' = 'right';
  @Output() openChange = new EventEmitter<boolean>();

  @ContentChild(SheetCloseComponent) sheetClose?: SheetCloseComponent;
  @ContentChild(SheetTriggerComponent) sheetTrigger?: SheetTriggerComponent;

  private readonly destroy$ = new Subject<void>();
  private previousOverflow: string | null = null;

  @HostListener('document:keydown.escape', ['$event'])
  onEscape(event: KeyboardEvent): void {
    if (!this.open) return;
    event.preventDefault();
    this.close();
  }

  ngAfterContentInit(): void {
    this.sheetClose?.closeRequest
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.close());
    this.sheetTrigger?.triggered
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => this.setOpen(true));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['open']) {
      this.updateScrollLock();
    }
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.restoreScrollLock();
  }

  get sheetClass(): string {
    const sideClasses = {
      top: 'inset-x-0 top-0 border-b',
      bottom: 'inset-x-0 bottom-0 border-t',
      left: 'inset-y-0 left-0 h-full w-3/4 border-r sm:max-w-sm',
      right: 'inset-y-0 right-0 h-full w-3/4 border-l sm:max-w-sm',
    };

    return cn(
      'fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out',
      sideClasses[this.side],
      this.class
    );
  }

  close(): void {
    this.setOpen(false);
  }

  setOpen(open: boolean): void {
    this.open = open;
    this.openChange.emit(open);
  }

  private updateScrollLock(): void {
    if (typeof document === 'undefined') return;
    if (this.open) {
      this.previousOverflow = document.body.style.overflow || null;
      document.body.style.overflow = 'hidden';
    } else {
      this.restoreScrollLock();
    }
  }

  private restoreScrollLock(): void {
    if (typeof document === 'undefined') return;
    document.body.style.overflow = this.previousOverflow ?? '';
    this.previousOverflow = null;
  }
}

@Component({
  selector: 'ui-sheet-header',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetHeaderComponent {
  @Input() class?: string;

  @HostBinding('class')
  get headerClasses(): string {
    return cn('flex flex-col space-y-2 text-center sm:text-left', this.class);
  }
}

@Component({
  selector: 'ui-sheet-footer',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetFooterComponent {
  @Input() class?: string;

  @HostBinding('class')
  get footerClasses(): string {
    return cn(
      'flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2',
      this.class
    );
  }
}

@Component({
  selector: 'ui-sheet-title',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetTitleComponent {
  @Input() class?: string;

  @HostBinding('class')
  get titleClasses(): string {
    return cn('text-lg font-semibold text-foreground', this.class);
  }
}

@Component({
  selector: 'ui-sheet-description',
  standalone: true,
  imports: [CommonModule],
  template: `<ng-content />`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SheetDescriptionComponent {
  @Input() class?: string;

  @HostBinding('class')
  get descriptionClasses(): string {
    return cn('text-sm text-muted-foreground', this.class);
  }
}
