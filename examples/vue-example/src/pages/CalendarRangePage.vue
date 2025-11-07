<script setup lang="ts">
import {Calendar} from '@/components/ui/calendar-range'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Calendar Range</h1>
			<p class="text-muted-foreground mt-2">
				A calendar component for selecting date ranges.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Calendar />
			</div>
		</div>
	</div>
</template>
