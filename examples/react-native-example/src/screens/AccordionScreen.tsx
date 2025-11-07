import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function AccordionScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Accordion</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Single Item</Text>
      <Accordion type="single" collapsible className="mb-6">
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>What is Galaxy UI?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Galaxy UI is a collection of beautiful and accessible components for React Native.</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Multiple Items</Text>
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <AccordionTrigger>
            <Text>Is it accessible?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It adheres to the WAI-ARIA design pattern.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>
            <Text>Is it customizable?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. You can customize the styling using NativeWind classes.</Text>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>
            <Text>Is it free?</Text>
          </AccordionTrigger>
          <AccordionContent>
            <Text>Yes. It is open source and free to use.</Text>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </ScrollView>
  );
}
