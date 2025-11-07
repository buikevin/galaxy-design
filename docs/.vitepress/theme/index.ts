import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import ComponentPreview from '../components/ComponentPreview.vue'
import DemoContainer from '../components/DemoContainer.vue'
import FrameworkTabs from '../components/FrameworkTabs.vue'

// Demo components
import AccordionDemo from '../components/demos/AccordionDemo.vue'
import AlertDialogDemo from '../components/demos/AlertDialogDemo.vue'
import AvatarDemo from '../components/demos/AvatarDemo.vue'
import ButtonDemo from '../components/demos/ButtonDemo.vue'
import ButtonVariantsDemo from '../components/demos/ButtonVariantsDemo.vue'
import CheckboxDemo from '../components/demos/CheckboxDemo.vue'
import CollapsibleDemo from '../components/demos/CollapsibleDemo.vue'
import ContextMenuDemo from '../components/demos/ContextMenuDemo.vue'
import DialogDemo from '../components/demos/DialogDemo.vue'
import DropdownMenuDemo from '../components/demos/DropdownMenuDemo.vue'
import HoverCardDemo from '../components/demos/HoverCardDemo.vue'
import InputDemo from '../components/demos/InputDemo.vue'
import LabelDemo from '../components/demos/LabelDemo.vue'
import MenubarDemo from '../components/demos/MenubarDemo.vue'
import NavigationMenuDemo from '../components/demos/NavigationMenuDemo.vue'
import PopoverDemo from '../components/demos/PopoverDemo.vue'
import RadioGroupDemo from '../components/demos/RadioGroupDemo.vue'
import SelectDemo from '../components/demos/SelectDemo.vue'
import SeparatorDemo from '../components/demos/SeparatorDemo.vue'
import SliderDemo from '../components/demos/SliderDemo.vue'
import SwitchDemo from '../components/demos/SwitchDemo.vue'
import TabsDemo from '../components/demos/TabsDemo.vue'
import TextareaDemo from '../components/demos/TextareaDemo.vue'
import TooltipDemo from '../components/demos/TooltipDemo.vue'

// New demo components
import AspectRatioDemo from '../components/demos/AspectRatioDemo.vue'
import CalendarDemo from '../components/demos/CalendarDemo.vue'
import CalendarRangeDemo from '../components/demos/CalendarRangeDemo.vue'
import CommandDemo from '../components/demos/CommandDemo.vue'
import EmptyDemo from '../components/demos/EmptyDemo.vue'
import KbdDemo from '../components/demos/KbdDemo.vue'
import PaginationDemo from '../components/demos/PaginationDemo.vue'
import ProgressDemo from '../components/demos/ProgressDemo.vue'
import ResizableDemo from '../components/demos/ResizableDemo.vue'
import ScrollAreaDemo from '../components/demos/ScrollAreaDemo.vue'
import SheetDemo from '../components/demos/SheetDemo.vue'
import SkeletonDemo from '../components/demos/SkeletonDemo.vue'
import TableDemo from '../components/demos/TableDemo.vue'
import TagsInputDemo from '../components/demos/TagsInputDemo.vue'
import ToggleDemo from '../components/demos/ToggleDemo.vue'
import ToggleGroupDemo from '../components/demos/ToggleGroupDemo.vue'
import ToolbarDemo from '../components/demos/ToolbarDemo.vue'
import TypographyDemo from '../components/demos/TypographyDemo.vue'
import DialogDemoSimple from '../components/demos/DialogDemoSimple.vue'
import DialogDemoDebug from '../components/demos/DialogDemoDebug.vue'
import DialogDemoWorking from '../components/demos/DialogDemoWorking.vue'

// Chart demo components - use dynamic imports to avoid SSR issues with vue-echarts
import { defineAsyncComponent } from 'vue'

