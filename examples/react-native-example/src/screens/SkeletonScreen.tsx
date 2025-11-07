import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Skeleton } from '@/components/ui/skeleton';

export default function SkeletonScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Skeleton</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Skeleton</Text>
      <View className="gap-2 mb-6">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-4/5" />
        <Skeleton className="h-4 w-3/5" />
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Card Skeleton</Text>
      <View className="border border-gray-200 rounded-lg p-4 mb-6">
        <View className="flex-row items-center gap-4 mb-4">
          <Skeleton className="h-12 w-12 rounded-full" />
          <View className="flex-1 gap-2">
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-3 w-1/3" />
          </View>
        </View>
        <Skeleton className="h-32 w-full mb-2" />
        <Skeleton className="h-4 w-full mb-2" />
        <Skeleton className="h-4 w-4/5" />
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">List Skeleton</Text>
      <View className="gap-4">
        {[1, 2, 3].map((i) => (
          <View key={i} className="flex-row items-center gap-4">
            <Skeleton className="h-10 w-10 rounded" />
            <View className="flex-1 gap-2">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-3 w-1/2" />
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
