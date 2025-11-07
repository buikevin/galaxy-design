<script setup lang="ts">
import {Button} from '@/components/ui/button'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Button</h1>
			<p class="text-muted-foreground mt-2">
				Displays a button or a component that looks like a button.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Variants</h2>
				<div class="flex flex-wrap gap-4">
					<Button variant="default">Default</Button>
					<Button variant="secondary">Secondary</Button>
					<Button variant="destructive">Destructive</Button>
					<Button variant="outline">Outline</Button>
					<Button variant="ghost">Ghost</Button>
					<Button variant="link">Link</Button>
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Sizes</h2>
				<div class="flex items-center flex-wrap gap-4">
					<Button size="sm">Small</Button>
					<Button size="default">Default</Button>
					<Button size="lg">Large</Button>
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">States</h2>
				<div class="flex flex-wrap gap-4">
					<Button disabled>Disabled</Button>
				</div>
			</div>
		</div>
	</div>
</template>
