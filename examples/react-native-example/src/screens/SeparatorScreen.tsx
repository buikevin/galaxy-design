import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Separator } from '@/components/ui/separator';

export default function SeparatorScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Separator</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Horizontal Separator</Text>
      <View className="mb-6">
        <Text className="text-gray-700">Content above</Text>
        <Separator className="my-4" />
        <Text className="text-gray-700">Content below</Text>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">In a List</Text>
      <View className="mb-6">
        <Text className="py-2">Item 1</Text>
        <Separator />
        <Text className="py-2">Item 2</Text>
        <Separator />
        <Text className="py-2">Item 3</Text>
        <Separator />
        <Text className="py-2">Item 4</Text>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Vertical Separator</Text>
      <View className="flex-row items-center h-12">
        <Text>Left</Text>
        <Separator orientation="vertical" className="mx-4" />
        <Text>Middle</Text>
        <Separator orientation="vertical" className="mx-4" />
        <Text>Right</Text>
      </View>
    </ScrollView>
  );
}
