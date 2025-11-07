# Authentication

Complete authentication forms with login, register, social login, validation, and error handling.

## Installation

```bash
npx galaxy-ui-cli add authentication
```

## Features

- ✅ **Login & Register Forms** - Complete auth flows
- ✅ **Form Validation** - Client-side validation with error messages
- ✅ **Social Login** - Google, GitHub buttons
- ✅ **Remember Me** - Checkbox for persistent login
- ✅ **Password Strength** - Minimum 8 characters for registration
- ✅ **Terms Acceptance** - Required checkbox
- ✅ **Mode Switching** - Toggle between login/register
- ✅ **Loading States** - Disabled inputs during submission
- ✅ **Error Display** - Server error messages

## Components Used

- [Button](/components/button)
- [Input](/components/input)
- [Label](/components/label)
- [Checkbox](/components/checkbox)
- [Separator](/components/separator)

## Usage

### Basic Authentication Form

::: code-group
```vue [Vue]
<script setup>
import { ref } from 'vue'
import { AuthForm } from '@/components/ui/authentication'

const loading = ref(false)
const error = ref('')

const handleSubmit = async (data) => {
  loading.value = true
  error.value = ''

  try {
    // Your auth logic
    const response = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })

    if (!response.ok) throw new Error('Login failed')

    const user = await response.json()
    // Redirect or update state
  } catch (e) {
    error.value = e.message
  } finally {
    loading.value = false
  }
}

const handleSocialLogin = (provider) => {
  window.location.href = `/api/auth/${provider}`
}
</script>

<template>
  <AuthForm
    mode="login"
    :loading="loading"
    :error="error"
    show-social-login
    @submit="handleSubmit"
    @social-login="handleSocialLogin"
  />
</template>
```

```tsx [React]
import { useState } from 'react'
import { AuthForm } from '@/components/ui/authentication'

export default function LoginPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (data) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      })

      if (!response.ok) throw new Error('Login failed')

      const user = await response.json()
      // Redirect or update state
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  const handleSocialLogin = (provider) => {
    window.location.href = `/api/auth/${provider}`
  }

  return (
    <AuthForm
      mode="login"
      loading={loading}
      error={error}
      showSocialLogin
      onSubmit={handleSubmit}
      onSocialLogin={handleSocialLogin}
    />
  )
}
```
:::

## Props

### AuthForm Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `mode` | `'login' \| 'register'` | `'login'` | Initial form mode |
| `onSubmit` | `(data) => void` | required | Called on form submission |
| `onModeChange` | `(mode) => void` | - | Called when mode changes |
| `loading` | `boolean` | `false` | Show loading state |
| `error` | `string` | - | Error message to display |
| `showSocialLogin` | `boolean` | `true` | Show social login buttons |

### Form Data Types

```typescript
interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms?: boolean
}
```

## Advanced Usage

### With NextAuth

```tsx
import { signIn } from 'next-auth/react'
import { AuthForm } from '@/components/ui/authentication'

export default function LoginPage() {
  const handleSubmit = async (data) => {
    const result = await signIn('credentials', {
      redirect: false,
      email: data.email,
      password: data.password,
    })

    if (result?.error) {
      setError(result.error)
    } else {
      router.push('/dashboard')
    }
  }

  const handleSocialLogin = async (provider) => {
    await signIn(provider, { callbackUrl: '/dashboard' })
  }

  return (
    <AuthForm
      onSubmit={handleSubmit}
      onSocialLogin={handleSocialLogin}
    />
  )
}
```

### Separate Login/Register Pages

```tsx
// login-page.tsx
import { LoginForm } from '@/components/ui/authentication'

export default function LoginPage() {
  return (
    <div className="container max-w-md mx-auto py-12">
      <LoginForm
        onSubmit={handleLogin}
        onForgotPassword={() => router.push('/forgot-password')}
      />
      
      <p className="text-center mt-4">
        Don't have an account?{' '}
        <Link href="/register" className="text-primary">Sign up</Link>
      </p>
    </div>
  )
}

// register-page.tsx
import { RegisterForm } from '@/components/ui/authentication'

export default function RegisterPage() {
  return (
    <div className="container max-w-md mx-auto py-12">
      <RegisterForm onSubmit={handleRegister} />
      
      <p className="text-center mt-4">
        Already have an account?{' '}
        <Link href="/login" className="text-primary">Sign in</Link>
      </p>
    </div>
  )
}
```

## Validation

The authentication block includes built-in validation:

- **Email**: Required, valid email format
- **Password (Login)**: Required, minimum 6 characters
- **Password (Register)**: Required, minimum 8 characters
- **Confirm Password**: Must match password
- **Terms**: Must be accepted

## Platform Availability

| Platform | Status |
|----------|--------|
| Vue 3 | ✅ Available |
| React 18+ | ✅ Available |
| Angular 20 | ✅ Available |
| React Native | ✅ [Mobile Version](/blocks/mobile/authentication) |
| Flutter | ✅ [Mobile Version](/blocks/mobile/authentication) |
