const fs = require('fs');
const path = require('path');

const components = [
	// Navigation Components (3 remaining)
	{
		name: 'MenubarPage',
		imports: ['Menubar', 'MenubarContent', 'MenubarItem', 'MenubarMenu', 'MenubarTrigger'],
		title: 'Menubar',
		description: 'A visually persistent menu common in desktop applications.',
		example: `<Menubar>
	<MenubarMenu>
		<MenubarTrigger>File</MenubarTrigger>
		<MenubarContent>
			<MenubarItem>New Tab</MenubarItem>
			<MenubarItem>New Window</MenubarItem>
			<MenubarItem>Close</MenubarItem>
		</MenubarContent>
	</MenubarMenu>
	<MenubarMenu>
		<MenubarTrigger>Edit</MenubarTrigger>
		<MenubarContent>
			<MenubarItem>Undo</MenubarItem>
			<MenubarItem>Redo</MenubarItem>
		</MenubarContent>
	</MenubarMenu>
</Menubar>`,
	},
	{
		name: 'ContextMenuPage',
		imports: ['ContextMenu', 'ContextMenuContent', 'ContextMenuItem', 'ContextMenuTrigger'],
		title: 'Context Menu',
		description: 'Displays a menu located at the pointer, triggered by a right-click.',
		example: `<ContextMenu>
	<ContextMenuTrigger class="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">
		Right click here
	</ContextMenuTrigger>
	<ContextMenuContent>
		<ContextMenuItem>Back</ContextMenuItem>
		<ContextMenuItem>Forward</ContextMenuItem>
		<ContextMenuItem>Reload</ContextMenuItem>
	</ContextMenuContent>
</ContextMenu>`,
	},
	{
		name: 'DropdownMenuPage',
		imports: ['DropdownMenu', 'DropdownMenuContent', 'DropdownMenuItem', 'DropdownMenuTrigger'],
		title: 'Dropdown Menu',
		description: 'Displays a menu to the user—such as a set of actions or functions—triggered by a button.',
		additionalImports: ['Button'],
		example: `<DropdownMenu>
	<DropdownMenuTrigger as-child>
		<Button>Open Menu</Button>
	</DropdownMenuTrigger>
	<DropdownMenuContent>
		<DropdownMenuItem>Profile</DropdownMenuItem>
		<DropdownMenuItem>Settings</DropdownMenuItem>
		<DropdownMenuItem>Logout</DropdownMenuItem>
	</DropdownMenuContent>
</DropdownMenu>`,
	},

	// Overlay Components (5 pages)
	{
		name: 'DialogPage',
		imports: ['Dialog', 'DialogContent', 'DialogDescription', 'DialogHeader', 'DialogTitle', 'DialogTrigger'],
		title: 'Dialog',
		description: 'A window overlaid on either the primary window or another dialog window.',
		additionalImports: ['Button'],
		example: `<Dialog>
	<DialogTrigger as-child>
		<Button>Open Dialog</Button>
	</DialogTrigger>
	<DialogContent>
		<DialogHeader>
			<DialogTitle>Are you absolutely sure?</DialogTitle>
			<DialogDescription>
				This action cannot be undone. This will permanently delete your account.
			</DialogDescription>
		</DialogHeader>
	</DialogContent>
</Dialog>`,
	},
	{
		name: 'AlertDialogPage',
		imports: ['AlertDialog', 'AlertDialogAction', 'AlertDialogCancel', 'AlertDialogContent', 'AlertDialogDescription', 'AlertDialogFooter', 'AlertDialogHeader', 'AlertDialogTitle', 'AlertDialogTrigger'],
		title: 'Alert Dialog',
		description: 'A modal dialog that interrupts the user with important content.',
		additionalImports: ['Button'],
		example: `<AlertDialog>
	<AlertDialogTrigger as-child>
		<Button>Show Alert</Button>
	</AlertDialogTrigger>
	<AlertDialogContent>
		<AlertDialogHeader>
			<AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
			<AlertDialogDescription>
				This action cannot be undone.
			</AlertDialogDescription>
		</AlertDialogHeader>
		<AlertDialogFooter>
			<AlertDialogCancel>Cancel</AlertDialogCancel>
			<AlertDialogAction>Continue</AlertDialogAction>
		</AlertDialogFooter>
	</AlertDialogContent>
</AlertDialog>`,
	},
	{
		name: 'PopoverPage',
		imports: ['Popover', 'PopoverContent', 'PopoverTrigger'],
		title: 'Popover',
		description: 'Displays rich content in a portal, triggered by a button.',
		additionalImports: ['Button'],
		example: `<Popover>
	<PopoverTrigger as-child>
		<Button>Open Popover</Button>
	</PopoverTrigger>
	<PopoverContent class="w-80">
		<div class="grid gap-4">
			<div class="space-y-2">
				<h4 class="font-medium leading-none">Dimensions</h4>
				<p class="text-sm text-muted-foreground">Set the dimensions for the layer.</p>
			</div>
		</div>
	</PopoverContent>
</Popover>`,
	},
	{
		name: 'TooltipPage',
		imports: ['Tooltip', 'TooltipContent', 'TooltipProvider', 'TooltipTrigger'],
		title: 'Tooltip',
		description: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
		additionalImports: ['Button'],
		example: `<TooltipProvider>
	<Tooltip>
		<TooltipTrigger as-child>
			<Button>Hover me</Button>
		</TooltipTrigger>
		<TooltipContent>
			<p>Add to library</p>
		</TooltipContent>
	</Tooltip>
</TooltipProvider>`,
	},
	{
		name: 'HoverCardPage',
		imports: ['HoverCard', 'HoverCardContent', 'HoverCardTrigger'],
		title: 'Hover Card',
		description: 'For sighted users to preview content available behind a link.',
		additionalImports: ['Button'],
		example: `<HoverCard>
	<HoverCardTrigger as-child>
		<Button variant="link">@nextjs</Button>
	</HoverCardTrigger>
	<HoverCardContent class="w-80">
		<div class="flex justify-between space-x-4">
			<div class="space-y-1">
				<h4 class="text-sm font-semibold">@nextjs</h4>
				<p class="text-sm">The React Framework – created and maintained by @vercel.</p>
			</div>
		</div>
	</HoverCardContent>
</HoverCard>`,
	},

	// Data Display Components (6 pages)
	{
		name: 'AvatarPage',
		imports: ['Avatar', 'AvatarFallback', 'AvatarImage'],
		title: 'Avatar',
		description: 'An image element with a fallback for representing the user.',
		example: `<div class="flex gap-4">
	<Avatar>
		<AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
		<AvatarFallback>CN</AvatarFallback>
	</Avatar>
	<Avatar>
		<AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
		<AvatarFallback>VC</AvatarFallback>
	</Avatar>
</div>`,
	},
	{
		name: 'ProgressPage',
		imports: ['Progress'],
		title: 'Progress',
		description: 'Displays an indicator showing the completion progress of a task.',
		example: `<div class="w-[60%] space-y-4">
	<Progress :model-value="33" />
	<Progress :model-value="66" />
	<Progress :model-value="100" />
</div>`,
	},
	{
		name: 'TablePage',
		imports: ['Table', 'TableBody', 'TableCaption', 'TableCell', 'TableHead', 'TableHeader', 'TableRow'],
		title: 'Table',
		description: 'A responsive table component.',
		example: `<Table>
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
</Table>`,
	},
	{
		name: 'PaginationPage',
		imports: ['Pagination', 'PaginationEllipsis', 'PaginationFirst', 'PaginationLast', 'PaginationList', 'PaginationListItem', 'PaginationNext', 'PaginationPrev'],
		title: 'Pagination',
		description: 'Pagination with page navigation, next and previous links.',
		example: `<Pagination>
	<PaginationList>
		<PaginationFirst />
		<PaginationPrev />
		<PaginationListItem value="1" />
		<PaginationListItem value="2" />
		<PaginationEllipsis />
		<PaginationNext />
		<PaginationLast />
	</PaginationList>
</Pagination>`,
	},
	{
		name: 'EmptyPage',
		imports: ['Empty'],
		title: 'Empty',
		description: 'Empty state placeholder.',
		example: `<Empty description="No data available" />`,
	},
	{
		name: 'SkeletonPage',
		imports: ['Skeleton'],
		title: 'Skeleton',
		description: 'Use to show a placeholder while content is loading.',
		example: `<div class="flex items-center space-x-4">
	<Skeleton class="h-12 w-12 rounded-full" />
	<div class="space-y-2">
		<Skeleton class="h-4 w-[250px]" />
		<Skeleton class="h-4 w-[200px]" />
	</div>
</div>`,
	},

	// Typography & Utilities (2 pages)
	{
		name: 'TypographyPage',
		imports: [],
		title: 'Typography',
		description: 'Typography styles and components.',
		noImport: true,
		example: `<div class="space-y-4">
	<div>
		<h1 class="text-4xl font-bold">Heading 1</h1>
		<h2 class="text-3xl font-semibold">Heading 2</h2>
		<h3 class="text-2xl font-semibold">Heading 3</h3>
		<h4 class="text-xl font-semibold">Heading 4</h4>
	</div>
	<p class="text-base">This is a paragraph of text.</p>
	<p class="text-sm text-muted-foreground">This is small muted text.</p>
</div>`,
	},
	{
		name: 'KbdPage',
		imports: ['Kbd'],
		title: 'Kbd',
		description: 'The Keyboard Input element represents a span of inline text denoting textual user input.',
		example: `<div class="flex gap-2">
	<Kbd>Ctrl</Kbd>
	<span>+</span>
	<Kbd>C</Kbd>
</div>`,
	},

	// Date & Time (2 pages)
	{
		name: 'CalendarPage',
		imports: ['Calendar'],
		title: 'Calendar',
		description: 'A date field component that allows users to enter and edit date.',
		example: `<Calendar />`,
	},
	{
		name: 'CalendarRangePage',
		imports: ['Calendar'],
		title: 'Calendar Range',
		description: 'A calendar component for selecting date ranges.',
		example: `<Calendar />`,
	},

	// Advanced Components (4 pages)
	{
		name: 'CommandPage',
		imports: ['Command', 'CommandEmpty', 'CommandGroup', 'CommandInput', 'CommandItem', 'CommandList'],
		title: 'Command',
		description: 'Fast, composable, unstyled command menu.',
		example: `<Command class="rounded-lg border shadow-md">
	<CommandInput placeholder="Type a command or search..." />
	<CommandList>
		<CommandEmpty>No results found.</CommandEmpty>
		<CommandGroup heading="Suggestions">
			<CommandItem>Calendar</CommandItem>
			<CommandItem>Search Emoji</CommandItem>
			<CommandItem>Calculator</CommandItem>
		</CommandGroup>
	</CommandList>
</Command>`,
	},
	{
		name: 'SheetPage',
		imports: ['Sheet', 'SheetContent', 'SheetDescription', 'SheetHeader', 'SheetTitle', 'SheetTrigger'],
		title: 'Sheet',
		description: 'Extends the Dialog component to display content that complements the main content.',
		additionalImports: ['Button'],
		example: `<Sheet>
	<SheetTrigger as-child>
		<Button>Open Sheet</Button>
	</SheetTrigger>
	<SheetContent>
		<SheetHeader>
			<SheetTitle>Edit profile</SheetTitle>
			<SheetDescription>
				Make changes to your profile here. Click save when you're done.
			</SheetDescription>
		</SheetHeader>
	</SheetContent>
</Sheet>`,
	},
	{
		name: 'ToolbarPage',
		imports: ['Toolbar', 'ToolbarButton', 'ToolbarLink', 'ToolbarSeparator', 'ToolbarToggleGroup', 'ToolbarToggleItem'],
		title: 'Toolbar',
		description: 'A container for grouping a set of controls.',
		example: `<Toolbar>
	<ToolbarButton>Action 1</ToolbarButton>
	<ToolbarSeparator />
	<ToolbarButton>Action 2</ToolbarButton>
	<ToolbarLink href="#">Link</ToolbarLink>
</Toolbar>`,
	},
	{
		name: 'TagsInputPage',
		imports: ['TagsInput', 'TagsInputInput', 'TagsInputItem', 'TagsInputItemDelete', 'TagsInputItemText'],
		title: 'Tags Input',
		description: 'Tags input component for entering multiple values.',
		example: `<TagsInput :model-value="['React', 'Vue', 'Angular']">
	<TagsInputItem v-for="item in ['React', 'Vue', 'Angular']" :key="item" :value="item">
		<TagsInputItemText />
		<TagsInputItemDelete />
	</TagsInputItem>
	<TagsInputInput placeholder="Add tag..." />
</TagsInput>`,
	},
];

