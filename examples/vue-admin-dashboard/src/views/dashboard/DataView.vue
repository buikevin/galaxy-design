<template>
  <div class="space-y-6 p-8">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Data Display</h1>
      <p class="text-muted-foreground">Data display components showcase</p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Table</CardTitle>
        <CardDescription>A responsive table component</CardDescription>
      </CardHeader>
      <CardContent>
        <UiTable>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Role</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow v-for="user in users" :key="user.id">
              <TableCell class="font-medium">{{ user.name }}</TableCell>
              <TableCell>{{ user.email }}</TableCell>
              <TableCell>
                <UiBadge :variant="user.status === 'active' ? 'default' : 'secondary'">
                  {{ user.status }}
                </UiBadge>
              </TableCell>
              <TableCell>{{ user.role }}</TableCell>
            </TableRow>
          </TableBody>
        </UiTable>
      </CardContent>
    </Card>

    <div class="grid gap-4 md:grid-cols-2">
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>Badge variants for status and labels</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex flex-wrap gap-2">
            <UiBadge>Default</UiBadge>
            <UiBadge variant="secondary">Secondary</UiBadge>
            <UiBadge variant="destructive">Destructive</UiBadge>
            <UiBadge variant="outline">Outline</UiBadge>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Avatars</CardTitle>
          <CardDescription>User avatar components</CardDescription>
        </CardHeader>
        <CardContent>
          <div class="flex items-center gap-4">
            <UiAvatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </UiAvatar>
            <UiAvatar>
              <AvatarImage src="https://github.com/vercel.png" alt="@vercel" />
              <AvatarFallback>VC</AvatarFallback>
            </UiAvatar>
            <UiAvatar>
              <AvatarFallback>JD</AvatarFallback>
            </UiAvatar>
          </div>
        </CardContent>
      </Card>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Hover Card</CardTitle>
        <CardDescription>Display additional information on hover</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <HoverCard>
            <HoverCardTrigger as-child>
              <UiButton variant="link">@nextjs</UiButton>
            </HoverCardTrigger>
            <HoverCardContent class="w-80">
              <div class="flex justify-between space-x-4">
                <UiAvatar>
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </UiAvatar>
                <div class="space-y-1">
                  <h4 class="text-sm font-semibold">@nextjs</h4>
                  <p class="text-sm">
                    The React Framework – created and maintained by @vercel.
                  </p>
                  <div class="flex items-center pt-2">
                    <span class="text-xs text-muted-foreground">
                      Joined December 2021
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>

          <HoverCard>
            <HoverCardTrigger as-child>
              <UiButton variant="link">@vue</UiButton>
            </HoverCardTrigger>
            <HoverCardContent class="w-80">
              <div class="flex justify-between space-x-4">
                <UiAvatar>
                  <AvatarFallback>VU</AvatarFallback>
                </UiAvatar>
                <div class="space-y-1">
                  <h4 class="text-sm font-semibold">@vue</h4>
                  <p class="text-sm">
                    The Progressive JavaScript Framework
                  </p>
                  <div class="flex items-center pt-2">
                    <span class="text-xs text-muted-foreground">
                      Joined February 2014
                    </span>
                  </div>
                </div>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Separator</CardTitle>
        <CardDescription>Visual dividers between content</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div>
            <h4 class="text-sm font-medium">Section One</h4>
            <p class="text-sm text-muted-foreground">Content for the first section</p>
          </div>
          <UiSeparator />
          <div>
            <h4 class="text-sm font-medium">Section Two</h4>
            <p class="text-sm text-muted-foreground">Content for the second section</p>
          </div>
          <UiSeparator />
          <div>
            <h4 class="text-sm font-medium">Section Three</h4>
            <p class="text-sm text-muted-foreground">Content for the third section</p>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Pagination</CardTitle>
        <CardDescription>Navigate through pages of content</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div class="text-sm text-muted-foreground">
            Page {{ currentPage }} of {{ totalPages }}
          </div>
          <UiPagination
            :current-page="currentPage"
            :total-pages="totalPages"
            @page-change="handlePageChange"
          />
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Table as UiTable, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import { Badge as UiBadge } from '@/components/ui/badge'
import { Avatar as UiAvatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Pagination as UiPagination } from '@/components/ui/pagination'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '@/components/ui/hover-card'
import { Separator as UiSeparator } from '@/components/ui/separator'
import { Button as UiButton } from '@/components/ui/button'

const users = ref([
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'active', role: 'User' },
  { id: 3, name: 'Bob Johnson', email: 'bob@example.com', status: 'inactive', role: 'User' },
  { id: 4, name: 'Alice Williams', email: 'alice@example.com', status: 'active', role: 'Editor' },
])

const currentPage = ref(1)
const totalPages = ref(10)

const handlePageChange = (page: number) => {
  currentPage.value = page
}
</script>
