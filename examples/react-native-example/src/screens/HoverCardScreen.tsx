import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '@/components/ui/hover-card';
import { Button } from '@/components/ui/button';

export default function HoverCardScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Hover Card</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Hover Card</Text>
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="link">
            <Text>@galaxyui</Text>
          </Button>
        </HoverCardTrigger>
        <HoverCardContent>
          <View className="gap-2">
            <Text className="font-semibold">Galaxy UI</Text>
            <Text className="text-sm text-gray-600">
              A collection of beautiful components for React Native.
            </Text>
          </View>
        </HoverCardContent>
      </HoverCard>
    </ScrollView>
  );
}
