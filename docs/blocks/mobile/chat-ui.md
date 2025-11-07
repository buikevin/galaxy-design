# Chat UI (Mobile)

Mobile-optimized chat interface with touch-friendly controls, native keyboard handling, and 48x48px minimum touch targets.

## Installation

```bash
npx galaxy-ui-cli add chat-ui
```

::: info Platform
This is the mobile version for **React Native** and **Flutter**. For web platforms, see [Chat UI (Web)](/blocks/web/chat-ui).
:::

## Features

- ✅ **Touch-Optimized** - 48x48px minimum touch targets
- ✅ **Keyboard Handling** - Native keyboard avoidance
- ✅ **Auto-Scroll** - Scrolls to bottom on new messages
- ✅ **Message Bubbles** - iOS/Android native styling
- ✅ **Avatar Support** - With fallback initials
- ✅ **Timestamps** - Smart time formatting
- ✅ **Performance** - Optimized for mobile rendering

## Usage

### React Native

```tsx
import { useState } from 'react'
import { View } from 'react-native'
import { ChatUI } from '@/components/ui/chat-ui'

export default function ChatScreen() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      content: 'Hey! How are you?',
      senderId: 'user1',
      senderName: 'John',
      timestamp: new Date(),
      isCurrentUser: false
    }
  ])

  const handleSend = (content: string) => {
    setMessages([...messages, {
      id: Date.now().toString(),
      content,
      senderId: 'current',
      senderName: 'Me',
      timestamp: new Date(),
      isCurrentUser: true
    }])
  }

  return (
    <View style={{ flex: 1 }}>
      <ChatUI
        messages={messages}
        currentUserId="current"
        onSendMessage={handleSend}
      />
    </View>
  )
}
```

### Flutter

```dart
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/chat_ui.dart';

class ChatScreen extends StatefulWidget {
  @override
  _ChatScreenState createState() => _ChatScreenState();
}

class _ChatScreenState extends State<ChatScreen> {
  List<Message> messages = [
    Message(
      id: '1',
      content: 'Hey! How are you?',
      senderId: 'user1',
      senderName: 'John',
      timestamp: DateTime.now(),
      isCurrentUser: false,
    ),
  ];

  void _handleSend(String content) {
    setState(() {
      messages.add(Message(
        id: DateTime.now().toString(),
        content: content,
        senderId: 'current',
        senderName: 'Me',
        timestamp: DateTime.now(),
        isCurrentUser: true,
      ));
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: ChatUI(
        messages: messages,
        currentUserId: 'current',
        onSendMessage: _handleSend,
      ),
    );
  }
}
```

## Mobile-Specific Features

### Touch Targets
All interactive elements meet the **48x48px** minimum touch target size:
- Send button: 48x80px
- Input field: Min height 48px
- Avatar: 32x32px (tap for profile)

### Keyboard Handling
- **iOS**: Automatic keyboard avoidance with padding
- **Android**: Height adjustment behavior
- **Dismiss**: Tap outside to dismiss keyboard

### Performance
- Optimized FlatList/ListView rendering
- Efficient re-renders
- Scroll to bottom animation

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `messages` | `Message[]` | required | Array of messages |
| `currentUserId` | `string` | required | Current user ID |
| `onSendMessage` | `(content: string) => void` | - | Send callback |
| `placeholder` | `string` | `'Type your message...'` | Input placeholder |
| `showTimestamp` | `boolean` | `true` | Show timestamps |

## Platform Availability

| Platform | Status |
|----------|--------|
| React Native | ✅ Available |
| Flutter | ✅ Available |
| Vue 3 | ➡️ [Web Version](/blocks/web/chat-ui) |
| React 18+ | ➡️ [Web Version](/blocks/web/chat-ui) |
| Angular 20 | ➡️ [Web Version](/blocks/web/chat-ui) |
