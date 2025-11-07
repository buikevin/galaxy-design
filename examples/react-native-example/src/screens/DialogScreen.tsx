import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function DialogScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Dialog</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Dialog</Text>
      <Dialog>
        <DialogTrigger asChild>
          <Button>
            <Text>Open Dialog</Text>
          </Button>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when you're done.
            </DialogDescription>
          </DialogHeader>
          <View className="gap-4 py-4">
            <View className="gap-2">
              <Label>Name</Label>
              <Input placeholder="Enter your name" />
            </View>
            <View className="gap-2">
              <Label>Email</Label>
              <Input placeholder="Enter your email" />
            </View>
          </View>
          <DialogFooter>
            <Button>
              <Text>Save changes</Text>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ScrollView>
  );
}
