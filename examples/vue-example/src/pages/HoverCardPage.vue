<script setup lang="ts">
import {HoverCard, HoverCardContent, HoverCardTrigger} from '@/components/ui/hover-card'
import {Button} from '@/components/ui/button'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Hover Card</h1>
			<p class="text-muted-foreground mt-2">
				For sighted users to preview content available behind a link.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<HoverCard>
	<HoverCardTrigger as-child>
		<Button variant="link">@nextjs</Button>
	</HoverCardTrigger>
	<HoverCardContent class="w-80">
		<div class="flex justify-between space-x-4">
			<div class="space-y-1">
				<h4 class="text-sm font-semibold">@nextjs</h4>
				<p class="text-sm">The React Framework – created and maintained by @vercel.</p>
			</div>
		</div>
	</HoverCardContent>
</HoverCard>
			</div>
		</div>
	</div>
</template>
