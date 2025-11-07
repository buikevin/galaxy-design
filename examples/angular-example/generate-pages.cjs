const fs = require('fs');
const path = require('path');

const components = [
	// Form Components
	{name: 'Button', title: 'Button', description: 'Displays a button or a component that looks like a button.'},
	{name: 'Input', title: 'Input', description: 'Displays a form input field or a component that looks like an input field.'},
	{name: 'Checkbox', title: 'Checkbox', description: 'A control that allows the user to toggle between checked and not checked.'},
	{name: 'RadioGroup', title: 'Radio Group', description: 'A set of checkable buttons—known as radio buttons—where no more than one of the buttons can be checked at a time.'},
	{name: 'Select', title: 'Select', description: 'Displays a list of options for the user to pick from—triggered by a button.'},
	{name: 'Slider', title: 'Slider', description: 'An input where the user selects a value from within a given range.'},
	{name: 'Switch', title: 'Switch', description: 'A control that allows the user to toggle between checked and not checked.'},
	{name: 'Textarea', title: 'Textarea', description: 'Displays a form textarea or a component that looks like a textarea.'},
	{name: 'Label', title: 'Label', description: 'Renders an accessible label associated with controls.'},

	// Layout Components
	{name: 'Separator', title: 'Separator', description: 'Visually or semantically separates content.'},
	{name: 'Accordion', title: 'Accordion', description: 'A vertically stacked set of interactive headings that each reveal a section of content.'},
	{name: 'Collapsible', title: 'Collapsible', description: 'An interactive component which expands/collapses a panel.'},
	{name: 'Tabs', title: 'Tabs', description: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.'},

	// Navigation Components
	{name: 'NavigationMenu', title: 'Navigation Menu', description: 'A collection of links for navigating websites.'},
	{name: 'Menubar', title: 'Menubar', description: 'A visually persistent menu common in desktop applications.'},
	{name: 'ContextMenu', title: 'Context Menu', description: 'Displays a menu located at the pointer, triggered by a right-click.'},
	{name: 'DropdownMenu', title: 'Dropdown Menu', description: 'Displays a menu to the user—such as a set of actions or functions—triggered by a button.'},

	// Overlay Components
	{name: 'Dialog', title: 'Dialog', description: 'A window overlaid on either the primary window or another dialog window.'},
	{name: 'AlertDialog', title: 'Alert Dialog', description: 'A modal dialog that interrupts the user with important content.'},
	{name: 'Popover', title: 'Popover', description: 'Displays rich content in a portal, triggered by a button.'},
	{name: 'Tooltip', title: 'Tooltip', description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.'},
	{name: 'HoverCard', title: 'Hover Card', description: 'For sighted users to preview content available behind a link.'},

	// Data Display Components
	{name: 'Avatar', title: 'Avatar', description: 'An image element with a fallback for representing the user.'},
	{name: 'Progress', title: 'Progress', description: 'Displays an indicator showing the completion progress of a task.'},
	{name: 'Table', title: 'Table', description: 'A responsive table component.'},
	{name: 'Pagination', title: 'Pagination', description: 'Pagination with page navigation, next and previous links.'},
	{name: 'Empty', title: 'Empty', description: 'Empty state placeholder.'},
	{name: 'Skeleton', title: 'Skeleton', description: 'Use to show a placeholder while content is loading.'},

	// Typography & Utilities
	{name: 'Typography', title: 'Typography', description: 'Typography styles and components.'},
	{name: 'Kbd', title: 'Kbd', description: 'The Keyboard Input element represents a span of inline text denoting textual user input.'},

	// Date & Time
	{name: 'Calendar', title: 'Calendar', description: 'A date field component that allows users to enter and edit date.'},
	{name: 'CalendarRange', title: 'Calendar Range', description: 'A calendar component for selecting date ranges.'},

	// Advanced Components
	{name: 'Command', title: 'Command', description: 'Fast, composable, unstyled command menu.'},
	{name: 'Sheet', title: 'Sheet', description: 'Extends the Dialog component to display content that complements the main content.'},
	{name: 'Toolbar', title: 'Toolbar', description: 'A container for grouping a set of controls.'},
	{name: 'TagsInput', title: 'Tags Input', description: 'Tags input component for entering multiple values.'},
];

const pagesDir = path.join(__dirname, 'src', 'app', 'pages');

// Create pages directory if it doesn't exist
if (!fs.existsSync(pagesDir)) {
	fs.mkdirSync(pagesDir, {recursive: true});
}

components.forEach(({name, title, description}) => {
	const kebabCase = name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
	const componentDir = path.join(pagesDir, kebabCase);

	// Create component directory
	if (!fs.existsSync(componentDir)) {
		fs.mkdirSync(componentDir, {recursive: true});
	}

	// TypeScript file
	const tsContent = `import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
	selector: 'app-${kebabCase}',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './${kebabCase}.component.html',
	styleUrls: ['./${kebabCase}.component.css'],
})
export class ${name}Component {}
`;

	// HTML file
	const htmlContent = `<div class="space-y-8">
	<div>
		<h1 class="text-3xl font-bold">${title}</h1>
		<p class="text-muted-foreground mt-2">
			${description}
		</p>
	</div>

	<div class="space-y-4">
		<div>
			<h2 class="text-xl font-semibold mb-4">Example</h2>
			<div class="rounded-lg border p-6">
				<p class="text-sm text-muted-foreground">
					${title} component examples will be displayed here.
				</p>
			</div>
		</div>
	</div>
</div>
`;

	// CSS file
	const cssContent = `/* ${name}Component styles */
`;

	// Write files
	fs.writeFileSync(path.join(componentDir, `${kebabCase}.component.ts`), tsContent);
	fs.writeFileSync(path.join(componentDir, `${kebabCase}.component.html`), htmlContent);
	fs.writeFileSync(path.join(componentDir, `${kebabCase}.component.css`), cssContent);

	console.log(`✅ Created ${name}Component`);
});

console.log(`\n🎉 Successfully generated ${components.length} Angular components!`);
