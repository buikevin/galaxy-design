import { ComponentFixture, TestBed } from '@angular/core/testing'
import { FormsModule } from '@angular/forms'
import { InputComponent } from '../input.component'

describe('InputComponent', () => {
  let component: InputComponent
  let fixture: ComponentFixture<InputComponent>
  let compiled: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InputComponent, FormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(InputComponent)
    component = fixture.componentInstance
    compiled = fixture.nativeElement
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render text input correctly', () => {
    component.type = 'text'
    fixture.detectChanges()

    const input = compiled.querySelector('input')
    expect(input).toBeTruthy()
    expect(input?.getAttribute('type')).toBe('text')
  })

  it('should handle ngModel binding', () => {
    component.value = 'initial'
    fixture.detectChanges()

    const input = compiled.querySelector('input') as HTMLInputElement
    expect(input.value).toBe('initial')

    input.value = 'updated'
    input.dispatchEvent(new Event('input'))
    fixture.detectChanges()

    expect(component.value).toBe('updated')
  })

  it('should show placeholder text', () => {
    component.placeholder = 'Enter your name'
    fixture.detectChanges()

    const input = compiled.querySelector('input')
    expect(input?.getAttribute('placeholder')).toBe('Enter your name')
  })

  it('should apply disabled state', () => {
    component.disabled = true
    fixture.detectChanges()

    const input = compiled.querySelector('input')
    expect(input?.hasAttribute('disabled')).toBe(true)
  })

  it('should handle different input types', () => {
    const types = ['text', 'email', 'password', 'number', 'tel', 'url']

    types.forEach((type) => {
      component.type = type as any
      fixture.detectChanges()

      const input = compiled.querySelector('input')
      expect(input?.getAttribute('type')).toBe(type)
    })
  })

  it('should emit input event on change', () => {
    spyOn(component.valueChange, 'emit')

    const input = compiled.querySelector('input') as HTMLInputElement
    input.value = 'test'
    input.dispatchEvent(new Event('input'))

    expect(component.valueChange.emit).toHaveBeenCalledWith('test')
  })

  it('should show error state with aria-invalid', () => {
    component.ariaInvalid = 'true'
    fixture.detectChanges()

    const input = compiled.querySelector('input')
    expect(input?.getAttribute('aria-invalid')).toBe('true')
  })

  it('should apply custom className', () => {
    component.class = 'custom-input'
    fixture.detectChanges()

    const wrapper = compiled.querySelector('.custom-input')
    expect(wrapper).toBeTruthy()
  })

  it('should handle readonly state', () => {
    component.readonly = true
    fixture.detectChanges()

    const input = compiled.querySelector('input')
    expect(input?.hasAttribute('readonly')).toBe(true)
  })

  it('should set maxlength attribute', () => {
    component.maxlength = 50
    fixture.detectChanges()

    const input = compiled.querySelector('input')
    expect(input?.getAttribute('maxlength')).toBe('50')
  })

  it('should set autocomplete attribute', () => {
    component.autocomplete = 'email'
    fixture.detectChanges()

    const input = compiled.querySelector('input')
    expect(input?.getAttribute('autocomplete')).toBe('email')
  })

  it('should emit focus event', () => {
    spyOn(component.inputFocus, 'emit')

    const input = compiled.querySelector('input') as HTMLInputElement
    input.dispatchEvent(new FocusEvent('focus'))

    expect(component.inputFocus.emit).toHaveBeenCalled()
  })

  it('should emit blur event', () => {
    spyOn(component.inputBlur, 'emit')

    const input = compiled.querySelector('input') as HTMLInputElement
    input.dispatchEvent(new FocusEvent('blur'))

    expect(component.inputBlur.emit).toHaveBeenCalled()
  })
})
