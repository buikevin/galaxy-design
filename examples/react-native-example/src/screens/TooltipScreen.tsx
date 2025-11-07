import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';

export default function TooltipScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Tooltip</Text>

      <TooltipProvider>
        <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Tooltip</Text>
        <View className="mb-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline">
                <Text>Hover me</Text>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Text>This is a tooltip</Text>
            </TooltipContent>
          </Tooltip>
        </View>

        <Text className="text-lg font-semibold text-gray-700 mb-3">Multiple Tooltips</Text>
        <View className="flex-row gap-2 mb-6">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm">
                <Text>Save</Text>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Text>Save changes</Text>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="outline">
                <Text>Cancel</Text>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Text>Discard changes</Text>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button size="sm" variant="destructive">
                <Text>Delete</Text>
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <Text>Delete item permanently</Text>
            </TooltipContent>
          </Tooltip>
        </View>

        <Text className="text-lg font-semibold text-gray-700 mb-3">With Description</Text>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button>
              <Text>Info</Text>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <View className="gap-1">
              <Text className="font-semibold">Information</Text>
              <Text className="text-sm">Click to learn more about this feature.</Text>
            </View>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </ScrollView>
  );
}
