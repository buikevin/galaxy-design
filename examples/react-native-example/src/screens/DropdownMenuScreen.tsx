import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

export default function DropdownMenuScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Dropdown Menu</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Dropdown</Text>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline">
            <Text>Open Menu</Text>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Text>Profile</Text>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Text>Settings</Text>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Text>Billing</Text>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Text>Logout</Text>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </ScrollView>
  );
}
