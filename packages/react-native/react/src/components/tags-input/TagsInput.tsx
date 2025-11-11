import * as React from 'react'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

export interface TagsInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'> {
  value?: string[]
  onChange?: (tags: string[]) => void
  onTagAdd?: (tag: string) => void
  onTagRemove?: (tag: string) => void
}

const TagsInput = React.forwardRef<HTMLDivElement, TagsInputProps>(
  (
    {
      className,
      value = [],
      onChange,
      onTagAdd,
      onTagRemove,
      placeholder = 'Add tag...',
      ...props
    },
    ref
  ) => {
    const [inputValue, setInputValue] = React.useState('')
    const inputRef = React.useRef<HTMLInputElement>(null)

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && inputValue.trim()) {
        e.preventDefault()
        const newTag = inputValue.trim()
        if (!value.includes(newTag)) {
          const newTags = [...value, newTag]
          onChange?.(newTags)
          onTagAdd?.(newTag)
        }
        setInputValue('')
      } else if (e.key === 'Backspace' && !inputValue && value.length > 0) {
        const lastTag = value[value.length - 1]
        const newTags = value.slice(0, -1)
        onChange?.(newTags)
        onTagRemove?.(lastTag)
      }
    }

    const removeTag = (tagToRemove: string) => {
      const newTags = value.filter((tag) => tag !== tagToRemove)
      onChange?.(newTags)
      onTagRemove?.(tagToRemove)
    }

    return (
      <div
        ref={ref}
        className={cn(
          'flex min-h-10 w-full flex-wrap gap-2 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2',
          className
        )}
        onClick={() => inputRef.current?.focus()}
      >
        {value.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 rounded-md bg-primary px-2 py-1 text-xs font-medium text-primary-foreground"
          >
            {tag}
            <button
              type="button"
              className="rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={() => removeTag(tag)}
            >
              <X className="h-3 w-3" />
              <span className="sr-only">Remove {tag}</span>
            </button>
          </span>
        ))}
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={value.length === 0 ? placeholder : ''}
          className="flex-1 bg-transparent outline-none placeholder:text-muted-foreground"
          {...props}
        />
      </div>
    )
  }
)
TagsInput.displayName = 'TagsInput'

export { TagsInput }
