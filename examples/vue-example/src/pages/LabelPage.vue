<script setup lang="ts">
import {Label} from '@/components/ui/label'
import {Input} from '@/components/ui/input'
import {Checkbox} from '@/components/ui/checkbox'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Label</h1>
			<p class="text-muted-foreground mt-2">
				Renders an accessible label associated with controls.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">With Input</h2>
				<div class="grid w-full max-w-sm items-center gap-1.5">
					<Label for="email">Email</Label>
					<Input id="email" type="email" placeholder="Email" />
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">With Checkbox</h2>
				<div class="flex items-center space-x-2">
					<Checkbox id="terms" />
					<Label for="terms">Accept terms and conditions</Label>
				</div>
			</div>
		</div>
	</div>
</template>
