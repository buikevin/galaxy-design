<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { TabsRoot, type TabsRootProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends /* @vue-ignore */ TabsRootProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()

const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <TabsRoot
    :class="cn('', props.class)"
    v-bind="delegatedProps"
  >
    <slot />
  </TabsRoot>
</template>
