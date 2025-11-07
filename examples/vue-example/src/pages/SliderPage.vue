<script setup lang="ts">
import {Slider} from '@/components/ui/slider'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Slider</h1>
			<p class="text-muted-foreground mt-2">
				An input where the user selects a value from within a given range.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<Slider :default-value="[50]" :max="100" :step="1" class="w-[60%]" />
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Range Slider</h2>
				<Slider :default-value="[25, 75]" :max="100" :step="1" class="w-[60%]" />
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Disabled</h2>
				<Slider :default-value="[50]" :max="100" :step="1" disabled class="w-[60%]" />
			</div>
		</div>
	</div>
</template>
