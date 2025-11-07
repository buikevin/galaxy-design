const fs = require('fs');
const path = require('path');

const components = [
  // Form Components
  { name: 'Input', import: 'Input', component: 'Input', example: '<Input placeholder="Type something..." />' },
  { name: 'Checkbox', import: 'Checkbox', component: 'Checkbox', example: '<div className="flex items-center space-x-2"><Checkbox id="terms" /><label htmlFor="terms">Accept terms</label></div>' },
  { name: 'RadioGroup', import: 'RadioGroup, RadioGroupItem', component: 'RadioGroup', example: '<RadioGroup defaultValue="option-one"><div className="flex items-center space-x-2"><RadioGroupItem value="option-one" id="option-one" /><label htmlFor="option-one">Option One</label></div><div className="flex items-center space-x-2"><RadioGroupItem value="option-two" id="option-two" /><label htmlFor="option-two">Option Two</label></div></RadioGroup>' },
  { name: 'Select', import: 'Select, SelectContent, SelectItem, SelectTrigger, SelectValue', component: 'Select', example: '<Select><SelectTrigger className="w-[180px]"><SelectValue placeholder="Select a fruit" /></SelectTrigger><SelectContent><SelectItem value="apple">Apple</SelectItem><SelectItem value="banana">Banana</SelectItem><SelectItem value="orange">Orange</SelectItem></SelectContent></Select>' },
  { name: 'Slider', import: 'Slider', component: 'Slider', example: '<Slider defaultValue={[50]} max={100} step={1} className="w-[60%]" />' },
  { name: 'Switch', import: 'Switch', component: 'Switch', example: '<div className="flex items-center space-x-2"><Switch id="airplane-mode" /><label htmlFor="airplane-mode">Airplane Mode</label></div>' },
  { name: 'Textarea', import: 'Textarea', component: 'Textarea', example: '<Textarea placeholder="Type your message here." />' },
  { name: 'Label', import: 'Label', component: 'Label', example: '<div className="space-y-2"><Label htmlFor="email">Email</Label><Input id="email" placeholder="Email" /></div>' },

  // Layout Components
  { name: 'Separator', import: 'Separator', component: 'Separator', example: '<div><div className="space-y-1"><h4 className="text-sm font-medium">Radix Primitives</h4><p className="text-sm text-muted-foreground">An open-source UI component library.</p></div><Separator className="my-4" /><div className="flex h-5 items-center space-x-4 text-sm"><div>Blog</div><Separator orientation="vertical" /><div>Docs</div><Separator orientation="vertical" /><div>Source</div></div></div>' },
  { name: 'Accordion', import: 'Accordion, AccordionContent, AccordionItem, AccordionTrigger', component: 'Accordion', example: '<Accordion type="single" collapsible className="w-full"><AccordionItem value="item-1"><AccordionTrigger>Is it accessible?</AccordionTrigger><AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent></AccordionItem><AccordionItem value="item-2"><AccordionTrigger>Is it styled?</AccordionTrigger><AccordionContent>Yes. It comes with default styles.</AccordionContent></AccordionItem></Accordion>' },
  { name: 'Collapsible', import: 'Collapsible, CollapsibleContent, CollapsibleTrigger', component: 'Collapsible', example: '<Collapsible><CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger><CollapsibleContent>Yes. Free to use for personal and commercial projects.</CollapsibleContent></Collapsible>' },
  { name: 'Tabs', import: 'Tabs, TabsContent, TabsList, TabsTrigger', component: 'Tabs', example: '<Tabs defaultValue="account" className="w-[400px]"><TabsList><TabsTrigger value="account">Account</TabsTrigger><TabsTrigger value="password">Password</TabsTrigger></TabsList><TabsContent value="account">Make changes to your account here.</TabsContent><TabsContent value="password">Change your password here.</TabsContent></Tabs>' },

  // Navigation Components
  { name: 'NavigationMenu', import: 'NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger', component: 'NavigationMenu', example: '<NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Item One</NavigationMenuTrigger><NavigationMenuContent><NavigationMenuLink>Link</NavigationMenuLink></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu>' },
  { name: 'Menubar', import: 'Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger', component: 'Menubar', example: '<Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New Tab</MenubarItem><MenubarItem>New Window</MenubarItem></MenubarContent></MenubarMenu></Menubar>' },
  { name: 'ContextMenu', import: 'ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger', component: 'ContextMenu', example: '<ContextMenu><ContextMenuTrigger className="flex h-[150px] w-[300px] items-center justify-center rounded-md border border-dashed text-sm">Right click here</ContextMenuTrigger><ContextMenuContent><ContextMenuItem>Back</ContextMenuItem><ContextMenuItem>Forward</ContextMenuItem><ContextMenuItem>Reload</ContextMenuItem></ContextMenuContent></ContextMenu>' },
  { name: 'DropdownMenu', import: 'DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger', component: 'DropdownMenu', example: '<DropdownMenu><DropdownMenuTrigger><Button>Open</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Profile</DropdownMenuItem><DropdownMenuItem>Settings</DropdownMenuItem><DropdownMenuItem>Logout</DropdownMenuItem></DropdownMenuContent></DropdownMenu>' },

  // Overlay Components
  { name: 'Dialog', import: 'Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger', component: 'Dialog', example: '<Dialog><DialogTrigger><Button>Open Dialog</Button></DialogTrigger><DialogContent><DialogHeader><DialogTitle>Are you absolutely sure?</DialogTitle><DialogDescription>This action cannot be undone.</DialogDescription></DialogHeader></DialogContent></Dialog>' },
  { name: 'AlertDialog', import: 'AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger', component: 'AlertDialog', example: '<AlertDialog><AlertDialogTrigger><Button>Show Alert</Button></AlertDialogTrigger><AlertDialogContent><AlertDialogHeader><AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle><AlertDialogDescription>This action cannot be undone.</AlertDialogDescription></AlertDialogHeader><AlertDialogFooter><AlertDialogCancel>Cancel</AlertDialogCancel><AlertDialogAction>Continue</AlertDialogAction></AlertDialogFooter></AlertDialogContent></AlertDialog>' },
  { name: 'Popover', import: 'Popover, PopoverContent, PopoverTrigger', component: 'Popover', example: '<Popover><PopoverTrigger><Button>Open popover</Button></PopoverTrigger><PopoverContent>Place content for the popover here.</PopoverContent></Popover>' },
  { name: 'Tooltip', import: 'Tooltip, TooltipContent, TooltipProvider, TooltipTrigger', component: 'Tooltip', example: '<TooltipProvider><Tooltip><TooltipTrigger><Button>Hover me</Button></TooltipTrigger><TooltipContent><p>Tooltip content</p></TooltipContent></Tooltip></TooltipProvider>' },
  { name: 'HoverCard', import: 'HoverCard, HoverCardContent, HoverCardTrigger', component: 'HoverCard', example: '<HoverCard><HoverCardTrigger><Button>Hover me</Button></HoverCardTrigger><HoverCardContent>The React Framework – created and maintained by @vercel.</HoverCardContent></HoverCard>' },

  // Data Display Components
  { name: 'Avatar', import: 'Avatar, AvatarFallback, AvatarImage', component: 'Avatar', example: '<Avatar><AvatarImage src="https://github.com/shadcn.png" /><AvatarFallback>CN</AvatarFallback></Avatar>' },
  { name: 'Progress', import: 'Progress', component: 'Progress', example: '<Progress value={33} className="w-[60%]" />' },
];

const pagesDir = path.join(__dirname, 'src', 'pages');

components.forEach(({ name, import: imports, component, example }) => {
  const kebabCase = name.replace(/([A-Z])/g, '-$1').toLowerCase().replace(/^-/, '');
  const fileName = `${name}Page.tsx`;
  const filePath = path.join(pagesDir, fileName);

  const content = `import { ${imports} } from '@/components/ui/${kebabCase}'
${imports.includes('Button') ? '' : "import { Button } from '@/components/ui/button'"}
${imports.includes('Input') && name !== 'Input' ? "import { Input } from '@/components/ui/input'" : ''}

export function ${name}Page() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">${name}</h1>
        <p className="text-muted-foreground mt-2">
          ${component} component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            ${example}
          </div>
        </div>
      </div>
    </div>
  )
}
`;

  fs.writeFileSync(filePath, content);
  console.log(`Created ${fileName}`);
});

console.log('\nAll pages generated successfully!');
