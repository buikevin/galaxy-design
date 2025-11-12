import { Outlet, useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import { Sidebar } from '@/components/ui/sidebar'
import { Button } from '@/components/ui/button'
import type { MenuItem } from '@/components/ui/sidebar/types'
import { LayoutDashboard, FileText, Database, MessageSquare, Compass, Layout } from 'lucide-react'

export function DashboardLayout() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  const menuItems: MenuItem[] = [
    { id: 'dashboard', label: 'Dashboard', icon: <LayoutDashboard className="w-5 h-5" />, href: '/dashboard' },
    { id: 'forms', label: 'Form Components', icon: <FileText className="w-5 h-5" />, href: '/dashboard/forms' },
    { id: 'data', label: 'Data Display', icon: <Database className="w-5 h-5" />, href: '/dashboard/data' },
    { id: 'feedback', label: 'Feedback', icon: <MessageSquare className="w-5 h-5" />, href: '/dashboard/feedback' },
    { id: 'navigation', label: 'Navigation', icon: <Compass className="w-5 h-5" />, href: '/dashboard/navigation' },
    { id: 'layout', label: 'Layout', icon: <Layout className="w-5 h-5" />, href: '/dashboard/layout' },
  ]

  const handleItemClick = (item: MenuItem) => {
    if (item.href) {
      navigate(item.href)
    }
  }

  return (
    <div className="min-h-screen flex bg-gray-50">
      <Sidebar
        items={menuItems}
        onItemClick={handleItemClick}
        onCollapseChange={() => {}}
      />
      <div className="flex-1 flex flex-col">
        <header className="bg-white border-b p-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Galaxy UI Admin Dashboard</h1>
          <Button variant="outline" onClick={handleLogout}>
            Logout
          </Button>
        </header>
        <main className="flex-1 p-8 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
