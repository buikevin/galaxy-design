import { useState } from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '@/components/ui/dialog'
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from '@/components/ui/collapsible'
import { ScrollArea } from '@/components/ui/scroll-area'
import { AspectRatio } from '@/components/ui/aspect-ratio'
import { Button } from '@/components/ui/button'
import { ChevronDown, ChevronRight, Image as ImageIcon } from 'lucide-react'

export function LayoutPage() {
  const [isCollapsibleOpen, setIsCollapsibleOpen] = useState(false)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Layout Components</h1>
        <p className="text-gray-500 mt-2">Cards, separators, accordions, dialogs, and more layout helpers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Example</CardTitle>
            <CardDescription>A simple card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area. You can put any content here.</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Card footer</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Another Card</CardTitle>
            <CardDescription>Cards are versatile</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards can contain any type of content including forms, lists, and more.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Separator Example</CardTitle>
          <CardDescription>Visual dividers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Section 1</div>
          <Separator />
          <div>Section 2</div>
          <Separator />
          <div>Section 3</div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Accordion */}
        <Card>
          <CardHeader>
            <CardTitle>Accordion</CardTitle>
            <CardDescription>Collapsible content sections</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>What is Galaxy Design?</AccordionTrigger>
                <AccordionContent>
                  Galaxy Design is a comprehensive UI component library built with React, TypeScript, and Tailwind CSS. It provides a collection of beautiful, accessible components that you can copy and paste into your projects.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>How do I install components?</AccordionTrigger>
                <AccordionContent>
                  You can install components using the Galaxy CLI. Simply run <code className="bg-gray-100 px-1 rounded">npx galaxy-design add [component-name]</code> to add any component to your project.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Is it free to use?</AccordionTrigger>
                <AccordionContent>
                  Yes! Galaxy Design is completely free and open source. You can use it in your personal and commercial projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Card>
          <CardHeader>
            <CardTitle>Tabs</CardTitle>
            <CardDescription>Organize content in tabs</CardDescription>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="account" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="account">Account</TabsTrigger>
                <TabsTrigger value="password">Password</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
              </TabsList>
              <TabsContent value="account" className="space-y-2">
                <p className="text-sm text-gray-600">
                  Manage your account settings and preferences here.
                </p>
              </TabsContent>
              <TabsContent value="password" className="space-y-2">
                <p className="text-sm text-gray-600">
                  Change your password and security settings.
                </p>
              </TabsContent>
              <TabsContent value="settings" className="space-y-2">
                <p className="text-sm text-gray-600">
                  Configure application preferences and options.
                </p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Dialog */}
        <Card>
          <CardHeader>
            <CardTitle>Dialog</CardTitle>
            <CardDescription>Modal dialog windows</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Dialog>
              <DialogTrigger asChild>
                <Button>Open Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Confirm Action</DialogTitle>
                  <DialogDescription>
                    Are you sure you want to proceed with this action? This cannot be undone.
                  </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                  <Button variant="outline">Cancel</Button>
                  <Button>Confirm</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Settings Dialog</Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Account Settings</DialogTitle>
                  <DialogDescription>
                    Update your account information and preferences.
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 py-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Profile</h4>
                    <p className="text-sm text-gray-600">
                      Update your profile information
                    </p>
                  </div>
                  <Separator />
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Privacy</h4>
                    <p className="text-sm text-gray-600">
                      Manage your privacy settings
                    </p>
                  </div>
                </div>
                <DialogFooter>
                  <Button>Save Changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </CardContent>
        </Card>

        {/* Collapsible */}
        <Card>
          <CardHeader>
            <CardTitle>Collapsible</CardTitle>
            <CardDescription>Expandable content sections</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Collapsible
              open={isCollapsibleOpen}
              onOpenChange={setIsCollapsibleOpen}
              className="space-y-2"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold">
                  @galaxy-ui/react - 1.2.3
                </h4>
                <CollapsibleTrigger asChild>
                  <Button variant="ghost" size="sm">
                    {isCollapsibleOpen ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                    <span className="sr-only">Toggle</span>
                  </Button>
                </CollapsibleTrigger>
              </div>
              <div className="rounded-md border px-4 py-2 text-sm">
                @radix-ui/react-collapsible
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">
                  @radix-ui/react-accordion
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                  @radix-ui/react-dialog
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                  @radix-ui/react-tabs
                </div>
              </CollapsibleContent>
            </Collapsible>

            <Separator />

            <Collapsible className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-semibold">Features</h4>
                <CollapsibleTrigger asChild>
                  <Button variant="outline" size="sm">
                    Show Details
                  </Button>
                </CollapsibleTrigger>
              </div>
              <CollapsibleContent className="space-y-2">
                <div className="rounded-md border px-4 py-2 text-sm">
                  ✓ Fully accessible components
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                  ✓ Customizable with Tailwind
                </div>
                <div className="rounded-md border px-4 py-2 text-sm">
                  ✓ TypeScript support
                </div>
              </CollapsibleContent>
            </Collapsible>
          </CardContent>
        </Card>

        {/* ScrollArea */}
        <Card>
          <CardHeader>
            <CardTitle>Scroll Area</CardTitle>
            <CardDescription>Custom scrollable regions</CardDescription>
          </CardHeader>
          <CardContent>
            <ScrollArea className="h-[200px] w-full rounded-md border p-4">
              <div className="space-y-4">
                <h4 className="text-sm font-medium leading-none">Tags</h4>
                <Separator />
                {Array.from({ length: 20 }).map((_, i) => (
                  <div key={i} className="text-sm">
                    Tag {i + 1}
                  </div>
                ))}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>

        {/* AspectRatio */}
        <Card>
          <CardHeader>
            <CardTitle>Aspect Ratio</CardTitle>
            <CardDescription>Maintain image aspect ratios</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm font-medium">16:9 Ratio</p>
              <AspectRatio ratio={16 / 9} className="bg-muted rounded-md flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </AspectRatio>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">4:3 Ratio</p>
              <AspectRatio ratio={4 / 3} className="bg-muted rounded-md flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </AspectRatio>
            </div>

            <div className="space-y-2">
              <p className="text-sm font-medium">1:1 Ratio</p>
              <AspectRatio ratio={1} className="bg-muted rounded-md flex items-center justify-center">
                <ImageIcon className="h-12 w-12 text-gray-400" />
              </AspectRatio>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
