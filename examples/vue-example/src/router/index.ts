import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
	{
		path: '/',
		component: () => import('../layouts/AdminLayout.vue'),
		children: [
			{
				path: '',
				name: 'Home',
				component: () => import('../pages/HomePage.vue'),
			},
			// Form Components
			{
				path: '/button',
				name: 'Button',
				component: () => import('../pages/ButtonPage.vue'),
			},
			{
				path: '/input',
				name: 'Input',
				component: () => import('../pages/InputPage.vue'),
			},
			{
				path: '/checkbox',
				name: 'Checkbox',
				component: () => import('../pages/CheckboxPage.vue'),
			},
			{
				path: '/radio-group',
				name: 'RadioGroup',
				component: () => import('../pages/RadioGroupPage.vue'),
			},
			{
				path: '/select',
				name: 'Select',
				component: () => import('../pages/SelectPage.vue'),
			},
			{
				path: '/slider',
				name: 'Slider',
				component: () => import('../pages/SliderPage.vue'),
			},
			{
				path: '/switch',
				name: 'Switch',
				component: () => import('../pages/SwitchPage.vue'),
			},
			{
				path: '/textarea',
				name: 'Textarea',
				component: () => import('../pages/TextareaPage.vue'),
			},
			{
				path: '/label',
				name: 'Label',
				component: () => import('../pages/LabelPage.vue'),
			},
			// Layout Components
			{
				path: '/separator',
				name: 'Separator',
				component: () => import('../pages/SeparatorPage.vue'),
			},
			{
				path: '/accordion',
				name: 'Accordion',
				component: () => import('../pages/AccordionPage.vue'),
			},
			{
				path: '/collapsible',
				name: 'Collapsible',
				component: () => import('../pages/CollapsiblePage.vue'),
			},
			{
				path: '/tabs',
				name: 'Tabs',
				component: () => import('../pages/TabsPage.vue'),
			},
			// Navigation Components
			{
				path: '/navigation-menu',
				name: 'NavigationMenu',
				component: () => import('../pages/NavigationMenuPage.vue'),
			},
			{
				path: '/menubar',
				name: 'Menubar',
				component: () => import('../pages/MenubarPage.vue'),
			},
			{
				path: '/context-menu',
				name: 'ContextMenu',
				component: () => import('../pages/ContextMenuPage.vue'),
			},
			{
				path: '/dropdown-menu',
				name: 'DropdownMenu',
				component: () => import('../pages/DropdownMenuPage.vue'),
			},
			// Overlay Components
			{
				path: '/dialog',
				name: 'Dialog',
				component: () => import('../pages/DialogPage.vue'),
			},
			{
				path: '/alert-dialog',
				name: 'AlertDialog',
				component: () => import('../pages/AlertDialogPage.vue'),
			},
			{
				path: '/popover',
				name: 'Popover',
				component: () => import('../pages/PopoverPage.vue'),
			},
			{
				path: '/tooltip',
				name: 'Tooltip',
				component: () => import('../pages/TooltipPage.vue'),
			},
			{
				path: '/hover-card',
				name: 'HoverCard',
				component: () => import('../pages/HoverCardPage.vue'),
			},
			// Data Display Components
			{
				path: '/avatar',
				name: 'Avatar',
				component: () => import('../pages/AvatarPage.vue'),
			},
			{
				path: '/progress',
				name: 'Progress',
				component: () => import('../pages/ProgressPage.vue'),
			},
			{
				path: '/table',
				name: 'Table',
				component: () => import('../pages/TablePage.vue'),
			},
			{
				path: '/pagination',
				name: 'Pagination',
				component: () => import('../pages/PaginationPage.vue'),
			},
			{
				path: '/empty',
				name: 'Empty',
				component: () => import('../pages/EmptyPage.vue'),
			},
			{
				path: '/skeleton',
				name: 'Skeleton',
				component: () => import('../pages/SkeletonPage.vue'),
			},
			// Typography & Utilities
			{
				path: '/typography',
				name: 'Typography',
				component: () => import('../pages/TypographyPage.vue'),
			},
			{
				path: '/kbd',
				name: 'Kbd',
				component: () => import('../pages/KbdPage.vue'),
			},
			// Date & Time
			{
				path: '/calendar',
				name: 'Calendar',
				component: () => import('../pages/CalendarPage.vue'),
			},
			{
				path: '/calendar-range',
				name: 'CalendarRange',
				component: () => import('../pages/CalendarRangePage.vue'),
			},
			// Advanced Components
			{
				path: '/command',
				name: 'Command',
				component: () => import('../pages/CommandPage.vue'),
			},
			{
				path: '/sheet',
				name: 'Sheet',
				component: () => import('../pages/SheetPage.vue'),
			},
			{
				path: '/toolbar',
				name: 'Toolbar',
				component: () => import('../pages/ToolbarPage.vue'),
			},
			{
				path: '/tags-input',
				name: 'TagsInput',
				component: () => import('../pages/TagsInputPage.vue'),
			},
		],
	},
]

const router = createRouter({
	history: createWebHistory(),
	routes,
})

export default router
