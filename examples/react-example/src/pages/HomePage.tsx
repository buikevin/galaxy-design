export function HomePage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-4xl font-bold">Welcome to Galaxy UI</h1>
        <p className="text-muted-foreground mt-2">
          Explore 28 production-ready components for React, Vue, and Angular
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-2">Form Components</h3>
          <p className="text-sm text-muted-foreground">
            9 components including Button, Input, Checkbox, Select, and more
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-2">Layout Components</h3>
          <p className="text-sm text-muted-foreground">
            4 components for organizing content: Accordion, Tabs, Separator, Collapsible
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-2">Navigation Components</h3>
          <p className="text-sm text-muted-foreground">
            4 components: Navigation Menu, Menubar, Context Menu, Dropdown Menu
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-2">Overlay Components</h3>
          <p className="text-sm text-muted-foreground">
            5 components: Dialog, Alert Dialog, Popover, Tooltip, Hover Card
          </p>
        </div>

        <div className="rounded-lg border p-6">
          <h3 className="font-semibold mb-2">Data Display</h3>
          <p className="text-sm text-muted-foreground">
            2 components: Avatar and Progress
          </p>
        </div>
      </div>

      <div className="rounded-lg border p-6 bg-muted/50">
        <h3 className="font-semibold mb-2">Getting Started</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Select any component from the sidebar to see live examples and implementation details.
        </p>
        <ul className="text-sm space-y-1 text-muted-foreground">
          <li>✓ Built with Radix UI primitives</li>
          <li>✓ Styled with Tailwind CSS</li>
          <li>✓ Fully accessible (WAI-ARIA compliant)</li>
          <li>✓ TypeScript support</li>
          <li>✓ Dark mode ready</li>
        </ul>
      </div>
    </div>
  )
}
