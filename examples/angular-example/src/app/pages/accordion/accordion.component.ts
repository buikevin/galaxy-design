import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	AccordionComponent as UiAccordion,
	AccordionItemComponent,
	AccordionTriggerComponent,
	AccordionContentComponent,
} from '../../../../components/ui/accordion/accordion.component';

@Component({
	selector: 'app-accordion',
	standalone: true,
	imports: [
		CommonModule,
		UiAccordion,
		AccordionItemComponent,
		AccordionTriggerComponent,
		AccordionContentComponent,
	],
	templateUrl: './accordion.component.html',
	styleUrls: ['./accordion.component.css'],
})
export class AccordionComponent {
	value = 'item-1';
	multipleValue: string[] = ['item-1'];
}
