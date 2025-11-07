<script setup lang="ts">
import {Skeleton} from '@/components/ui/skeleton'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Skeleton</h1>
			<p class="text-muted-foreground mt-2">
				Use to show a placeholder while content is loading.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<div class="flex items-center space-x-4">
	<Skeleton class="h-12 w-12 rounded-full" />
	<div class="space-y-2">
		<Skeleton class="h-4 w-[250px]" />
		<Skeleton class="h-4 w-[200px]" />
	</div>
</div>
			</div>
		</div>
	</div>
</template>
