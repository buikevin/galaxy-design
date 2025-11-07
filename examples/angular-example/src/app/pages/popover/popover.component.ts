import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	PopoverComponent as UiPopover,
	PopoverTriggerComponent,
	PopoverContentComponent,
} from '../../../../components/ui/popover/popover.component';
import {ButtonComponent} from '../../../../components/ui/button/button.component';

@Component({
	selector: 'app-popover',
	standalone: true,
	imports: [CommonModule, UiPopover, PopoverTriggerComponent, PopoverContentComponent, ButtonComponent],
	templateUrl: './popover.component.html',
	styleUrls: ['./popover.component.css'],
})
export class PopoverComponent {
	open = false;
}
