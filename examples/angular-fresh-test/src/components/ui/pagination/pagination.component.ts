import { Component, Input, Output, EventEmitter } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-pagination',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav
      role="navigation"
      aria-label="pagination"
      [class]="className"
    >
      <ul class="flex items-center gap-1">
        <li>
          <button
            type="button"
            [class]="getPrevButtonClass()"
            [disabled]="currentPage === 1"
            (click)="handlePageChange(currentPage - 1)"
            aria-label="Go to previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
        </li>

        <li *ngFor="let page of pages; let i = index">
          <span
            *ngIf="page === 'dots'"
            class="flex h-9 w-9 items-center justify-center text-sm"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <circle cx="12" cy="12" r="1" />
              <circle cx="19" cy="12" r="1" />
              <circle cx="5" cy="12" r="1" />
            </svg>
          </span>
          <button
            *ngIf="page !== 'dots'"
            type="button"
            [class]="getPageButtonClass(page)"
            (click)="handlePageChange(page)"
            [attr.aria-label]="'Go to page ' + page"
            [attr.aria-current]="currentPage === page ? 'page' : null"
          >
            {{ page }}
          </button>
        </li>

        <li>
          <button
            type="button"
            [class]="getNextButtonClass()"
            [disabled]="currentPage === totalPages"
            (click)="handlePageChange(currentPage + 1)"
            aria-label="Go to next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="h-4 w-4"
            >
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </li>
      </ul>
    </nav>
  `,
})
export class PaginationComponent {
  /**
   * CSS class
   */
  @Input() class?: string

  /**
   * Current page number (1-indexed)
   */
  @Input() currentPage: number = 1

  /**
   * Total number of pages
   */
  @Input() totalPages: number = 1

  /**
   * Number of page buttons to show
   */
  @Input() siblingCount: number = 1

  /**
   * Event emitted when page changes
   */
  @Output() pageChange = new EventEmitter<number>()

  get className() {
    return cn('flex items-center justify-center', this.class)
  }

  get pages(): (number | string)[] {
    const range = (start: number, end: number) => {
      return Array.from({ length: end - start + 1 }, (_, i) => start + i)
    }

    const totalPageNumbers = this.siblingCount + 5

    if (totalPageNumbers >= this.totalPages) {
      return range(1, this.totalPages)
    }

    const leftSiblingIndex = Math.max(this.currentPage - this.siblingCount, 1)
    const rightSiblingIndex = Math.min(
      this.currentPage + this.siblingCount,
      this.totalPages
    )

    const shouldShowLeftDots = leftSiblingIndex > 2
    const shouldShowRightDots = rightSiblingIndex < this.totalPages - 1

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftItemCount = 3 + 2 * this.siblingCount
      const leftRange = range(1, leftItemCount)
      return [...leftRange, 'dots', this.totalPages]
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * this.siblingCount
      const rightRange = range(this.totalPages - rightItemCount + 1, this.totalPages)
      return [1, 'dots', ...rightRange]
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = range(leftSiblingIndex, rightSiblingIndex)
      return [1, 'dots', ...middleRange, 'dots', this.totalPages]
    }

    return []
  }

  handlePageChange(page: number | string) {
    if (typeof page === 'number' && page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page)
    }
  }

  getPrevButtonClass() {
    return cn(
      'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      this.currentPage === 1 && 'opacity-50 cursor-not-allowed'
    )
  }

  getNextButtonClass() {
    return cn(
      'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
      this.currentPage === this.totalPages && 'opacity-50 cursor-not-allowed'
    )
  }

  getPageButtonClass(page: number | string) {
    return cn(
      'inline-flex h-9 min-w-[36px] items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      this.currentPage === page &&
        'border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
    )
  }
}
