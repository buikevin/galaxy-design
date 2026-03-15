/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Table components - A responsive table with header, body, footer, rows, and cells
 */

import * as React from 'react'
import { cn } from '@/lib/utils'

/**
 * Table Component
 * 
 * A responsive table container with overflow handling.
 * 
 * @param {React.HTMLAttributes<HTMLTableElement>} props - Table props
 * @param {string} [props.className] - CSS class names for the table
 * @param {React.RefObject<HTMLTableElement>} ref - Reference to the table element
 * @returns {JSX.Element} Table container element
 */
const Table = React.forwardRef<
  HTMLTableElement,
  React.HTMLAttributes<HTMLTableElement>
>(({ className, ...props }, ref) => (
  <div className="relative w-full overflow-auto">
    <table
      ref={ref}
      className={cn('w-full caption-bottom text-sm', className)}
      {...props}
    />
  </div>
))
Table.displayName = 'Table'

/**
 * TableHeader Component
 * 
 * The header section of a table.
 * 
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props - TableHeader props
 * @param {string} [props.className] - CSS class names for the header
 * @param {React.RefObject<HTMLTableSectionElement>} ref - Reference to the header element
 * @returns {JSX.Element} Table header element
 */
const TableHeader = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <thead ref={ref} className={cn('[&_tr]:border-b', className)} {...props} />
))
TableHeader.displayName = 'TableHeader'

/**
 * TableBody Component
 * 
 * The body section of a table.
 * 
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props - TableBody props
 * @param {string} [props.className] - CSS class names for the body
 * @param {React.RefObject<HTMLTableSectionElement>} ref - Reference to the body element
 * @returns {JSX.Element} Table body element
 */
const TableBody = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tbody
    ref={ref}
    className={cn('[&_tr:last-child]:border-0', className)}
    {...props}
  />
))
TableBody.displayName = 'TableBody'

/**
 * TableFooter Component
 * 
 * The footer section of a table.
 * 
 * @param {React.HTMLAttributes<HTMLTableSectionElement>} props - TableFooter props
 * @param {string} [props.className] - CSS class names for the footer
 * @param {React.RefObject<HTMLTableSectionElement>} ref - Reference to the footer element
 * @returns {JSX.Element} Table footer element
 */
const TableFooter = React.forwardRef<
  HTMLTableSectionElement,
  React.HTMLAttributes<HTMLTableSectionElement>
>(({ className, ...props }, ref) => (
  <tfoot
    ref={ref}
    className={cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      className
    )}
    {...props}
  />
))
TableFooter.displayName = 'TableFooter'

/**
 * TableRow Component
 * 
 * A row in a table.
 * 
 * @param {React.HTMLAttributes<HTMLTableRowElement>} props - TableRow props
 * @param {string} [props.className] - CSS class names for the row
 * @param {React.RefObject<HTMLTableRowElement>} ref - Reference to the row element
 * @returns {JSX.Element} Table row element
 */
const TableRow = React.forwardRef<
  HTMLTableRowElement,
  React.HTMLAttributes<HTMLTableRowElement>
>(({ className, ...props }, ref) => (
  <tr
    ref={ref}
    className={cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      className
    )}
    {...props}
  />
))
TableRow.displayName = 'TableRow'

/**
 * TableHead Component
 * 
 * A header cell in a table.
 * 
 * @param {React.ThHTMLAttributes<HTMLTableCellElement>} props - TableHead props
 * @param {string} [props.className] - CSS class names for the header cell
 * @param {React.RefObject<HTMLTableCellElement>} ref - Reference to the header cell element
 * @returns {JSX.Element} Table header cell element
 */
const TableHead = React.forwardRef<
  HTMLTableCellElement,
  React.ThHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <th
    ref={ref}
    className={cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      className
    )}
    {...props}
  />
))
TableHead.displayName = 'TableHead'

/**
 * TableCell Component
 * 
 * A standard cell in a table.
 * 
 * @param {React.TdHTMLAttributes<HTMLTableCellElement>} props - TableCell props
 * @param {string} [props.className] - CSS class names for the cell
 * @param {React.RefObject<HTMLTableCellElement>} ref - Reference to the cell element
 * @returns {JSX.Element} Table cell element
 */
const TableCell = React.forwardRef<
  HTMLTableCellElement,
  React.TdHTMLAttributes<HTMLTableCellElement>
>(({ className, ...props }, ref) => (
  <td
    ref={ref}
    className={cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', className)}
    {...props}
  />
))
TableCell.displayName = 'TableCell'

/**
 * TableCaption Component
 * 
 * A caption/description for a table.
 * 
 * @param {React.HTMLAttributes<HTMLTableCaptionElement>} props - TableCaption props
 * @param {string} [props.className] - CSS class names for the caption
 * @param {React.RefObject<HTMLTableCaptionElement>} ref - Reference to the caption element
 * @returns {JSX.Element} Table caption element
 */
const TableCaption = React.forwardRef<
  HTMLTableCaptionElement,
  React.HTMLAttributes<HTMLTableCaptionElement>
>(({ className, ...props }, ref) => (
  <caption
    ref={ref}
    className={cn('mt-4 text-sm text-muted-foreground', className)}
    {...props}
  />
))
TableCaption.displayName = 'TableCaption'

export {
  Table,
  TableHeader,
  TableBody,
  TableFooter,
  TableHead,
  TableRow,
  TableCell,
  TableCaption,
}
