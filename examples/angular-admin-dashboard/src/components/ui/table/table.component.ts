import { Component, Input, Directive } from '@angular/core'
import { cn } from '@/lib/utils'

@Component({
  selector: 'ui-table',
  standalone: true,
  template: `
    <div class="relative w-full overflow-auto">
      <table [class]="className">
        <ng-content />
      </table>
    </div>
  `,
})
export class TableComponent {
  @Input() class?: string

  get className() {
    return cn('w-full caption-bottom text-sm', this.class)
  }
}

@Directive({
  selector: 'thead[uiTableHeader]',
  standalone: true,
  host: {
    '[class]': 'className',
  },
})
export class TableHeaderDirective {
  @Input() class?: string

  get className() {
    return cn('[&_tr]:border-b', this.class)
  }
}

@Directive({
  selector: 'tbody[uiTableBody]',
  standalone: true,
  host: {
    '[class]': 'className',
  },
})
export class TableBodyDirective {
  @Input() class?: string

  get className() {
    return cn('[&_tr:last-child]:border-0', this.class)
  }
}

@Directive({
  selector: 'tfoot[uiTableFooter]',
  standalone: true,
  host: {
    '[class]': 'className',
  },
})
export class TableFooterDirective {
  @Input() class?: string

  get className() {
    return cn(
      'border-t bg-muted/50 font-medium [&>tr]:last:border-b-0',
      this.class
    )
  }
}

@Directive({
  selector: 'tr[uiTableRow]',
  standalone: true,
  host: {
    '[class]': 'className',
  },
})
export class TableRowDirective {
  @Input() class?: string

  get className() {
    return cn(
      'border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted',
      this.class
    )
  }
}

@Directive({
  selector: 'th[uiTableHead]',
  standalone: true,
  host: {
    '[class]': 'className',
  },
})
export class TableHeadDirective {
  @Input() class?: string

  get className() {
    return cn(
      'h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0',
      this.class
    )
  }
}

@Directive({
  selector: 'td[uiTableCell]',
  standalone: true,
  host: {
    '[class]': 'className',
  },
})
export class TableCellDirective {
  @Input() class?: string

  get className() {
    return cn('p-4 align-middle [&:has([role=checkbox])]:pr-0', this.class)
  }
}

@Directive({
  selector: 'caption[uiTableCaption]',
  standalone: true,
  host: {
    '[class]': 'className',
  },
})
export class TableCaptionDirective {
  @Input() class?: string

  get className() {
    return cn('mt-4 text-sm text-muted-foreground', this.class)
  }
}
