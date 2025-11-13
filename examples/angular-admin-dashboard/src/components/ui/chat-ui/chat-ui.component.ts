import { Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvatarComponent } from '@/components/ui/avatar/avatar.component';
import { AvatarImageComponent } from '@/components/ui/avatar/avatar-image.component';
import { AvatarFallbackComponent } from '@/components/ui/avatar/avatar-fallback.component';
import { ButtonComponent } from '@/components/ui/button/button.component';
import { ScrollAreaComponent } from '@/components/ui/scroll-area/scroll-area.component';
import { TextareaComponent } from '@/components/ui/textarea/textarea.component';
import type { Message } from './types';

@Component({
  selector: 'ui-chat-ui',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    AvatarComponent,
    AvatarImageComponent,
    AvatarFallbackComponent,
    ButtonComponent,
    ScrollAreaComponent,
    TextareaComponent,
  ],
  template: `
    <div class="flex flex-col w-full max-w-2xl mx-auto rounded-lg border bg-card text-card-foreground shadow-sm">
      <!-- Chat Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <div>
          <h3 class="text-lg font-semibold">Chat</h3>
          <p class="text-sm text-muted-foreground">
            {{ messages.length }} {{ messages.length === 1 ? 'message' : 'messages' }}
          </p>
        </div>
      </div>

      <!-- Messages -->
      <ui-scroll-area
        [class]="'w-full rounded-md border p-4 flex-1'"
        [style.height]="height"
      >
        <div *ngIf="messages.length === 0" class="flex items-center justify-center h-full text-muted-foreground">
          <p>No messages yet. Start the conversation!</p>
        </div>

        <div *ngIf="messages.length > 0" class="space-y-1">
          <div
            *ngFor="let message of messages"
            [class]="'flex gap-3 mb-4' + (message.isCurrentUser ? ' flex-row-reverse' : '')"
          >
            <ui-avatar class="h-8 w-8">
              <ui-avatar-image
                *ngIf="message.senderAvatar"
                [src]="message.senderAvatar"
                [alt]="message.senderName"
              />
              <ui-avatar-fallback>
                {{ getInitials(message.senderName) }}
              </ui-avatar-fallback>
            </ui-avatar>

            <div [class]="'flex flex-col gap-1 max-w-[70%]' + (message.isCurrentUser ? ' items-end' : '')">
              <div class="flex items-center gap-2">
                <span [class]="'text-sm font-medium' + (message.isCurrentUser ? ' order-2' : '')">
                  {{ message.senderName }}
                </span>
                <span
                  *ngIf="showTimestamp"
                  [class]="'text-xs text-muted-foreground' + (message.isCurrentUser ? ' order-1' : '')"
                >
                  {{ formatTime(message.timestamp) }}
                </span>
              </div>

              <div
                [class]="'rounded-lg px-4 py-2 text-sm' + (message.isCurrentUser ? ' bg-primary text-primary-foreground' : ' bg-muted')"
              >
                {{ message.content }}
              </div>
            </div>
          </div>
        </div>
      </ui-scroll-area>

      <!-- Input -->
      <div class="flex gap-2 p-4 border-t bg-background">
        <ui-textarea
          [(ngModel)]="messageContent"
          [placeholder]="placeholder"
          class="min-h-[60px] max-h-[120px] resize-none"
          (keydown)="handleKeyDown($event)"
        />
        <button
          ui-button
          [disabled]="!messageContent.trim()"
          (click)="handleSend()"
          class="self-end"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="m22 2-7 20-4-9-9-4Z" />
            <path d="M22 2 11 13" />
          </svg>
          <span class="ml-2">Send</span>
        </button>
      </div>
    </div>
  `,
})
export class ChatUIComponent {
  @Input() messages: Message[] = [];
  @Input() currentUserId!: string;
  @Input() placeholder = 'Type your message...';
  @Input() showTimestamp = true;
  @Input() height = '500px';

  @Output() sendMessage = new EventEmitter<string>();

  messageContent = '';

  handleSend(): void {
    const content = this.messageContent.trim();
    if (content) {
      this.sendMessage.emit(content);
      this.messageContent = '';
    }
  }

  handleKeyDown(event: KeyboardEvent): void {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      this.handleSend();
    }
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  }

  formatTime(date: Date): string {
    return date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
  }
}
