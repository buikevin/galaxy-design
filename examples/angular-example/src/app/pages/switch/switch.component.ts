import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SwitchComponent as UiSwitch} from '@/components/ui/switch';
import {LabelComponent} from '@/components/ui/label';

@Component({
	selector: 'app-switch',
	standalone: true,
	imports: [CommonModule, UiSwitch, LabelComponent],
	templateUrl: './switch.component.html',
	styleUrls: ['./switch.component.css'],
})
export class SwitchComponent {
	checked1 = false;
	checked2 = true;
	checked3 = false;
}
