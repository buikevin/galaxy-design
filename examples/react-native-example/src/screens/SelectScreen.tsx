import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';

export default function SelectScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Select</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Select</Text>
      <Select>
        <SelectTrigger>
          <SelectValue placeholder="Select a fruit" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="apple">
            <Text>Apple</Text>
          </SelectItem>
          <SelectItem value="banana">
            <Text>Banana</Text>
          </SelectItem>
          <SelectItem value="orange">
            <Text>Orange</Text>
          </SelectItem>
        </SelectContent>
      </Select>

      <View className="my-6 border-t border-gray-200" />

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Label</Text>
      <View className="gap-2 mb-6">
        <Label>Country</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a country" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="us">
              <Text>United States</Text>
            </SelectItem>
            <SelectItem value="uk">
              <Text>United Kingdom</Text>
            </SelectItem>
            <SelectItem value="ca">
              <Text>Canada</Text>
            </SelectItem>
          </SelectContent>
        </Select>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Framework Select</Text>
      <View className="gap-2">
        <Label>Framework</Label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select a framework" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="react">
              <Text>React</Text>
            </SelectItem>
            <SelectItem value="vue">
              <Text>Vue</Text>
            </SelectItem>
            <SelectItem value="angular">
              <Text>Angular</Text>
            </SelectItem>
            <SelectItem value="svelte">
              <Text>Svelte</Text>
            </SelectItem>
          </SelectContent>
        </Select>
      </View>
    </ScrollView>
  );
}
