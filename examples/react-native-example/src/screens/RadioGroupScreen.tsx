import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';

export default function RadioGroupScreen() {
  const [value1, setValue1] = useState('option1');
  const [value2, setValue2] = useState('comfortable');

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Radio Group</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Radio Group</Text>
      <RadioGroup value={value1} onValueChange={setValue1} className="mb-6">
        <View className="flex-row items-center gap-2 mb-2">
          <RadioGroupItem value="option1" />
          <Label>Option 1</Label>
        </View>
        <View className="flex-row items-center gap-2 mb-2">
          <RadioGroupItem value="option2" />
          <Label>Option 2</Label>
        </View>
        <View className="flex-row items-center gap-2">
          <RadioGroupItem value="option3" />
          <Label>Option 3</Label>
        </View>
      </RadioGroup>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Descriptions</Text>
      <RadioGroup value={value2} onValueChange={setValue2}>
        <View className="flex-row gap-2 mb-4">
          <RadioGroupItem value="default" />
          <View className="flex-1">
            <Label>Default</Label>
            <Text className="text-sm text-gray-500">
              The default spacing for components.
            </Text>
          </View>
        </View>
        <View className="flex-row gap-2 mb-4">
          <RadioGroupItem value="comfortable" />
          <View className="flex-1">
            <Label>Comfortable</Label>
            <Text className="text-sm text-gray-500">
              More space between components.
            </Text>
          </View>
        </View>
        <View className="flex-row gap-2">
          <RadioGroupItem value="compact" />
          <View className="flex-1">
            <Label>Compact</Label>
            <Text className="text-sm text-gray-500">
              Less space between components.
            </Text>
          </View>
        </View>
      </RadioGroup>
    </ScrollView>
  );
}
