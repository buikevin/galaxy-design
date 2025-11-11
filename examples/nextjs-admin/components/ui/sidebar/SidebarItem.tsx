import React, { useState } from 'react'
import { Button } from '@/components/ui/button/Button'
import { cn } from '@/lib/utils'
import type { MenuItem } from './types'

interface SidebarItemProps {
  item: MenuItem
  collapsed?: boolean
  level?: number
  onClick?: (item: MenuItem) => void
}

export const SidebarItem: React.FC<SidebarItemProps> = ({
  item,
  collapsed = false,
  level = 0,
  onClick,
}) => {
  const [isExpanded, setIsExpanded] = useState(false)

  const handleClick = () => {
    onClick?.(item)
    if (item.children && item.children.length > 0) {
      setIsExpanded(!isExpanded)
    }
  }

  const hasChildren = item.children && item.children.length > 0

  return (
    <div>
      <Button
        variant="ghost"
        disabled={item.disabled}
        className={cn(
          'w-full justify-start gap-2 mb-1',
          item.active && 'bg-accent',
          collapsed && 'justify-center px-2'
        )}
        style={{ paddingLeft: `${level * 1 + 0.75}rem` }}
        onClick={handleClick}
      >
        {/* Icon */}
        {item.icon ? (
          <span className="shrink-0">{item.icon}</span>
        ) : (
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
            className="shrink-0"
          >
            <circle cx="12" cy="12" r="1" />
          </svg>
        )}

        {/* Label */}
        {!collapsed && <span className="flex-1 text-left truncate">{item.label}</span>}

        {/* Badge */}
        {!collapsed && item.badge && (
          <span className="ml-auto text-xs bg-primary text-primary-foreground rounded-full px-2 py-0.5">
            {item.badge}
          </span>
        )}

        {/* Expand icon */}
        {!collapsed && hasChildren && (
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
            className={cn('ml-auto transition-transform', isExpanded && 'rotate-90')}
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        )}
      </Button>

      {/* Children */}
      {hasChildren && isExpanded && !collapsed && (
        <div className="ml-2">
          {item.children!.map((child) => (
            <SidebarItem
              key={child.id}
              item={child}
              collapsed={collapsed}
              level={level + 1}
              onClick={onClick}
            />
          ))}
        </div>
      )}
    </div>
  )
}
