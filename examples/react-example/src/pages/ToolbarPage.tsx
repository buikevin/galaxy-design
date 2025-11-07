import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  Link,
  Image,
  List,
  ListOrdered,
} from 'lucide-react'

export function ToolbarPage() {
  return (
    <div className="space-y-8 p-8">
      <div>
        <h1 className="text-3xl font-bold">Toolbar</h1>
        <p className="text-muted-foreground mt-2">
          A container for grouping a set of controls, such as buttons, toggle groups, or dropdown menus.
        </p>
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Installation</h2>
          <div className="bg-muted p-4 rounded-lg">
            <code className="text-sm">npx galaxy-ui add toolbar</code>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Basic Toolbar</h2>
          <div className="border rounded-lg p-4 flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Underline className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">With Separators</h2>
          <div className="border rounded-lg p-4 flex items-center gap-2">
            <Button variant="ghost" size="icon">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Underline className="h-4 w-4" />
            </Button>
            <Separator orientation="vertical" className="h-6" />
            <Button variant="ghost" size="icon">
              <AlignLeft className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <AlignCenter className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <AlignRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Rich Text Editor Toolbar</h2>
          <div className="border rounded-lg">
            <div className="border-b p-2 flex items-center gap-2 flex-wrap">
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Bold className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Italic className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Underline className="h-4 w-4" />
                </Button>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignLeft className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignCenter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <AlignRight className="h-4 w-4" />
                </Button>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <List className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <ListOrdered className="h-4 w-4" />
                </Button>
              </div>
              <Separator orientation="vertical" className="h-6" />
              <div className="flex items-center gap-1">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Link className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Image className="h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="p-4 min-h-[200px]">
              <p className="text-sm text-muted-foreground">
                Click the toolbar buttons above to format your text...
              </p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Compact Toolbar</h2>
          <div className="border rounded-lg p-2 inline-flex items-center gap-1">
            <Button variant="ghost" size="sm">
              <Bold className="h-3 w-3 mr-1" />
              Bold
            </Button>
            <Button variant="ghost" size="sm">
              <Italic className="h-3 w-3 mr-1" />
              Italic
            </Button>
            <Button variant="ghost" size="sm">
              <Underline className="h-3 w-3 mr-1" />
              Underline
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Vertical Toolbar</h2>
          <div className="border rounded-lg p-2 inline-flex flex-col gap-2 w-fit">
            <Button variant="ghost" size="icon">
              <Bold className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Italic className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Underline className="h-4 w-4" />
            </Button>
            <Separator className="w-full" />
            <Button variant="ghost" size="icon">
              <Link className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon">
              <Image className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">With Labels</h2>
          <div className="border rounded-lg p-4 flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Format:</span>
              <Button variant="outline" size="sm">
                <Bold className="h-3 w-3 mr-2" />
                Bold
              </Button>
              <Button variant="outline" size="sm">
                <Italic className="h-3 w-3 mr-2" />
                Italic
              </Button>
            </div>
            <Separator orientation="vertical" className="h-6" />
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-muted-foreground">Align:</span>
              <Button variant="outline" size="sm">
                <AlignLeft className="h-3 w-3 mr-2" />
                Left
              </Button>
              <Button variant="outline" size="sm">
                <AlignCenter className="h-3 w-3 mr-2" />
                Center
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
