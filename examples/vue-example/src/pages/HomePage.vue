<script setup lang="ts"></script>

<template>
	<div class="space-y-6">
		<div>
			<h1 class="text-4xl font-bold">Welcome to Galaxy UI</h1>
			<p class="text-muted-foreground mt-2">
				Explore 41 production-ready components for React, Vue, and Angular
			</p>
		</div>

		<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
			<div class="rounded-lg border p-6">
				<h3 class="font-semibold mb-2">Form Components</h3>
				<p class="text-sm text-muted-foreground">
					9 components including Button, Input, Checkbox, Select, and more
				</p>
			</div>

			<div class="rounded-lg border p-6">
				<h3 class="font-semibold mb-2">Layout Components</h3>
				<p class="text-sm text-muted-foreground">
					4 components for organizing content: Accordion, Tabs, Separator, Collapsible
				</p>
			</div>

			<div class="rounded-lg border p-6">
				<h3 class="font-semibold mb-2">Navigation Components</h3>
				<p class="text-sm text-muted-foreground">
					4 components: Navigation Menu, Menubar, Context Menu, Dropdown Menu
				</p>
			</div>

			<div class="rounded-lg border p-6">
				<h3 class="font-semibold mb-2">Overlay Components</h3>
				<p class="text-sm text-muted-foreground">
					5 components: Dialog, Alert Dialog, Popover, Tooltip, Hover Card
				</p>
			</div>

			<div class="rounded-lg border p-6">
				<h3 class="font-semibold mb-2">Data Display</h3>
				<p class="text-sm text-muted-foreground">
					6 components: Avatar, Progress, Table, Pagination, Empty, Skeleton
				</p>
			</div>

			<div class="rounded-lg border p-6">
				<h3 class="font-semibold mb-2">Typography & Utilities</h3>
				<p class="text-sm text-muted-foreground">2 components: Typography and Kbd</p>
			</div>
		</div>

		<div class="rounded-lg border p-6 bg-muted/50">
			<h3 class="font-semibold mb-2">Getting Started</h3>
			<p class="text-sm text-muted-foreground mb-4">
				Select any component from the sidebar to see live examples and implementation
				details.
			</p>
			<ul class="text-sm space-y-1 text-muted-foreground">
				<li>✓ Built with Radix Vue primitives</li>
				<li>✓ Styled with Tailwind CSS</li>
				<li>✓ Fully accessible (WAI-ARIA compliant)</li>
				<li>✓ TypeScript support</li>
				<li>✓ Dark mode ready</li>
			</ul>
		</div>
	</div>
</template>
