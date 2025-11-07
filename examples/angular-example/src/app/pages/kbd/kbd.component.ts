import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {KbdComponent as UiKbd} from '@/components/ui/kbd';

@Component({
	selector: 'app-kbd',
	standalone: true,
	imports: [CommonModule, UiKbd],
	templateUrl: './kbd.component.html',
	styleUrls: ['./kbd.component.css'],
})
export class KbdComponent {}
