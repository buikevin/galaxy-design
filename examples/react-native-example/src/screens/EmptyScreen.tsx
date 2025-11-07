import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Empty } from '@/components/ui/empty';
import { Button } from '@/components/ui/button';

export default function EmptyScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Empty State</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">No Results</Text>
      <Empty
        title="No results found"
        description="Try adjusting your search or filter to find what you're looking for."
      />

      <View className="my-6 border-t border-gray-200" />

      <Text className="text-lg font-semibold text-gray-700 mb-3">No Data</Text>
      <Empty
        title="No data available"
        description="There is no data to display at this moment."
      />

      <View className="my-6 border-t border-gray-200" />

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Action</Text>
      <Empty
        title="No items yet"
        description="Get started by creating your first item."
      >
        <Button className="mt-4">
          <Text>Create Item</Text>
        </Button>
      </Empty>
    </ScrollView>
  );
}
