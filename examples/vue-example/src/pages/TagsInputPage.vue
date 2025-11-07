<script setup lang="ts">
import {TagsInput, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText} from '@/components/ui/tags-input'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Tags Input</h1>
			<p class="text-muted-foreground mt-2">
				Tags input component for entering multiple values.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<TagsInput :model-value="['React', 'Vue', 'Angular']">
	<TagsInputItem v-for="item in ['React', 'Vue', 'Angular']" :key="item" :value="item">
		<TagsInputItemText />
		<TagsInputItemDelete />
	</TagsInputItem>
	<TagsInputInput placeholder="Add tag..." />
</TagsInput>
			</div>
		</div>
	</div>
</template>
