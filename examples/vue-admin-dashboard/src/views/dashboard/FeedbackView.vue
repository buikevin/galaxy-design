<template>
  <div class="space-y-6 p-8">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Feedback</h1>
      <p class="text-muted-foreground">Feedback components showcase</p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Alerts</CardTitle>
        <CardDescription>Display important messages and notifications</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <UiAlert>
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
            <line x1="12" x2="12" y1="16" y2="12" />
            <line x1="12" x2="12.01" y1="8" y2="8" />
          </svg>
          <AlertTitle>Heads up!</AlertTitle>
          <AlertDescription>
            You can add components to your app using the cli.
          </AlertDescription>
        </UiAlert>

        <UiAlert variant="destructive">
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
            <line x1="12" x2="12" y1="8" y2="12" />
            <line x1="12" x2="12.01" y1="16" y2="16" />
          </svg>
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Your session has expired. Please log in again.
          </AlertDescription>
        </UiAlert>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Toast Notifications</CardTitle>
        <CardDescription>Temporary notification messages</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap gap-2">
          <UiButton @click="showDefaultToast">Show Default Toast</UiButton>
          <UiButton @click="showSuccessToast" variant="outline">Show Success Toast</UiButton>
          <UiButton @click="showErrorToast" variant="destructive">Show Error Toast</UiButton>
          <UiButton @click="showInfoToast" variant="secondary">Show Info Toast</UiButton>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Progress</CardTitle>
        <CardDescription>Visual progress indicators</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="space-y-2">
          <div class="flex items-center justify-between text-sm">
            <span class="text-muted-foreground">Upload Progress</span>
            <span class="font-medium">{{ progress1 }}%</span>
          </div>
          <UiProgress :model-value="progress1" />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between text-sm">
            <span class="text-muted-foreground">Processing</span>
            <span class="font-medium">{{ progress2 }}%</span>
          </div>
          <UiProgress :model-value="progress2" />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between text-sm">
            <span class="text-muted-foreground">Complete</span>
            <span class="font-medium">{{ progress3 }}%</span>
          </div>
          <UiProgress :model-value="progress3" />
        </div>

        <div class="flex gap-2">
          <UiButton @click="startProgress" size="sm">Start Progress</UiButton>
          <UiButton @click="resetProgress" size="sm" variant="outline">Reset</UiButton>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Skeleton</CardTitle>
        <CardDescription>Loading placeholders for content</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="space-y-4">
          <div class="flex items-center space-x-4">
            <UiSkeleton class="h-12 w-12 rounded-full" />
            <div class="space-y-2 flex-1">
              <UiSkeleton class="h-4 w-full" />
              <UiSkeleton class="h-4 w-4/5" />
            </div>
          </div>

          <div class="space-y-2">
            <UiSkeleton class="h-4 w-full" />
            <UiSkeleton class="h-4 w-full" />
            <UiSkeleton class="h-4 w-3/4" />
          </div>

          <div class="space-y-2">
            <UiSkeleton class="h-32 w-full rounded-lg" />
            <div class="flex gap-2">
              <UiSkeleton class="h-4 w-20" />
              <UiSkeleton class="h-4 w-20" />
              <UiSkeleton class="h-4 w-20" />
            </div>
          </div>

          <div class="flex gap-2 pt-4">
            <UiButton @click="toggleLoading" size="sm" variant="outline">
              {{ isLoading ? 'Hide' : 'Show' }} Loading State
            </UiButton>
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Toast Container -->
    <div class="fixed bottom-4 right-4 z-50 space-y-2">
      <div
        v-for="toastItem in toasts"
        :key="toastItem.id"
        :class="[
          'rounded-lg border p-4 shadow-lg transition-all',
          toastItem.variant === 'destructive'
            ? 'border-destructive bg-destructive text-destructive-foreground'
            : 'border bg-background text-foreground'
        ]"
      >
        <div v-if="toastItem.title" class="font-semibold">{{ toastItem.title }}</div>
        <div v-if="toastItem.description" class="text-sm opacity-90">{{ toastItem.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onUnmounted } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert as UiAlert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { Button as UiButton } from '@/components/ui/button'
import { Progress as UiProgress } from '@/components/ui/progress'
import { Skeleton as UiSkeleton } from '@/components/ui/skeleton'
import { toast, useToasts } from '@/components/ui/toast'

const toasts = useToasts()

const progress1 = ref(33)
const progress2 = ref(66)
const progress3 = ref(100)
const isLoading = ref(false)

let progressInterval: number | null = null

const showDefaultToast = () => {
  toast({
    title: 'Default Toast',
    description: 'This is a default toast message',
  })
}

const showSuccessToast = () => {
  toast({
    title: 'Success',
    description: 'Your changes have been saved successfully',
  })
}

const showErrorToast = () => {
  toast({
    title: 'Error',
    description: 'Something went wrong. Please try again.',
    variant: 'destructive',
  })
}

const showInfoToast = () => {
  toast({
    title: 'Information',
    description: 'You have 3 unread messages',
  })
}

const startProgress = () => {
  if (progressInterval) return

  progress1.value = 0
  progress2.value = 0
  progress3.value = 0

  progressInterval = window.setInterval(() => {
    if (progress1.value < 100) {
      progress1.value += 1
    }
    if (progress2.value < 100 && progress1.value > 30) {
      progress2.value += 1
    }
    if (progress3.value < 100 && progress2.value > 60) {
      progress3.value += 1
    }
    if (progress3.value >= 100) {
      if (progressInterval) {
        clearInterval(progressInterval)
        progressInterval = null
      }
    }
  }, 50)
}

const resetProgress = () => {
  if (progressInterval) {
    clearInterval(progressInterval)
    progressInterval = null
  }
  progress1.value = 33
  progress2.value = 66
  progress3.value = 100
}

const toggleLoading = () => {
  isLoading.value = !isLoading.value
}

onUnmounted(() => {
  if (progressInterval) {
    clearInterval(progressInterval)
  }
})
</script>
