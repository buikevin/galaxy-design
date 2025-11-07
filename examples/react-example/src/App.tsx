import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { AdminLayout } from './components/AdminLayout'
import { HomePage } from './pages/HomePage'
import { ButtonPage } from './pages/ButtonPage'
import { InputPage } from './pages/InputPage'
import { CheckboxPage } from './pages/CheckboxPage'
import { RadioGroupPage } from './pages/RadioGroupPage'
import { SelectPage } from './pages/SelectPage'
import { SliderPage } from './pages/SliderPage'
import { SwitchPage } from './pages/SwitchPage'
import { TextareaPage } from './pages/TextareaPage'
import { LabelPage } from './pages/LabelPage'
import { SeparatorPage } from './pages/SeparatorPage'
import { AccordionPage } from './pages/AccordionPage'
import { CollapsiblePage } from './pages/CollapsiblePage'
import { TabsPage } from './pages/TabsPage'
import { NavigationMenuPage } from './pages/NavigationMenuPage'
import { MenubarPage } from './pages/MenubarPage'
import { ContextMenuPage } from './pages/ContextMenuPage'
import { DropdownMenuPage } from './pages/DropdownMenuPage'
import { DialogPage } from './pages/DialogPage'
import { AlertDialogPage } from './pages/AlertDialogPage'
import { PopoverPage } from './pages/PopoverPage'
import { TooltipPage } from './pages/TooltipPage'
import { HoverCardPage } from './pages/HoverCardPage'
import { AvatarPage } from './pages/AvatarPage'
import { ProgressPage } from './pages/ProgressPage'
import { KbdPage } from './pages/KbdPage'
import { TypographyPage } from './pages/TypographyPage'
import { EmptyPage } from './pages/EmptyPage'
import { SkeletonPage } from './pages/SkeletonPage'
import { PaginationPage } from './pages/PaginationPage'
import { TablePage } from './pages/TablePage'
import { CalendarPage } from './pages/CalendarPage'
import { CalendarRangePage } from './pages/CalendarRangePage'
import { CommandPage } from './pages/CommandPage'
import { SheetPage } from './pages/SheetPage'
import { ToolbarPage } from './pages/ToolbarPage'
import { TagsInputPage } from './pages/TagsInputPage'
import './index.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          <Route index element={<HomePage />} />

          {/* Form Components */}
          <Route path="/button" element={<ButtonPage />} />
          <Route path="/input" element={<InputPage />} />
          <Route path="/checkbox" element={<CheckboxPage />} />
          <Route path="/radio-group" element={<RadioGroupPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/slider" element={<SliderPage />} />
          <Route path="/switch" element={<SwitchPage />} />
          <Route path="/textarea" element={<TextareaPage />} />
          <Route path="/label" element={<LabelPage />} />

          {/* Layout Components */}
          <Route path="/separator" element={<SeparatorPage />} />
          <Route path="/accordion" element={<AccordionPage />} />
          <Route path="/collapsible" element={<CollapsiblePage />} />
          <Route path="/tabs" element={<TabsPage />} />

          {/* Navigation Components */}
          <Route path="/navigation-menu" element={<NavigationMenuPage />} />
          <Route path="/menubar" element={<MenubarPage />} />
          <Route path="/context-menu" element={<ContextMenuPage />} />
          <Route path="/dropdown-menu" element={<DropdownMenuPage />} />

          {/* Overlay Components */}
          <Route path="/dialog" element={<DialogPage />} />
          <Route path="/alert-dialog" element={<AlertDialogPage />} />
          <Route path="/popover" element={<PopoverPage />} />
          <Route path="/tooltip" element={<TooltipPage />} />
          <Route path="/hover-card" element={<HoverCardPage />} />

          {/* Data Display Components */}
          <Route path="/avatar" element={<AvatarPage />} />
          <Route path="/progress" element={<ProgressPage />} />
          <Route path="/table" element={<TablePage />} />
          <Route path="/pagination" element={<PaginationPage />} />
          <Route path="/empty" element={<EmptyPage />} />
          <Route path="/skeleton" element={<SkeletonPage />} />

          {/* Typography & Utilities */}
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/kbd" element={<KbdPage />} />

          {/* Date & Time */}
          <Route path="/calendar" element={<CalendarPage />} />
          <Route path="/calendar-range" element={<CalendarRangePage />} />

          {/* Advanced Components */}
          <Route path="/command" element={<CommandPage />} />
          <Route path="/sheet" element={<SheetPage />} />
          <Route path="/toolbar" element={<ToolbarPage />} />
          <Route path="/tags-input" element={<TagsInputPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
