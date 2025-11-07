import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';
import { Button } from '@/components/ui/button';

export default function CollapsibleScreen() {
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Collapsible</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Collapsible</Text>
      <Collapsible open={open1} onOpenChange={setOpen1} className="mb-6">
        <CollapsibleTrigger asChild>
          <Button variant="outline">
            <Text>{open1 ? 'Hide' : 'Show'} Details</Text>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <View className="mt-4 p-4 bg-gray-100 rounded-lg">
            <Text className="text-gray-700">
              This is the collapsible content that can be shown or hidden.
            </Text>
          </View>
        </CollapsibleContent>
      </Collapsible>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Content</Text>
      <Collapsible open={open2} onOpenChange={setOpen2} className="mb-6">
        <CollapsibleTrigger asChild>
          <Button>
            <Text>{open2 ? 'Collapse' : 'Expand'} Information</Text>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <View className="mt-4 p-4 border border-gray-200 rounded-lg">
            <Text className="font-semibold mb-2">Additional Information</Text>
            <Text className="text-gray-600 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            <Text className="text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Text>
          </View>
        </CollapsibleContent>
      </Collapsible>
    </ScrollView>
  );
}
