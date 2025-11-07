import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Badge } from '@/components/ui/badge';

export default function BadgeScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Badge</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Default Badges</Text>
      <View className="flex-row flex-wrap gap-2 mb-6">
        <Badge>
          <Text>Default</Text>
        </Badge>
        <Badge variant="secondary">
          <Text>Secondary</Text>
        </Badge>
        <Badge variant="outline">
          <Text>Outline</Text>
        </Badge>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Destructive Badge</Text>
      <View className="flex-row gap-2 mb-6">
        <Badge variant="destructive">
          <Text>Error</Text>
        </Badge>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Usage Examples</Text>
      <View className="flex-row flex-wrap gap-2">
        <Badge>
          <Text>New</Text>
        </Badge>
        <Badge variant="secondary">
          <Text>Beta</Text>
        </Badge>
        <Badge variant="outline">
          <Text>Premium</Text>
        </Badge>
        <Badge variant="destructive">
          <Text>Deprecated</Text>
        </Badge>
      </View>
    </ScrollView>
  );
}
