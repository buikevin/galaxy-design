import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  HostListener,
  ElementRef,
  AfterViewInit,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '@/lib/utils';

type Direction = 'horizontal' | 'vertical';

@Component({
  selector: 'ui-resizable-panel-group',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="groupClasses">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizablePanelGroupComponent {
  @Input() direction: Direction = 'horizontal';
  @Input() class?: string;

  get groupClasses(): string {
    return cn(
      'flex h-full w-full',
      this.direction === 'vertical' && 'flex-col',
      this.class
    );
  }
}

@Component({
  selector: 'ui-resizable-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="panelClasses" [style.flex]="flexValue">
      <ng-content></ng-content>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizablePanelComponent {
  @Input() size?: number;
  @Input() minSize?: number;
  @Input() maxSize?: number;
  @Input() class?: string;

  get panelClasses(): string {
    return cn('relative', this.class);
  }

  get flexValue(): string {
    return this.size ? `${this.size} 1 0%` : '1 1 0%';
  }
}

@Component({
  selector: 'ui-resizable-handle',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="handleClasses">
      <div *ngIf="withHandle" class="z-10 flex h-4 w-3 items-center justify-center rounded-sm border bg-border">
        <svg
          class="h-2.5 w-2.5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="9" cy="12" r="1" />
          <circle cx="9" cy="5" r="1" />
          <circle cx="9" cy="19" r="1" />
          <circle cx="15" cy="12" r="1" />
          <circle cx="15" cy="5" r="1" />
          <circle cx="15" cy="19" r="1" />
        </svg>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizableHandleComponent {
  @Input() withHandle: boolean = false;
  @Input() class?: string;

  get handleClasses(): string {
    return cn(
      'relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-1 cursor-col-resize',
      this.class
    );
  }
}
