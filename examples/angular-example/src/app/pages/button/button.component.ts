import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ButtonComponent as UiButton} from '@/components/ui/button';

@Component({
	selector: 'app-button',
	standalone: true,
	imports: [CommonModule, UiButton],
	templateUrl: './button.component.html',
	styleUrls: ['./button.component.css'],
})
export class ButtonComponent {}
