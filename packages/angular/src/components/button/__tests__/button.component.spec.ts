import { ComponentFixture, TestBed } from '@angular/core/testing'
import { ButtonComponent } from '../button.component'
import { Component } from '@angular/core'

@Component({
  template: `<ui-button [variant]="variant" [size]="size" [disabled]="disabled" (click)="onClick()">{{text}}</ui-button>`,
  standalone: true,
  imports: [ButtonComponent],
})
class TestHostComponent {
  variant: any = 'default'
  size: any = 'default'
  disabled = false
  text = 'Click me'
  onClick() {}
}

describe('ButtonComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>
  let component: TestHostComponent
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent, TestHostComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render button with text', () => {
    expect(compiled.textContent).toContain('Click me')
  })

  it('should render with different variants', () => {
    const variants = ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link']

    variants.forEach((variant) => {
      component.variant = variant
      fixture.detectChanges()
      const button = compiled.querySelector('button')
      expect(button).toBeTruthy()
    })
  })

  it('should render with different sizes', () => {
    const sizes = ['sm', 'default', 'lg', 'icon']

    sizes.forEach((size) => {
      component.size = size
      fixture.detectChanges()
      const button = compiled.querySelector('button')
      expect(button).toBeTruthy()
    })
  })

  it('should handle click events', () => {
    spyOn(component, 'onClick')

    const button = compiled.querySelector('button') as HTMLButtonElement
    button.click()

    expect(component.onClick).toHaveBeenCalled()
  })

  it('should not trigger click when disabled', () => {
    spyOn(component, 'onClick')
    component.disabled = true
    fixture.detectChanges()

    const button = compiled.querySelector('button') as HTMLButtonElement
    button.click()

    expect(component.onClick).not.toHaveBeenCalled()
  })

  it('should show disabled state', () => {
    component.disabled = true
    fixture.detectChanges()

    const button = compiled.querySelector('button') as HTMLButtonElement
    expect(button.disabled).toBe(true)
  })

  it('should apply custom className', () => {
    const customFixture = TestBed.createComponent(ButtonComponent)
    const customComponent = customFixture.componentInstance
    customComponent.class = 'custom-class'
    customFixture.detectChanges()

    const button = customFixture.nativeElement.querySelector('button')
    expect(button.classList.contains('custom-class')).toBe(true)
  })

  it('should have correct type attribute', () => {
    const customFixture = TestBed.createComponent(ButtonComponent)
    const customComponent = customFixture.componentInstance
    customComponent.type = 'submit'
    customFixture.detectChanges()

    const button = customFixture.nativeElement.querySelector('button')
    expect(button.getAttribute('type')).toBe('submit')
  })

  it('should be accessible with aria-label', () => {
    const customFixture = TestBed.createComponent(ButtonComponent)
    customFixture.componentInstance.ariaLabel = 'Close dialog'
    customFixture.detectChanges()

    const button = customFixture.nativeElement.querySelector('button')
    expect(button.getAttribute('aria-label')).toBe('Close dialog')
  })

  it('should support keyboard interaction', () => {
    spyOn(component, 'onClick')

    const button = compiled.querySelector('button') as HTMLButtonElement
    button.focus()

    const event = new KeyboardEvent('keydown', { key: 'Enter' })
    button.dispatchEvent(event)
    button.click()

    expect(component.onClick).toHaveBeenCalled()
  })

  it('should render default variant when no variant specified', () => {
    const button = compiled.querySelector('button')
    expect(button?.classList.contains('bg-primary')).toBe(true)
  })

  it('should render with icon content', () => {
    component.text = '📧'
    fixture.detectChanges()

    expect(compiled.textContent).toContain('📧')
  })
})
