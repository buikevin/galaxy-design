<script setup lang="ts">
import { ref, computed, type HTMLAttributes } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import SidebarItem from './SidebarItem.vue'
import { cn } from '@/lib/utils'
import type { SidebarProps, MenuItem } from './types'

interface Props extends SidebarProps {
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  collapsible: true,
  defaultCollapsed: false,
  width: '280px',
  collapsedWidth: '60px',
})

const emit = defineEmits<{
  itemClick: [item: MenuItem]
  collapseChange: [collapsed: boolean]
}>()

const isCollapsed = ref(props.defaultCollapsed)

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value
  emit('collapseChange', isCollapsed.value)
}

const currentWidth = computed(() => {
  return isCollapsed.value ? props.collapsedWidth : props.width
})

const handleItemClick = (item: MenuItem) => {
  emit('itemClick', item)
}
</script>

<template>
  <aside
    :class="cn(
      'flex flex-col h-full border-r bg-card transition-all duration-300',
      props.class
    )"
    :style="{ width: currentWidth }"
  >
    <!-- Header -->
    <div class="flex items-center justify-between p-4">
      <div v-if="!isCollapsed" class="flex items-center gap-2">
        <slot name="logo">
          <div class="h-8 w-8 rounded bg-primary" />
        </slot>
        <slot name="title">
          <h2 class="text-lg font-semibold">Menu</h2>
        </slot>
      </div>
      <div v-else class="flex justify-center w-full">
        <slot name="logo">
          <div class="h-8 w-8 rounded bg-primary" />
        </slot>
      </div>
    </div>

    <Separator />

    <!-- Navigation Items -->
    <nav class="flex-1 overflow-y-auto p-2">
      <SidebarItem
        v-for="item in items"
        :key="item.id"
        :item="item"
        :collapsed="isCollapsed"
        @click="handleItemClick"
      />
    </nav>

    <Separator />

    <!-- Footer -->
    <div class="p-2">
      <slot name="footer">
        <Button
          v-if="collapsible"
          variant="ghost"
          :class="cn(
            'w-full',
            isCollapsed && 'justify-center px-2'
          )"
          @click="toggleCollapse"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            :class="cn(
              'transition-transform',
              isCollapsed && 'rotate-180'
            )"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          <span v-if="!isCollapsed" class="ml-2">Collapse</span>
        </Button>
      </slot>
    </div>
  </aside>
</template>
