import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Button } from '@/components/ui/button'


export function MenubarPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Menubar</h1>
        <p className="text-muted-foreground mt-2">
          Menubar component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <Menubar><MenubarMenu><MenubarTrigger>File</MenubarTrigger><MenubarContent><MenubarItem>New Tab</MenubarItem><MenubarItem>New Window</MenubarItem></MenubarContent></MenubarMenu></Menubar>
          </div>
        </div>
      </div>
    </div>
  )
}
