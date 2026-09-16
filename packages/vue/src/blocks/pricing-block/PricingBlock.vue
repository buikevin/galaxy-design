<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Pricing block - Pricing cards with tiers
-->
<script setup lang="ts">
import { cn } from '@/lib/utils';

defineOptions({ name: 'UiPricingBlock' });

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

defineProps<{
  tiers: PricingTier[];
  title?: string;
  subtitle?: string;
  class?: string;
}>();
</script>

<template>
  <div :class="cn('py-16', class)">
    <div class="mx-auto max-w-2xl text-center mb-12">
      <h2 class="text-3xl font-bold tracking-tight">
        {{ title || 'Pricing' }}
      </h2>
      <p class="mt-2 text-lg text-muted-foreground">
        {{ subtitle || 'Choose a plan that works for you' }}
      </p>
    </div>
    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
      <div
        v-for="tier in tiers"
        :key="tier.name"
        :class="
          cn(
            'rounded-lg border bg-card p-6 shadow-sm relative',
            tier.highlighted && 'border-primary ring-2 ring-primary shadow-lg'
          )
        "
      >
        <span
          v-if="tier.highlighted"
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
          <li
            v-for="feature in tier.features"
            :key="feature"
            class="flex items-center gap-2 text-sm"
          >
            <svg
              class="h-4 w-4 text-primary"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
            {{ feature }}
          </li>
        </ul>
        <button
          type="button"
          :class="
            cn(
              'mt-6 w-full inline-flex h-10 items-center justify-center rounded-md px-4 text-sm font-medium',
              tier.highlighted
                ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                : 'border border-input bg-background hover:bg-accent'
            )
          "
        >
          {{ tier.ctaText || 'Get ' + tier.name }}
        </button>
      </div>
    </div>
  </div>
</template>
