import 'package:flutter/material.dart';

// Import all pages
import 'pages/accordion_page.dart';
import 'pages/alert_page.dart';
import 'pages/alert_dialog_page.dart';
import 'pages/aspect_ratio_page.dart';
import 'pages/avatar_page.dart';
import 'pages/badge_page.dart';
import 'pages/button_page.dart';
import 'pages/card_page.dart';
import 'pages/checkbox_page.dart';
import 'pages/collapsible_page.dart';
import 'pages/context_menu_page.dart';
import 'pages/date_picker_page.dart';
import 'pages/dialog_page.dart';
import 'pages/dropdown_menu_page.dart';
import 'pages/empty_page.dart';
import 'pages/hover_card_page.dart';
import 'pages/input_page.dart';
import 'pages/label_page.dart';
import 'pages/menubar_page.dart';
import 'pages/navigation_menu_page.dart';
import 'pages/pagination_page.dart';
import 'pages/popover_page.dart';
import 'pages/progress_page.dart';
import 'pages/radio_group_page.dart';
import 'pages/select_page.dart';
import 'pages/separator_page.dart';
import 'pages/sheet_page.dart';
import 'pages/skeleton_page.dart';
import 'pages/slider_page.dart';
import 'pages/switch_page.dart';
import 'pages/table_page.dart';
import 'pages/tabs_page.dart';
import 'pages/textarea_page.dart';
import 'pages/toggle_page.dart';
import 'pages/toggle_group_page.dart';
import 'pages/tooltip_page.dart';
import 'pages/typography_page.dart';

void main() {
  runApp(const GalaxyUIShowcaseApp());
}

class GalaxyUIShowcaseApp extends StatelessWidget {
  const GalaxyUIShowcaseApp({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Galaxy UI Showcase',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.blue),
        useMaterial3: true,
      ),
      darkTheme: ThemeData(
        colorScheme: ColorScheme.fromSeed(
          seedColor: Colors.blue,
          brightness: Brightness.dark,
        ),
        useMaterial3: true,
      ),
      home: const HomePage(),
    );
  }
}

class HomePage extends StatelessWidget {
  const HomePage({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final components = [
      ComponentItem('Accordion', Icons.expand_more, () => const AccordionPage()),
      ComponentItem('Alert', Icons.info_outline, () => const AlertPage()),
      ComponentItem('Alert Dialog', Icons.warning_outlined, () => const AlertDialogPage()),
      ComponentItem('Aspect Ratio', Icons.aspect_ratio, () => const AspectRatioPage()),
      ComponentItem('Avatar', Icons.account_circle, () => const AvatarPage()),
      ComponentItem('Badge', Icons.badge_outlined, () => const BadgePage()),
      ComponentItem('Button', Icons.smart_button, () => const ButtonPage()),
      ComponentItem('Card', Icons.credit_card, () => const CardPage()),
      ComponentItem('Checkbox', Icons.check_box, () => const CheckboxPage()),
      ComponentItem('Collapsible', Icons.unfold_less, () => const CollapsiblePage()),
      ComponentItem('Context Menu', Icons.more_vert, () => const ContextMenuPage()),
      ComponentItem('Date Picker', Icons.calendar_today, () => const DatePickerPage()),
      ComponentItem('Dialog', Icons.dialogs, () => const DialogPage()),
      ComponentItem('Dropdown Menu', Icons.arrow_drop_down_circle, () => const DropdownMenuPage()),
      ComponentItem('Empty', Icons.inbox, () => const EmptyPage()),
      ComponentItem('Hover Card', Icons.preview, () => const HoverCardPage()),
      ComponentItem('Input', Icons.input, () => const InputPage()),
      ComponentItem('Label', Icons.label, () => const LabelPage()),
      ComponentItem('Menubar', Icons.menu, () => const MenubarPage()),
      ComponentItem('Navigation Menu', Icons.menu_open, () => const NavigationMenuPage()),
      ComponentItem('Pagination', Icons.pages, () => const PaginationPage()),
      ComponentItem('Popover', Icons.speaker_notes, () => const PopoverPage()),
      ComponentItem('Progress', Icons.hourglass_empty, () => const ProgressPage()),
      ComponentItem('Radio Group', Icons.radio_button_checked, () => const RadioGroupPage()),
      ComponentItem('Select', Icons.select_all, () => const SelectPage()),
      ComponentItem('Separator', Icons.horizontal_rule, () => const SeparatorPage()),
      ComponentItem('Sheet', Icons.layers, () => const SheetPage()),
      ComponentItem('Skeleton', Icons.animation, () => const SkeletonPage()),
      ComponentItem('Slider', Icons.linear_scale, () => const SliderPage()),
      ComponentItem('Switch', Icons.toggle_on, () => const SwitchPage()),
      ComponentItem('Table', Icons.table_chart, () => const TablePage()),
      ComponentItem('Tabs', Icons.tab, () => const TabsPage()),
      ComponentItem('Textarea', Icons.text_fields, () => const TextareaPage()),
      ComponentItem('Toggle', Icons.toggle_off, () => const TogglePage()),
      ComponentItem('Toggle Group', Icons.view_module, () => const ToggleGroupPage()),
      ComponentItem('Tooltip', Icons.help_outline, () => const TooltipPage()),
      ComponentItem('Typography', Icons.text_format, () => const TypographyPage()),
    ];

    return Scaffold(
      appBar: AppBar(
        title: const Text('Galaxy UI Showcase'),
        elevation: 0,
      ),
      body: ListView.builder(
        itemCount: components.length,
        itemBuilder: (context, index) {
          final component = components[index];
          return ListTile(
            leading: Icon(component.icon),
            title: Text(component.name),
            trailing: const Icon(Icons.chevron_right),
            onTap: () {
              Navigator.push(
                context,
                MaterialPageRoute(builder: (_) => component.builder()),
              );
            },
          );
        },
      ),
    );
  }
}

class ComponentItem {
  final String name;
  final IconData icon;
  final Widget Function() builder;

  ComponentItem(this.name, this.icon, this.builder);
}
