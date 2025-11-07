import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SeparatorComponent as UiSeparator} from '@/components/ui/separator';

@Component({
	selector: 'app-separator',
	standalone: true,
	imports: [CommonModule, UiSeparator],
	templateUrl: './separator.component.html',
	styleUrls: ['./separator.component.css'],
})
export class SeparatorComponent {}
