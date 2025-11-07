<script setup lang="ts">
import {Textarea} from '@/components/ui/textarea'
import {Label} from '@/components/ui/label'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Textarea</h1>
			<p class="text-muted-foreground mt-2">
				Displays a form textarea or a component that looks like a textarea.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<Textarea placeholder="Type your message here." />
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">With Label</h2>
				<div class="grid w-full gap-1.5">
					<Label for="message">Your message</Label>
					<Textarea id="message" placeholder="Type your message here." />
				</div>
			</div>

			<div>
				<h2 class="text-xl font-semibold mb-4">Disabled</h2>
				<Textarea disabled placeholder="Disabled textarea" />
			</div>
		</div>
	</div>
</template>
