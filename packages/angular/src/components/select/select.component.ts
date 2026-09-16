/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Custom dropdown with search functionality
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
  HostBinding,
  HostListener,
  ElementRef,
  forwardRef,
  OnInit,
  DestroyRef,
  inject,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-select',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="selectClasses">
      <input
        type="hidden"
        [attr.name]="name || null"
        [attr.value]="value ?? ''"
        [attr.form]="form || null"
        [attr.required]="required ? '' : null"
      />
      <button
        type="button"
        [class]="triggerClasses"
        [disabled]="disabled"
        role="combobox"
        aria-haspopup="listbox"
        [attr.aria-controls]="listboxId"
        [attr.aria-activedescendant]="activeDescendantId"
        aria-autocomplete="list"
        [attr.aria-expanded]="isOpenState ? 'true' : 'false'"
        [attr.aria-disabled]="disabled ? 'true' : null"
        [attr.data-disabled]="disabled ? '' : null"
        (click)="toggleDropdown()"
        (keydown)="onTriggerKeydown($event)"
      >
        <span [class]="displayValue ? '' : 'text-muted-foreground'">
          {{ displayValue || placeholder }}
        </span>
        <svg
          class="h-4 w-4 opacity-50 transition-transform"
          [class.rotate-180]="isOpenState"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      @if (isOpenState) {
      <div [class]="contentClasses" role="listbox" [attr.id]="listboxId">
        <ng-content></ng-content>
      </div>
      }
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent
  implements AfterContentInit, OnInit, ControlValueAccessor
{
  @Input() value?: string;
  @Input() placeholder: string = 'Select...';
  @Input() disabled: boolean = false;
  @Input() required: boolean = false;
  @Input() name?: string;
  @Input() form?: string;
  @Input() open?: boolean;
  @Input() defaultOpen: boolean = false;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string>();
  @Output() openChange = new EventEmitter<boolean>();

  @ContentChildren(forwardRef(() => SelectItemComponent))
  items!: QueryList<SelectItemComponent>;

  isOpen = false;
  displayValue = '';
  activeIndex = -1;
  readonly listboxId = `ui-select-listbox-${SelectComponent.nextId++}`;
  private onChange: (value: string | null) => void = () => {};
  private onTouched: () => void = () => {};
  private typeaheadBuffer = '';
  private typeaheadTimer: ReturnType<typeof setTimeout> | null = null;
  private static nextId = 1;

  private cdr = inject(ChangeDetectorRef);
  private elementRef = inject(ElementRef);

  ngOnInit(): void {
    if (this.open === undefined) {
      this.isOpen = this.defaultOpen;
    }
  }

  ngAfterContentInit(): void {
    this.updateItems();

    // Subscribe to item clicks
    this.items.forEach((item) => {
      item.itemClick.subscribe((value: string) => {
        this.selectItem(value);
      });
    });

    this.items.changes
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => {
        this.updateItems();
      });
  }

  private updateItems(): void {
    this.updateDisplayValue();
    this.syncItemStates();
  }

  private syncItemStates(): void {
    this.items.forEach((item, index) => {
      item.setSelected(item.value === this.value);
      item.setActive(index === this.activeIndex);
    });
    this.cdr.markForCheck();
  }

  get activeDescendantId(): string | null {
    if (!this.isOpenState || this.activeIndex < 0) return null;
    return this.items.toArray()[this.activeIndex]?.itemId ?? null;
  }

  private readonly destroyRef = inject(DestroyRef);

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent): void {
    if (!this.elementRef.nativeElement.contains(event.target)) {
      this.setOpen(false);
      this.cdr.markForCheck();
    }
  }

  toggleDropdown(): void {
    if (!this.disabled) {
      this.setOpen(!this.isOpen);
      this.cdr.markForCheck();
    }
  }

  selectItem(value: string): void {
    this.value = value;
    this.setOpen(false);
    this.activeIndex = -1;
    this.updateDisplayValue();
    this.syncItemStates();
    this.valueChange.emit(value);
    this.onChange(value);
    this.cdr.markForCheck();
  }

  updateDisplayValue(): void {
    if (this.items) {
      const selectedItem = this.items.find((item) => item.value === this.value);
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
      this.isOpenState && 'border-ring'
    );
  }

  get contentClasses(): string {
    return cn(
      'absolute z-50 mt-1 w-full min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95'
    );
  }

  get isOpenState(): boolean {
    return this.open ?? this.isOpen;
  }

  private setOpen(next: boolean): void {
    if (this.open === undefined) {
      this.isOpen = next;
    }
    this.openChange.emit(next);
  }

  onTriggerKeydown(event: KeyboardEvent): void {
    if (this.disabled) return;
    if (!this.isOpenState) {
      if (
        event.key === 'ArrowDown' ||
        event.key === 'ArrowUp' ||
        event.key === 'Enter' ||
        event.key === ' '
      ) {
        event.preventDefault();
        this.setOpen(true);
        this.activeIndex = this.initialActiveIndex();
        this.syncItemStates();
      }
      return;
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      this.moveActive(event.key === 'ArrowDown' ? 1 : -1);
      return;
    }

    if (event.key === 'Home') {
      event.preventDefault();
      this.activeIndex = this.firstEnabledIndex(0, 1);
      this.syncItemStates();
      return;
    }

    if (event.key === 'End') {
      event.preventDefault();
      this.activeIndex = this.firstEnabledIndex(this.items.length - 1, -1);
      this.syncItemStates();
      return;
    }

    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      const active = this.items.toArray()[this.activeIndex];
      if (active && !active.disabled) {
        this.selectItem(active.value);
      }
      return;
    }

    if (event.key === 'Escape') {
      event.preventDefault();
      this.activeIndex = -1;
      this.syncItemStates();
      this.setOpen(false);
      this.onTouched();
      this.cdr.markForCheck();
      return;
    }

    if (
      event.key.length === 1 &&
      !event.ctrlKey &&
      !event.metaKey &&
      !event.altKey
    ) {
      this.handleTypeahead(event.key);
    }
  }

  private moveActive(direction: 1 | -1): void {
    const count = this.items.length;
    if (count === 0) return;
    let index = this.activeIndex;
    for (let step = 0; step < count; step += 1) {
      index = (index + direction + count) % count;
      if (!this.items.toArray()[index]?.disabled) {
        this.activeIndex = index;
        this.syncItemStates();
        return;
      }
    }
  }

  private firstEnabledIndex(start: number, direction: 1 | -1): number {
    const count = this.items.length;
    let index = start;
    for (let step = 0; step < count; step += 1) {
      const candidate = this.items.toArray()[index];
      if (candidate && !candidate.disabled) {
        return index;
      }
      index = (index + direction + count) % count;
    }
    return -1;
  }

  private initialActiveIndex(): number {
    const items = this.items.toArray();
    const selectedIndex = items.findIndex((item) => item.value === this.value);
    if (selectedIndex >= 0 && !items[selectedIndex].disabled) {
      return selectedIndex;
    }
    return this.firstEnabledIndex(0, 1);
  }

  private handleTypeahead(key: string): void {
    if (this.typeaheadTimer) {
      clearTimeout(this.typeaheadTimer);
    }
    this.typeaheadBuffer += key.toLowerCase();
    this.typeaheadTimer = setTimeout(() => {
      this.typeaheadBuffer = '';
    }, 500);

    const items = this.items.toArray();
    const normalized = this.typeaheadBuffer;
    const matchIndex = items.findIndex(
      (item, index) =>
        !item.disabled &&
        item.getLabel().toLowerCase().startsWith(normalized) &&
        (normalized.length > 1 || index > this.activeIndex)
    );

    if (matchIndex >= 0) {
      this.activeIndex = matchIndex;
      this.syncItemStates();
    }
  }

  writeValue(value: string | null): void {
    this.value = value ?? undefined;
    this.updateDisplayValue();
    this.syncItemStates();
    this.cdr.markForCheck();
  }

  registerOnChange(fn: (value: string | null) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.cdr.markForCheck();
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
      role="option"
      [attr.aria-selected]="isSelected ? 'true' : 'false'"
      [attr.data-disabled]="disabled ? '' : null"
      (click)="onClick()"
    >
      <span
        *ngIf="isSelected"
        class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"
      >
        <svg
          class="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
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
  @Input() disabled: boolean = false;
  @Output() itemClick = new EventEmitter<string>();

  isSelected = false;
  readonly itemId = `ui-select-item-${SelectItemComponent.nextId++}`;

  private static nextId = 1;

  private active = false;

  private cdr = inject(ChangeDetectorRef);

  onClick(): void {
    if (!this.disabled) {
      this.itemClick.emit(this.value);
    }
  }

  getLabel(): string {
    return this.elementRef.nativeElement.textContent?.trim() || '';
  }

  setSelected(selected: boolean): void {
    this.isSelected = selected;
    this.cdr.markForCheck();
  }

  setActive(active: boolean): void {
    this.active = active;
    this.cdr.markForCheck();
  }

  @HostBinding('attr.id')
  get hostItemId(): string {
    return this.itemId;
  }

  @HostBinding('attr.data-active')
  get dataActive(): string | null {
    return this.active ? 'true' : null;
  }

  get itemClasses(): string {
    return cn(
      'relative flex w-full cursor-pointer select-none items-center rounded-sm py-1.5 pr-2 text-sm outline-none hover:bg-accent hover:text-accent-foreground',
      'data-[active=true]:bg-accent data-[active=true]:text-accent-foreground',
      this.class
    );
  }

  private elementRef = inject(ElementRef);
}
