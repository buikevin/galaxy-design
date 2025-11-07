<script setup lang="ts">
import {Pagination, PaginationEllipsis, PaginationFirst, PaginationLast, PaginationList, PaginationListItem, PaginationNext, PaginationPrev} from '@/components/ui/pagination'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Pagination</h1>
			<p class="text-muted-foreground mt-2">
				Pagination with page navigation, next and previous links.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Pagination>
	<PaginationList>
		<PaginationFirst />
		<PaginationPrev />
		<PaginationListItem value="1" />
		<PaginationListItem value="2" />
		<PaginationEllipsis />
		<PaginationNext />
		<PaginationLast />
	</PaginationList>
</Pagination>
			</div>
		</div>
	</div>
</template>
