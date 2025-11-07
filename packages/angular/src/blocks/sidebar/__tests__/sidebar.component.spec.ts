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
      path: '/',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '⚙️',
      path: '/settings',
      badge: '3',
    },
    {
      id: 'profile',
      label: 'Profile',
      icon: '👤',
      children: [
        { id: 'edit', label: 'Edit Profile', path: '/profile/edit' },
        { id: 'security', label: 'Security', path: '/profile/security' },
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

  it('should display icons for menu items', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('🏠')
    expect(compiled.textContent).toContain('⚙️')
    expect(compiled.textContent).toContain('👤')
  })

  it('should show badge when provided', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('3')
  })

  it('should emit itemClick event when item is clicked', () => {
    spyOn(component.itemClick, 'emit')

    component.handleItemClick(mockMenuItems[0])

    expect(component.itemClick.emit).toHaveBeenCalledWith(mockMenuItems[0])
  })

  it('should toggle collapsed state', () => {
    expect(component.collapsed).toBe(false)

    component.toggleCollapsed()

    expect(component.collapsed).toBe(true)
  })

  it('should emit collapseChange event when collapsed', () => {
    spyOn(component.collapseChange, 'emit')

    component.toggleCollapsed()

    expect(component.collapseChange.emit).toHaveBeenCalledWith(true)
  })

  it('should apply collapsed class when collapsed', () => {
    component.collapsed = true
    fixture.detectChanges()

    const sidebarElement = fixture.nativeElement.querySelector('.sidebar')
    expect(sidebarElement.classList.contains('collapsed')).toBe(true)
  })

  it('should display nested menu items', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('Edit Profile')
    expect(compiled.textContent).toContain('Security')
  })

  it('should highlight active item', () => {
    component.activeItemId = 'home'
    fixture.detectChanges()

    const homeItem = fixture.nativeElement.querySelector('[data-item-id="home"]')
    expect(homeItem?.classList.contains('active')).toBe(true)
  })

  it('should calculate sidebar width based on collapsed state', () => {
    expect(component.sidebarWidth()).toBe('250px')

    component.collapsed = true
    expect(component.sidebarWidth()).toBe('64px')
  })

  it('should expand parent when child is active', () => {
    component.activeItemId = 'edit'
    fixture.detectChanges()

    const profileSection = fixture.nativeElement.querySelector('[data-item-id="profile"]')
    expect(profileSection?.classList.contains('expanded')).toBe(true)
  })
})
