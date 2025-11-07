import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';
import { AspectRatio } from '@/components/ui/aspect-ratio';

export default function AspectRatioScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Aspect Ratio</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">16:9 Ratio</Text>
      <AspectRatio ratio={16 / 9} className="mb-6">
        <View className="bg-blue-100 rounded-lg flex items-center justify-center h-full">
          <Text className="text-blue-800 font-semibold">16:9 Content</Text>
        </View>
      </AspectRatio>

      <Text className="text-lg font-semibold text-gray-700 mb-3">1:1 Square</Text>
      <AspectRatio ratio={1} className="mb-6">
        <View className="bg-green-100 rounded-lg flex items-center justify-center h-full">
          <Text className="text-green-800 font-semibold">1:1 Content</Text>
        </View>
      </AspectRatio>

      <Text className="text-lg font-semibold text-gray-700 mb-3">4:3 Ratio</Text>
      <AspectRatio ratio={4 / 3}>
        <View className="bg-purple-100 rounded-lg flex items-center justify-center h-full">
          <Text className="text-purple-800 font-semibold">4:3 Content</Text>
        </View>
      </AspectRatio>
    </ScrollView>
  );
}
