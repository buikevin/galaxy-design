import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { CheckboxComponent } from '../checkbox.component'

describe('CheckboxComponent', () => {
  let component: CheckboxComponent
  let fixture: ComponentFixture<CheckboxComponent>
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckboxComponent, FormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(CheckboxComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render checkbox correctly', () => {
    const checkbox = compiled.querySelector('[role="checkbox"]')
    expect(checkbox).toBeTruthy()
  })

  it('should start unchecked by default', () => {
    const checkbox = compiled.querySelector('[role="checkbox"]')
    expect(checkbox?.getAttribute('aria-checked')).toBe('false')
  })

  it('should toggle checked state on click', () => {
    const checkbox = compiled.querySelector('[role="checkbox"]') as HTMLElement
    expect(checkbox.getAttribute('data-state')).toBe('unchecked')

    checkbox.click()
    fixture.detectChanges()

    expect(checkbox.getAttribute('data-state')).toBe('checked')
  })

  it('should show checked state when checked prop is true', () => {
    component.checked = true
    fixture.detectChanges()

    const checkbox = compiled.querySelector('[role="checkbox"]')
    expect(checkbox?.getAttribute('data-state')).toBe('checked')
  })

  it('should support indeterminate state', () => {
    component.checked = 'indeterminate'
    fixture.detectChanges()

    const checkbox = compiled.querySelector('[role="checkbox"]')
    expect(checkbox?.getAttribute('data-state')).toBe('indeterminate')
  })

  it('should disable interaction when disabled', () => {
    component.disabled = true
    fixture.detectChanges()

    spyOn(component.checkedChange, 'emit')

    const checkbox = compiled.querySelector('[role="checkbox"]') as HTMLElement
    checkbox.click()
    fixture.detectChanges()

    expect(component.checkedChange.emit).not.toHaveBeenCalled()
  })

  it('should show disabled state visually', () => {
    component.disabled = true
    fixture.detectChanges()

    const checkbox = compiled.querySelector('[role="checkbox"]')
    expect(checkbox?.hasAttribute('data-disabled')).toBe(true)
  })

  it('should emit checkedChange event', () => {
    spyOn(component.checkedChange, 'emit')

    const checkbox = compiled.querySelector('[role="checkbox"]') as HTMLElement
    checkbox.click()

    expect(component.checkedChange.emit).toHaveBeenCalledWith(true)
  })

  it('should apply custom className', () => {
    component.class = 'custom-checkbox'
    fixture.detectChanges()

    const wrapper = compiled.querySelector('.custom-checkbox')
    expect(wrapper).toBeTruthy()
  })

  it('should be keyboard accessible', () => {
    spyOn(component.checkedChange, 'emit')

    const checkbox = compiled.querySelector('[role="checkbox"]') as HTMLElement
    const event = new KeyboardEvent('keydown', { key: ' ' })
    checkbox.dispatchEvent(event)

    expect(component.checkedChange.emit).toHaveBeenCalled()
  })

  it('should have correct aria attributes', () => {
    component.ariaLabel = 'Accept terms'
    fixture.detectChanges()

    const checkbox = compiled.querySelector('[role="checkbox"]')
    expect(checkbox?.getAttribute('aria-label')).toBe('Accept terms')
  })

  it('should work with label association', () => {
    component.id = 'terms-checkbox'
    fixture.detectChanges()

    expect(compiled.querySelector('[id="terms-checkbox"]')).toBeTruthy()
  })

  it('should show check indicator when checked', () => {
    component.checked = true
    fixture.detectChanges()

    const indicator = compiled.querySelector('[data-radix-checkbox-indicator]')
    expect(indicator).toBeTruthy()
  })

  it('should handle ngModel binding', () => {
    component.checked = false
    fixture.detectChanges()

    expect(component.checked).toBe(false)

    component.checked = true
    fixture.detectChanges()

    expect(component.checked).toBe(true)
  })
})
