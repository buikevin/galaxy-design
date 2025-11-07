import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export default function AvatarScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Avatar</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Image</Text>
      <View className="flex-row items-center gap-4 mb-6">
        <Avatar>
          <AvatarImage source={{ uri: 'https://github.com/shadcn.png' }} />
          <AvatarFallback>
            <Text>CN</Text>
          </AvatarFallback>
        </Avatar>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Fallback</Text>
      <View className="flex-row items-center gap-4 mb-6">
        <Avatar>
          <AvatarFallback>
            <Text>JD</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>
            <Text>AB</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>
            <Text>CD</Text>
          </AvatarFallback>
        </Avatar>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Different Sizes</Text>
      <View className="flex-row items-center gap-4">
        <Avatar className="w-8 h-8">
          <AvatarFallback>
            <Text className="text-xs">SM</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarFallback>
            <Text>MD</Text>
          </AvatarFallback>
        </Avatar>
        <Avatar className="w-16 h-16">
          <AvatarFallback>
            <Text className="text-xl">LG</Text>
          </AvatarFallback>
        </Avatar>
      </View>
    </ScrollView>
  );
}
