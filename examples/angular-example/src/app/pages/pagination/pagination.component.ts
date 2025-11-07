import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PaginationComponent as UiPagination} from '@/components/ui/pagination';

@Component({
	selector: 'app-pagination',
	standalone: true,
	imports: [CommonModule, UiPagination],
	templateUrl: './pagination.component.html',
	styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
	currentPage = 1;
	totalPages = 10;

	onPageChange(page: number): void {
		this.currentPage = page;
		console.log('Page changed to:', page);
	}
}
