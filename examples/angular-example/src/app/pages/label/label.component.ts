import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LabelComponent as UiLabel} from '@/components/ui/label';
import {InputComponent} from '@/components/ui/input';
import {FormsModule} from '@angular/forms';

@Component({
	selector: 'app-label',
	standalone: true,
	imports: [CommonModule, UiLabel, InputComponent, FormsModule],
	templateUrl: './label.component.html',
	styleUrls: ['./label.component.css'],
})
export class LabelComponent {
	email = '';
}
