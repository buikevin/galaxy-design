export function KbdPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Kbd</h1>
        <p className="text-muted-foreground mt-2">
          Display keyboard shortcuts and key combinations with proper styling.
        </p>
      </div>

      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add kbd</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Keys</h2>
          <div className="flex gap-2 flex-wrap">
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Shift
            </kbd>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Ctrl
            </kbd>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Alt
            </kbd>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Cmd
            </kbd>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Combinations</h2>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                Ctrl
              </kbd>
              <span className="text-muted-foreground">+</span>
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                C
              </kbd>
              <span className="ml-2 text-sm text-muted-foreground">Copy</span>
            </div>

            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                Ctrl
              </kbd>
              <span className="text-muted-foreground">+</span>
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                V
              </kbd>
              <span className="ml-2 text-sm text-muted-foreground">Paste</span>
            </div>

            <div className="flex items-center gap-2">
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                Cmd
              </kbd>
              <span className="text-muted-foreground">+</span>
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                Shift
              </kbd>
              <span className="text-muted-foreground">+</span>
              <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
                P
              </kbd>
              <span className="ml-2 text-sm text-muted-foreground">
                Command palette
              </span>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Special Keys</h2>
          <div className="flex gap-2 flex-wrap">
            {['Enter', 'Tab', 'Space', 'Esc', 'Delete', 'Backspace', '↑', '↓', '←', '→'].map((key) => (
              <kbd
                key={key}
                className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500"
              >
                {key}
              </kbd>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Different Sizes</h2>
          <div className="flex items-center gap-4">
            <kbd className="px-1.5 py-1 text-[10px] font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Small
            </kbd>
            <kbd className="px-2 py-1.5 text-xs font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Default
            </kbd>
            <kbd className="px-3 py-2 text-sm font-semibold text-gray-800 bg-gray-100 border border-gray-200 rounded-lg dark:bg-gray-600 dark:text-gray-100 dark:border-gray-500">
              Large
            </kbd>
          </div>
        </section>
      </div>
    </div>
  )
}
