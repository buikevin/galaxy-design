import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Progress } from '@/components/ui/progress'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to React Vite Admin</p>
          </div>
          <div className="flex items-center gap-4">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" alt="Avatar" />
              <AvatarFallback>RV</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <Separator />

        {/* Stats Grid */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {['Total Revenue', 'Subscriptions', 'Sales', 'Active Now'].map((stat, i) => (
            <div key={i} className="rounded-lg border bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-muted-foreground">{stat}</p>
              <p className="text-2xl font-bold mt-2">
                {i === 0 ? '$45,231' : i === 1 ? '+2,350' : i === 2 ? '+12,234' : '+573'}
              </p>
              <Progress value={Math.random() * 100} className="mt-3" />
            </div>
          ))}
        </div>

        {/* Tabs Content */}
        <Tabs defaultValue="overview" className="space-y-4">
          <TabsList>
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-4">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex items-center justify-between border-b pb-3 last:border-0">
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarFallback>U{item}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">User Activity {item}</p>
                        <p className="text-xs text-muted-foreground">2 hours ago</p>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">View</Button>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="analytics">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Analytics Dashboard</h2>
              <p className="text-muted-foreground">Analytics content goes here...</p>
            </div>
          </TabsContent>

          <TabsContent value="reports">
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <h2 className="text-xl font-semibold mb-4">Reports</h2>
              <p className="text-muted-foreground">Reports content goes here...</p>
            </div>
          </TabsContent>
        </Tabs>

        {/* Search Section */}
        <div className="rounded-lg border bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Search</h2>
          <div className="flex gap-4">
            <Input placeholder="Search..." className="flex-1" />
            <Button>Search</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
