<script setup lang="ts">
import {Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger} from '@/components/ui/menubar'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Menubar</h1>
			<p class="text-muted-foreground mt-2">
				A visually persistent menu common in desktop applications.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Menubar>
	<MenubarMenu>
		<MenubarTrigger>File</MenubarTrigger>
		<MenubarContent>
			<MenubarItem>New Tab</MenubarItem>
			<MenubarItem>New Window</MenubarItem>
			<MenubarItem>Close</MenubarItem>
		</MenubarContent>
	</MenubarMenu>
	<MenubarMenu>
		<MenubarTrigger>Edit</MenubarTrigger>
		<MenubarContent>
			<MenubarItem>Undo</MenubarItem>
			<MenubarItem>Redo</MenubarItem>
		</MenubarContent>
	</MenubarMenu>
</Menubar>
			</div>
		</div>
	</div>
</template>
