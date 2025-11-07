import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Slider } from '@/components/ui/slider';

export default function SliderScreen() {
  const [value1, setValue1] = useState([50]);
  const [value2, setValue2] = useState([25, 75]);
  const [value3, setValue3] = useState([33]);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Slider</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Slider</Text>
      <Slider value={value1} onValueChange={setValue1} max={100} step={1} className="mb-2" />
      <Text className="text-sm text-gray-600 mb-6">Value: {value1[0]}</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Range Slider</Text>
      <Slider value={value2} onValueChange={setValue2} max={100} step={1} className="mb-2" />
      <Text className="text-sm text-gray-600 mb-6">
        Range: {value2[0]} - {value2[1]}
      </Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Step</Text>
      <Slider value={value3} onValueChange={setValue3} max={100} step={10} className="mb-2" />
      <Text className="text-sm text-gray-600">Value: {value3[0]} (step: 10)</Text>
    </ScrollView>
  );
}
