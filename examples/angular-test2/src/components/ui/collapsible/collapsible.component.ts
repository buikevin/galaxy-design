import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxCollapsibleRootDirective,
  RdxCollapsibleTriggerDirective,
  RdxCollapsibleContentDirective,
} from '@radix-ng/primitives/collapsible';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-collapsible',
  standalone: true,
  imports: [CommonModule, RdxCollapsibleRootDirective],
  template: `
    <div
      rdxCollapsibleRoot
      [open]="open"
      (openChange)="onOpenChange($event)"
      [class]="collapsibleClasses"
    >
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleComponent {
  @Input() open: boolean = false;
  @Input() class?: string;
  @Output() openChange = new EventEmitter<boolean>();

  get collapsibleClasses(): string {
    return cn('', this.class);
  }

  onOpenChange(open: boolean): void {
    this.open = open;
    this.openChange.emit(open);
  }
}

@Component({
  selector: 'ui-collapsible-trigger',
  standalone: true,
  imports: [CommonModule, RdxCollapsibleTriggerDirective],
  template: `
    <button rdxCollapsibleTrigger [class]="triggerClasses">
      <ng-content></ng-content>
    </button>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleTriggerComponent {
  @Input() class?: string;

  get triggerClasses(): string {
    return cn('', this.class);
  }
}

@Component({
  selector: 'ui-collapsible-content',
  standalone: true,
  imports: [CommonModule, RdxCollapsibleContentDirective],
  template: `
    <div rdxCollapsibleContent [class]="contentClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollapsibleContentComponent {
  @Input() class?: string;

  get contentClasses(): string {
    return cn('', this.class);
  }
}
