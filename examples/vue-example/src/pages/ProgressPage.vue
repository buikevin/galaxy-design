<script setup lang="ts">
import {Progress} from '@/components/ui/progress'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Progress</h1>
			<p class="text-muted-foreground mt-2">
				Displays an indicator showing the completion progress of a task.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<div class="w-[60%] space-y-4">
	<Progress :model-value="33" />
	<Progress :model-value="66" />
	<Progress :model-value="100" />
</div>
			</div>
		</div>
	</div>
</template>
