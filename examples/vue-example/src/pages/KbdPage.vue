<script setup lang="ts">
import {Kbd} from '@/components/ui/kbd'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Kbd</h1>
			<p class="text-muted-foreground mt-2">
				The Keyboard Input element represents a span of inline text denoting textual user input.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<div class="flex gap-2">
	<Kbd>Ctrl</Kbd>
	<span>+</span>
	<Kbd>C</Kbd>
</div>
			</div>
		</div>
	</div>
</template>
