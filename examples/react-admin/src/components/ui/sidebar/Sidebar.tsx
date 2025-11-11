import React, { useState } from 'react'
import { Button } from '@/components/ui/button/Button'
import { Separator } from '@/components/ui/separator/Separator'
import { SidebarItem } from './SidebarItem'
import { cn } from '@/lib/utils'
import type { SidebarProps, MenuItem } from './types'

export const Sidebar: React.FC<SidebarProps> = ({
  items,
  collapsible = true,
  defaultCollapsed = false,
  width = '280px',
  collapsedWidth = '60px',
  onItemClick,
  onCollapseChange,
  className,
}) => {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed)

  const toggleCollapse = () => {
    const newCollapsed = !isCollapsed
    setIsCollapsed(newCollapsed)
    onCollapseChange?.(newCollapsed)
  }

  const handleItemClick = (item: MenuItem) => {
    onItemClick?.(item)
  }

  const currentWidth = isCollapsed ? collapsedWidth : width

  return (
    <aside
      className={cn(
        'flex flex-col h-full border-r bg-card transition-all duration-300',
        className
      )}
      style={{ width: currentWidth }}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        {!isCollapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded bg-primary" />
            <h2 className="text-lg font-semibold">Menu</h2>
          </div>
        )}
        {isCollapsed && (
          <div className="flex justify-center w-full">
            <div className="h-8 w-8 rounded bg-primary" />
          </div>
        )}
      </div>

      <Separator />

      {/* Navigation Items */}
      <nav className="flex-1 overflow-y-auto p-2">
        {items.map((item) => (
          <SidebarItem
            key={item.id}
            item={item}
            collapsed={isCollapsed}
            onClick={handleItemClick}
          />
        ))}
      </nav>

      <Separator />

      {/* Footer */}
      <div className="p-2">
        {collapsible && (
          <Button
            variant="ghost"
            className={cn('w-full', isCollapsed && 'justify-center px-2')}
            onClick={toggleCollapse}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className={cn('transition-transform', isCollapsed && 'rotate-180')}
            >
              <path d="m15 18-6-6 6-6" />
            </svg>
            {!isCollapsed && <span className="ml-2">Collapse</span>}
          </Button>
        )}
      </div>
    </aside>
  )
}
