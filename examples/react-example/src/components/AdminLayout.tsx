import { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import {
  ChevronDown,
  ChevronRight,
  LayoutDashboard,
  FormInput,
  Layout,
  Navigation,
  Layers,
  Database,
  Type,
  Calendar,
  Command,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface MenuSection {
  title: string
  icon: React.ReactNode
  items: {
    name: string
    path: string
  }[]
}

const menuSections: MenuSection[] = [
  {
    title: 'Form Components',
    icon: <FormInput className="h-4 w-4" />,
    items: [
      { name: 'Button', path: '/button' },
      { name: 'Input', path: '/input' },
      { name: 'Checkbox', path: '/checkbox' },
      { name: 'Radio Group', path: '/radio-group' },
      { name: 'Select', path: '/select' },
      { name: 'Slider', path: '/slider' },
      { name: 'Switch', path: '/switch' },
      { name: 'Textarea', path: '/textarea' },
      { name: 'Label', path: '/label' },
    ],
  },
  {
    title: 'Layout Components',
    icon: <Layout className="h-4 w-4" />,
    items: [
      { name: 'Separator', path: '/separator' },
      { name: 'Accordion', path: '/accordion' },
      { name: 'Collapsible', path: '/collapsible' },
      { name: 'Tabs', path: '/tabs' },
    ],
  },
  {
    title: 'Navigation Components',
    icon: <Navigation className="h-4 w-4" />,
    items: [
      { name: 'Navigation Menu', path: '/navigation-menu' },
      { name: 'Menubar', path: '/menubar' },
      { name: 'Context Menu', path: '/context-menu' },
      { name: 'Dropdown Menu', path: '/dropdown-menu' },
    ],
  },
  {
    title: 'Overlay Components',
    icon: <Layers className="h-4 w-4" />,
    items: [
      { name: 'Dialog', path: '/dialog' },
      { name: 'Alert Dialog', path: '/alert-dialog' },
      { name: 'Popover', path: '/popover' },
      { name: 'Tooltip', path: '/tooltip' },
      { name: 'Hover Card', path: '/hover-card' },
    ],
  },
  {
    title: 'Data Display Components',
    icon: <Database className="h-4 w-4" />,
    items: [
      { name: 'Avatar', path: '/avatar' },
      { name: 'Progress', path: '/progress' },
      { name: 'Table', path: '/table' },
      { name: 'Pagination', path: '/pagination' },
      { name: 'Empty', path: '/empty' },
      { name: 'Skeleton', path: '/skeleton' },
    ],
  },
  {
    title: 'Typography & Utilities',
    icon: <Type className="h-4 w-4" />,
    items: [
      { name: 'Typography', path: '/typography' },
      { name: 'Kbd', path: '/kbd' },
    ],
  },
  {
    title: 'Date & Time',
    icon: <Calendar className="h-4 w-4" />,
    items: [
      { name: 'Calendar', path: '/calendar' },
      { name: 'Calendar Range', path: '/calendar-range' },
    ],
  },
  {
    title: 'Advanced Components',
    icon: <Command className="h-4 w-4" />,
    items: [
      { name: 'Command', path: '/command' },
      { name: 'Sheet', path: '/sheet' },
      { name: 'Toolbar', path: '/toolbar' },
      { name: 'Tags Input', path: '/tags-input' },
    ],
  },
]

export function AdminLayout() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'Form Components',
  ])
  const location = useLocation()

  const toggleSection = (title: string) => {
    setExpandedSections((prev) =>
      prev.includes(title)
        ? prev.filter((s) => s !== title)
        : [...prev, title]
    )
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-card shadow-sm">
        <div className="flex h-16 items-center gap-2 border-b px-6 bg-background/50">
          <LayoutDashboard className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-bold tracking-tight">Galaxy UI</h1>
        </div>

        <div className="h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="p-3 space-y-1">
            {menuSections.map((section) => {
              const isExpanded = expandedSections.includes(section.title)

              return (
                <div key={section.title}>
                  <Button
                    variant="ghost"
                    className="w-full justify-between hover:bg-accent text-sm"
                    onClick={() => toggleSection(section.title)}
                  >
                    <span className="flex items-center gap-2 font-medium">
                      {section.icon}
                      <span>{section.title}</span>
                    </span>
                    {isExpanded ? (
                      <ChevronDown className="h-4 w-4" />
                    ) : (
                      <ChevronRight className="h-4 w-4" />
                    )}
                  </Button>

                  {isExpanded && (
                    <div className="ml-6 mt-1 space-y-0.5 mb-2">
                      {section.items.map((item) => (
                        <Link key={item.path} to={item.path}>
                          <Button
                            variant="ghost"
                            size="sm"
                            className={cn(
                              'w-full justify-start text-sm font-normal',
                              location.pathname === item.path &&
                                'bg-accent text-accent-foreground font-medium'
                            )}
                          >
                            {item.name}
                          </Button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto bg-background">
        <Outlet />
      </main>
    </div>
  )
}
