/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Pricing block - Pricing cards with tiers
 */

import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { cn } from '../../lib/utils';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

@Component({
  selector: 'ui-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div [class]="cn('py-16', class)">
      <div class="mx-auto max-w-2xl text-center mb-12">
        <h2 class="text-3xl font-bold tracking-tight">{{ title }}</h2>
        <p class="mt-2 text-lg text-muted-foreground">{{ subtitle }}</p>
      </div>
      <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <div
          *ngFor="let tier of tiers"
          [class]="cn(
            'rounded-lg border bg-card p-6 shadow-sm relative',
            tier.highlighted ? 'border-primary ring-2 ring-primary shadow-lg' : ''
          )"
        >
          <span
            *ngIf="tier.highlighted"
            class="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-3 py-0.5 text-xs font-medium text-primary-foreground"
          >
            Most Popular
          </span>
          <h3 class="text-lg font-semibold">{{ tier.name }}</h3>
          <p class="mt-2 text-sm text-muted-foreground">{{ tier.description }}</p>
          <p class="mt-4 text-3xl font-bold">
            {{ tier.price }}
            <span class="text-sm font-normal text-muted-foreground">/mo</span>
          </p>
          <ul class="mt-6 space-y-2">
            <li *ngFor="let feature of tier.features" class="flex items-center gap-2 text-sm">
              <svg class="h-4 w-4 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M20 6 9 17l-5-5" />
              </svg>
              {{ feature }}
            </li>
          </ul>
          <button
            type="button"
            [class]="tier.highlighted
              ? 'mt-6 w-full inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90'
              : 'mt-6 w-full inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium border border-input bg-background hover:bg-accent'"
          >
            {{ tier.ctaText || 'Get ' + tier.name }}
          </button>
        </div>
      </div>
    </div>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PricingBlockComponent {
  @Input() tiers: PricingTier[] = [];
  @Input() title = 'Pricing';
  @Input() subtitle = 'Choose a plan that works for you';
  @Input() class?: string;
  cn = cn;
}
PRICING

cat > /Users/buitronghieu/Desktop/Project/galaxy/galaxy-design/packages/angular/src/blocks/pricing/index.ts <<'IDX'
export { PricingBlockComponent, PricingTier } from './pricing.component'
IDX

echo angular-blocks-done