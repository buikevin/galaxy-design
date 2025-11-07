import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function SheetScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Sheet</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Bottom Sheet</Text>
      <Sheet>
        <SheetTrigger asChild>
          <Button>
            <Text>Open Sheet</Text>
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Edit Profile</SheetTitle>
            <SheetDescription>
              Make changes to your profile here. Click save when you're done.
            </SheetDescription>
          </SheetHeader>
          <View className="gap-4 py-4">
            <View className="gap-2">
              <Label>Name</Label>
              <Input placeholder="Your name" />
            </View>
            <View className="gap-2">
              <Label>Email</Label>
              <Input placeholder="Your email" />
            </View>
            <Button>
              <Text>Save changes</Text>
            </Button>
          </View>
        </SheetContent>
      </Sheet>
    </ScrollView>
  );
}
