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
  OnDestroy
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-radio-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="grid gap-2">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RadioGroupComponent implements AfterContentInit, OnDestroy {
  @Input() value: string | null = null;
  @Output() valueChange = new EventEmitter<string | null>();

  @ContentChildren(forwardRef(() => RadioGroupItemComponent), { descendants: true }) items!: QueryList<RadioGroupItemComponent>;

  private subscriptions: Subscription[] = [];

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterContentInit() {
    this.setupSubscriptions();
    this.updateSelection();

    // Listen for changes in items
    const itemsChangeSub = this.items.changes.subscribe(() => {
      this.setupSubscriptions();
      this.updateSelection();
    });
    this.subscriptions.push(itemsChangeSub);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private setupSubscriptions() {
    // Unsubscribe from previous item subscriptions (keep itemsChangeSub)
    this.subscriptions = this.subscriptions.slice(0, 1);

    this.items.forEach(item => {
      const sub = item.itemClick.subscribe((value: string) => {
        this.selectItem(value);
      });
      this.subscriptions.push(sub);
    });
  }

  selectItem(value: string) {
    this.value = value;
    this.updateSelection();
    this.valueChange.emit(value);
    this.cdr.markForCheck();
  }

  updateSelection() {
    if (this.items) {
      this.items.forEach(item => {
        item.isSelected = item.value === this.value;
        item.cdr.markForCheck();
      });
    }
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
  @Input() class?: string;
  @Output() itemClick = new EventEmitter<string>();

  isSelected = false;

  constructor(public cdr: ChangeDetectorRef) {}

  onClick() {
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
