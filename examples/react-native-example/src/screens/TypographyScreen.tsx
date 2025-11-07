import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Typography } from '@/components/ui/typography';

export default function TypographyScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Typography</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Headings</Text>
      <View className="gap-2 mb-6">
        <Typography variant="h1">Heading 1</Typography>
        <Typography variant="h2">Heading 2</Typography>
        <Typography variant="h3">Heading 3</Typography>
        <Typography variant="h4">Heading 4</Typography>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Body Text</Text>
      <View className="gap-2 mb-6">
        <Typography variant="body">
          This is a regular body text. It is used for most content in the application.
        </Typography>
        <Typography variant="lead">
          This is a lead text. It is slightly larger and used for introductory content.
        </Typography>
        <Typography variant="small">
          This is small text. It is used for captions and secondary information.
        </Typography>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Special Formats</Text>
      <View className="gap-2 mb-6">
        <Typography variant="large">Large text for emphasis</Typography>
        <Typography variant="muted">Muted text for less important content</Typography>
        <Typography variant="code">const code = "inline code example";</Typography>
        <Typography variant="blockquote">
          This is a blockquote. It is used for quotes and highlighted text.
        </Typography>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">List</Text>
      <View className="gap-1">
        <Typography variant="body">• List item one</Typography>
        <Typography variant="body">• List item two</Typography>
        <Typography variant="body">• List item three</Typography>
      </View>
    </ScrollView>
  );
}
