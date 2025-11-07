import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';

export default function LabelScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Label</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Labels</Text>
      <View className="gap-4 mb-6">
        <View className="gap-2">
          <Label>Username</Label>
          <Input placeholder="Enter username" />
        </View>
        <View className="gap-2">
          <Label>Email Address</Label>
          <Input placeholder="email@example.com" />
        </View>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Label with Checkbox</Text>
      <View className="flex-row items-center gap-2 mb-6">
        <Checkbox />
        <Label>I agree to the terms and conditions</Label>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Required Field</Text>
      <View className="gap-2">
        <View className="flex-row items-center">
          <Label>Full Name</Label>
          <Text className="text-red-500 ml-1">*</Text>
        </View>
        <Input placeholder="John Doe" />
      </View>
    </ScrollView>
  );
}