const pagesDir = path.join(__dirname, 'src', 'pages');

// Create directory if it doesn't exist
if (!fs.existsSync(pagesDir)) {
	fs.mkdirSync(pagesDir, { recursive: true });
}

components.forEach(({ name, imports, title, description, example, additionalImports, noImport }) => {
	const filePath = path.join(pagesDir, `${name}.vue`);

	// Generate imports
	let importStatements = '';
	if (!noImport) {
		const kebabCase = title.toLowerCase().replace(/ /g, '-');
		importStatements = `import {${imports.join(', ')}} from '@/components/ui/${kebabCase}'\n`;

		if (additionalImports) {
			additionalImports.forEach(imp => {
				const impKebab = imp.toLowerCase();
				importStatements += `import {${imp}} from '@/components/ui/${impKebab}'\n`;
			});
		}
	}

	const content = `<script setup lang="ts">
${importStatements}</script>

<template>
	<div class="space-y-8">
		<div>
			<h1 class="text-3xl font-bold">${title}</h1>
			<p class="text-muted-foreground mt-2">
				${description}
			</p>
		</div>

		<div class="space-y-4">
			<div>
				<h2 class="text-xl font-semibold mb-4">Example</h2>
				${example}
			</div>
		</div>
	</div>
</template>
`;

	fs.writeFileSync(filePath, content);
	console.log(`✅ Created ${name}.vue`);
});

console.log(`\n🎉 Successfully generated ${components.length} Vue pages!`);
