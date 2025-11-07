import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function TextareaScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Textarea</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Textarea</Text>
      <Textarea placeholder="Type your message here..." className="mb-6" />

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Label</Text>
      <View className="gap-2 mb-6">
        <Label>Bio</Label>
        <Textarea placeholder="Tell us about yourself..." />
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Feedback Form</Text>
      <View className="gap-2 mb-6">
        <Label>Your Feedback</Label>
        <Textarea
          placeholder="Please share your feedback..."
          numberOfLines={6}
        />
        <Text className="text-sm text-gray-500">
          Your feedback helps us improve our product.
        </Text>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Disabled Textarea</Text>
      <Textarea placeholder="Disabled textarea" editable={false} />
    </ScrollView>
  );
}
