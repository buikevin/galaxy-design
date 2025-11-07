<script setup lang="ts">
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger} from '@/components/ui/tooltip'
import {Button} from '@/components/ui/button'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Tooltip</h1>
			<p class="text-muted-foreground mt-2">
				A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<TooltipProvider>
	<Tooltip>
		<TooltipTrigger as-child>
			<Button>Hover me</Button>
		</TooltipTrigger>
		<TooltipContent>
			<p>Add to library</p>
		</TooltipContent>
	</Tooltip>
</TooltipProvider>
			</div>
		</div>
	</div>
</template>
