class Message {
  final String id;
  final String content;
  final String senderId;
  final String senderName;
  final String? senderAvatar;
  final DateTime timestamp;
  final bool isCurrentUser;

  Message({
    required this.id,
    required this.content,
    required this.senderId,
    required this.senderName,
    this.senderAvatar,
    required this.timestamp,
    required this.isCurrentUser,
  });
}

class ChatUser {
  final String id;
  final String name;
  final String? avatar;
  final String? status; // 'online', 'offline', 'away'

  ChatUser({
    required this.id,
    required this.name,
    this.avatar,
    this.status,
  });
}
