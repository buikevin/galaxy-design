import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'


export function DropdownMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">DropdownMenu</h1>
        <p className="text-muted-foreground mt-2">
          DropdownMenu component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <DropdownMenu><DropdownMenuTrigger><Button>Open</Button></DropdownMenuTrigger><DropdownMenuContent><DropdownMenuItem>Profile</DropdownMenuItem><DropdownMenuItem>Settings</DropdownMenuItem><DropdownMenuItem>Logout</DropdownMenuItem></DropdownMenuContent></DropdownMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
