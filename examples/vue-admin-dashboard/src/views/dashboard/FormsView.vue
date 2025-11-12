<template>
  <div class="space-y-6 p-8">
    <div>
      <h1 class="text-3xl font-bold tracking-tight">Forms</h1>
      <p class="text-muted-foreground">Form components showcase</p>
    </div>

    <Card>
      <CardHeader>
        <CardTitle>Input Components</CardTitle>
        <CardDescription>Text inputs and related components</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="space-y-2">
          <Label for="name">Name</Label>
          <UiInput id="name" v-model="formData.name" placeholder="Enter your name" />
        </div>

        <div class="space-y-2">
          <Label for="email">Email</Label>
          <UiInput id="email" v-model="formData.email" type="email" placeholder="Enter your email" />
        </div>

        <div class="space-y-2">
          <Label for="description">Description</Label>
          <UiTextarea
            id="description"
            v-model="formData.description"
            placeholder="Enter description"
            :rows="4"
          />
        </div>

        <div class="space-y-2">
          <Label for="country">Country</Label>
          <UiSelect v-model="formData.country">
            <SelectTrigger id="country">
              <span>{{ formData.country || 'Select a country' }}</span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="us">United States</SelectItem>
              <SelectItem value="uk">United Kingdom</SelectItem>
              <SelectItem value="ca">Canada</SelectItem>
              <SelectItem value="au">Australia</SelectItem>
            </SelectContent>
          </UiSelect>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Radio & Checkbox</CardTitle>
        <CardDescription>Selection components</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="space-y-3">
          <Label>Notification Type</Label>
          <RadioGroup v-model="formData.notificationType">
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="all" id="radio-all" />
              <Label for="radio-all" class="font-normal cursor-pointer">All new messages</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="mentions" id="radio-mentions" />
              <Label for="radio-mentions" class="font-normal cursor-pointer">Direct messages and mentions</Label>
            </div>
            <div class="flex items-center space-x-2">
              <RadioGroupItem value="none" id="radio-none" />
              <Label for="radio-none" class="font-normal cursor-pointer">Nothing</Label>
            </div>
          </RadioGroup>
        </div>

        <div class="space-y-3">
          <Label>Preferences</Label>
          <div class="space-y-2">
            <div class="flex items-center space-x-2">
              <UiCheckbox id="marketing" v-model:checked="formData.marketing" />
              <Label for="marketing" class="font-normal cursor-pointer">
                Receive marketing emails
              </Label>
            </div>
            <div class="flex items-center space-x-2">
              <UiCheckbox id="newsletter" v-model:checked="formData.newsletter" />
              <Label for="newsletter" class="font-normal cursor-pointer">
                Subscribe to newsletter
              </Label>
            </div>
            <div class="flex items-center space-x-2">
              <UiCheckbox id="security" v-model:checked="formData.security" />
              <Label for="security" class="font-normal cursor-pointer">
                Get security alerts
              </Label>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Switch & Slider</CardTitle>
        <CardDescription>Toggle and range components</CardDescription>
      </CardHeader>
      <CardContent class="space-y-6">
        <div class="flex items-center justify-between">
          <div class="space-y-0.5">
            <Label>Dark Mode</Label>
            <p class="text-sm text-muted-foreground">Enable dark mode theme</p>
          </div>
          <UiSwitch v-model:checked="formData.darkMode" />
        </div>

        <div class="flex items-center justify-between">
          <div class="space-y-0.5">
            <Label>Notifications</Label>
            <p class="text-sm text-muted-foreground">Receive push notifications</p>
          </div>
          <UiSwitch v-model:checked="formData.notifications" />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <Label>Volume: {{ formData.volume[0] }}%</Label>
          </div>
          <UiSlider v-model="formData.volume" :max="100" :step="1" />
        </div>

        <div class="space-y-2">
          <div class="flex items-center justify-between">
            <Label>Brightness: {{ formData.brightness[0] }}%</Label>
          </div>
          <UiSlider v-model="formData.brightness" :max="100" :step="1" />
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Buttons</CardTitle>
        <CardDescription>Button variants and states</CardDescription>
      </CardHeader>
      <CardContent>
        <div class="flex flex-wrap gap-2">
          <UiButton>Default</UiButton>
          <UiButton variant="secondary">Secondary</UiButton>
          <UiButton variant="destructive">Destructive</UiButton>
          <UiButton variant="outline">Outline</UiButton>
          <UiButton variant="ghost">Ghost</UiButton>
          <UiButton variant="link">Link</UiButton>
        </div>
        <div class="flex flex-wrap gap-2 mt-4">
          <UiButton size="sm">Small</UiButton>
          <UiButton size="default">Default</UiButton>
          <UiButton size="lg">Large</UiButton>
          <UiButton size="icon">
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
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </UiButton>
        </div>
      </CardContent>
    </Card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button as UiButton } from '@/components/ui/button'
import { Input as UiInput } from '@/components/ui/input'
import { Textarea as UiTextarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select as UiSelect, SelectContent, SelectItem, SelectTrigger } from '@/components/ui/select'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Checkbox as UiCheckbox } from '@/components/ui/checkbox'
import { Switch as UiSwitch } from '@/components/ui/switch'
import { Slider as UiSlider } from '@/components/ui/slider'

const formData = ref({
  name: '',
  email: '',
  description: '',
  country: '',
  notificationType: 'all',
  marketing: false,
  newsletter: true,
  security: false,
  darkMode: false,
  notifications: true,
  volume: [50],
  brightness: [75],
})
</script>
