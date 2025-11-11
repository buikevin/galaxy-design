<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { cn } from '@/lib/utils'
import type { FeaturedSectionProps } from './types'

interface Props extends FeaturedSectionProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
  variant: 'default',
})

const gridCols = computed(() => {
  const cols = {
    2: 'md:grid-cols-2',
    3: 'md:grid-cols-2 lg:grid-cols-3',
    4: 'md:grid-cols-2 lg:grid-cols-4',
  }
  return cols[props.columns]
})
</script>

<template>
  <section :class="cn('py-20 px-4 sm:px-6 lg:px-8', props.class)">
    <div class="mx-auto max-w-7xl">
      <!-- Header -->
      <div
        :class="cn(
          'mb-16',
          variant === 'centered' && 'text-center mx-auto max-w-3xl'
        )"
      >
        <h2 v-if="title" class="text-3xl font-bold tracking-tight sm:text-4xl">
          {{ title }}
        </h2>
        <p v-if="description" class="mt-4 text-lg text-muted-foreground">
          {{ description }}
        </p>
      </div>

      <!-- Features Grid -->
      <div :class="cn('grid gap-8', gridCols)">
        <div
          v-for="feature in features"
          :key="feature.id"
          :class="cn(
            'group relative',
            variant === 'cards' && 'p-6 rounded-lg border bg-card hover:shadow-lg transition-shadow'
          )"
        >
          <!-- Icon/Image -->
          <div v-if="feature.icon || feature.image" class="mb-4">
            <div
              v-if="feature.image"
              class="aspect-video rounded-lg bg-muted overflow-hidden mb-4"
            >
              <img
                :src="feature.image"
                :alt="feature.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div
              v-else-if="feature.icon"
              class="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary text-2xl"
              v-html="feature.icon"
            />
          </div>

          <!-- Content -->
          <h3 class="text-xl font-semibold mb-2">
            {{ feature.title }}
          </h3>
          <p class="text-muted-foreground">
            {{ feature.description }}
          </p>

          <!-- Hover effect for cards -->
          <div
            v-if="variant === 'cards'"
            class="absolute inset-0 rounded-lg ring-1 ring-inset ring-border group-hover:ring-primary/50 transition-colors pointer-events-none"
          />
        </div>
      </div>

      <slot name="footer" />
    </div>
  </section>
</template>
