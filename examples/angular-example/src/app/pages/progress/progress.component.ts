import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProgressComponent as UiProgress} from '@/components/ui/progress';

@Component({
	selector: 'app-progress',
	standalone: true,
	imports: [CommonModule, UiProgress],
	templateUrl: './progress.component.html',
	styleUrls: ['./progress.component.css'],
})
export class ProgressComponent {}
