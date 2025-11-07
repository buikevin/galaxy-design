import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-scroll-area',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './scroll-area.component.html',
	styleUrls: ['./scroll-area.component.css'],
})
export class ScrollAreaComponent {
	tags = [
		'Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5',
		'Tag 6', 'Tag 7', 'Tag 8', 'Tag 9', 'Tag 10',
		'Tag 11', 'Tag 12', 'Tag 13', 'Tag 14', 'Tag 15',
		'Tag 16', 'Tag 17', 'Tag 18', 'Tag 19', 'Tag 20'
	];
}
