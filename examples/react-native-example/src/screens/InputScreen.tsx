import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function InputScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Input</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Input</Text>
      <View className="gap-4 mb-6">
        <Input placeholder="Enter text here..." />
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Label</Text>
      <View className="gap-4 mb-6">
        <View className="gap-2">
          <Label>Email</Label>
          <Input placeholder="email@example.com" />
        </View>
        <View className="gap-2">
          <Label>Password</Label>
          <Input placeholder="Enter password" secureTextEntry />
        </View>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Disabled Input</Text>
      <View className="gap-4">
        <Input placeholder="Disabled input" editable={false} />
      </View>
    </ScrollView>
  );
}
