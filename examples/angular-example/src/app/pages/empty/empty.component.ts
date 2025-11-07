import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {EmptyComponent as UiEmpty} from '@/components/ui/empty';
import {ButtonComponent} from '@/components/ui/button';

@Component({
	selector: 'app-empty',
	standalone: true,
	imports: [CommonModule, UiEmpty, ButtonComponent],
	templateUrl: './empty.component.html',
	styleUrls: ['./empty.component.css'],
})
export class EmptyComponent {}
