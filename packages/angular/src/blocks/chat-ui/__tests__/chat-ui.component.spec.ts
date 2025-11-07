import { ComponentFixture, TestBed } from '@angular/core/testing'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { ChatUIComponent } from '../chat-ui.component'
import type { Message } from '../types'

describe('ChatUIComponent', () => {
  let component: ChatUIComponent
  let fixture: ComponentFixture<ChatUIComponent>

  const mockMessages: Message[] = [
    {
      id: '1',
      content: 'Hello!',
      senderId: 'user-1',
      senderName: 'John Doe',
      timestamp: new Date('2024-01-01T10:00:00'),
    },
    {
      id: '2',
      content: 'Hi there!',
      senderId: 'user-2',
      senderName: 'Jane Smith',
      timestamp: new Date('2024-01-01T10:01:00'),
    },
  ]

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChatUIComponent, CommonModule, FormsModule],
    }).compileComponents()

    fixture = TestBed.createComponent(ChatUIComponent)
    component = fixture.componentInstance
    component.messages = mockMessages
    component.currentUserId = 'user-1'
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should render messages correctly', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('Hello!')
    expect(compiled.textContent).toContain('Hi there!')
  })

  it('should display sender names', () => {
    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.textContent).toContain('John Doe')
    expect(compiled.textContent).toContain('Jane Smith')
  })

  it('should emit sendMessage event when message is sent', () => {
    spyOn(component.sendMessage, 'emit')

    component.messageInput = 'New message'
    component.handleSendMessage()

    expect(component.sendMessage.emit).toHaveBeenCalledWith('New message')
  })

  it('should clear input after sending message', () => {
    component.messageInput = 'New message'
    component.handleSendMessage()

    expect(component.messageInput).toBe('')
  })

  it('should not send empty messages', () => {
    spyOn(component.sendMessage, 'emit')

    component.messageInput = ''
    component.handleSendMessage()

    expect(component.sendMessage.emit).not.toHaveBeenCalled()
  })

  it('should not send whitespace-only messages', () => {
    spyOn(component.sendMessage, 'emit')

    component.messageInput = '   '
    component.handleSendMessage()

    expect(component.sendMessage.emit).not.toHaveBeenCalled()
  })

  it('should use custom placeholder', () => {
    component.placeholder = 'Custom placeholder...'
    fixture.detectChanges()

    const textarea = fixture.nativeElement.querySelector('textarea')
    expect(textarea.placeholder).toBe('Custom placeholder...')
  })

  it('should format timestamps correctly', () => {
    const result = component.formatTime(new Date('2024-01-01T10:30:00'))
    expect(result).toBe('10:30')
  })

  it('should apply custom height', () => {
    component.height = '600px'
    fixture.detectChanges()

    const messageList = fixture.nativeElement.querySelector('.message-list')
    expect(messageList.style.height).toBe('600px')
  })

  it('should show timestamps when showTimestamp is true', () => {
    component.showTimestamp = true
    fixture.detectChanges()

    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.timestamp')).toBeTruthy()
  })

  it('should hide timestamps when showTimestamp is false', () => {
    component.showTimestamp = false
    fixture.detectChanges()

    const compiled = fixture.nativeElement as HTMLElement
    expect(compiled.querySelector('.timestamp')).toBeFalsy()
  })
})
