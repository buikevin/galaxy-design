import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function SwitchScreen() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Switch</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Switches</Text>
      <View className="gap-4 mb-6">
        <View className="flex-row items-center justify-between">
          <Label>Airplane Mode</Label>
          <Switch checked={checked1} onCheckedChange={setChecked1} />
        </View>
        <View className="flex-row items-center justify-between">
          <Label>Wi-Fi</Label>
          <Switch checked={checked2} onCheckedChange={setChecked2} />
        </View>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Description</Text>
      <View className="gap-4 mb-6">
        <View className="flex-row items-center justify-between">
          <View className="flex-1 pr-4">
            <Label>Marketing emails</Label>
            <Text className="text-sm text-gray-500">
              Receive emails about new products and special offers.
            </Text>
          </View>
          <Switch checked={checked3} onCheckedChange={setChecked3} />
        </View>
      </View>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Disabled State</Text>
      <View className="flex-row items-center justify-between">
        <Label>Disabled Switch</Label>
        <Switch disabled />
      </View>
    </ScrollView>
  );
}
