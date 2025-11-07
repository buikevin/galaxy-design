import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TabsScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Tabs</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Tabs</Text>
      <Tabs defaultValue="account" className="mb-6">
        <TabsList>
          <TabsTrigger value="account">
            <Text>Account</Text>
          </TabsTrigger>
          <TabsTrigger value="password">
            <Text>Password</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <CardHeader>
              <CardTitle>Account</CardTitle>
              <CardDescription>
                Make changes to your account here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text>Account settings content goes here.</Text>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>Password</CardTitle>
              <CardDescription>
                Change your password here.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Text>Password settings content goes here.</Text>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Multiple Tabs</Text>
      <Tabs defaultValue="overview">
        <TabsList>
          <TabsTrigger value="overview">
            <Text>Overview</Text>
          </TabsTrigger>
          <TabsTrigger value="analytics">
            <Text>Analytics</Text>
          </TabsTrigger>
          <TabsTrigger value="reports">
            <Text>Reports</Text>
          </TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <Text className="p-4">Overview content</Text>
        </TabsContent>
        <TabsContent value="analytics">
          <Text className="p-4">Analytics content</Text>
        </TabsContent>
        <TabsContent value="reports">
          <Text className="p-4">Reports content</Text>
        </TabsContent>
      </Tabs>
    </ScrollView>
  );
}
