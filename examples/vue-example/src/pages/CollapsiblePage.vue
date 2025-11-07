<script setup lang="ts">
import {ref} from 'vue'
import {Collapsible, CollapsibleContent, CollapsibleTrigger} from '@/components/ui/collapsible'
import {Button} from '@/components/ui/button'
import {ChevronsUpDown} from 'lucide-vue-next'

const isOpen = ref(false)
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Collapsible</h1>
			<p class="text-muted-foreground mt-2">
				An interactive component which expands/collapses a panel.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Default</h2>
				<Collapsible v-model:open="isOpen" class="w-[350px] space-y-2">
					<div class="flex items-center justify-between space-x-4 px-4">
						<h4 class="text-sm font-semibold">@peduarte starred 3 repositories</h4>
						<CollapsibleTrigger as-child>
							<Button variant="ghost" size="sm" class="w-9 p-0">
								<ChevronsUpDown class="h-4 w-4" />
								<span class="sr-only">Toggle</span>
							</Button>
						</CollapsibleTrigger>
					</div>
					<div class="rounded-md border px-4 py-3 font-mono text-sm">
						@radix-ui/primitives
					</div>
					<CollapsibleContent class="space-y-2">
						<div class="rounded-md border px-4 py-3 font-mono text-sm">
							@radix-ui/colors
						</div>
						<div class="rounded-md border px-4 py-3 font-mono text-sm">
							@stitches/react
						</div>
					</CollapsibleContent>
				</Collapsible>
			</div>
		</div>
	</div>
</template>
