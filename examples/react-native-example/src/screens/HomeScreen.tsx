import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const components = [
  { name: 'Accordion', route: 'Accordion' as const },
  { name: 'Alert', route: 'Alert' as const },
  { name: 'Alert Dialog', route: 'AlertDialog' as const },
  { name: 'Aspect Ratio', route: 'AspectRatio' as const },
  { name: 'Avatar', route: 'Avatar' as const },
  { name: 'Badge', route: 'Badge' as const },
  { name: 'Button', route: 'Button' as const },
  { name: 'Card', route: 'Card' as const },
  { name: 'Checkbox', route: 'Checkbox' as const },
  { name: 'Collapsible', route: 'Collapsible' as const },
  { name: 'Context Menu', route: 'ContextMenu' as const },
  { name: 'Date Picker', route: 'DatePicker' as const },
  { name: 'Dialog', route: 'Dialog' as const },
  { name: 'Dropdown Menu', route: 'DropdownMenu' as const },
  { name: 'Empty', route: 'Empty' as const },
  { name: 'Hover Card', route: 'HoverCard' as const },
  { name: 'Input', route: 'Input' as const },
  { name: 'Label', route: 'Label' as const },
  { name: 'Menubar', route: 'Menubar' as const },
  { name: 'Navigation Menu', route: 'NavigationMenu' as const },
  { name: 'Pagination', route: 'Pagination' as const },
  { name: 'Popover', route: 'Popover' as const },
  { name: 'Progress', route: 'Progress' as const },
  { name: 'Radio Group', route: 'RadioGroup' as const },
  { name: 'Select', route: 'Select' as const },
  { name: 'Separator', route: 'Separator' as const },
  { name: 'Sheet', route: 'Sheet' as const },
  { name: 'Skeleton', route: 'Skeleton' as const },
  { name: 'Slider', route: 'Slider' as const },
  { name: 'Switch', route: 'Switch' as const },
  { name: 'Table', route: 'Table' as const },
  { name: 'Tabs', route: 'Tabs' as const },
  { name: 'Textarea', route: 'Textarea' as const },
  { name: 'Toggle', route: 'Toggle' as const },
  { name: 'Toggle Group', route: 'ToggleGroup' as const },
  { name: 'Tooltip', route: 'Tooltip' as const },
  { name: 'Typography', route: 'Typography' as const },
];

export default function HomeScreen({ navigation }: Props) {
  return (
    <View className="flex-1 bg-white">
      <View className="p-6 bg-blue-500">
        <Text className="text-3xl font-bold text-white">Galaxy UI Components</Text>
        <Text className="text-sm text-blue-100 mt-1">37 Components Showcase</Text>
      </View>
      <ScrollView className="flex-1 p-4">
        {components.map((component) => (
          <TouchableOpacity
            key={component.route}
            onPress={() => navigation.navigate(component.route)}
            className="bg-white border border-gray-200 rounded-lg p-4 mb-3 shadow-sm active:bg-gray-50"
          >
            <Text className="text-lg font-semibold text-gray-800">{component.name}</Text>
            <Text className="text-sm text-gray-500 mt-1">Tap to view examples</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
