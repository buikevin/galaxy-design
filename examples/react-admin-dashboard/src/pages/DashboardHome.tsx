import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export function DashboardHome() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <p className="text-gray-500 mt-2">Welcome to Galaxy UI Admin Dashboard</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Form Components</CardTitle>
            <CardDescription>Input, Button, Checkbox, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge>13 Components</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Display</CardTitle>
            <CardDescription>Table, Badge, Avatar, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge>15 Components</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Feedback</CardTitle>
            <CardDescription>Alert, Toast, Dialog, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge>10 Components</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Navigation</CardTitle>
            <CardDescription>Tabs, Breadcrumb, Menu, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge>8 Components</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Layout</CardTitle>
            <CardDescription>Card, Separator, Accordion, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge>12 Components</Badge>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Charts</CardTitle>
            <CardDescription>Line, Bar, Pie, Scatter, etc.</CardDescription>
          </CardHeader>
          <CardContent>
            <Badge>8 Components</Badge>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Getting Started</CardTitle>
          <CardDescription>Quick guide to using the dashboard</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold mb-2">Navigation</h3>
            <p className="text-sm text-gray-600">
              Use the sidebar on the left to navigate between different component categories.
              Click on any menu item to view examples of that category.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Components</h3>
            <p className="text-sm text-gray-600">
              All components are built with Galaxy UI, a multi-framework UI library that supports
              React, Vue, Angular, and more.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Authentication</h3>
            <p className="text-sm text-gray-600">
              Default credentials: <code className="bg-gray-100 px-2 py-1 rounded">admin</code> /
              <code className="bg-gray-100 px-2 py-1 rounded ml-1">Abc123@</code>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
