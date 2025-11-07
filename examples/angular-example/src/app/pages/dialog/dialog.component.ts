import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	DialogComponent as UiDialog,
	DialogTriggerComponent,
	DialogContentComponent,
	DialogHeaderComponent,
	DialogTitleComponent,
	DialogDescriptionComponent,
	DialogFooterComponent,
} from '../../../../components/ui/dialog/dialog.component';
import {ButtonComponent} from '../../../../components/ui/button/button.component';

@Component({
	selector: 'app-dialog',
	standalone: true,
	imports: [
		CommonModule,
		UiDialog,
		DialogTriggerComponent,
		DialogContentComponent,
		DialogHeaderComponent,
		DialogTitleComponent,
		DialogDescriptionComponent,
		DialogFooterComponent,
		ButtonComponent,
	],
	templateUrl: './dialog.component.html',
	styleUrls: ['./dialog.component.css'],
})
export class DialogComponent {
	open = false;

	handleSave(): void {
		console.log('Save changes');
		this.open = false;
	}
}
