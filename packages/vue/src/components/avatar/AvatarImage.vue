<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc AvatarImage component - User profile image with aspect ratio support
-->
<script setup lang="ts">
import { type HTMLAttributes, computed } from 'vue'
import { AvatarImage, type AvatarImageProps } from 'radix-vue'
import { cn } from '@/lib/utils'

interface Props extends AvatarImageProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<Props>()
const delegatedProps = computed(() => {
  const { class: _, ...delegated } = props
  return delegated
})
</script>

<template>
  <AvatarImage
    :class="cn('aspect-square h-full w-full', props.class)"
    v-bind="delegatedProps"
  />
</template>
