import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetDescription, SheetFooter } from '@/components/ui/sheet'
import { Command, CommandDialog, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem, CommandShortcut } from '@/components/ui/command'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent, NavigationMenuLink } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { User, Settings, LogOut, ChevronDown, Calendar, Mail, Phone, MapPin, Menu, FileText, Home, Search, File, Calculator, Smile, Package, Users, BarChart } from 'lucide-react'

export function NavigationPage() {
  const [commandOpen, setCommandOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Navigation Components</h1>
        <p className="text-gray-500 mt-2">Tabs, breadcrumbs, dropdowns, sheets, command palette, and more</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Navigation Menu */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Navigation Menu</CardTitle>
            <CardDescription>Horizontal navigation menu for website headers</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Basic Navigation Menu</p>
              <div className="flex justify-center border rounded-lg p-4 bg-white">
                <NavigationMenu>
                  <NavigationMenuList className="flex gap-1">
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/"
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        <Home className="w-4 h-4 mr-2" />
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/products"
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        <Package className="w-4 h-4 mr-2" />
                        Products
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/about"
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        <Users className="w-4 h-4 mr-2" />
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/analytics"
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        <BarChart className="w-4 h-4 mr-2" />
                        Analytics
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Navigation Menu with Dropdown</p>
              <div className="flex justify-center border rounded-lg p-4 bg-white">
                <NavigationMenu>
                  <NavigationMenuList className="flex gap-1">
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/"
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        Home
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
                        Products
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="absolute left-0 top-0 w-full md:w-auto">
                        <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-2">
                          <li className="row-span-3">
                            <NavigationMenuLink asChild>
                              <a
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                                href="/products"
                              >
                                <Package className="h-6 w-6" />
                                <div className="mb-2 mt-4 text-lg font-medium">
                                  All Products
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  Browse our complete product catalog
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="/products/electronics"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">Electronics</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Laptops, phones, and accessories
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                          <li>
                            <NavigationMenuLink asChild>
                              <a
                                href="/products/furniture"
                                className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                              >
                                <div className="text-sm font-medium leading-none">Furniture</div>
                                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                  Chairs, tables, and home decor
                                </p>
                              </a>
                            </NavigationMenuLink>
                          </li>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        href="/about"
                        className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      >
                        About
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Breadcrumb */}
        <Card>
          <CardHeader>
            <CardTitle>Breadcrumb</CardTitle>
            <CardDescription>Page navigation breadcrumb</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Basic Breadcrumb</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/dashboard">Dashboard</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Navigation</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Multi-level Breadcrumb</p>
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products">Products</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/products/electronics">Electronics</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Laptops</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Tabbed navigation interface</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Basic Tabs</p>
              <Tabs defaultValue="overview">
                <TabsList>
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="analytics">Analytics</TabsTrigger>
                  <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">
                  <p className="py-4 text-sm text-gray-600">
                    Dashboard overview with key metrics and statistics.
                  </p>
                </TabsContent>
                <TabsContent value="analytics">
                  <p className="py-4 text-sm text-gray-600">
                    Detailed analytics and performance data.
                  </p>
                </TabsContent>
                <TabsContent value="reports">
                  <p className="py-4 text-sm text-gray-600">
                    Generate and view comprehensive reports.
                  </p>
                </TabsContent>
              </Tabs>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Settings Tabs</p>
              <Tabs defaultValue="account">
                <TabsList>
                  <TabsTrigger value="account">Account</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                </TabsList>
                <TabsContent value="account">
                  <p className="py-4 text-sm text-gray-600">Manage your account settings.</p>
                </TabsContent>
                <TabsContent value="security">
                  <p className="py-4 text-sm text-gray-600">Configure security options.</p>
                </TabsContent>
                <TabsContent value="notifications">
                  <p className="py-4 text-sm text-gray-600">Control notification preferences.</p>
                </TabsContent>
              </Tabs>
            </div>
          </CardContent>
        </Card>

        {/* Dropdown Menu */}
        <Card>
          <CardHeader>
            <CardTitle>Dropdown Menu</CardTitle>
            <CardDescription>Contextual dropdown menus</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">User Menu</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <User className="w-4 h-4 mr-2" />
                    My Account
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-56">
                  <DropdownMenuLabel>My Account</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <User className="w-4 h-4 mr-2" />
                    Profile
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Settings className="w-4 h-4 mr-2" />
                    Settings
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-red-600">
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Actions Menu</p>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button>
                    Actions
                    <ChevronDown className="w-4 h-4 ml-2" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Quick Actions</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Create New</DropdownMenuItem>
                  <DropdownMenuItem>Edit</DropdownMenuItem>
                  <DropdownMenuItem>Duplicate</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Archive</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-600">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </CardContent>
        </Card>

        {/* Hover Card */}
        <Card>
          <CardHeader>
            <CardTitle>Hover Card</CardTitle>
            <CardDescription>Content preview on hover</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">User Profile Preview</p>
              <HoverCard>
                <HoverCardTrigger asChild>
                  <button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded hover:bg-gray-200 transition-colors">
                    <Avatar className="w-6 h-6">JD</Avatar>
                    <span className="text-sm font-medium underline decoration-dotted">@johndoe</span>
                  </button>
                </HoverCardTrigger>
                <HoverCardContent className="w-80">
                  <div className="flex gap-4">
                    <Avatar className="w-12 h-12">JD</Avatar>
                    <div className="space-y-2 flex-1">
                      <div>
                        <h4 className="text-sm font-semibold">John Doe</h4>
                        <p className="text-sm text-gray-500">@johndoe</p>
                      </div>
                      <p className="text-sm text-gray-600">
                        Software engineer passionate about building great user experiences.
                      </p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <div>
                          <span className="font-semibold text-gray-900">256</span> Following
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">1.2K</span> Followers
                        </div>
                      </div>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Info Preview</p>
              <p className="text-sm text-gray-600">
                Hover over{' '}
                <HoverCard>
                  <HoverCardTrigger asChild>
                    <span className="font-semibold underline decoration-dotted cursor-help text-blue-600">
                      this link
                    </span>
                  </HoverCardTrigger>
                  <HoverCardContent>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm">Additional Information</h4>
                      <p className="text-sm text-gray-600">
                        This hover card provides contextual information about the linked content
                        without navigating away from the current page.
                      </p>
                    </div>
                  </HoverCardContent>
                </HoverCard>
                {' '}to see more details.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Popover */}
        <Card className="md:col-span-2">
          <CardHeader>
            <CardTitle>Popover</CardTitle>
            <CardDescription>Interactive popover content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium">Contact Information</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <User className="w-4 h-4 mr-2" />
                    View Contact
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12">JS</Avatar>
                      <div>
                        <h4 className="font-semibold">Jane Smith</h4>
                        <p className="text-sm text-gray-500">Product Manager</p>
                      </div>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Mail className="w-4 h-4 text-gray-500" />
                        <span>jane.smith@example.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Phone className="w-4 h-4 text-gray-500" />
                        <span>+1 (555) 123-4567</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <MapPin className="w-4 h-4 text-gray-500" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1">
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Date Picker Example</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline">
                    <Calendar className="w-4 h-4 mr-2" />
                    Select Date
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-sm">Choose a date</h4>
                    <p className="text-sm text-gray-600">
                      Click a button below to select a date range.
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button variant="outline" size="sm">Today</Button>
                      <Button variant="outline" size="sm">Tomorrow</Button>
                      <Button variant="outline" size="sm">This Week</Button>
                      <Button variant="outline" size="sm">Next Week</Button>
                      <Button variant="outline" size="sm">This Month</Button>
                      <Button variant="outline" size="sm">Next Month</Button>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Settings Popover</p>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="secondary">
                    <Settings className="w-4 h-4 mr-2" />
                    Quick Settings
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm mb-2">Quick Settings</h4>
                      <p className="text-sm text-gray-600">
                        Adjust common settings without opening the full settings panel.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Dark Mode</span>
                        <Button size="sm" variant="outline">Toggle</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Notifications</span>
                        <Button size="sm" variant="outline">On</Button>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Language</span>
                        <Button size="sm" variant="outline">English</Button>
                      </div>
                    </div>
                    <Separator />
                    <Button className="w-full" variant="ghost" size="sm">
                      Open Full Settings
                    </Button>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </CardContent>
        </Card>

        {/* Sheet */}
        <Card>
          <CardHeader>
            <CardTitle>Sheet</CardTitle>
            <CardDescription>Slide-over panel from screen edges</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Sheet from Right (Default)</p>
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline">
                    <Menu className="w-4 h-4 mr-2" />
                    Open Sheet
                  </Button>
                </SheetTrigger>
                <SheetContent>
                  <SheetHeader>
                    <SheetTitle>Settings</SheetTitle>
                    <SheetDescription>
                      Manage your account settings and preferences.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 space-y-4">
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Profile</h4>
                      <p className="text-sm text-gray-600">
                        Update your profile information and photo.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Privacy</h4>
                      <p className="text-sm text-gray-600">
                        Control who can see your information.
                      </p>
                    </div>
                    <Separator />
                    <div className="space-y-2">
                      <h4 className="text-sm font-medium">Notifications</h4>
                      <p className="text-sm text-gray-600">
                        Manage your notification preferences.
                      </p>
                    </div>
                  </div>
                  <SheetFooter>
                    <Button>Save Changes</Button>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Sheet from Different Sides</p>
              <div className="flex gap-2">
                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">Left</Button>
                  </SheetTrigger>
                  <SheetContent side="left">
                    <SheetHeader>
                      <SheetTitle>Left Sheet</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the left side.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">Top</Button>
                  </SheetTrigger>
                  <SheetContent side="top">
                    <SheetHeader>
                      <SheetTitle>Top Sheet</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the top.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>

                <Sheet>
                  <SheetTrigger asChild>
                    <Button variant="outline" size="sm">Bottom</Button>
                  </SheetTrigger>
                  <SheetContent side="bottom">
                    <SheetHeader>
                      <SheetTitle>Bottom Sheet</SheetTitle>
                      <SheetDescription>
                        This sheet slides in from the bottom.
                      </SheetDescription>
                    </SheetHeader>
                  </SheetContent>
                </Sheet>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Command */}
        <Card>
          <CardHeader>
            <CardTitle>Command</CardTitle>
            <CardDescription>Command palette for quick navigation</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">Command Dialog</p>
              <Button
                variant="outline"
                onClick={() => setCommandOpen(true)}
              >
                <Search className="w-4 h-4 mr-2" />
                Open Command Palette
              </Button>
              <p className="text-xs text-gray-500">
                Press <kbd className="px-2 py-1 text-xs bg-gray-100 border rounded">⌘K</kbd> to open
              </p>
            </div>

            <CommandDialog open={commandOpen} onOpenChange={setCommandOpen}>
              <CommandInput placeholder="Type a command or search..." />
              <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                  <CommandItem>
                    <Calendar className="mr-2 h-4 w-4" />
                    <span>Calendar</span>
                  </CommandItem>
                  <CommandItem>
                    <Smile className="mr-2 h-4 w-4" />
                    <span>Search Emoji</span>
                  </CommandItem>
                  <CommandItem>
                    <Calculator className="mr-2 h-4 w-4" />
                    <span>Calculator</span>
                  </CommandItem>
                </CommandGroup>
                <CommandGroup heading="Navigation">
                  <CommandItem>
                    <Home className="mr-2 h-4 w-4" />
                    <span>Home</span>
                    <CommandShortcut>⌘H</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <FileText className="mr-2 h-4 w-4" />
                    <span>Documents</span>
                    <CommandShortcut>⌘D</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                    <CommandShortcut>⌘S</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
                <CommandGroup heading="Account">
                  <CommandItem>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                    <CommandShortcut>⌘P</CommandShortcut>
                  </CommandItem>
                  <CommandItem>
                    <Mail className="mr-2 h-4 w-4" />
                    <span>Mail</span>
                    <CommandShortcut>⌘M</CommandShortcut>
                  </CommandItem>
                </CommandGroup>
              </CommandList>
            </CommandDialog>

            <Separator />

            <div className="space-y-2">
              <p className="text-sm font-medium">Inline Command</p>
              <Command className="rounded-lg border shadow-md">
                <CommandInput placeholder="Search files..." />
                <CommandList>
                  <CommandEmpty>No files found.</CommandEmpty>
                  <CommandGroup heading="Recent Files">
                    <CommandItem>
                      <File className="mr-2 h-4 w-4" />
                      <span>project-plan.pdf</span>
                    </CommandItem>
                    <CommandItem>
                      <File className="mr-2 h-4 w-4" />
                      <span>budget-2024.xlsx</span>
                    </CommandItem>
                    <CommandItem>
                      <File className="mr-2 h-4 w-4" />
                      <span>meeting-notes.docx</span>
                    </CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
