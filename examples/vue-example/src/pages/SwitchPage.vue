<script setup lang="ts">
import {Switch} from '@/components/ui/switch'
import {Label} from '@/components/ui/label'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Switch</h1>
			<p class="text-muted-foreground mt-2">
				A control that allows the user to toggle between checked and not checked.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<Switch id="switch-default" />
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">With Label</h2>
				<div class="flex items-center space-x-2">
					<Switch id="airplane-mode" />
					<Label for="airplane-mode">Airplane Mode</Label>
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Disabled</h2>
				<div class="flex items-center space-x-2">
					<Switch id="switch-disabled" disabled />
					<Label for="switch-disabled">Disabled Switch</Label>
				</div>
			</div>
		</div>
	</div>
</template>
