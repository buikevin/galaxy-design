<script setup lang="ts">
import {Calendar} from '@/components/ui/calendar'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Calendar</h1>
			<p class="text-muted-foreground mt-2">
				A date field component that allows users to enter and edit date.
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
