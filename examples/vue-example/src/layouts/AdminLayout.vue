<script setup lang="ts">
import {ref} from 'vue'
import {useRoute} from 'vue-router'
import {Button} from '@/components/ui/button'
import {
	ChevronDown,
	ChevronRight,
	LayoutDashboard,
	FormInput,
	Layout,
	Navigation,
	Layers,
	Database,
	Type,
	Calendar,
	Command,
} from 'lucide-vue-next'
import {cn} from '@/lib/utils'

interface MenuItem {
	name: string
	path: string
}

interface MenuSection {
	title: string
	icon: any
	items: MenuItem[]
}

const route = useRoute()
const expandedSections = ref<string[]>(['Form Components'])

const menuSections: MenuSection[] = [
	{
		title: 'Form Components',
		icon: FormInput,
		items: [
			{name: 'Button', path: '/button'},
			{name: 'Input', path: '/input'},
			{name: 'Checkbox', path: '/checkbox'},
			{name: 'Radio Group', path: '/radio-group'},
			{name: 'Select', path: '/select'},
			{name: 'Slider', path: '/slider'},
			{name: 'Switch', path: '/switch'},
			{name: 'Textarea', path: '/textarea'},
			{name: 'Label', path: '/label'},
		],
	},
	{
		title: 'Layout Components',
		icon: Layout,
		items: [
			{name: 'Separator', path: '/separator'},
			{name: 'Accordion', path: '/accordion'},
			{name: 'Collapsible', path: '/collapsible'},
			{name: 'Tabs', path: '/tabs'},
		],
	},
	{
		title: 'Navigation Components',
		icon: Navigation,
		items: [
			{name: 'Navigation Menu', path: '/navigation-menu'},
			{name: 'Menubar', path: '/menubar'},
			{name: 'Context Menu', path: '/context-menu'},
			{name: 'Dropdown Menu', path: '/dropdown-menu'},
		],
	},
	{
		title: 'Overlay Components',
		icon: Layers,
		items: [
			{name: 'Dialog', path: '/dialog'},
			{name: 'Alert Dialog', path: '/alert-dialog'},
			{name: 'Popover', path: '/popover'},
			{name: 'Tooltip', path: '/tooltip'},
			{name: 'Hover Card', path: '/hover-card'},
		],
	},
	{
		title: 'Data Display Components',
		icon: Database,
		items: [
			{name: 'Avatar', path: '/avatar'},
			{name: 'Progress', path: '/progress'},
			{name: 'Table', path: '/table'},
			{name: 'Pagination', path: '/pagination'},
			{name: 'Empty', path: '/empty'},
			{name: 'Skeleton', path: '/skeleton'},
		],
	},
	{
		title: 'Typography & Utilities',
		icon: Type,
		items: [
			{name: 'Typography', path: '/typography'},
			{name: 'Kbd', path: '/kbd'},
		],
	},
	{
		title: 'Date & Time',
		icon: Calendar,
		items: [
			{name: 'Calendar', path: '/calendar'},
			{name: 'Calendar Range', path: '/calendar-range'},
		],
	},
	{
		title: 'Advanced Components',
		icon: Command,
		items: [
			{name: 'Command', path: '/command'},
			{name: 'Sheet', path: '/sheet'},
			{name: 'Toolbar', path: '/toolbar'},
			{name: 'Tags Input', path: '/tags-input'},
		],
	},
]

const toggleSection = (title: string) => {
	const index = expandedSections.value.indexOf(title)
	if (index === -1) {
		expandedSections.value.push(title)
	} else {
		expandedSections.value.splice(index, 1)
	}
}

const isExpanded = (title: string) => expandedSections.value.includes(title)
const isActive = (path: string) => route.path === path
</script>

<template>
	<div class="flex h-screen bg-background">
		<!-- Sidebar -->
		<aside class="w-64 border-r bg-card shadow-sm">
			<div class="flex h-16 items-center gap-2 border-b px-6 bg-background/50">
				<LayoutDashboard class="h-6 w-6 text-primary" />
				<h1 class="text-xl font-bold tracking-tight">Galaxy UI</h1>
			</div>

			<div class="h-[calc(100vh-4rem)] overflow-y-auto">
				<div class="p-3 space-y-1">
					<div v-for="section in menuSections" :key="section.title">
						<Button
							variant="ghost"
							class="w-full justify-between hover:bg-accent text-sm"
							@click="toggleSection(section.title)"
						>
							<span class="flex items-center gap-2 font-medium">
								<component :is="section.icon" class="h-4 w-4" />
								<span>{{ section.title }}</span>
							</span>
							<ChevronDown v-if="isExpanded(section.title)" class="h-4 w-4" />
							<ChevronRight v-else class="h-4 w-4" />
						</Button>

						<div v-if="isExpanded(section.title)" class="ml-6 mt-1 space-y-0.5 mb-2">
							<router-link
								v-for="item in section.items"
								:key="item.path"
								:to="item.path"
							>
								<Button
									variant="ghost"
									size="sm"
									:class="
										cn(
											'w-full justify-start text-sm font-normal',
											isActive(item.path) &&
												'bg-accent text-accent-foreground font-medium'
										)
									"
								>
									{{ item.name }}
								</Button>
							</router-link>
						</div>
					</div>
				</div>
			</div>
		</aside>

		<!-- Main Content -->
		<main class="flex-1 overflow-auto bg-background p-8">
			<router-view />
		</main>
	</div>
</template>
