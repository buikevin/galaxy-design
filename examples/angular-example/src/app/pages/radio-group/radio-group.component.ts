import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	RadioGroupComponent as UiRadioGroup,
	RadioGroupItemComponent,
} from '../../../../components/ui/radio-group/radio-group.component';
import {LabelComponent} from '../../../../components/ui/label/label.component';

@Component({
	selector: 'app-radio-group',
	standalone: true,
	imports: [CommonModule, UiRadioGroup, RadioGroupItemComponent, LabelComponent],
	templateUrl: './radio-group.component.html',
	styleUrls: ['./radio-group.component.css'],
})
export class RadioGroupComponent {
	selectedOption = 'comfortable';
	notificationOption = 'all';
}
