<script setup lang="ts">
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {Button} from '@/components/ui/button'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Dropdown Menu</h1>
			<p class="text-muted-foreground mt-2">
				Displays a menu to the user—such as a set of actions or functions—triggered by a button.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<DropdownMenu>
	<DropdownMenuTrigger as-child>
		<Button>Open Menu</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent>
		<DropdownMenuItem>Profile</DropdownMenuItem>
		<DropdownMenuItem>Settings</DropdownMenuItem>
		<DropdownMenuItem>Logout</DropdownMenuItem>
	</DropdownMenuContent>
</DropdownMenu>
			</div>
		</div>
	</div>
</template>
