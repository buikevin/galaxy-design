import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function CardScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Card</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Simple Card</Text>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Card Title</CardTitle>
          <CardDescription>Card Description</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>This is the card content area where you can put any content.</Text>
        </CardContent>
      </Card>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Card with Footer</Text>
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Notifications</CardTitle>
          <CardDescription>You have 3 unread messages.</CardDescription>
        </CardHeader>
        <CardContent>
          <Text>Review your notifications to stay updated.</Text>
        </CardContent>
        <CardFooter>
          <Button>
            <Text>Mark all as read</Text>
          </Button>
        </CardFooter>
      </Card>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Feature Card</Text>
      <Card>
        <CardHeader>
          <CardTitle>Premium Plan</CardTitle>
          <CardDescription>Unlock all features</CardDescription>
        </CardHeader>
        <CardContent>
          <Text className="mb-2">Features included:</Text>
          <Text>- Unlimited access</Text>
          <Text>- Priority support</Text>
          <Text>- Advanced analytics</Text>
        </CardContent>
        <CardFooter>
          <Button variant="outline">
            <Text>Learn more</Text>
          </Button>
        </CardFooter>
      </Card>
    </ScrollView>
  );
}
