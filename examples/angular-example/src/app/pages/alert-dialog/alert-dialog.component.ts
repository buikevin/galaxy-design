import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	AlertDialogComponent as UiAlertDialog,
	AlertDialogTriggerComponent,
	AlertDialogContentComponent,
	AlertDialogHeaderComponent,
	AlertDialogTitleComponent,
	AlertDialogDescriptionComponent,
	AlertDialogFooterComponent,
	AlertDialogActionComponent,
	AlertDialogCancelComponent,
} from '../../../../components/ui/alert-dialog/alert-dialog.component';
import {ButtonComponent} from '../../../../components/ui/button/button.component';

@Component({
	selector: 'app-alert-dialog',
	standalone: true,
	imports: [
		CommonModule,
		UiAlertDialog,
		AlertDialogTriggerComponent,
		AlertDialogContentComponent,
		AlertDialogHeaderComponent,
		AlertDialogTitleComponent,
		AlertDialogDescriptionComponent,
		AlertDialogFooterComponent,
		AlertDialogActionComponent,
		AlertDialogCancelComponent,
		ButtonComponent,
	],
	templateUrl: './alert-dialog.component.html',
	styleUrls: ['./alert-dialog.component.css'],
})
export class AlertDialogComponent {
	open = false;
	destructiveOpen = false;

	handleContinue(): void {
		console.log('Continue clicked');
		this.open = false;
	}

	handleDelete(): void {
		console.log('Delete confirmed');
		this.destructiveOpen = false;
	}
}
