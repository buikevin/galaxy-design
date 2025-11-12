import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Breadcrumb, BreadcrumbList, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbPage } from '@/components/ui/breadcrumb'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuLabel } from '@/components/ui/dropdown-menu'
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Avatar } from '@/components/ui/avatar'
import { Separator } from '@/components/ui/separator'
import { User, Settings, LogOut, ChevronDown, Calendar, Mail, Phone, MapPin } from 'lucide-react'

export function NavigationPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Navigation Components</h1>
        <p className="text-gray-500 mt-2">Tabs, breadcrumbs, dropdowns, and more</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
      </div>
    </div>
  )
}
