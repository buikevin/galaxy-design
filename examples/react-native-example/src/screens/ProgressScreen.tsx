import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';

export default function ProgressScreen() {
  const [progress1, setProgress1] = useState(33);
  const [progress2, setProgress2] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress2((prev) => (prev >= 100 ? 0 : prev + 10));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Progress</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Static Progress</Text>
      <Progress value={progress1} className="mb-2" />
      <Text className="text-sm text-gray-600 mb-6">{progress1}% complete</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Animated Progress</Text>
      <Progress value={progress2} className="mb-2" />
      <Text className="text-sm text-gray-600 mb-6">{progress2}% complete</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Interactive Progress</Text>
      <Progress value={progress1} className="mb-4" />
      <View className="flex-row gap-2">
        <Button onPress={() => setProgress1(Math.max(0, progress1 - 10))} size="sm">
          <Text>-10%</Text>
        </Button>
        <Button onPress={() => setProgress1(Math.min(100, progress1 + 10))} size="sm">
          <Text>+10%</Text>
        </Button>
        <Button onPress={() => setProgress1(0)} size="sm" variant="outline">
          <Text>Reset</Text>
        </Button>
      </View>
    </ScrollView>
  );
}
