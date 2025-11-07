import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar/avatar'
import type { Message } from './types'

interface ChatMessageProps {
  message: Message
  showTimestamp?: boolean
}

export const ChatMessage: React.FC<ChatMessageProps> = ({
  message,
  showTimestamp = true,
}) => {
  const formattedTime = message.timestamp.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  })

  const initials = message.senderName
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)

  return (
    <View
      style={[
        styles.container,
        message.isCurrentUser && styles.containerReverse,
      ]}
    >
      <Avatar style={styles.avatar}>
        {message.senderAvatar && (
          <AvatarImage source={{ uri: message.senderAvatar }} />
        )}
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>

      <View
        style={[
          styles.content,
          message.isCurrentUser && styles.contentEnd,
        ]}
      >
        <View
          style={[
            styles.header,
            message.isCurrentUser && styles.headerReverse,
          ]}
        >
          <Text style={styles.senderName}>{message.senderName}</Text>
          {showTimestamp && (
            <Text style={styles.timestamp}>{formattedTime}</Text>
          )}
        </View>

        <View
          style={[
            styles.bubble,
            message.isCurrentUser
              ? styles.bubbleCurrentUser
              : styles.bubbleOtherUser,
          ]}
        >
          <Text
            style={[
              styles.messageText,
              message.isCurrentUser && styles.messageTextCurrentUser,
            ]}
          >
            {message.content}
          </Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  containerReverse: {
    flexDirection: 'row-reverse',
  },
  avatar: {
    width: 32,
    height: 32,
  },
  content: {
    flex: 1,
    maxWidth: '70%',
  },
  contentEnd: {
    alignItems: 'flex-end',
  },
  header: {
    flexDirection: 'row',
    gap: 8,
    marginBottom: 4,
  },
  headerReverse: {
    flexDirection: 'row-reverse',
  },
  senderName: {
    fontSize: 14,
    fontWeight: '500',
  },
  timestamp: {
    fontSize: 12,
    color: '#666',
  },
  bubble: {
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  bubbleCurrentUser: {
    backgroundColor: '#007AFF',
  },
  bubbleOtherUser: {
    backgroundColor: '#E5E5EA',
  },
  messageText: {
    fontSize: 15,
  },
  messageTextCurrentUser: {
    color: '#FFFFFF',
  },
})
