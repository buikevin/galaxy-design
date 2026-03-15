import {
  AfterContentInit,
  ChangeDetectionStrategy,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  Output,
  QueryList,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSplitModule } from 'angular-split';
import { cn } from '@/lib/utils';

type Direction = 'horizontal' | 'vertical';

@Component({
  selector: 'ui-resizable-panel-group',
  standalone: true,
  imports: [CommonModule, AngularSplitModule],
  template: `
    <as-split
      [direction]="direction"
      [unit]="'percent'"
      [gutterSize]="computedGutterSize"
      [class]="groupClasses"
      (dragEnd)="handleDragEnd($event)"
    >
      <as-split-area
        *ngFor="let panel of orderedPanels"
        [size]="panel.initialSize"
        [minSize]="panel.minSize"
        [maxSize]="panel.maxSize"
      >
        <ng-container *ngTemplateOutlet="panel.templateRef"></ng-container>
      </as-split-area>
    </as-split>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizablePanelGroupComponent implements AfterContentInit {
  @Input() direction: Direction = 'horizontal';
  @Input() gutterSize: number = 10;
  @Input() class?: string;
  @Output() layoutChange = new EventEmitter<number[]>();

  @ContentChildren(ResizablePanelComponent)
  protected panels!: QueryList<ResizablePanelComponent>;

  @ContentChildren(ResizableHandleComponent)
  protected handles!: QueryList<ResizableHandleComponent>;

  orderedPanels: ResizablePanelComponent[] = [];

  ngAfterContentInit(): void {
    this.updatePanels();
    this.panels.changes.subscribe(() => this.updatePanels());
  }

  get computedGutterSize(): number {
    return this.handles?.first?.disabled ? 0 : this.gutterSize;
  }

  get groupClasses(): string {
    return cn(
      'flex h-full w-full',
      this.direction === 'vertical' && 'flex-col',
      this.class
    );
  }

  handleDragEnd(event: { sizes?: number[] } | number[] | undefined): void {
    if (Array.isArray(event)) {
      this.layoutChange.emit(event);
      return;
    }

    if (event?.sizes) {
      this.layoutChange.emit(event.sizes);
    }
  }

  private updatePanels(): void {
    this.orderedPanels = [...(this.panels?.toArray() ?? [])].sort((a, b) => {
      if (a.order == null && b.order == null) return 0;
      if (a.order == null) return 1;
      if (b.order == null) return -1;
      return a.order - b.order;
    });
  }
}

@Component({
  selector: 'ui-resizable-panel',
  standalone: true,
  imports: [CommonModule],
  template: `
    <ng-template>
      <div [class]="panelClasses">
        <ng-content></ng-content>
      </div>
    </ng-template>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizablePanelComponent {
  @ViewChild(TemplateRef, { static: true })
  templateRef!: TemplateRef<unknown>;

  @Input() defaultSize?: number;
  @Input() size?: number;
  @Input() minSize?: number;
  @Input() maxSize?: number;
  @Input() collapsedSize?: number;
  @Input() collapsible: boolean = false;
  @Input() order?: number;
  @Input() class?: string;

  get panelClasses(): string {
    return cn('relative h-full w-full overflow-auto', this.class);
  }

  get initialSize(): number | undefined {
    return this.defaultSize ?? this.size;
  }
}

@Component({
  selector: 'ui-resizable-handle',
  standalone: true,
  imports: [CommonModule],
  template: ``,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ResizableHandleComponent {
  @Input() disabled: boolean = false;
  @Input() withHandle: boolean = false;
  @Input() class?: string;
}
