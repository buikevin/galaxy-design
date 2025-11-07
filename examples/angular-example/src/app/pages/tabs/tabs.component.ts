import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	TabsComponent as UiTabs,
	TabsListComponent,
	TabsTriggerComponent,
	TabsContentComponent,
} from '../../../../components/ui/tabs/tabs.component';

@Component({
	selector: 'app-tabs',
	standalone: true,
	imports: [CommonModule, UiTabs, TabsListComponent, TabsTriggerComponent, TabsContentComponent],
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css'],
})
export class TabsComponent {
	activeTab = 'account';
}
