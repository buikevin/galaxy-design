<script setup lang="ts">
import { ref } from 'vue'
import { ChevronsUpDown } from 'lucide-vue-next'
import Button from '@/components/ui/button/Button.vue'
import Collapsible from '@/components/ui/collapsible/Collapsible.vue'
import CollapsibleContent from '@/components/ui/collapsible/CollapsibleContent.vue'
import CollapsibleTrigger from '@/components/ui/collapsible/CollapsibleTrigger.vue'

const isOpen = ref(false)
</script>

<template>
  <Collapsible v-model:open="isOpen" class="w-full max-w-md space-y-2">
    <div class="flex items-center justify-between space-x-4">
      <h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
      <CollapsibleTrigger as-child>
        <Button variant="ghost" size="sm" class="w-9 p-0">
          <ChevronsUpDown class="h-4 w-4" />
          <span class="sr-only">Toggle</span>
        </Button>
      </CollapsibleTrigger>
    </div>
    <div class="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-800">
      @radix-ui/primitives
    </div>
    <CollapsibleContent class="space-y-2">
      <div class="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-800">
        @radix-ui/colors
      </div>
      <div class="rounded-md border border-slate-200 px-4 py-3 font-mono text-sm dark:border-slate-800">
        @stitches/react
      </div>
    </CollapsibleContent>
  </Collapsible>
</template>
