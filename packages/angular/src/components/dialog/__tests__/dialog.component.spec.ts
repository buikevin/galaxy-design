import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DialogComponent, DialogTriggerDirective, DialogContentComponent, DialogHeaderComponent, DialogTitleComponent, DialogDescriptionComponent } from '../index'
import { Component } from '@angular/core'

@Component({
  template: `
    <ui-dialog [(open)]="isOpen">
      <button ui-dialog-trigger>Open Dialog</button>
      <ui-dialog-content>
        <ui-dialog-header>
          <ui-dialog-title>{{title}}</ui-dialog-title>
          <ui-dialog-description>{{description}}</ui-dialog-description>
        </ui-dialog-header>
      </ui-dialog-content>
    </ui-dialog>
  `,
  standalone: true,
  imports: [
    DialogComponent,
    DialogTriggerDirective,
    DialogContentComponent,
    DialogHeaderComponent,
    DialogTitleComponent,
    DialogDescriptionComponent,
  ],
})
class TestHostComponent {
  isOpen = false
  title = 'Dialog Title'
  description = 'This is a dialog'
}

describe('DialogComponent', () => {
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

  it('should render dialog trigger', () => {
    expect(compiled.textContent).toContain('Open Dialog')
  })

  it('should open dialog on trigger click', () => {
    const trigger = compiled.querySelector('button') as HTMLButtonElement
    trigger.click()
    fixture.detectChanges()

    const dialog = document.querySelector('[role="dialog"]')
    expect(dialog).toBeTruthy()
  })

  it('should show dialog content when open', () => {
    component.isOpen = true
    fixture.detectChanges()

    expect(document.body.textContent).toContain('Dialog Title')
    expect(document.body.textContent).toContain('This is a dialog')
  })

  it('should close dialog on close button click', () => {
    component.isOpen = true
    fixture.detectChanges()

    const closeButton = document.querySelector('[aria-label="Close"]') as HTMLButtonElement
    if (closeButton) {
      closeButton.click()
      fixture.detectChanges()

      expect(component.isOpen).toBe(false)
    }
  })

  it('should close dialog on Escape key', () => {
    component.isOpen = true
    fixture.detectChanges()

    const dialog = document.querySelector('[role="dialog"]') as HTMLElement
    const event = new KeyboardEvent('keydown', { key: 'Escape' })
    dialog.dispatchEvent(event)
    fixture.detectChanges()

    expect(component.isOpen).toBe(false)
  })

  it('should close dialog on overlay click', () => {
    component.isOpen = true
    fixture.detectChanges()

    const overlay = document.querySelector('[data-radix-dialog-overlay]') as HTMLElement
    if (overlay) {
      overlay.click()
      fixture.detectChanges()

      expect(component.isOpen).toBe(false)
    }
  })

  it('should have correct aria attributes', () => {
    component.isOpen = true
    fixture.detectChanges()

    const dialog = document.querySelector('[role="dialog"]')
    expect(dialog?.getAttribute('aria-modal')).toBe('true')
    expect(dialog?.hasAttribute('aria-labelledby')).toBe(true)
    expect(dialog?.hasAttribute('aria-describedby')).toBe(true)
  })

  it('should render in portal/overlay', () => {
    component.isOpen = true
    fixture.detectChanges()

    // Dialog should be rendered at document level, not in component tree
    const dialog = document.querySelector('[role="dialog"]')
    expect(dialog).toBeTruthy()
    expect(document.body.contains(dialog)).toBe(true)
  })

  it('should prevent body scroll when open', () => {
    const initialOverflow = document.body.style.overflow

    component.isOpen = true
    fixture.detectChanges()

    expect(document.body.style.overflow).toBe('hidden')

    component.isOpen = false
    fixture.detectChanges()

    // Cleanup
    document.body.style.overflow = initialOverflow
  })

  it('should be controlled externally', () => {
    expect(component.isOpen).toBe(false)
    expect(document.querySelector('[role="dialog"]')).toBeFalsy()

    component.isOpen = true
    fixture.detectChanges()

    expect(document.querySelector('[role="dialog"]')).toBeTruthy()

    component.isOpen = false
    fixture.detectChanges()

    expect(document.querySelector('[role="dialog"]')).toBeFalsy()
  })

  it('should emit openChange event', () => {
    const dialogFixture = TestBed.createComponent(DialogComponent)
    const dialogComponent = dialogFixture.componentInstance
    spyOn(dialogComponent.openChange, 'emit')

    dialogComponent.open = true
    dialogFixture.detectChanges()

    dialogComponent.setOpen(false)

    expect(dialogComponent.openChange.emit).toHaveBeenCalledWith(false)
  })

  it('should render header section', () => {
    component.isOpen = true
    fixture.detectChanges()

    const header = document.querySelector('ui-dialog-header')
    expect(header).toBeTruthy()
  })

  it('should render title and description', () => {
    component.isOpen = true
    fixture.detectChanges()

    expect(document.body.textContent).toContain('Dialog Title')
    expect(document.body.textContent).toContain('This is a dialog')
  })
})
