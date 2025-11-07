import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	ResizablePanelGroupComponent,
	ResizablePanelComponent,
	ResizableHandleComponent,
} from '@/components/ui/resizable';

@Component({
	selector: 'app-resizable',
	standalone: true,
	imports: [
		CommonModule,
		ResizablePanelGroupComponent,
		ResizablePanelComponent,
		ResizableHandleComponent,
	],
	templateUrl: './resizable.component.html',
	styleUrls: ['./resizable.component.css'],
})
export class ResizableComponent {}
