import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/ui/navigation-menu'
import { Button } from '@/components/ui/button'


export function NavigationMenuPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">NavigationMenu</h1>
        <p className="text-muted-foreground mt-2">
          NavigationMenu component examples and usage.
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <h2 className="text-xl font-semibold mb-4">Example</h2>
          <div className="flex flex-col gap-4">
            <NavigationMenu><NavigationMenuList><NavigationMenuItem><NavigationMenuTrigger>Item One</NavigationMenuTrigger><NavigationMenuContent><NavigationMenuLink>Link</NavigationMenuLink></NavigationMenuContent></NavigationMenuItem></NavigationMenuList></NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  )
}
