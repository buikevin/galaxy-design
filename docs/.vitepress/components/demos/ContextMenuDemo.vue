<script setup lang="ts">
import ContextMenu from '@/components/ui/context-menu/ContextMenu.vue'
import ContextMenuContent from '@/components/ui/context-menu/ContextMenuContent.vue'
import ContextMenuItem from '@/components/ui/context-menu/ContextMenuItem.vue'
import ContextMenuLabel from '@/components/ui/context-menu/ContextMenuLabel.vue'
import ContextMenuSeparator from '@/components/ui/context-menu/ContextMenuSeparator.vue'
import ContextMenuTrigger from '@/components/ui/context-menu/ContextMenuTrigger.vue'
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger
      class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed border-slate-200 text-sm dark:border-slate-800"
    >
      Right click here
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuLabel>My Account</ContextMenuLabel>
      <ContextMenuSeparator />
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Settings</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>
