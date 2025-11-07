import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TextareaComponent as UiTextarea} from '@/components/ui/textarea';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app-textarea',
	standalone: true,
	imports: [CommonModule, UiTextarea, FormsModule],
	templateUrl: './textarea.component.html',
	styleUrls: ['./textarea.component.css'],
})
export class TextareaComponent {
	value = '';
	bio = 'Tell us about yourself...';
}
