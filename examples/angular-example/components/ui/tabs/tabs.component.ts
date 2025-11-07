import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxTabsRootDirective,
  RdxTabsListDirective,
  RdxTabsTriggerDirective,
  RdxTabsContentDirective,
} from '@radix-ng/primitives/tabs';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-tabs',
  standalone: true,
  imports: [CommonModule, RdxTabsRootDirective],
  template: `
    <div
      rdxTabsRoot
      [value]="value"
      [defaultValue]="defaultValue"
      (valueChange)="onValueChange($event)"
      [class]="tabsClasses"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent {
  @Input() value?: string;
  @Input() defaultValue?: string;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<string | undefined>();

  get tabsClasses(): string {
    return cn('', this.class);
  }

  onValueChange(value: string | undefined): void {
    this.value = value;
    this.valueChange.emit(value);
  }
}

@Component({
  selector: 'ui-tabs-list',
  standalone: true,
  imports: [CommonModule, RdxTabsListDirective],
  template: `
    <div rdxTabsList [class]="listClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsListComponent {
  @Input() class?: string;

  get listClasses(): string {
    return cn(
      'inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground',
      this.class
    );
  }
}

@Component({
  selector: 'ui-tabs-trigger',
  standalone: true,
  imports: [CommonModule, RdxTabsTriggerDirective],
  template: `
    <button
      rdxTabsTrigger
      [value]="value"
      [disabled]="disabled"
      [class]="triggerClasses"
    >
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsTriggerComponent {
  @Input() value!: string;
  @Input() disabled: boolean = false;
  @Input() class?: string;

  get triggerClasses(): string {
    return cn(
      'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm',
      this.class
    );
  }
}

@Component({
  selector: 'ui-tabs-content',
  standalone: true,
  imports: [CommonModule, RdxTabsContentDirective],
  template: `
    <div
      rdxTabsContent
      [value]="value"
      [class]="contentClasses"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsContentComponent {
  @Input() value!: string;
  @Input() class?: string;

  get contentClasses(): string {
    return cn(
      'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.class
    );
  }
}
