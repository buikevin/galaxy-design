<template>
  <div class="space-y-6 p-8">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Layout</h1>
      <p class="text-muted-foreground">Layout and container components showcase</p>
    </div>

    <div class="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>A simple card component</CardDescription>
        </CardHeader>
        <CardContent>
          <p class="text-sm">
            Cards are versatile containers for grouping related content and actions.
          </p>
        </CardContent>
        <CardFooter class="flex justify-between">
          <UiButton variant="outline">Cancel</UiButton>
          <UiButton>Save</UiButton>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Card with Image</CardTitle>
          <CardDescription>Cards can contain various content types</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="aspect-video rounded-md bg-muted mb-4" />
          <p class="text-sm">
            Use cards to create consistent layouts across your application.
          </p>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Separator</CardTitle>
        <CardDescription>Divide content sections</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div>
          <h4 class="text-sm font-medium mb-2">Horizontal Separator</h4>
          <p class="text-sm text-muted-foreground mb-2">Content above separator</p>
          <UiSeparator />
          <p class="text-sm text-muted-foreground mt-2">Content below separator</p>
        </div>

        <div class="flex gap-4 h-20">
          <div class="flex-1">
            <p class="text-sm text-muted-foreground">Left content</p>
          </div>
          <UiSeparator orientation="vertical" />
          <div class="flex-1">
            <p class="text-sm text-muted-foreground">Right content</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Dialog</CardTitle>
        <CardDescription>Modal dialogs for user interactions</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex gap-2">
          <UiDialog v-model:open="dialogOpen">
            <DialogTrigger as-child>
              <UiButton>Open Dialog</UiButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h2 class="text-lg font-semibold">Edit Profile</h2>
                <p class="text-sm text-muted-foreground">
                  Make changes to your profile here. Click save when you're done.
                </p>
              </DialogHeader>
              <div class="grid gap-4 py-4">
                <div class="grid gap-2">
                  <Label for="dialog-name">Name</Label>
                  <UiInput id="dialog-name" value="John Doe" />
                </div>
                <div class="grid gap-2">
                  <Label for="dialog-email">Email</Label>
                  <UiInput id="dialog-email" value="john@example.com" type="email" />
                </div>
              </div>
              <DialogFooter>
                <UiButton @click="dialogOpen = false">Save Changes</UiButton>
              </DialogFooter>
            </DialogContent>
          </UiDialog>

          <UiDialog v-model:open="confirmDialogOpen">
            <DialogTrigger as-child>
              <UiButton variant="destructive">Delete Item</UiButton>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <h2 class="text-lg font-semibold">Are you sure?</h2>
                <p class="text-sm text-muted-foreground">
                  This action cannot be undone. This will permanently delete your data.
                </p>
              </DialogHeader>
              <DialogFooter>
                <UiButton variant="outline" @click="confirmDialogOpen = false">
                  Cancel
                </UiButton>
                <UiButton variant="destructive" @click="confirmDialogOpen = false">
                  Delete
                </UiButton>
              </DialogFooter>
            </DialogContent>
          </UiDialog>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Sheet</CardTitle>
        <CardDescription>Slide-out panels from screen edges</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex gap-2">
          <UiSheet v-model:open="sheetOpen">
            <SheetTrigger as-child>
              <UiButton variant="outline">Open Sheet</UiButton>
            </SheetTrigger>
            <SheetContent>
              <div class="space-y-4">
                <h2 class="text-lg font-semibold">Settings</h2>
                <p class="text-sm text-muted-foreground">
                  Configure your application settings
                </p>
                <div class="space-y-4">
                  <div class="flex items-center justify-between">
                    <Label>Notifications</Label>
                    <UiSwitch />
                  </div>
                  <div class="flex items-center justify-between">
                    <Label>Dark Mode</Label>
                    <UiSwitch />
                  </div>
                  <div class="flex items-center justify-between">
                    <Label>Auto Save</Label>
                    <UiSwitch />
                  </div>
                </div>
              </div>
            </SheetContent>
          </UiSheet>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Scroll Area</CardTitle>
        <CardDescription>Scrollable content containers</CardDescription>
      </CardHeader>
      <CardContent>
        <UiScrollArea class="h-72 w-full rounded-md border p-4">
          <div class="space-y-4">
            <h4 class="text-sm font-medium">Scroll Area Content</h4>
            <p class="text-sm text-muted-foreground">
              This content is scrollable when it exceeds the container height.
            </p>
            <UiSeparator />
            <div v-for="i in 20" :key="i" class="text-sm">
              <p class="mb-2">Item {{ i }}</p>
              <p class="text-muted-foreground text-xs mb-3">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>
          </div>
          <ScrollBar />
        </UiScrollArea>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Collapsible</CardTitle>
        <CardDescription>Expandable and collapsible content sections</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <UiCollapsible v-model:open="collapsible1Open">
          <CollapsibleTrigger as-child>
            <UiButton variant="outline" class="w-full justify-between">
              Section 1
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
                :class="{ 'rotate-180': collapsible1Open }"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </UiButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div class="rounded-md border p-4 mt-2">
              <p class="text-sm text-muted-foreground">
                This is the content for section 1. It can be expanded or collapsed.
              </p>
            </div>
          </CollapsibleContent>
        </UiCollapsible>

        <UiCollapsible v-model:open="collapsible2Open">
          <CollapsibleTrigger as-child>
            <UiButton variant="outline" class="w-full justify-between">
              Section 2
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
                :class="{ 'rotate-180': collapsible2Open }"
              >
                <path d="m6 9 6 6 6-6" />
              </svg>
            </UiButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <div class="rounded-md border p-4 mt-2">
              <p class="text-sm text-muted-foreground">
                This is the content for section 2. Each section can be controlled independently.
              </p>
            </div>
          </CollapsibleContent>
        </UiCollapsible>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Popover & Tooltip</CardTitle>
        <CardDescription>Contextual overlays and hints</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap gap-4">
          <UiPopover v-model:open="popoverOpen">
            <PopoverTrigger as-child>
              <UiButton variant="outline">Open Popover</UiButton>
            </PopoverTrigger>
            <PopoverContent class="w-80">
              <div class="space-y-2">
                <h4 class="font-medium leading-none">Dimensions</h4>
                <p class="text-sm text-muted-foreground">
                  Set the dimensions for the layer.
                </p>
                <div class="grid gap-2">
                  <div class="grid grid-cols-3 items-center gap-4">
                    <Label for="width">Width</Label>
                    <UiInput id="width" value="100%" class="col-span-2 h-8" />
                  </div>
                  <div class="grid grid-cols-3 items-center gap-4">
                    <Label for="height">Height</Label>
                    <UiInput id="height" value="25px" class="col-span-2 h-8" />
                  </div>
                </div>
              </div>
            </PopoverContent>
          </UiPopover>

          <UiTooltip>
            <TooltipTrigger as-child>
              <UiButton variant="outline">Hover for Tooltip</UiButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>This is a helpful tooltip</p>
            </TooltipContent>
          </UiTooltip>

          <UiTooltip>
            <TooltipTrigger as-child>
              <UiButton size="icon" variant="outline">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-4 w-4"
                >
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 16v-4" />
                  <path d="M12 8h.01" />
                </svg>
              </UiButton>
            </TooltipTrigger>
            <TooltipContent>
              <p>Information tooltip</p>
            </TooltipContent>
          </UiTooltip>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button as UiButton } from '@/components/ui/button'
import { Separator as UiSeparator } from '@/components/ui/separator'
import { Dialog as UiDialog, DialogContent, DialogFooter, DialogHeader, DialogTrigger } from '@/components/ui/dialog'
import { Sheet as UiSheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { ScrollArea as UiScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Collapsible as UiCollapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible'
import { Popover as UiPopover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Tooltip as UiTooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip'
import { Input as UiInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch as UiSwitch } from '@/components/ui/switch'

const dialogOpen = ref(false)
const confirmDialogOpen = ref(false)
const sheetOpen = ref(false)
const collapsible1Open = ref(false)
const collapsible2Open = ref(false)
const popoverOpen = ref(false)
</script>
