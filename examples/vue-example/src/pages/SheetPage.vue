<script setup lang="ts">
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from '@/components/ui/sheet'
import {Button} from '@/components/ui/button'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Sheet</h1>
			<p class="text-muted-foreground mt-2">
				Extends the Dialog component to display content that complements the main content.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Sheet>
	<SheetTrigger as-child>
		<Button>Open Sheet</Button>
	</SheetTrigger>
	<SheetContent>
		<SheetHeader>
			<SheetTitle>Edit profile</SheetTitle>
			<SheetDescription>
				Make changes to your profile here. Click save when you're done.
			</SheetDescription>
		</SheetHeader>
	</SheetContent>
</Sheet>
			</div>
		</div>
	</div>
</template>
