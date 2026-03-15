import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DialogComponent, DialogTriggerDirective, DialogContentComponent, DialogHeaderComponent, DialogTitleComponent, DialogDescriptionComponent } from '../index'
import { RdxDialogRef } from '@radix-ng/primitives/dialog'
import { Component } from '@angular/core'
import { of } from 'rxjs'

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
      providers: [
        {
          provide: RdxDialogRef,
          useValue: {
            state: () => 'open',
            closed$: of(undefined),
            dismiss: () => {},
            close: () => {},
          },
        },
      ],
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
    fixture.detectChanges()

    const header = document.querySelector('ui-dialog-header')
    expect(header).toBeTruthy()
  })

  it('should render title and description', () => {
    fixture.detectChanges()

    expect(document.body.textContent).toContain('Dialog Title')
    expect(document.body.textContent).toContain('This is a dialog')
  })
})
