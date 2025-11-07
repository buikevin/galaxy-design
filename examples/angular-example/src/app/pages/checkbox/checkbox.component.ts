import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CheckboxComponent as UiCheckbox} from '@/components/ui/checkbox';
import {LabelComponent} from '@/components/ui/label';

@Component({
	selector: 'app-checkbox',
	standalone: true,
	imports: [CommonModule, UiCheckbox, LabelComponent],
	templateUrl: './checkbox.component.html',
	styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent {
	checked1 = false;
	checked2 = true;
	checked3 = false;
}
