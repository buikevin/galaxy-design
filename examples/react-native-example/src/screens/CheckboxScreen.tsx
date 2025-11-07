import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

export default function CheckboxScreen() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Checkbox</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Checkboxes</Text>
      <View className="gap-4 mb-6">
        <View className="flex-row items-center gap-2">
          <Checkbox checked={checked1} onCheckedChange={setChecked1} />
          <Label>Accept terms and conditions</Label>
        </View>
        <View className="flex-row items-center gap-2">
          <Checkbox checked={checked2} onCheckedChange={setChecked2} />
          <Label>Subscribe to newsletter</Label>
        </View>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Description</Text>
      <View className="gap-4 mb-6">
        <View className="flex-row gap-2">
          <Checkbox checked={checked3} onCheckedChange={setChecked3} />
          <View className="flex-1">
            <Label>Marketing emails</Label>
            <Text className="text-sm text-gray-500">
              Receive emails about new products and special offers.
            </Text>
          </View>
        </View>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Disabled State</Text>
      <View className="flex-row items-center gap-2">
        <Checkbox disabled />
        <Label>Disabled checkbox</Label>
      </View>
    </ScrollView>
  );
}
