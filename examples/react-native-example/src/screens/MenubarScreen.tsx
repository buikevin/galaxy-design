import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '@/components/ui/menubar';

export default function MenubarScreen() {
  return (
    <ScrollView className="flex-1 bg-white p-4">
      <Text className="text-2xl font-bold text-gray-800 mb-6">Menubar</Text>

      <Text className="text-lg font-semibold text-gray-700 mb-3">Basic Menubar</Text>
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>
            <Text>File</Text>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Text>New File</Text>
            </MenubarItem>
            <MenubarItem>
              <Text>Open</Text>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Text>Save</Text>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>
            <Text>Edit</Text>
          </MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <Text>Undo</Text>
            </MenubarItem>
            <MenubarItem>
              <Text>Redo</Text>
            </MenubarItem>
            <MenubarSeparator />
            <MenubarItem>
              <Text>Cut</Text>
            </MenubarItem>
            <MenubarItem>
              <Text>Copy</Text>
            </MenubarItem>
            <MenubarItem>
              <Text>Paste</Text>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </ScrollView>
  );
}
