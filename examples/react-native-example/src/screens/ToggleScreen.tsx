import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Toggle } from '@/components/ui/toggle';

export default function ToggleScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Toggle</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Default Toggles</Text>
      <View className="flex-row gap-2 mb-6">
        <Toggle>
          <Text>Bold</Text>
        </Toggle>
        <Toggle>
          <Text>Italic</Text>
        </Toggle>
        <Toggle>
          <Text>Underline</Text>
        </Toggle>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Toggle Variants</Text>
      <View className="flex-row gap-2 mb-6">
        <Toggle variant="default">
          <Text>Default</Text>
        </Toggle>
        <Toggle variant="outline">
          <Text>Outline</Text>
        </Toggle>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Toggle Sizes</Text>
      <View className="flex-row items-center gap-2">
        <Toggle size="sm">
          <Text>Small</Text>
        </Toggle>
        <Toggle size="default">
          <Text>Default</Text>
        </Toggle>
        <Toggle size="lg">
          <Text>Large</Text>
        </Toggle>
      </View>
    </ScrollView>
  );
}
