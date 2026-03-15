import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CommonModule } from '@angular/common'
import { SidebarComponent } from '../sidebar.component'
import type { MenuItem } from '../types'

describe('SidebarComponent', () => {
  let component: SidebarComponent
  let fixture: ComponentFixture<SidebarComponent>

  const mockMenuItems: MenuItem[] = [
    {
      id: 'home',
      label: 'Home',
      icon: '🏠',
      href: '/',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      href: '/settings',
      badge: '3',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: '👤',
      children: [
        { id: 'edit', label: 'Edit Profile', href: '/profile/edit' },
        { id: 'security', label: 'Security', href: '/profile/security' },
      ],
    },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent, CommonModule],
    }).compileComponents()

    fixture = TestBed.createComponent(SidebarComponent)
    component = fixture.componentInstance
    component.items = mockMenuItems
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render menu items correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('Home')
    expect(compiled.textContent).toContain('Settings')
    expect(compiled.textContent).toContain('Profile')
  })

  it('should display labels when not collapsed', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('Home')
    expect(compiled.textContent).toContain('Settings')
    expect(compiled.textContent).toContain('Profile')
  })

  it('should emit itemClick event when item is clicked', () => {
    spyOn(component.itemClick, 'emit')

    const firstItem = fixture.nativeElement.querySelector('.sidebar-item-placeholder') as HTMLElement
    firstItem.click()

    expect(component.itemClick.emit).toHaveBeenCalledWith(mockMenuItems[0])
  })

  it('should toggle collapsed state', () => {
    expect(component.isCollapsed).toBe(false)

    component.toggleCollapse()

    expect(component.isCollapsed).toBe(true)
  })

  it('should emit collapseChange event when collapsed', () => {
    spyOn(component.collapseChange, 'emit')

    component.toggleCollapse()

    expect(component.collapseChange.emit).toHaveBeenCalledWith(true)
  })

  it('should display icons when collapsed', () => {
    component.toggleCollapse()
    fixture.detectChanges()

    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('🏠')
    expect(compiled.textContent).toContain('⚙️')
    expect(compiled.textContent).toContain('👤')
  })

  it('should set width based on collapsed state', () => {
    component.width = '250px'
    component.collapsedWidth = '64px'
    fixture.detectChanges()

    expect(component.currentWidth).toBe('250px')
    component.toggleCollapse()
    expect(component.currentWidth).toBe('64px')
  })
})
