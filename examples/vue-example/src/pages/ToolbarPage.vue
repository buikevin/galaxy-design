<script setup lang="ts">
import {Toolbar, ToolbarButton, ToolbarLink, ToolbarSeparator, ToolbarToggleGroup, ToolbarToggleItem} from '@/components/ui/toolbar'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Toolbar</h1>
			<p class="text-muted-foreground mt-2">
				A container for grouping a set of controls.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Toolbar>
	<ToolbarButton>Action 1</ToolbarButton>
	<ToolbarSeparator />
	<ToolbarButton>Action 2</ToolbarButton>
	<ToolbarLink href="#">Link</ToolbarLink>
</Toolbar>
			</div>
		</div>
	</div>
</template>
