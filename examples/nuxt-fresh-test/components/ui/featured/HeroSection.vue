<script setup lang="ts">
import { type HTMLAttributes } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import { cn } from '@/lib/utils'
import type { HeroSectionProps } from './types'

interface Props extends HeroSectionProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  variant: 'default',
})

const emit = defineEmits<{
  primaryClick: []
  secondaryClick: []
}>()
</script>

<template>
  <section
    :class="cn(
      'relative overflow-hidden py-20 px-4 sm:px-6 lg:px-8',
      variant === 'centered' && 'text-center',
      props.class
    )"
  >
    <div class="mx-auto max-w-7xl">
      <div
        :class="cn(
          'grid gap-12 items-center',
          variant === 'split' ? 'lg:grid-cols-2' : 'lg:grid-cols-1'
        )"
      >
        <!-- Content -->
        <div :class="cn(variant === 'centered' && 'mx-auto max-w-3xl')">
          <h1 class="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
            {{ title }}
          </h1>

          <p v-if="description" class="mt-6 text-lg leading-8 text-muted-foreground">
            {{ description }}
          </p>

          <div
            v-if="primaryCta || secondaryCta"
            :class="cn(
              'mt-10 flex items-center gap-4',
              variant === 'centered' && 'justify-center'
            )"
          >
            <Button
              v-if="primaryCta"
              size="lg"
              @click="emit('primaryClick')"
            >
              {{ primaryCta.label }}
            </Button>
            <Button
              v-if="secondaryCta"
              variant="outline"
              size="lg"
              @click="emit('secondaryClick')"
            >
              {{ secondaryCta.label }}
            </Button>
          </div>

          <slot name="extra" />
        </div>

        <!-- Image -->
        <div v-if="image || variant === 'split'" class="relative">
          <slot name="image">
            <div
              v-if="image"
              class="aspect-video rounded-lg bg-muted overflow-hidden shadow-2xl"
            >
              <img
                :src="image"
                :alt="title"
                class="w-full h-full object-cover"
              />
            </div>
            <div v-else class="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
          </slot>
        </div>
      </div>
    </div>

    <!-- Background decoration -->
    <div class="absolute inset-0 -z-10 overflow-hidden">
      <div class="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl opacity-30">
        <div class="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-primary to-primary/50" />
      </div>
    </div>
  </section>
</template>