const LineChartDemo = defineAsyncComponent(() => import('../components/demos/LineChartDemo.vue'))
const BarChartDemo = defineAsyncComponent(() => import('../components/demos/BarChartDemo.vue'))
const PieChartDemo = defineAsyncComponent(() => import('../components/demos/PieChartDemo.vue'))
const DonutChartDemo = defineAsyncComponent(() => import('../components/demos/DonutChartDemo.vue'))
const AreaChartDemo = defineAsyncComponent(() => import('../components/demos/AreaChartDemo.vue'))
const RadarChartDemo = defineAsyncComponent(() => import('../components/demos/RadarChartDemo.vue'))
const ScatterChartDemo = defineAsyncComponent(() => import('../components/demos/ScatterChartDemo.vue'))
const MixedChartDemo = defineAsyncComponent(() => import('../components/demos/MixedChartDemo.vue'))

import './tailwind.css'
import './style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    // Register global components
    app.component('ComponentPreview', ComponentPreview)
    app.component('DemoContainer', DemoContainer)
    app.component('FrameworkTabs', FrameworkTabs)

    // Register demo components
    app.component('AccordionDemo', AccordionDemo)
    app.component('AlertDialogDemo', AlertDialogDemo)
    app.component('AvatarDemo', AvatarDemo)
    app.component('ButtonDemo', ButtonDemo)
    app.component('ButtonVariantsDemo', ButtonVariantsDemo)
    app.component('CheckboxDemo', CheckboxDemo)
    app.component('CollapsibleDemo', CollapsibleDemo)
    app.component('ContextMenuDemo', ContextMenuDemo)
    app.component('DialogDemo', DialogDemo)
    app.component('DropdownMenuDemo', DropdownMenuDemo)
    app.component('HoverCardDemo', HoverCardDemo)
    app.component('InputDemo', InputDemo)
    app.component('LabelDemo', LabelDemo)
    app.component('MenubarDemo', MenubarDemo)
    app.component('NavigationMenuDemo', NavigationMenuDemo)
    app.component('PopoverDemo', PopoverDemo)
    app.component('RadioGroupDemo', RadioGroupDemo)
    app.component('SelectDemo', SelectDemo)
    app.component('SeparatorDemo', SeparatorDemo)
    app.component('SliderDemo', SliderDemo)
    app.component('SwitchDemo', SwitchDemo)
    app.component('TabsDemo', TabsDemo)
    app.component('TextareaDemo', TextareaDemo)
    app.component('TooltipDemo', TooltipDemo)

    // Register new demo components
    app.component('AspectRatioDemo', AspectRatioDemo)
    app.component('CalendarDemo', CalendarDemo)
    app.component('CalendarRangeDemo', CalendarRangeDemo)
    app.component('CommandDemo', CommandDemo)
    app.component('EmptyDemo', EmptyDemo)
    app.component('KbdDemo', KbdDemo)
    app.component('PaginationDemo', PaginationDemo)
    app.component('ProgressDemo', ProgressDemo)
    app.component('ResizableDemo', ResizableDemo)
    app.component('ScrollAreaDemo', ScrollAreaDemo)
    app.component('SheetDemo', SheetDemo)
    app.component('SkeletonDemo', SkeletonDemo)
    app.component('TableDemo', TableDemo)
    app.component('TagsInputDemo', TagsInputDemo)
    app.component('ToggleDemo', ToggleDemo)
    app.component('ToggleGroupDemo', ToggleGroupDemo)
    app.component('ToolbarDemo', ToolbarDemo)
    app.component('TypographyDemo', TypographyDemo)
    app.component('DialogDemoSimple', DialogDemoSimple)
    app.component('DialogDemoDebug', DialogDemoDebug)
    app.component('DialogDemoWorking', DialogDemoWorking)

    // Register chart demo components
    app.component('LineChartDemo', LineChartDemo)
    app.component('BarChartDemo', BarChartDemo)
    app.component('PieChartDemo', PieChartDemo)
    app.component('DonutChartDemo', DonutChartDemo)
    app.component('AreaChartDemo', AreaChartDemo)
    app.component('RadarChartDemo', RadarChartDemo)
    app.component('ScatterChartDemo', ScatterChartDemo)
    app.component('MixedChartDemo', MixedChartDemo)
  }
} satisfies Theme
