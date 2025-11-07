<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import Button from '@/components/button/Button.vue'
import { cn } from '@/lib/utils'
import type { MenuItem } from './types'

interface Props {
  item: MenuItem
  collapsed?: boolean
  level?: number
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  collapsed: false,
  level: 0,
})

const emit = defineEmits<{
  click: [item: MenuItem]
}>()

const isExpanded = ref(false)

const toggleExpanded = () => {
  if (props.item.children && props.item.children.length > 0) {
    isExpanded.value = !isExpanded.value
  }
}

const handleClick = () => {
  emit('click', props.item)
  if (props.item.children && props.item.children.length > 0) {
    toggleExpanded()
  }
}

const hasChildren = props.item.children && props.item.children.length > 0
</script>

<template>
  <div>
    <Button
      variant="ghost"
      :disabled="item.disabled"
      :class="cn(
        'w-full justify-start gap-2 mb-1',
        item.active && 'bg-accent',
        collapsed && 'justify-center px-2',
        props.class
      )"
      :style="{ paddingLeft: `${level * 1 + 0.75}rem` }"
      @click="handleClick"
    >
      <!-- Icon -->
      <span v-if="item.icon" class="shrink-0" v-html="item.icon" />
      <svg
        v-else
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="shrink-0"
      >
        <circle cx="12" cy="12" r="1" />
      </svg>

      <!-- Label -->
      <span
        v-if="!collapsed"
        class="flex-1 text-left truncate"
      >
        {{ item.label }}
      </span>

      <!-- Badge -->
      <span
        v-if="!collapsed && item.badge"
        class="ml-auto text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5"
      >
        {{ item.badge }}
      </span>

      <!-- Expand icon -->
      <svg
        v-if="!collapsed && hasChildren"
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
          'ml-auto transition-transform',
          isExpanded && 'rotate-90'
        )"
      >
        <path d="m9 18 6-6-6-6" />
      </svg>
    </Button>

    <!-- Children -->
    <div
      v-if="hasChildren && isExpanded && !collapsed"
      class="ml-2"
    >
      <SidebarItem
        v-for="child in item.children"
        :key="child.id"
        :item="child"
        :collapsed="collapsed"
        :level="level + 1"
        @click="emit('click', $event)"
      />
    </div>
  </div>
</template>
