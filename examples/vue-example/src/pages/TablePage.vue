<script setup lang="ts">
import {Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow} from '@/components/ui/table'
</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">Table</h1>
			<p class="text-muted-foreground mt-2">
				A responsive table component.
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				<Table>
	<TableCaption>A list of your recent invoices.</TableCaption>
	<TableHeader>
		<TableRow>
			<TableHead class="w-[100px]">Invoice</TableHead>
			<TableHead>Status</TableHead>
			<TableHead>Method</TableHead>
			<TableHead class="text-right">Amount</TableHead>
		</TableRow>
	</TableHeader>
	<TableBody>
		<TableRow>
			<TableCell class="font-medium">INV001</TableCell>
			<TableCell>Paid</TableCell>
			<TableCell>Credit Card</TableCell>
			<TableCell class="text-right">$250.00</TableCell>
		</TableRow>
	</TableBody>
</Table>
			</div>
		</div>
	</div>
</template>
