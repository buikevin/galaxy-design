import { Component, Input } from '@angular/core'
import { CommonModule } from '@angular/common'
import { cn } from '@/lib/utils'

type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'blockquote' | 'code' | 'lead' | 'large' | 'small' | 'muted'

const variantStyles: Record<TypographyVariant, string> = {
  h1: 'scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl',
  h2: 'scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0',
  h3: 'scroll-m-20 text-2xl font-semibold tracking-tight',
  h4: 'scroll-m-20 text-xl font-semibold tracking-tight',
  p: 'leading-7 [&:not(:first-child)]:mt-6',
  blockquote: 'mt-6 border-l-2 pl-6 italic',
  code: 'relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold',
  lead: 'text-xl text-muted-foreground',
  large: 'text-lg font-semibold',
  small: 'text-sm font-medium leading-none',
  muted: 'text-sm text-muted-foreground',
}

@Component({
  selector: 'ui-typography',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1 *ngIf="variant === 'h1'" [class]="className"><ng-content /></h1>
    <h2 *ngIf="variant === 'h2'" [class]="className"><ng-content /></h2>
    <h3 *ngIf="variant === 'h3'" [class]="className"><ng-content /></h3>
    <h4 *ngIf="variant === 'h4'" [class]="className"><ng-content /></h4>
    <p *ngIf="variant === 'p' || variant === 'lead' || variant === 'muted'" [class]="className"><ng-content /></p>
    <blockquote *ngIf="variant === 'blockquote'" [class]="className"><ng-content /></blockquote>
    <code *ngIf="variant === 'code'" [class]="className"><ng-content /></code>
    <div *ngIf="variant === 'large'" [class]="className"><ng-content /></div>
    <small *ngIf="variant === 'small'" [class]="className"><ng-content /></small>
  `,
})
export class TypographyComponent {
  /**
   * CSS class
   */
  @Input() class?: string

  /**
   * Typography variant
   * @default "p"
   */
  @Input() variant: TypographyVariant = 'p'

  get className() {
    return cn(variantStyles[this.variant], this.class)
  }
}
