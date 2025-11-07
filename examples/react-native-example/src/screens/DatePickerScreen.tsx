import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { DatePicker } from '@/components/ui/date-picker';
import { Button } from '@/components/ui/button';

export default function DatePickerScreen() {
  const [date1, setDate1] = useState<Date | undefined>(new Date());
  const [date2, setDate2] = useState<Date | undefined>();

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Date Picker</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">With Default Date</Text>
      <DatePicker date={date1} onDateChange={setDate1} />
      {date1 && (
        <Text className="mt-2 text-gray-600">
          Selected: {date1.toLocaleDateString()}
        </Text>
      )}

      <View className="my-6 border-t border-gray-200" />

      <Text className="text-lg font-semibold text-gray-700 mb-3">Without Default Date</Text>
      <DatePicker date={date2} onDateChange={setDate2} />
      {date2 && (
        <Text className="mt-2 text-gray-600">
          Selected: {date2.toLocaleDateString()}
        </Text>
      )}

      <View className="my-6 border-t border-gray-200" />

      <Text className="text-lg font-semibold text-gray-700 mb-3">Custom Placeholder</Text>
      <DatePicker
        date={date2}
        onDateChange={setDate2}
        placeholder="Pick a date"
      />
    </ScrollView>
  );
}
