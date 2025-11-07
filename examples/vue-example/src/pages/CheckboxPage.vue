<script setup lang="ts">
import {Checkbox} from '@/components/ui/checkbox'
import {Label} from '@/components/ui/label'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Checkbox</h1>
			<p class="text-muted-foreground mt-2">
				A control that allows the user to toggle between checked and not checked.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<Checkbox id="terms" />
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">With Label</h2>
				<div class="flex items-center space-x-2">
					<Checkbox id="terms2" />
					<Label for="terms2">Accept terms and conditions</Label>
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Disabled</h2>
				<div class="flex items-center space-x-2">
					<Checkbox id="terms3" disabled />
					<Label for="terms3">Disabled checkbox</Label>
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Multiple Checkboxes</h2>
				<div class="space-y-2">
					<div class="flex items-center space-x-2">
						<Checkbox id="option1" />
						<Label for="option1">Option 1</Label>
					</div>
					<div class="flex items-center space-x-2">
						<Checkbox id="option2" />
						<Label for="option2">Option 2</Label>
					</div>
					<div class="flex items-center space-x-2">
						<Checkbox id="option3" />
						<Label for="option3">Option 3</Label>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
