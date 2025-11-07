import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from '@/components/ui/context-menu';

export default function ContextMenuScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Context Menu</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Context Menu</Text>
      <ContextMenu>
        <ContextMenuTrigger>
          <View className="p-8 bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 items-center justify-center">
            <Text className="text-gray-600">Long press here</Text>
          </View>
        </ContextMenuTrigger>
        <ContextMenuContent>
          <ContextMenuItem>
            <Text>Edit</Text>
          </ContextMenuItem>
          <ContextMenuItem>
            <Text>Copy</Text>
          </ContextMenuItem>
          <ContextMenuItem>
            <Text>Share</Text>
          </ContextMenuItem>
        </ContextMenuContent>
      </ContextMenu>
    </ScrollView>
  );
}
