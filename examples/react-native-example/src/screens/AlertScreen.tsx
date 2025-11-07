import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';

export default function AlertScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Alert</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Default Alert</Text>
      <Alert className="mb-6">
        <AlertTitle>
          <Text>Heads up!</Text>
        </AlertTitle>
        <AlertDescription>
          <Text>You can add components to your app using the CLI.</Text>
        </AlertDescription>
      </Alert>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Success Alert</Text>
      <Alert variant="success" className="mb-6">
        <AlertTitle>
          <Text>Success</Text>
        </AlertTitle>
        <AlertDescription>
          <Text>Your changes have been saved successfully.</Text>
        </AlertDescription>
      </Alert>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Destructive Alert</Text>
      <Alert variant="destructive">
        <AlertTitle>
          <Text>Error</Text>
        </AlertTitle>
        <AlertDescription>
          <Text>Your session has expired. Please log in again.</Text>
        </AlertDescription>
      </Alert>
    </ScrollView>
  );
}
