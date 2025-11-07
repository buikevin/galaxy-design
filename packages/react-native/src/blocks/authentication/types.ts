export interface LoginFormData {
  email: string
  password: string
  rememberMe?: boolean
}

export interface AuthFormProps {
  onSubmit?: (data: LoginFormData) => void
  loading?: boolean
  error?: string
}
