<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AccordionRoot, type AccordionRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ AccordionRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AccordionRoot
    :class="cn('', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </AccordionRoot>
</template>
