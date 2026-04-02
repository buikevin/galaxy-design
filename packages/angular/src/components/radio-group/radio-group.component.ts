/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Radio group with single selection support
 */

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  ContentChildren,
  QueryList,
  AfterContentInit,
  ChangeDetectorRef,
  forwardRef,
  OnDestroy,
  inject
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="groupClasses" role="radiogroup">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements AfterContentInit, OnDestroy {
  @Input() value: string | null = null;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() name?: string;
  @Input() orientation: 'horizontal' | 'vertical' = 'vertical';
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string | null>();

  @ContentChildren(forwardRef(() => RadioGroupItemComponent), { descendants: true }) items!: QueryList<RadioGroupItemComponent>;

  private subscriptions: Subscription[] = [];

  private cdr = inject(ChangeDetectorRef);

  ngAfterContentInit(): void {
    this.setupSubscriptions();
    this.updateSelection();

    // Listen for changes in items
    const itemsChangeSub = this.items.changes.subscribe(() => {
      this.setupSubscriptions();
      this.updateSelection();
    });
    this.subscriptions.push(itemsChangeSub);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private setupSubscriptions(): void {
    // Unsubscribe from previous item subscriptions (keep itemsChangeSub)
    this.subscriptions = this.subscriptions.slice(0, 1);

    this.items.forEach(item => {
      const sub = item.itemClick.subscribe((value: string) => {
        this.selectItem(value);
      });
      this.subscriptions.push(sub);
    });
  }

  selectItem(value: string): void {
    if (this.disabled) return;
    this.value = value;
    this.updateSelection();
    this.valueChange.emit(value);
    this.cdr.markForCheck();
  }

  updateSelection(): void {
    if (this.items) {
      this.items.forEach(item => {
        item.isSelected = item.value === this.value;
        if (this.disabled) {
          item.disabled = true;
        }
        item.cdr.markForCheck();
      });
    }
  }

  get groupClasses(): string {
    return cn(
      this.orientation === 'horizontal' ? 'flex gap-2' : 'grid gap-2',
      this.class
    );
  }
}

@Component({
  selector: 'ui-radio-group-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button
      type="button"
      [class]="itemClasses"
      [disabled]="disabled"
      role="radio"
      [attr.aria-checked]="isSelected ? 'true' : 'false'"
      [attr.data-state]="isSelected ? 'checked' : 'unchecked'"
      [attr.data-disabled]="disabled ? '' : null"
      [attr.name]="name || null"
      [attr.required]="required ? '' : null"
      [attr.id]="id || null"
      (click)="onClick()"
    >
      <span class="flex items-center justify-center h-4 w-4">
        @if (isSelected) {
          <svg class="h-2.5 w-2.5 fill-current" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="10" />
          </svg>
        }
      </span>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupItemComponent {
  @Input() value!: string;
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() name?: string;
  @Input() id?: string;
  @Input() class?: string;
  @Output() itemClick = new EventEmitter<string>();

  isSelected = false;

  private cdr = inject(ChangeDetectorRef);

  onClick(): void {
    if (!this.disabled) {
      this.itemClick.emit(this.value);
    }
  }

  get itemClasses(): string {
    return cn(
      'h-4 w-4 inline-flex items-center justify-center rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 cursor-pointer p-0.5',
      this.isSelected && 'bg-primary text-primary-foreground',
      this.class
    );
  }
}
