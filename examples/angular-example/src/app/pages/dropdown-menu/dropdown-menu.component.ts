import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-dropdown-menu',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './dropdown-menu.component.html',
	styleUrls: ['./dropdown-menu.component.css'],
})
export class DropdownMenuComponent {
	selectedItem = '';

	onMenuItemClick(item: string): void {
		this.selectedItem = item;
		console.log('Selected:', item);
	}
}
