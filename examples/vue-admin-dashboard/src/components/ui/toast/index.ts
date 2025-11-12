import { ref } from 'vue'

interface Toast {
  id: string
  title?: string
  description?: string
  variant?: 'default' | 'destructive'
}

const toasts = ref<Toast[]>([])

export function toast({ title, description, variant = 'default' }: Omit<Toast, 'id'>) {
  const id = Math.random().toString(36).substr(2, 9)
  toasts.value.push({ id, title, description, variant })

  // Auto remove after 3 seconds
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 3000)
}

export const useToasts = () => toasts
