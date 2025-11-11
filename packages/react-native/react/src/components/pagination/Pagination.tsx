import * as React from 'react'
import { ChevronLeft, ChevronRight, MoreHorizontal } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface PaginationProps extends React.ComponentPropsWithoutRef<'nav'> {
  /**
   * Current page number (1-indexed)
   */
  currentPage?: number
  /**
   * Total number of pages
   */
  totalPages?: number
  /**
   * Callback when page changes
   */
  onPageChange?: (page: number) => void
  /**
   * Number of page buttons to show
   * @default 5
   */
  siblingCount?: number
}

const Pagination = React.forwardRef<HTMLElement, PaginationProps>(
  (
    {
      className,
      currentPage = 1,
      totalPages = 1,
      onPageChange,
      siblingCount = 1,
      ...props
    },
    ref
  ) => {
    const pages = React.useMemo(() => {
      const range = (start: number, end: number) => {
        return Array.from({ length: end - start + 1 }, (_, i) => start + i)
      }

      const totalPageNumbers = siblingCount + 5 // 1 first + 1 last + 1 current + 2 siblings

      if (totalPageNumbers >= totalPages) {
        return range(1, totalPages)
      }

      const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
      const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages)

      const shouldShowLeftDots = leftSiblingIndex > 2
      const shouldShowRightDots = rightSiblingIndex < totalPages - 1

      if (!shouldShowLeftDots && shouldShowRightDots) {
        const leftItemCount = 3 + 2 * siblingCount
        const leftRange = range(1, leftItemCount)
        return [...leftRange, 'dots', totalPages]
      }

      if (shouldShowLeftDots && !shouldShowRightDots) {
        const rightItemCount = 3 + 2 * siblingCount
        const rightRange = range(totalPages - rightItemCount + 1, totalPages)
        return [1, 'dots', ...rightRange]
      }

      if (shouldShowLeftDots && shouldShowRightDots) {
        const middleRange = range(leftSiblingIndex, rightSiblingIndex)
        return [1, 'dots', ...middleRange, 'dots', totalPages]
      }

      return []
    }, [currentPage, totalPages, siblingCount])

    const handlePageChange = (page: number) => {
      if (page >= 1 && page <= totalPages && page !== currentPage) {
        onPageChange?.(page)
      }
    }

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="pagination"
        className={cn('flex items-center justify-center', className)}
        {...props}
      >
        <ul className="flex items-center gap-1">
          <li>
            <button
              type="button"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                currentPage === 1 && 'opacity-50 cursor-not-allowed'
              )}
              disabled={currentPage === 1}
              onClick={() => handlePageChange(currentPage - 1)}
              aria-label="Go to previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
          </li>

          {pages.map((page, index) => (
            <li key={index}>
              {page === 'dots' ? (
                <span className="flex h-9 w-9 items-center justify-center text-sm">
                  <MoreHorizontal className="h-4 w-4" />
                </span>
              ) : (
                <button
                  type="button"
                  className={cn(
                    'inline-flex h-9 min-w-[36px] items-center justify-center rounded-md border border-input bg-background px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                    currentPage === page &&
                      'border-primary bg-primary text-primary-foreground hover:bg-primary hover:text-primary-foreground'
                  )}
                  onClick={() => handlePageChange(page as number)}
                  aria-label={`Go to page ${page}`}
                  aria-current={currentPage === page ? 'page' : undefined}
                >
                  {page}
                </button>
              )}
            </li>
          ))}

          <li>
            <button
              type="button"
              className={cn(
                'inline-flex h-9 w-9 items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
                currentPage === totalPages && 'opacity-50 cursor-not-allowed'
              )}
              disabled={currentPage === totalPages}
              onClick={() => handlePageChange(currentPage + 1)}
              aria-label="Go to next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </li>
        </ul>
      </nav>
    )
  }
)
Pagination.displayName = 'Pagination'

export { Pagination }
