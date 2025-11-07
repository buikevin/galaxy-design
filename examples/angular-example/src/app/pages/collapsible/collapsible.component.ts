import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	CollapsibleComponent as UiCollapsible,
	CollapsibleTriggerComponent,
	CollapsibleContentComponent,
} from '@/components/ui/collapsible';
import {ButtonComponent} from '@/components/ui/button';

@Component({
	selector: 'app-collapsible',
	standalone: true,
	imports: [CommonModule, UiCollapsible, CollapsibleTriggerComponent, CollapsibleContentComponent, ButtonComponent],
	templateUrl: './collapsible.component.html',
	styleUrls: ['./collapsible.component.css'],
})
export class CollapsibleComponent {
	isOpen = false;
}
