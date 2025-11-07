import { Button } from '@/components/ui/button'
import { FileQuestion, Plus } from 'lucide-react'

export function EmptyPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Empty</h1>
        <p className="text-muted-foreground mt-2">
          Displays an empty state placeholder when there is no content.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add empty</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Empty State</h2>
          <div className="border rounded-lg p-12 flex flex-col items-center justify-center text-center">
            <FileQuestion className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No data available</h3>
            <p className="text-sm text-muted-foreground mb-4">
              There are no items to display at the moment.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">With Action Button</h2>
          <div className="border rounded-lg p-12 flex flex-col items-center justify-center text-center">
            <FileQuestion className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-semibold mb-2">No projects yet</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Get started by creating your first project.
            </p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create Project
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">No Search Results</h2>
          <div className="border rounded-lg p-12 flex flex-col items-center justify-center text-center">
            <div className="rounded-full bg-muted p-6 mb-4">
              <FileQuestion className="h-8 w-8 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">No results found</h3>
            <p className="text-sm text-muted-foreground max-w-md">
              We couldn't find any items matching your search. Try adjusting your
              filters or search terms.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Custom Empty State</h2>
          <div className="border rounded-lg p-12 flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
            <div className="text-6xl mb-4">📦</div>
            <h3 className="text-lg font-semibold mb-2">Your cart is empty</h3>
            <p className="text-sm text-muted-foreground mb-4 max-w-md">
              Looks like you haven't added any items to your cart yet. Start
              shopping to fill it up!
            </p>
            <Button variant="default">Start Shopping</Button>
          </div>
        </section>
      </div>
    </div>
  )
}
