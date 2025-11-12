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
  loading?: boolean
  error?: string
  showSocialLogin?: boolean
}
