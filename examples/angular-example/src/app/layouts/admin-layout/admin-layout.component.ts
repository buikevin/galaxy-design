import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {CommonModule} from '@angular/common';

interface MenuItem {
	name: string;
	path: string;
}

interface MenuSection {
	title: string;
	icon: string;
	items: MenuItem[];
}

@Component({
	selector: 'app-admin-layout',
	standalone: true,
	imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
	templateUrl: './admin-layout.component.html',
	styleUrls: ['./admin-layout.component.css'],
})
export class AdminLayoutComponent {
	expandedSections: string[] = ['Form Components'];

	menuSections: MenuSection[] = [
		{
			title: 'Form Components',
			icon: 'form-input',
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
			icon: 'layout',
			items: [
				{name: 'Separator', path: '/separator'},
				{name: 'Accordion', path: '/accordion'},
				{name: 'Collapsible', path: '/collapsible'},
				{name: 'Tabs', path: '/tabs'},
				{name: 'Scroll Area', path: '/scroll-area'},
				{name: 'Aspect Ratio', path: '/aspect-ratio'},
				{name: 'Resizable', path: '/resizable'},
				{name: 'Sheet', path: '/sheet'},
				{name: 'Toolbar', path: '/toolbar'},
			],
		},
		{
			title: 'Navigation Components',
			icon: 'navigation',
			items: [
				{name: 'Navigation Menu', path: '/navigation-menu'},
				{name: 'Menubar', path: '/menubar'},
				{name: 'Context Menu', path: '/context-menu'},
				{name: 'Dropdown Menu', path: '/dropdown-menu'},
				{name: 'Pagination', path: '/pagination'},
				{name: 'Command', path: '/command'},
			],
		},
		{
			title: 'Overlay Components',
			icon: 'layers',
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
			icon: 'database',
			items: [
				{name: 'Avatar', path: '/avatar'},
				{name: 'Progress', path: '/progress'},
				{name: 'Table', path: '/table'},
				{name: 'Empty', path: '/empty'},
				{name: 'Skeleton', path: '/skeleton'},
				{name: 'Kbd', path: '/kbd'},
				{name: 'Typography', path: '/typography'},
			],
		},
		{
			title: 'Date & Time',
			icon: 'calendar',
			items: [
				{name: 'Calendar', path: '/calendar'},
				{name: 'Calendar Range', path: '/calendar-range'},
			],
		},
		{
			title: 'Interactive Components',
			icon: 'toggle',
			items: [
				{name: 'Toggle', path: '/toggle'},
				{name: 'Toggle Group', path: '/toggle-group'},
			],
		},
		{
			title: 'Advanced Components',
			icon: 'command',
			items: [
				{name: 'Command', path: '/command'},
				{name: 'Sheet', path: '/sheet'},
				{name: 'Toolbar', path: '/toolbar'},
				{name: 'Tags Input', path: '/tags-input'},
			],
		},
	];

	toggleSection(title: string): void {
		const index = this.expandedSections.indexOf(title);
		if (index === -1) {
			this.expandedSections.push(title);
		} else {
			this.expandedSections.splice(index, 1);
		}
	}

	isExpanded(title: string): boolean {
		return this.expandedSections.includes(title);
	}
}
