<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/label.vue'
import Checkbox from '@/components/ui/checkbox/checkbox.vue'
import { cn } from '@/lib/utils'
import type { RegisterFormData } from './types'

interface Props {
  loading?: boolean
  error?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
})

const emit = defineEmits<{
  submit: [data: RegisterFormData]
}>()

const formData = ref<RegisterFormData>({
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
  acceptTerms: false,
})

const errors = ref<Partial<Record<keyof RegisterFormData, string>>>({})

const validate = (): boolean => {
  errors.value = {}

  if (!formData.value.name) {
    errors.value.name = 'Name is required'
  }

  if (!formData.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Invalid email format'
  }

  if (!formData.value.password) {
    errors.value.password = 'Password is required'
  } else if (formData.value.password.length < 8) {
    errors.value.password = 'Password must be at least 8 characters'
  }

  if (!formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Please confirm your password'
  } else if (formData.value.password !== formData.value.confirmPassword) {
    errors.value.confirmPassword = 'Passwords do not match'
  }

  if (!formData.value.acceptTerms) {
    errors.value.acceptTerms = 'You must accept the terms and conditions'
  }

  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validate()) {
    emit('submit', formData.value)
  }
}
</script>

<template>
  <form
    :class="cn('space-y-4', props.class)"
    @submit.prevent="handleSubmit"
  >
    <!-- Name -->
    <div class="space-y-2">
      <Label for="name">Full Name</Label>
      <Input
        id="name"
        v-model="formData.name"
        type="text"
        placeholder="John Doe"
        :disabled="loading"
        :class="errors.name && 'border-destructive'"
      />
      <p v-if="errors.name" class="text-sm text-destructive">
        {{ errors.name }}
      </p>
    </div>

    <!-- Email -->
    <div class="space-y-2">
      <Label for="email">Email</Label>
      <Input
        id="email"
        v-model="formData.email"
        type="email"
        placeholder="name@example.com"
        :disabled="loading"
        :class="errors.email && 'border-destructive'"
      />
      <p v-if="errors.email" class="text-sm text-destructive">
        {{ errors.email }}
      </p>
    </div>

    <!-- Password -->
    <div class="space-y-2">
      <Label for="password">Password</Label>
      <Input
        id="password"
        v-model="formData.password"
        type="password"
        :disabled="loading"
        :class="errors.password && 'border-destructive'"
      />
      <p v-if="errors.password" class="text-sm text-destructive">
        {{ errors.password }}
      </p>
    </div>

    <!-- Confirm Password -->
    <div class="space-y-2">
      <Label for="confirmPassword">Confirm Password</Label>
      <Input
        id="confirmPassword"
        v-model="formData.confirmPassword"
        type="password"
        :disabled="loading"
        :class="errors.confirmPassword && 'border-destructive'"
      />
      <p v-if="errors.confirmPassword" class="text-sm text-destructive">
        {{ errors.confirmPassword }}
      </p>
    </div>

    <!-- Terms -->
    <div class="space-y-2">
      <div class="flex items-start space-x-2">
        <Checkbox
          id="terms"
          v-model:checked="formData.acceptTerms"
          :disabled="loading"
          :class="errors.acceptTerms && 'border-destructive'"
        />
        <Label for="terms" class="text-sm font-normal cursor-pointer leading-tight">
          I accept the <a href="#" class="text-primary hover:underline">terms and conditions</a>
        </Label>
      </div>
      <p v-if="errors.acceptTerms" class="text-sm text-destructive">
        {{ errors.acceptTerms }}
      </p>
    </div>

    <!-- Error Message -->
    <div v-if="error" class="p-3 text-sm text-destructive bg-destructive/10 rounded-md">
      {{ error }}
    </div>

    <!-- Submit Button -->
    <Button type="submit" class="w-full" :disabled="loading">
      <svg
        v-if="loading"
        class="mr-2 h-4 w-4 animate-spin"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" />
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
      </svg>
      {{ loading ? 'Creating account...' : 'Create account' }}
    </Button>
  </form>
</template>
