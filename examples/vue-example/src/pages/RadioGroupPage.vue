<script setup lang="ts">
import {RadioGroup, RadioGroupItem} from '@/components/ui/radio-group'
import {Label} from '@/components/ui/label'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Radio Group</h1>
			<p class="text-muted-foreground mt-2">
				A set of checkable buttons—known as radio buttons—where no more than one of the
				buttons can be checked at a time.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<RadioGroup default-value="option-one">
					<div class="flex items-center space-x-2">
						<RadioGroupItem id="option-one" value="option-one" />
						<Label for="option-one">Option One</Label>
					</div>
					<div class="flex items-center space-x-2">
						<RadioGroupItem id="option-two" value="option-two" />
						<Label for="option-two">Option Two</Label>
					</div>
					<div class="flex items-center space-x-2">
						<RadioGroupItem id="option-three" value="option-three" />
						<Label for="option-three">Option Three</Label>
					</div>
				</RadioGroup>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Disabled</h2>
				<RadioGroup default-value="disabled-one" disabled>
					<div class="flex items-center space-x-2">
						<RadioGroupItem id="disabled-one" value="disabled-one" />
						<Label for="disabled-one">Disabled Option One</Label>
					</div>
					<div class="flex items-center space-x-2">
						<RadioGroupItem id="disabled-two" value="disabled-two" />
						<Label for="disabled-two">Disabled Option Two</Label>
					</div>
				</RadioGroup>
			</div>
		</div>
	</div>
</template>
