<script setup lang="ts">
import { ref, type HTMLAttributes } from 'vue'
import Button from '@/components/button/Button.vue'
import Input from '@/components/input/input.vue'
import Label from '@/components/label/label.vue'
import Checkbox from '@/components/checkbox/checkbox.vue'
import { cn } from '@/lib/utils'
import type { LoginFormData } from './types'

interface Props {
  loading?: boolean
  error?: string
  class?: HTMLAttributes['class']
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
})

const emit = defineEmits<{
  submit: [data: LoginFormData]
  forgotPassword: []
}>()

const formData = ref<LoginFormData>({
  email: '',
  password: '',
  rememberMe: false,
})

const errors = ref<Partial<Record<keyof LoginFormData, string>>>({})

const validate = (): boolean => {
  errors.value = {}

  if (!formData.value.email) {
    errors.value.email = 'Email is required'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.value.email)) {
    errors.value.email = 'Invalid email format'
  }

  if (!formData.value.password) {
    errors.value.password = 'Password is required'
  } else if (formData.value.password.length < 6) {
    errors.value.password = 'Password must be at least 6 characters'
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
      <div class="flex items-center justify-between">
        <Label for="password">Password</Label>
        <button
          type="button"
          class="text-sm text-primary hover:underline"
          @click="emit('forgotPassword')"
        >
          Forgot password?
        </button>
      </div>
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

    <!-- Remember Me -->
    <div class="flex items-center space-x-2">
      <Checkbox
        id="remember"
        v-model:checked="formData.rememberMe"
        :disabled="loading"
      />
      <Label for="remember" class="text-sm font-normal cursor-pointer">
        Remember me
      </Label>
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
      {{ loading ? 'Signing in...' : 'Sign in' }}
    </Button>
  </form>
</template>
