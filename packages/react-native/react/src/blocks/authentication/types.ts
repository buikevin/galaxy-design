export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface RegisterFormData {
  name: string
  email: string
  password: string
  confirmPassword: string
  acceptTerms?: boolean
}

export interface AuthFormProps {
  mode?: 'login' | 'register'
  onSubmit?: (data: LoginFormData | RegisterFormData) => void | Promise<void>
  onModeChange?: (mode: 'login' | 'register') => void
  loading?: boolean
  error?: string
  showSocialLogin?: boolean
  className?: string
}
