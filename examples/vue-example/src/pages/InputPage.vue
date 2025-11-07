<script setup lang="ts">
import {Input} from '@/components/ui/input'
import {Label} from '@/components/ui/label'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Input</h1>
			<p class="text-muted-foreground mt-2">
				Displays a form input field or a component that looks like an input field.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<Input placeholder="Type something..." />
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">With Label</h2>
				<div class="grid w-full max-w-sm items-center gap-1.5">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="Email" />
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Disabled</h2>
				<Input disabled placeholder="Disabled input" />
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Input Types</h2>
				<div class="space-y-2">
					<Input type="text" placeholder="Text input" />
					<Input type="password" placeholder="Password input" />
					<Input type="email" placeholder="Email input" />
					<Input type="number" placeholder="Number input" />
				</div>
			</div>
		</div>
	</div>
</template>
