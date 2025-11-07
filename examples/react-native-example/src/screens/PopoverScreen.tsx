import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function PopoverScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Popover</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Popover</Text>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">
            <Text>Open Popover</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <View className="gap-2">
            <Text className="font-semibold">Popover Title</Text>
            <Text className="text-sm text-gray-600">
              This is a popover with some content inside.
            </Text>
          </View>
        </PopoverContent>
      </Popover>

      <View className="my-6 border-t border-gray-200" />

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Form</Text>
      <Popover>
        <PopoverTrigger asChild>
          <Button>
            <Text>Settings</Text>
          </Button>
        </PopoverTrigger>
        <PopoverContent>
          <View className="gap-4">
            <Text className="font-semibold">Dimensions</Text>
            <View className="gap-2">
              <Label>Width</Label>
              <Input placeholder="100px" />
            </View>
            <View className="gap-2">
              <Label>Height</Label>
              <Input placeholder="100px" />
            </View>
          </View>
        </PopoverContent>
      </Popover>
    </ScrollView>
  );
}
