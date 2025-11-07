<script setup lang="ts">
import {Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList} from '@/components/ui/command'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Command</h1>
			<p class="text-muted-foreground mt-2">
				Fast, composable, unstyled command menu.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Command class="rounded-lg border shadow-md">
	<CommandInput placeholder="Type a command or search..." />
	<CommandList>
		<CommandEmpty>No results found.</CommandEmpty>
		<CommandGroup heading="Suggestions">
			<CommandItem>Calendar</CommandItem>
			<CommandItem>Search Emoji</CommandItem>
			<CommandItem>Calculator</CommandItem>
		</CommandGroup>
	</CommandList>
</Command>
			</div>
		</div>
	</div>
</template>
