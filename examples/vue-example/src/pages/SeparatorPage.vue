<script setup lang="ts">
import {Separator} from '@/components/ui/separator'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Separator</h1>
			<p class="text-muted-foreground mt-2">
				Visually or semantically separates content.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Horizontal</h2>
				<div>
					<div class="space-y-1">
						<h4 class="text-sm font-medium leading-none">Radix Primitives</h4>
						<p class="text-sm text-muted-foreground">
							An open-source UI component library.
						</p>
					</div>
					<Separator class="my-4" />
					<div class="flex h-5 items-center space-x-4 text-sm">
						<div>Blog</div>
						<Separator orientation="vertical" />
						<div>Docs</div>
						<Separator orientation="vertical" />
						<div>Source</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
