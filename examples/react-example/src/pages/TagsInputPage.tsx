import { useState } from 'react'
import { X } from 'lucide-react'

export function TagsInputPage() {
  const [tags, setTags] = useState<string[]>(['React', 'TypeScript', 'Tailwind'])
  const [input, setInput] = useState('')

  const addTag = () => {
    if (input.trim() && !tags.includes(input.trim())) {
      setTags([...tags, input.trim()])
      setInput('')
    }
  }

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter((tag) => tag !== tagToRemove))
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      addTag()
    } else if (e.key === 'Backspace' && !input && tags.length > 0) {
      removeTag(tags[tags.length - 1])
    }
  }

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Tags Input</h1>
        <p className="text-muted-foreground mt-2">
          An input field for adding and managing tags.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add tags-input</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Tags Input</h2>
          <div className="space-y-2">
            <label className="text-sm font-medium">Skills</label>
            <div className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm flex-wrap gap-2 items-start">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-sm"
                >
                  {tag}
                  <button
                    onClick={() => removeTag(tag)}
                    className="hover:bg-primary/80 rounded-sm"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
              <input
                type="text"
                className="flex-1 min-w-[120px] outline-none bg-transparent"
                placeholder="Add a tag..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <p className="text-xs text-muted-foreground">
              Press Enter to add a tag, Backspace to remove the last tag
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Variant Styles</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Secondary Tags</label>
              <div className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm flex-wrap gap-2">
                {['JavaScript', 'Python', 'Go'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm"
                  >
                    {tag}
                    <button className="hover:bg-secondary/80 rounded-sm">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Outline Tags</label>
              <div className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm flex-wrap gap-2">
                {['Design', 'Development', 'Marketing'].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-2 py-1 rounded-md border border-input text-sm"
                  >
                    {tag}
                    <button className="hover:bg-accent rounded-sm">
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">With Suggestions</h2>
          <div className="space-y-2">
            <label className="text-sm font-medium">Technologies</label>
            <div className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm flex-wrap gap-2">
              {['React', 'Vue'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-sm"
                >
                  {tag}
                  <button className="hover:bg-primary/80 rounded-sm">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="text-xs text-muted-foreground">Suggestions:</span>
              {['Angular', 'Svelte', 'Next.js', 'Nuxt.js'].map((suggestion) => (
                <button
                  key={suggestion}
                  className="text-xs px-2 py-1 rounded border border-dashed border-muted-foreground/50 hover:bg-accent"
                >
                  + {suggestion}
                </button>
              ))}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Max Tags</h2>
          <div className="space-y-2">
            <label className="text-sm font-medium">Categories (Max 5)</label>
            <div className="flex min-h-[60px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm flex-wrap gap-2">
              {['Sports', 'Technology', 'Music'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-primary text-primary-foreground text-sm"
                >
                  {tag}
                  <button className="hover:bg-primary/80 rounded-sm">
                    <X className="h-3 w-3" />
                  </button>
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">3 / 5 tags used</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Read Only</h2>
          <div className="space-y-2">
            <label className="text-sm font-medium">Selected Tags</label>
            <div className="flex min-h-[60px] w-full rounded-md border border-input bg-muted px-3 py-2 text-sm flex-wrap gap-2">
              {['React', 'TypeScript', 'Tailwind CSS'].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
