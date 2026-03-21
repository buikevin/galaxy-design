<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Toast component - Non-blocking notification with vue-sonner integration
-->
<script setup lang="ts">
import { Toaster } from 'vue-sonner'
import type { ToasterProps } from 'vue-sonner'

defineOptions({
  name: 'UiToast',
})

/**
 * Toast Props
 * @prop theme - Color theme (light, dark, system)
 * @prop position - Toast position on screen
 * @prop duration - Toast display duration in ms
 * @prop visibleToasts - Number of visible toasts
 * @prop closeButton - Show close button
 * @prop expand - Expand toast to full width
 * @prop dir - Text direction (ltr, rtl)
 */
interface Props extends /* @vue-ignore */ ToasterProps {
  /** Color theme (light, dark, system). */
  theme?: 'light' | 'dark' | 'system'
  /** Toast position on screen. */
  position?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'top-center' | 'bottom-center'
  /** Toast display duration in ms. */
  duration?: number
  /** Number of visible toasts. */
  visibleToasts?: number
  /** Show close button. */
  closeButton?: boolean
  /** Expand toast to full width. */
  expand?: boolean
  /** Text direction (ltr, rtl). */
  dir?: 'ltr' | 'rtl'
}

const props = withDefaults(defineProps<Props>(), {
  theme: 'light',
})
</script>

<template>
  <Toaster
    :theme="props.theme"
    class="toaster group"
    :toast-options="{
      classes: {
        toast:
          'group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg',
        description: 'group-[.toast]:text-muted-foreground',
        actionButton:
          'group-[.toast]:bg-primary group-[.toast]:text-primary-foreground',
        cancelButton:
          'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
      },
    }"
  />
</template>
