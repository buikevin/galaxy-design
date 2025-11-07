import './global.css';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { RootStackParamList } from './src/navigation/types';

import HomeScreen from './src/screens/HomeScreen';
import AccordionScreen from './src/screens/AccordionScreen';
import AlertScreen from './src/screens/AlertScreen';
import AlertDialogScreen from './src/screens/AlertDialogScreen';
import AspectRatioScreen from './src/screens/AspectRatioScreen';
import AvatarScreen from './src/screens/AvatarScreen';
import BadgeScreen from './src/screens/BadgeScreen';
import ButtonScreen from './src/screens/ButtonScreen';
import CardScreen from './src/screens/CardScreen';
import CheckboxScreen from './src/screens/CheckboxScreen';
import CollapsibleScreen from './src/screens/CollapsibleScreen';
import ContextMenuScreen from './src/screens/ContextMenuScreen';
import DatePickerScreen from './src/screens/DatePickerScreen';
import DialogScreen from './src/screens/DialogScreen';
import DropdownMenuScreen from './src/screens/DropdownMenuScreen';
import EmptyScreen from './src/screens/EmptyScreen';
import HoverCardScreen from './src/screens/HoverCardScreen';
import InputScreen from './src/screens/InputScreen';
import LabelScreen from './src/screens/LabelScreen';
import MenubarScreen from './src/screens/MenubarScreen';
import NavigationMenuScreen from './src/screens/NavigationMenuScreen';
import PaginationScreen from './src/screens/PaginationScreen';
import PopoverScreen from './src/screens/PopoverScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import RadioGroupScreen from './src/screens/RadioGroupScreen';
import SelectScreen from './src/screens/SelectScreen';
import SeparatorScreen from './src/screens/SeparatorScreen';
import SheetScreen from './src/screens/SheetScreen';
import SkeletonScreen from './src/screens/SkeletonScreen';
import SliderScreen from './src/screens/SliderScreen';
import SwitchScreen from './src/screens/SwitchScreen';
import TableScreen from './src/screens/TableScreen';
import TabsScreen from './src/screens/TabsScreen';
import TextareaScreen from './src/screens/TextareaScreen';
import ToggleScreen from './src/screens/ToggleScreen';
import ToggleGroupScreen from './src/screens/ToggleGroupScreen';
import TooltipScreen from './src/screens/TooltipScreen';
import TypographyScreen from './src/screens/TypographyScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#3b82f6',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Galaxy UI Components' }}
        />
        <Stack.Screen name="Accordion" component={AccordionScreen} />
        <Stack.Screen name="Alert" component={AlertScreen} />
        <Stack.Screen name="AlertDialog" component={AlertDialogScreen} options={{ title: 'Alert Dialog' }} />
        <Stack.Screen name="AspectRatio" component={AspectRatioScreen} options={{ title: 'Aspect Ratio' }} />
        <Stack.Screen name="Avatar" component={AvatarScreen} />
        <Stack.Screen name="Badge" component={BadgeScreen} />
        <Stack.Screen name="Button" component={ButtonScreen} />
        <Stack.Screen name="Card" component={CardScreen} />
        <Stack.Screen name="Checkbox" component={CheckboxScreen} />
        <Stack.Screen name="Collapsible" component={CollapsibleScreen} />
        <Stack.Screen name="ContextMenu" component={ContextMenuScreen} options={{ title: 'Context Menu' }} />
        <Stack.Screen name="DatePicker" component={DatePickerScreen} options={{ title: 'Date Picker' }} />
        <Stack.Screen name="Dialog" component={DialogScreen} />
        <Stack.Screen name="DropdownMenu" component={DropdownMenuScreen} options={{ title: 'Dropdown Menu' }} />
        <Stack.Screen name="Empty" component={EmptyScreen} />
        <Stack.Screen name="HoverCard" component={HoverCardScreen} options={{ title: 'Hover Card' }} />
        <Stack.Screen name="Input" component={InputScreen} />
        <Stack.Screen name="Label" component={LabelScreen} />
        <Stack.Screen name="Menubar" component={MenubarScreen} />
        <Stack.Screen name="NavigationMenu" component={NavigationMenuScreen} options={{ title: 'Navigation Menu' }} />
        <Stack.Screen name="Pagination" component={PaginationScreen} />
        <Stack.Screen name="Popover" component={PopoverScreen} />
        <Stack.Screen name="Progress" component={ProgressScreen} />
        <Stack.Screen name="RadioGroup" component={RadioGroupScreen} options={{ title: 'Radio Group' }} />
        <Stack.Screen name="Select" component={SelectScreen} />
        <Stack.Screen name="Separator" component={SeparatorScreen} />
        <Stack.Screen name="Sheet" component={SheetScreen} />
        <Stack.Screen name="Skeleton" component={SkeletonScreen} />
        <Stack.Screen name="Slider" component={SliderScreen} />
        <Stack.Screen name="Switch" component={SwitchScreen} />
        <Stack.Screen name="Table" component={TableScreen} />
        <Stack.Screen name="Tabs" component={TabsScreen} />
        <Stack.Screen name="Textarea" component={TextareaScreen} />
        <Stack.Screen name="Toggle" component={ToggleScreen} />
        <Stack.Screen name="ToggleGroup" component={ToggleGroupScreen} options={{ title: 'Toggle Group' }} />
        <Stack.Screen name="Tooltip" component={TooltipScreen} />
        <Stack.Screen name="Typography" component={TypographyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
