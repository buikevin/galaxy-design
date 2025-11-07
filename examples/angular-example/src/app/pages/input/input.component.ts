import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {InputComponent as UiInput} from '@/components/ui/input';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app-input',
	standalone: true,
	imports: [CommonModule, UiInput, FormsModule],
	templateUrl: './input.component.html',
	styleUrls: ['./input.component.css'],
})
export class InputComponent {
	textValue = '';
	emailValue = '';
	passwordValue = '';
	disabledValue = 'Disabled input';
}
