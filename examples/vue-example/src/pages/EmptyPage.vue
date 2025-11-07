<script setup lang="ts">
import {Empty} from '@/components/ui/empty'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Empty</h1>
			<p class="text-muted-foreground mt-2">
				Empty state placeholder.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Empty description="No data available" />
			</div>
		</div>
	</div>
</template>
