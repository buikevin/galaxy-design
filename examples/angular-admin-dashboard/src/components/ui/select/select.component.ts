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
  HostListener,
  ElementRef,
  forwardRef
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="selectClasses">
      <button
        type="button"
        [class]="triggerClasses"
        [disabled]="disabled"
        (click)="toggleDropdown()"
      >
        <span [class]="displayValue ? '' : 'text-muted-foreground'">
          {{ displayValue || placeholder }}
        </span>
        <svg
          class="h-4 w-4 opacity-50 transition-transform"
          [class.rotate-180]="isOpen"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      @if (isOpen) {
        <div [class]="contentClasses">
          <ng-content></ng-content>
        </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectComponent implements AfterContentInit {
  @Input() value?: string;
  @Input() placeholder: string = 'Select...';
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string>();

  @ContentChildren(forwardRef(() => SelectItemComponent)) items!: QueryList<SelectItemComponent>;

  isOpen = false;
  displayValue = '';

  constructor(
    private cdr: ChangeDetectorRef,
    private elementRef: ElementRef
  ) {}

  ngAfterContentInit() {
    this.updateDisplayValue();

    // Subscribe to item clicks
    this.items.forEach(item => {
      item.itemClick.subscribe((value: string) => {
        this.selectItem(value);
      });
    });
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.isOpen = false;
      this.cdr.markForCheck();
    }
  }

  toggleDropdown() {
    if (!this.disabled) {
      this.isOpen = !this.isOpen;
      this.cdr.markForCheck();
    }
  }

  selectItem(value: string) {
    this.value = value;
    this.isOpen = false;
    this.updateDisplayValue();
    this.valueChange.emit(value);
    this.cdr.markForCheck();
  }

  updateDisplayValue() {
    if (this.items) {
      const selectedItem = this.items.find(item => item.value === this.value);
      this.displayValue = selectedItem ? selectedItem.getLabel() : '';
      this.cdr.markForCheck();
    }
  }

  get selectClasses(): string {
    return cn('relative', this.class);
  }

  get triggerClasses(): string {
    return cn(
      'flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
      this.isOpen && 'border-ring'
    );
  }

  get contentClasses(): string {
    return cn(
      'absolute z-50 mt-1 w-full min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95'
    );
  }
}

@Component({
  selector: 'ui-select-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      [class]="itemClasses"
      [class.bg-accent]="isSelected"
      [class.text-accent-foreground]="isSelected"
      (click)="onClick()"
    >
      <span
        *ngIf="isSelected"
        class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
      >
        <svg class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </span>
      <span [class]="isSelected ? 'pl-8' : 'pl-2'">
        <ng-content></ng-content>
      </span>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectItemComponent {
  @Input() value!: string;
  @Input() class?: string;
  @Output() itemClick = new EventEmitter<string>();

  isSelected = false;

  onClick() {
    this.itemClick.emit(this.value);
  }

  getLabel(): string {
    return this.elementRef.nativeElement.textContent?.trim() || '';
  }

  get itemClasses(): string {
    return cn(
      'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground',
      this.class
    );
  }

  constructor(private elementRef: ElementRef) {}
}
