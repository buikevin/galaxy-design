<template>
  <div class="space-y-6 p-8">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Navigation</h1>
      <p class="text-muted-foreground">Navigation components showcase</p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Tabs</CardTitle>
        <CardDescription>Organize content into multiple sections</CardDescription>
      </CardHeader>
      <CardContent>
        <UiTabs default-value="account" class="w-full">
          <TabsList class="grid w-full grid-cols-3">
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
          <TabsContent value="account" class="space-y-4">
            <div class="space-y-2">
              <h3 class="text-lg font-medium">Account Information</h3>
              <p class="text-sm text-muted-foreground">
                Manage your account details and preferences
              </p>
            </div>
            <div class="space-y-2">
              <Label>Username</Label>
              <UiInput value="johndoe" />
            </div>
            <div class="space-y-2">
              <Label>Email</Label>
              <UiInput value="john@example.com" type="email" />
            </div>
          </TabsContent>
          <TabsContent value="password" class="space-y-4">
            <div class="space-y-2">
              <h3 class="text-lg font-medium">Password Settings</h3>
              <p class="text-sm text-muted-foreground">
                Update your password to keep your account secure
              </p>
            </div>
            <div class="space-y-2">
              <Label>Current Password</Label>
              <UiInput type="password" />
            </div>
            <div class="space-y-2">
              <Label>New Password</Label>
              <UiInput type="password" />
            </div>
            <UiButton>Update Password</UiButton>
          </TabsContent>
          <TabsContent value="settings" class="space-y-4">
            <div class="space-y-2">
              <h3 class="text-lg font-medium">Preferences</h3>
              <p class="text-sm text-muted-foreground">
                Customize your experience
              </p>
            </div>
            <div class="flex items-center justify-between">
              <Label>Email Notifications</Label>
              <UiSwitch />
            </div>
            <div class="flex items-center justify-between">
              <Label>Marketing Emails</Label>
              <UiSwitch />
            </div>
          </TabsContent>
        </UiTabs>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Breadcrumb</CardTitle>
        <CardDescription>Show navigation hierarchy</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <UiBreadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
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
        </UiBreadcrumb>

        <UiBreadcrumb>
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
        </UiBreadcrumb>

        <UiBreadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Breadcrumb</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </UiBreadcrumb>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Pagination</CardTitle>
        <CardDescription>Navigate through pages</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="space-y-2">
          <div class="text-sm text-muted-foreground">
            Basic Pagination (Page {{ paginationPage1 }} of {{ totalPages1 }})
          </div>
          <UiPagination
            :current-page="paginationPage1"
            :total-pages="totalPages1"
            @page-change="handlePagination1Change"
          />
        </div>

        <UiSeparator />

        <div class="space-y-2">
          <div class="text-sm text-muted-foreground">
            With More Pages (Page {{ paginationPage2 }} of {{ totalPages2 }})
          </div>
          <UiPagination
            :current-page="paginationPage2"
            :total-pages="totalPages2"
            :sibling-count="2"
            @page-change="handlePagination2Change"
          />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Dropdown Menu</CardTitle>
        <CardDescription>Contextual menus and actions</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <UiButton variant="outline">Open Menu</UiButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Settings</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem class="text-destructive">Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <UiButton variant="outline">
                Actions
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="ml-2 h-4 w-4"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </UiButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Edit</DropdownMenuItem>
              <DropdownMenuItem>Duplicate</DropdownMenuItem>
              <DropdownMenuItem>Archive</DropdownMenuItem>
              <DropdownMenuItem class="text-destructive">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu>
            <DropdownMenuTrigger as-child>
              <UiButton size="icon" variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="h-5 w-5"
                >
                  <circle cx="12" cy="12" r="1" />
                  <circle cx="12" cy="5" r="1" />
                  <circle cx="12" cy="19" r="1" />
                </svg>
              </UiButton>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>View</DropdownMenuItem>
              <DropdownMenuItem>Share</DropdownMenuItem>
              <DropdownMenuItem>Copy Link</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs as UiTabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  Breadcrumb as UiBreadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Pagination as UiPagination } from '@/components/ui/pagination'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button as UiButton } from '@/components/ui/button'
import { Input as UiInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch as UiSwitch } from '@/components/ui/switch'
import { Separator as UiSeparator } from '@/components/ui/separator'

const paginationPage1 = ref(1)
const totalPages1 = ref(5)

const paginationPage2 = ref(5)
const totalPages2 = ref(20)

const handlePagination1Change = (page: number) => {
  paginationPage1.value = page
}

const handlePagination2Change = (page: number) => {
  paginationPage2.value = page
}
</script>
