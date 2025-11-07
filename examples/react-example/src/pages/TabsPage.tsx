import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'


export function TabsPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Tabs</h1>
        <p className="text-muted-foreground mt-2">
          Tabs component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Tabs defaultValue="account" className="w-[400px]"><TabsList><TabsTrigger value="account">Account</TabsTrigger><TabsTrigger value="password">Password</TabsTrigger></TabsList><TabsContent value="account">Make changes to your account here.</TabsContent><TabsContent value="password">Change your password here.</TabsContent></Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
