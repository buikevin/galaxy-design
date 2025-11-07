export interface DrawerItem {
  id: string
  label: string
  icon?: React.ReactNode | string
  onPress?: () => void
  badge?: string | number
  active?: boolean
}

export interface DrawerProps {
  items: DrawerItem[]
  onItemPress?: (item: DrawerItem) => void
  header?: React.ReactNode
  footer?: React.ReactNode
}
