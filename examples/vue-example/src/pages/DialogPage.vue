<script setup lang="ts">
import {Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger} from '@/components/ui/dialog'
import {Button} from '@/components/ui/button'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Dialog</h1>
			<p class="text-muted-foreground mt-2">
				A window overlaid on either the primary window or another dialog window.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Dialog>
	<DialogTrigger as-child>
		<Button>Open Dialog</Button>
	</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Are you absolutely sure?</DialogTitle>
			<DialogDescription>
				This action cannot be undone. This will permanently delete your account.
			</DialogDescription>
		</DialogHeader>
	</DialogContent>
</Dialog>
			</div>
		</div>
	</div>
</template>
