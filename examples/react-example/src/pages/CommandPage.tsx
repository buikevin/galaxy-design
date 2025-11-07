import { useState } from 'react'
import { Search, FileText, Settings, User, HelpCircle } from 'lucide-react'

export function CommandPage() {
  const [search, setSearch] = useState('')

  const commands = [
    { icon: FileText, label: 'New Document', shortcut: 'Ctrl+N' },
    { icon: Settings, label: 'Settings', shortcut: 'Ctrl+,' },
    { icon: User, label: 'Profile', shortcut: 'Ctrl+P' },
    { icon: HelpCircle, label: 'Help', shortcut: 'Ctrl+?' },
  ]

  const filteredCommands = commands.filter((cmd) =>
    cmd.label.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Command</h1>
        <p className="text-muted-foreground mt-2">
          Fast, composable command menu for React.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add command</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Command Menu</h2>
          <div className="border rounded-lg overflow-hidden max-w-2xl">
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                type="text"
                placeholder="Type a command or search..."
                className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="max-h-80 overflow-auto p-1">
              {filteredCommands.length === 0 ? (
                <div className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </div>
              ) : (
                filteredCommands.map((cmd) => (
                  <div
                    key={cmd.label}
                    className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent hover:text-accent-foreground"
                  >
                    <cmd.icon className="mr-2 h-4 w-4" />
                    <span className="flex-1">{cmd.label}</span>
                    <span className="text-xs text-muted-foreground">{cmd.shortcut}</span>
                  </div>
                ))
              )}
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">With Groups</h2>
          <div className="border rounded-lg overflow-hidden max-w-2xl">
            <div className="flex items-center border-b px-3">
              <Search className="mr-2 h-4 w-4 shrink-0 opacity-50" />
              <input
                type="text"
                placeholder="Type a command or search..."
                className="flex h-11 w-full bg-transparent py-3 text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
            <div className="max-h-80 overflow-auto p-1">
              <div className="overflow-hidden p-1">
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Suggestions
                </div>
                <div className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent">
                  <FileText className="mr-2 h-4 w-4" />
                  <span>New Document</span>
                </div>
                <div className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </div>
              </div>
              <div className="overflow-hidden p-1">
                <div className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  Account
                </div>
                <div className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent">
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </div>
                <div className="relative flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-accent">
                  <HelpCircle className="mr-2 h-4 w-4" />
                  <span>Help</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Usage Example</h2>
          <div className="bg-muted p-4 rounded-lg">
            <p className="text-sm mb-2">
              Press{' '}
              <kbd className="px-2 py-1 text-xs font-semibold border rounded">Ctrl</kbd> +{' '}
              <kbd className="px-2 py-1 text-xs font-semibold border rounded">K</kbd> to open
              command menu
            </p>
          </div>
        </section>
      </div>
    </div>
  )
}
