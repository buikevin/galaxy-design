import {Routes} from '@angular/router';

export const routes: Routes = [
	{
		path: '',
		loadComponent: () =>
			import('./layouts/admin-layout/admin-layout.component').then(
				m => m.AdminLayoutComponent
			),
		children: [
			{
				path: '',
				loadComponent: () =>
					import('./pages/home/home.component').then(m => m.HomeComponent),
			},
			// Form Components
			{
				path: 'button',
				loadComponent: () =>
					import('./pages/button/button.component').then(m => m.ButtonComponent),
			},
			{
				path: 'input',
				loadComponent: () =>
					import('./pages/input/input.component').then(m => m.InputComponent),
			},
			{
				path: 'checkbox',
				loadComponent: () =>
					import('./pages/checkbox/checkbox.component').then(m => m.CheckboxComponent),
			},
			{
				path: 'radio-group',
				loadComponent: () =>
					import('./pages/radio-group/radio-group.component').then(
						m => m.RadioGroupComponent
					),
			},
			{
				path: 'select',
				loadComponent: () =>
					import('./pages/select/select.component').then(m => m.SelectComponent),
			},
			{
				path: 'slider',
				loadComponent: () =>
					import('./pages/slider/slider.component').then(m => m.SliderComponent),
			},
			{
				path: 'switch',
				loadComponent: () =>
					import('./pages/switch/switch.component').then(m => m.SwitchComponent),
			},
			{
				path: 'textarea',
				loadComponent: () =>
					import('./pages/textarea/textarea.component').then(m => m.TextareaComponent),
			},
			{
				path: 'label',
				loadComponent: () =>
					import('./pages/label/label.component').then(m => m.LabelComponent),
			},
			// Layout Components
			{
				path: 'separator',
				loadComponent: () =>
					import('./pages/separator/separator.component').then(m => m.SeparatorComponent),
			},
			{
				path: 'accordion',
				loadComponent: () =>
					import('./pages/accordion/accordion.component').then(m => m.AccordionComponent),
			},
			{
				path: 'collapsible',
				loadComponent: () =>
					import('./pages/collapsible/collapsible.component').then(
						m => m.CollapsibleComponent
					),
			},
			{
				path: 'tabs',
				loadComponent: () =>
					import('./pages/tabs/tabs.component').then(m => m.TabsComponent),
			},
			{
				path: 'scroll-area',
				loadComponent: () =>
					import('./pages/scroll-area/scroll-area.component').then(
						m => m.ScrollAreaComponent
					),
			},
			{
				path: 'aspect-ratio',
				loadComponent: () =>
					import('./pages/aspect-ratio/aspect-ratio.component').then(
						m => m.AspectRatioComponent
					),
			},
			{
				path: 'resizable',
				loadComponent: () =>
					import('./pages/resizable/resizable.component').then(
						m => m.ResizableComponent
					),
			},
			// Navigation Components
			{
				path: 'navigation-menu',
				loadComponent: () =>
					import('./pages/navigation-menu/navigation-menu.component').then(
						m => m.NavigationMenuComponent
					),
			},
			{
				path: 'menubar',
				loadComponent: () =>
					import('./pages/menubar/menubar.component').then(m => m.MenubarComponent),
			},
			{
				path: 'context-menu',
				loadComponent: () =>
					import('./pages/context-menu/context-menu.component').then(
						m => m.ContextMenuComponent
					),
			},
			{
				path: 'dropdown-menu',
				loadComponent: () =>
					import('./pages/dropdown-menu/dropdown-menu.component').then(
						m => m.DropdownMenuComponent
					),
			},
			// Overlay Components
			{
				path: 'dialog',
				loadComponent: () =>
					import('./pages/dialog/dialog.component').then(m => m.DialogComponent),
			},
			{
				path: 'alert-dialog',
				loadComponent: () =>
					import('./pages/alert-dialog/alert-dialog.component').then(
						m => m.AlertDialogComponent
					),
			},
			{
				path: 'popover',
				loadComponent: () =>
					import('./pages/popover/popover.component').then(m => m.PopoverComponent),
			},
			{
				path: 'tooltip',
				loadComponent: () =>
					import('./pages/tooltip/tooltip.component').then(m => m.TooltipComponent),
			},
			{
				path: 'hover-card',
				loadComponent: () =>
					import('./pages/hover-card/hover-card.component').then(m => m.HoverCardComponent),
			},
			// Data Display Components
			{
				path: 'avatar',
				loadComponent: () =>
					import('./pages/avatar/avatar.component').then(m => m.AvatarComponent),
			},
			{
				path: 'progress',
				loadComponent: () =>
					import('./pages/progress/progress.component').then(m => m.ProgressComponent),
			},
			{
				path: 'table',
				loadComponent: () =>
					import('./pages/table/table.component').then(m => m.TableComponent),
			},
			{
				path: 'pagination',
				loadComponent: () =>
					import('./pages/pagination/pagination.component').then(m => m.PaginationComponent),
			},
			{
				path: 'empty',
				loadComponent: () =>
					import('./pages/empty/empty.component').then(m => m.EmptyComponent),
			},
			{
				path: 'skeleton',
				loadComponent: () =>
					import('./pages/skeleton/skeleton.component').then(m => m.SkeletonComponent),
			},
			// Typography & Utilities
			{
				path: 'typography',
				loadComponent: () =>
					import('./pages/typography/typography.component').then(
						m => m.TypographyComponent
					),
			},
			{
				path: 'kbd',
				loadComponent: () =>
					import('./pages/kbd/kbd.component').then(m => m.KbdComponent),
			},
			// Date & Time
			{
				path: 'calendar',
				loadComponent: () =>
					import('./pages/calendar/calendar.component').then(m => m.CalendarComponent),
			},
			{
				path: 'calendar-range',
				loadComponent: () =>
					import('./pages/calendar-range/calendar-range.component').then(
						m => m.CalendarRangeComponent
					),
			},
			// Interactive Components
			{
				path: 'toggle',
				loadComponent: () =>
					import('./pages/toggle/toggle.component').then(m => m.ToggleComponent),
			},
			{
				path: 'toggle-group',
				loadComponent: () =>
					import('./pages/toggle-group/toggle-group.component').then(
						m => m.ToggleGroupComponent
					),
			},
			// Advanced Components
			{
				path: 'command',
				loadComponent: () =>
					import('./pages/command/command.component').then(m => m.CommandComponent),
			},
			{
				path: 'sheet',
				loadComponent: () =>
					import('./pages/sheet/sheet.component').then(m => m.SheetComponent),
			},
			{
				path: 'toolbar',
				loadComponent: () =>
					import('./pages/toolbar/toolbar.component').then(m => m.ToolbarComponent),
			},
			{
				path: 'tags-input',
				loadComponent: () =>
					import('./pages/tags-input/tags-input.component').then(m => m.TagsInputComponent),
			},
		],
	},
];
