import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
	TableComponent as UiTable,
	TableHeaderDirective,
	TableBodyDirective,
	TableRowDirective,
	TableHeadDirective,
	TableCellDirective,
	TableCaptionDirective,
} from '@/components/ui/table';

interface User {
	id: number;
	name: string;
	email: string;
	role: string;
	status: string;
}

@Component({
	selector: 'app-table',
	standalone: true,
	imports: [
		CommonModule,
		UiTable,
		TableHeaderDirective,
		TableBodyDirective,
		TableRowDirective,
		TableHeadDirective,
		TableCellDirective,
		TableCaptionDirective,
	],
	templateUrl: './table.component.html',
	styleUrls: ['./table.component.css'],
})
export class TableComponent {
	users: User[] = [
		{id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin', status: 'Active'},
		{id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User', status: 'Active'},
		{id: 3, name: 'Bob Johnson', email: 'bob@example.com', role: 'User', status: 'Inactive'},
		{id: 4, name: 'Alice Brown', email: 'alice@example.com', role: 'Editor', status: 'Active'},
	];
}
