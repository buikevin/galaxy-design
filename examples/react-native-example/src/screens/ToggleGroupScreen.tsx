import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';

export default function ToggleGroupScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Toggle Group</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Single Selection</Text>
      <ToggleGroup type="single" className="mb-6">
        <ToggleGroupItem value="left">
          <Text>Left</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="center">
          <Text>Center</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="right">
          <Text>Right</Text>
        </ToggleGroupItem>
      </ToggleGroup>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Multiple Selection</Text>
      <ToggleGroup type="multiple" className="mb-6">
        <ToggleGroupItem value="bold">
          <Text>Bold</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="italic">
          <Text>Italic</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="underline">
          <Text>Underline</Text>
        </ToggleGroupItem>
      </ToggleGroup>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Text Formatting</Text>
      <ToggleGroup type="single">
        <ToggleGroupItem value="h1">
          <Text>H1</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="h2">
          <Text>H2</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="h3">
          <Text>H3</Text>
        </ToggleGroupItem>
        <ToggleGroupItem value="p">
          <Text>P</Text>
        </ToggleGroupItem>
      </ToggleGroup>
    </ScrollView>
  );
}
