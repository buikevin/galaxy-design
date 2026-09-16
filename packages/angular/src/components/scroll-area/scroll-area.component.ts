/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Scrollable container with custom scrollbars (vertical/horizontal + drag)
 */

import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  NgZone,
  OnDestroy,
  inject,
  input,
  viewChild,
} from '@angular/core';
import { cn } from '../../lib/utils';

@Component({
  selector: 'ui-scroll-area',
  standalone: true,
  template: `
    <div [class]="rootClasses">
      <div
        #viewport
        class="h-full w-full rounded-[inherit] overflow-scroll galaxy-scroll-area-viewport"
        (scroll)="updateThumbs()"
      >
        <ng-content></ng-content>
      </div>

      <div
        *ngIf="verticalThumbHeight > 0"
        class="absolute right-0 top-0 flex h-full w-2.5 touch-none select-none border-l border-l-transparent p-[1px]"
      >
        <div
          class="relative flex-1 rounded-full bg-border transition-colors hover:bg-muted-foreground/50"
          (pointerdown)="startDrag($event, 'vertical')"
        >
          <div
            class="absolute left-0 w-full rounded-full bg-muted-foreground/60"
            [style.height.px]="verticalThumbHeight"
            [style.transform]="'translateY(' + verticalThumbOffset + 'px)'"
          ></div>
        </div>
      </div>

      <div
        *ngIf="horizontalThumbWidth > 0"
        class="absolute bottom-0 left-0 flex h-2.5 w-full touch-none select-none flex-col border-t border-t-transparent p-[1px]"
      >
        <div
          class="relative flex-1 rounded-full bg-border transition-colors hover:bg-muted-foreground/50"
          (pointerdown)="startDrag($event, 'horizontal')"
        >
          <div
            class="absolute top-0 h-full rounded-full bg-muted-foreground/50"
            [style.width.px]="horizontalThumbWidth"
            [style.transform]="'translateX(' + horizontalThumbOffset + 'px)'"
          ></div>
        </div>
      </div>

      <div
        *ngIf="verticalThumbHeight > 0 && horizontalThumbWidth > 0"
        class="absolute bottom-0 right-0 z-10 h-2.5 w-2.5 border-l border-t border-l-transparent border-t-transparent"
      ></div>
    </div>
  `,
  styles: [
    `
      :host {
        display: block;
      }

      .galaxy-scroll-area-viewport {
        scrollbar-width: none;
        -ms-overflow-style: none;
      }

      .galaxy-scroll-area-viewport::-webkit-scrollbar {
        display: none;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScrollAreaComponent implements AfterViewInit, OnDestroy {
  readonly class = input<string>('');
  readonly orientation = input<'vertical' | 'horizontal'>('vertical');

  private readonly viewportRef =
    viewChild.required<ElementRef<HTMLElement>>('viewport');
  private readonly zone = inject(NgZone);
  private readonly cdr = inject(ChangeDetectorRef);

  verticalThumbHeight = 0;
  verticalThumbOffset = 0;
  horizontalThumbWidth = 0;
  horizontalThumbOffset = 0;

  private resizeObserver: ResizeObserver | null = null;
  private dragging: 'vertical' | 'horizontal' | null = null;
  private dragStartPointer = 0;
  private dragStartScroll = 0;

  get rootClasses(): string {
    return cn('relative overflow-hidden', this.class());
  }

  ngAfterViewInit(): void {
    const viewport = this.viewportRef().nativeElement;

    if (typeof ResizeObserver !== 'undefined') {
      this.resizeObserver = new ResizeObserver(() => {
        this.zone.run(() => this.updateThumbs());
      });
      this.resizeObserver.observe(viewport);
      if (viewport.firstElementChild) {
        this.resizeObserver.observe(viewport.firstElementChild);
      }
    }

    this.updateThumbs();
  }

  ngOnDestroy(): void {
    this.resizeObserver?.disconnect();
    this.resizeObserver = null;
  }

  updateThumbs(): void {
    const viewport = this.viewportRef().nativeElement;
    const { clientHeight, scrollHeight, clientWidth, scrollWidth } = viewport;

    this.verticalThumbHeight =
      scrollHeight > clientHeight
        ? Math.max((clientHeight / scrollHeight) * clientHeight, 20)
        : 0;
    const maxScrollTop = scrollHeight - clientHeight;
    this.verticalThumbOffset =
      maxScrollTop > 0
        ? (viewport.scrollTop / maxScrollTop) *
          (clientHeight - this.verticalThumbHeight)
        : 0;

    this.horizontalThumbWidth =
      scrollWidth > clientWidth
        ? Math.max((clientWidth / scrollWidth) * clientWidth, 20)
        : 0;
    const maxScrollLeft = scrollWidth - clientWidth;
    this.horizontalThumbOffset =
      maxScrollLeft > 0
        ? (viewport.scrollLeft / maxScrollLeft) *
          (clientWidth - this.horizontalThumbWidth)
        : 0;

    this.cdr.markForCheck();
  }

  startDrag(event: PointerEvent, direction: 'vertical' | 'horizontal'): void {
    event.preventDefault();
    this.dragging = direction;
    this.dragStartPointer =
      direction === 'vertical' ? event.clientY : event.clientX;
    this.dragStartScroll =
      direction === 'vertical'
        ? this.viewportRef().nativeElement.scrollTop
        : this.viewportRef().nativeElement.scrollLeft;

    const move = (moveEvent: PointerEvent) => {
      if (this.dragging !== direction) return;
      const viewport = this.viewportRef().nativeElement;
      const delta =
        (direction === 'vertical' ? moveEvent.clientY : moveEvent.clientX) -
        this.dragStartPointer;

      if (direction === 'vertical') {
        const { clientHeight, scrollHeight } = viewport;
        const maxScroll = scrollHeight - clientHeight;
        const trackLength = clientHeight - this.verticalThumbHeight;
        if (maxScroll > 0 && trackLength > 0) {
          viewport.scrollTop =
            this.dragStartScroll + (delta / trackLength) * maxScroll;
        }
      } else {
        const { clientWidth, scrollWidth } = viewport;
        const maxScroll = scrollWidth - clientWidth;
        const trackLength = clientWidth - this.horizontalThumbWidth;
        if (maxScroll > 0 && trackLength > 0) {
          viewport.scrollLeft =
            this.dragStartScroll + (delta / trackLength) * maxScroll;
        }
      }
    };

    const stop = () => {
      this.dragging = null;
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', stop);
      window.removeEventListener('pointercancel', stop);
    };

    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', stop);
    window.addEventListener('pointercancel', stop);
  }
}
