export interface MenuItem {
  id: string
  label: string
  icon?: string
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
}
