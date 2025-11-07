# Authentication (Mobile)

Mobile-optimized authentication forms with native keyboard handling, biometric support, and touch-friendly inputs.

## Installation

```bash
npx galaxy-ui-cli add authentication
```

::: info Platform
Mobile version for **React Native** and **Flutter**. For web, see [Authentication (Web)](/blocks/web/authentication).
:::

## Features

- ✅ **Native Keyboard** - Automatic keyboard management
- ✅ **Biometric Auth** - Touch ID / Face ID support
- ✅ **Form Validation** - Real-time validation
- ✅ **Touch-Optimized** - Large input fields
- ✅ **Platform-Specific** - iOS/Android styling

## Usage

### React Native

```tsx
import { AuthForm } from '@/components/ui/authentication'

export default function LoginScreen() {
  const handleLogin = async (data) => {
    // Your auth logic
  }

  return (
    <AuthForm
      mode="login"
      onSubmit={handleLogin}
    />
  )
}
```

## Platform Availability

| Platform | Status |
|----------|--------|
| React Native | ✅ Available |
| Flutter | ✅ Available |
