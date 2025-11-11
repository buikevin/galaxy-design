<template>
  <div class="min-h-screen bg-background">
    <div class="container mx-auto p-8">
      <div class="mb-8">
        <h1 class="text-4xl font-bold tracking-tight">Dashboard</h1>
        <p class="text-muted-foreground mt-2">Welcome to your Nuxt.js admin dashboard</p>
      </div>

      <Separator class="my-6" />

      <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-8">
        <div class="rounded-lg border bg-card p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-medium">Total Users</h3>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="User" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div class="text-2xl font-bold">1,234</div>
          <Progress :model-value="65" class="mt-3" />
          <p class="text-xs text-muted-foreground mt-2">+12% from last month</p>
        </div>

        <div class="rounded-lg border bg-card p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-medium">Revenue</h3>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Revenue" />
              <AvatarFallback>$</AvatarFallback>
            </Avatar>
          </div>
          <div class="text-2xl font-bold">$45,231</div>
          <Progress :model-value="80" class="mt-3" />
          <p class="text-xs text-muted-foreground mt-2">+20% from last month</p>
        </div>

        <div class="rounded-lg border bg-card p-6">
          <div class="flex items-center justify-between mb-4">
            <h3 class="text-sm font-medium">Active Projects</h3>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Projects" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
          </div>
          <div class="text-2xl font-bold">23</div>
          <Progress :model-value="45" class="mt-3" />
          <p class="text-xs text-muted-foreground mt-2">+5 new this week</p>
        </div>
      </div>

      <Tabs default-value="overview" class="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" class="space-y-4">
          <div class="rounded-lg border bg-card p-6">
            <h3 class="text-lg font-semibold mb-4">Recent Activity</h3>
            <div class="space-y-4">
              <div class="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div class="flex-1">
                  <p class="text-sm font-medium">John Doe</p>
                  <p class="text-xs text-muted-foreground">Created a new project</p>
                </div>
                <span class="text-xs text-muted-foreground">2 hours ago</span>
              </div>
              <Separator />
              <div class="flex items-center gap-4">
                <Avatar>
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>SA</AvatarFallback>
                </Avatar>
                <div class="flex-1">
                  <p class="text-sm font-medium">Sarah Anderson</p>
                  <p class="text-xs text-muted-foreground">Updated dashboard settings</p>
                </div>
                <span class="text-xs text-muted-foreground">5 hours ago</span>
              </div>
            </div>
          </div>

          <div class="rounded-lg border bg-card p-6">
            <h3 class="text-lg font-semibold mb-4">Quick Actions</h3>
            <div class="grid gap-4 md:grid-cols-2">
              <div class="space-y-2">
                <label for="search" class="text-sm font-medium">Search</label>
                <Input id="search" placeholder="Search anything..." />
              </div>
              <div class="space-y-2">
                <label for="filter" class="text-sm font-medium">Filter</label>
                <Input id="filter" placeholder="Filter results..." />
              </div>
            </div>
            <div class="flex gap-2 mt-4">
              <Button>Create New</Button>
              <Button variant="outline">Export Data</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="analytics" class="space-y-4">
          <div class="rounded-lg border bg-card p-6">
            <h3 class="text-lg font-semibold mb-4">Analytics Dashboard</h3>
            <p class="text-muted-foreground">Your analytics data will appear here.</p>
          </div>
        </TabsContent>

        <TabsContent value="reports" class="space-y-4">
          <div class="rounded-lg border bg-card p-6">
            <h3 class="text-lg font-semibold mb-4">Reports</h3>
            <p class="text-muted-foreground">Generate and view reports here.</p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  </div>
</template>

<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Separator from '@/components/ui/separator/Separator.vue'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar'
import Progress from '@/components/ui/progress/Progress.vue'
</script>
