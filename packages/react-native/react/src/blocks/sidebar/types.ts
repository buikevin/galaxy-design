export interface MenuItem {
  id: string
  label: string
  icon?: React.ReactNode
  href?: string
  badge?: string | number
  children?: MenuItem[]
  active?: boolean
  disabled?: boolean
}

export interface SidebarProps {
  items: MenuItem[]
  collapsible?: boolean
  defaultCollapsed?: boolean
  width?: string
  collapsedWidth?: string
  onItemClick?: (item: MenuItem) => void
  onCollapseChange?: (collapsed: boolean) => void
  className?: string
}
