import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { SelectComponent, SelectTriggerComponent, SelectContentComponent, SelectItemComponent, SelectValueComponent } from '../index'
import { Component } from '@angular/core'

@Component({
  template: `
    <ui-select [(ngModel)]="selectedValue">
      <ui-select-trigger>
        <ui-select-value [placeholder]="placeholder" />
      </ui-select-trigger>
      <ui-select-content>
        <ui-select-item *ngFor="let option of options" [value]="option.value">
          {{option.label}}
        </ui-select-item>
      </ui-select-content>
    </ui-select>
  `,
  standalone: true,
  imports: [SelectComponent, SelectTriggerComponent, SelectContentComponent, SelectItemComponent, SelectValueComponent, FormsModule],
})
class TestHostComponent {
  selectedValue = ''
  placeholder = 'Select an option'
  options = [
    { value: 'apple', label: 'Apple' },
    { value: 'banana', label: 'Banana' },
    { value: 'orange', label: 'Orange' },
  ]
}

describe('SelectComponent', () => {
  let fixture: ComponentFixture<TestHostComponent>
  let component: TestHostComponent
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents()

    fixture = TestBed.createComponent(TestHostComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render select trigger', () => {
    const trigger = compiled.querySelector('[role="combobox"]')
    expect(trigger).toBeTruthy()
  })

  it('should show placeholder when no value selected', () => {
    expect(compiled.textContent).toContain('Select an option')
  })

  it('should open dropdown on trigger click', () => {
    const trigger = compiled.querySelector('[role="combobox"]') as HTMLElement
    trigger.click()
    fixture.detectChanges()

    const listbox = compiled.querySelector('[role="listbox"]')
    expect(listbox).toBeTruthy()
  })

  it('should show options when open', () => {
    const trigger = compiled.querySelector('[role="combobox"]') as HTMLElement
    trigger.click()
    fixture.detectChanges()

    expect(compiled.textContent).toContain('Apple')
    expect(compiled.textContent).toContain('Banana')
    expect(compiled.textContent).toContain('Orange')
  })

  it('should select option on click', () => {
    const trigger = compiled.querySelector('[role="combobox"]') as HTMLElement
    trigger.click()
    fixture.detectChanges()

    const options = compiled.querySelectorAll('[role="option"]')
    ;(options[0] as HTMLElement).click()
    fixture.detectChanges()

    expect(component.selectedValue).toBe('apple')
  })

  it('should show selected value in trigger', () => {
    component.selectedValue = 'banana'
    fixture.detectChanges()

    expect(compiled.textContent).toContain('Banana')
  })

  it('should close dropdown after selection', () => {
    const trigger = compiled.querySelector('[role="combobox"]') as HTMLElement
    trigger.click()
    fixture.detectChanges()

    expect(compiled.querySelector('[role="listbox"]')).toBeTruthy()

    const option = compiled.querySelector('[role="option"]') as HTMLElement
    option.click()
    fixture.detectChanges()

    expect(compiled.querySelector('[role="listbox"]')).toBeFalsy()
  })

  it('should support keyboard navigation', () => {
    const trigger = compiled.querySelector('[role="combobox"]') as HTMLElement
    const event = new KeyboardEvent('keydown', { key: 'ArrowDown' })
    trigger.dispatchEvent(event)
    fixture.detectChanges()

    expect(compiled.querySelector('[role="listbox"]')).toBeTruthy()
  })

  it('should close dropdown on Escape key', () => {
    const trigger = compiled.querySelector('[role="combobox"]') as HTMLElement
    trigger.click()
    fixture.detectChanges()

    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    trigger.dispatchEvent(event)
    fixture.detectChanges()

    expect(compiled.querySelector('[role="listbox"]')).toBeFalsy()
  })

  it('should disable select when disabled prop is true', () => {
    const selectFixture = TestBed.createComponent(SelectComponent)
    selectFixture.componentInstance.disabled = true
    selectFixture.detectChanges()

    const trigger = selectFixture.nativeElement.querySelector('[role="combobox"]')
    expect(trigger.hasAttribute('data-disabled')).toBe(true)
  })

  it('should have correct aria attributes', () => {
    const trigger = compiled.querySelector('[role="combobox"]')
    expect(trigger?.hasAttribute('aria-haspopup')).toBe(true)
  })

  it('should update aria-expanded on open/close', () => {
    const trigger = compiled.querySelector('[role="combobox"]') as HTMLElement
    expect(trigger.getAttribute('aria-expanded')).toBe('false')

    trigger.click()
    fixture.detectChanges()

    expect(trigger.getAttribute('aria-expanded')).toBe('true')
  })
})
