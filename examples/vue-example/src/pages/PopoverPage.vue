<script setup lang="ts">
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {Button} from '@/components/ui/button'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Popover</h1>
			<p class="text-muted-foreground mt-2">
				Displays rich content in a portal, triggered by a button.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Popover>
	<PopoverTrigger as-child>
		<Button>Open Popover</Button>
	</PopoverTrigger>
	<PopoverContent class="w-80">
		<div class="grid gap-4">
			<div class="space-y-2">
				<h4 class="font-medium leading-none">Dimensions</h4>
				<p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
			</div>
		</div>
	</PopoverContent>
</Popover>
			</div>
		</div>
	</div>
</template>
