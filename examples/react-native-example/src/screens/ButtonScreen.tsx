import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Button } from '@/components/ui/button';

export default function ButtonScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Button</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Button Variants</Text>
      <View className="gap-3 mb-6">
        <Button>
          <Text>Default</Text>
        </Button>
        <Button variant="secondary">
          <Text>Secondary</Text>
        </Button>
        <Button variant="outline">
          <Text>Outline</Text>
        </Button>
        <Button variant="ghost">
          <Text>Ghost</Text>
        </Button>
        <Button variant="link">
          <Text>Link</Text>
        </Button>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Destructive Button</Text>
      <View className="gap-3 mb-6">
        <Button variant="destructive">
          <Text>Destructive</Text>
        </Button>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Button Sizes</Text>
      <View className="gap-3">
        <Button size="sm">
          <Text>Small</Text>
        </Button>
        <Button size="default">
          <Text>Default</Text>
        </Button>
        <Button size="lg">
          <Text>Large</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
