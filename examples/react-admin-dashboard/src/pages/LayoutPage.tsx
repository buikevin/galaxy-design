import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export function LayoutPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Layout Components</h1>
        <p className="text-gray-500 mt-2">Cards, separators, and layout helpers</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Card Example</CardTitle>
            <CardDescription>A simple card component</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This is the card content area. You can put any content here.</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm text-gray-500">Card footer</p>
          </CardFooter>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Another Card</CardTitle>
            <CardDescription>Cards are versatile</CardDescription>
          </CardHeader>
          <CardContent>
            <p>Cards can contain any type of content including forms, lists, and more.</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Separator Example</CardTitle>
          <CardDescription>Visual dividers</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>Section 1</div>
          <Separator />
          <div>Section 2</div>
          <Separator />
          <div>Section 3</div>
        </CardContent>
      </Card>
    </div>
  )
}
