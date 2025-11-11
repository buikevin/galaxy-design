import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  RdxSliderRootComponent,
  RdxSliderTrackComponent,
  RdxSliderRangeComponent,
  RdxSliderThumbComponent,
} from '@radix-ng/primitives/slider';
import { cn } from '@/lib/utils';

@Component({
  selector: 'ui-slider',
  standalone: true,
  imports: [
    CommonModule,
    RdxSliderRootComponent,
    RdxSliderTrackComponent,
    RdxSliderRangeComponent,
    RdxSliderThumbComponent,
  ],
  template: `
    <rdx-slider
      [(modelValue)]="modelValue"
      [min]="min"
      [max]="max"
      [step]="step"
      [disabled]="disabled"
      (valueChange)="onValueChange($event)"
      [className]="sliderClasses"
    >
      <rdx-slider-track>
        <rdx-slider-range class="absolute h-full bg-primary"></rdx-slider-range>
      </rdx-slider-track>
      <rdx-slider-thumb class="block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"></rdx-slider-thumb>
    </rdx-slider>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SliderComponent {
  @Input() min: number = 0;
  @Input() max: number = 100;
  @Input() step: number = 1;
  @Input() set value(val: number) {
    this.modelValue = [val];
  }
  get value(): number {
    return this.modelValue[0] || 0;
  }
  @Input() disabled: boolean = false;
  @Input() class?: string;
  @Output() valueChange = new EventEmitter<number>();

  modelValue: number[] = [50];

  get sliderClasses(): string {
    return cn(
      'relative flex w-full touch-none select-none items-center',
      this.class
    );
  }

  onValueChange(values: number[]): void {
    if (values && values.length > 0) {
      this.modelValue = values;
      this.valueChange.emit(values[0]);
    }
  }
}
