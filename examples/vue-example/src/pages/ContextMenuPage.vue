<script setup lang="ts">
import {ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger} from '@/components/ui/context-menu'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Context Menu</h1>
			<p class="text-muted-foreground mt-2">
				Displays a menu located at the pointer, triggered by a right-click.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<ContextMenu>
	<ContextMenuTrigger class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
		Right click here
	</ContextMenuTrigger>
	<ContextMenuContent>
		<ContextMenuItem>Back</ContextMenuItem>
		<ContextMenuItem>Forward</ContextMenuItem>
		<ContextMenuItem>Reload</ContextMenuItem>
	</ContextMenuContent>
</ContextMenu>
			</div>
		</div>
	</div>
</template>
