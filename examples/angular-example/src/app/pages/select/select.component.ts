import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	SelectComponent as UiSelect,
	SelectItemComponent,
} from '@/components/ui/select/select.component';

@Component({
	selector: 'app-select',
	standalone: true,
	imports: [CommonModule, UiSelect, SelectItemComponent],
	templateUrl: './select.component.html',
	styleUrls: ['./select.component.css'],
})
export class SelectComponent {
	selectedFruit = '';
	selectedTheme = 'light';

	fruits = ['Apple', 'Banana', 'Orange', 'Mango', 'Grape'];
	themes = [
		{value: 'light', label: 'Light'},
		{value: 'dark', label: 'Dark'},
		{value: 'system', label: 'System'},
	];
}
