import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SliderComponent as UiSlider} from '@/components/ui/slider/slider.component';

@Component({
	selector: 'app-slider',
	standalone: true,
	imports: [CommonModule, UiSlider],
	templateUrl: './slider.component.html',
	styleUrls: ['./slider.component.css'],
})
export class SliderComponent {
	value1 = 50;
	value2 = 33;
}
