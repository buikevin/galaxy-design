<script setup lang="ts">
import { CalendarDays } from 'lucide-vue-next'
import Avatar from '@/components/ui/avatar/Avatar.vue'
import AvatarFallback from '@/components/ui/avatar/AvatarFallback.vue'
import AvatarImage from '@/components/ui/avatar/AvatarImage.vue'
import HoverCard from '@/components/ui/hover-card/HoverCard.vue'
import HoverCardContent from '@/components/ui/hover-card/HoverCardContent.vue'
import HoverCardTrigger from '@/components/ui/hover-card/HoverCardTrigger.vue'
</script>

<template>
  <HoverCard>
    <HoverCardTrigger as-child>
      <span class="text-sm underline cursor-pointer">@nextjs</span>
    </HoverCardTrigger>
    <HoverCardContent class="w-80">
      <div class="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://github.com/vercel.png" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div class="space-y-1">
          <h4 class="text-sm font-semibold">@nextjs</h4>
          <p class="text-sm text-slate-500 dark:text-slate-400">
            The React Framework – created and maintained by @vercel.
          </p>
          <div class="flex items-center pt-2">
            <CalendarDays class="mr-2 h-4 w-4 opacity-70" />
            <span class="text-xs text-slate-500 dark:text-slate-400">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
    </HoverCardContent>
  </HoverCard>
</template>
