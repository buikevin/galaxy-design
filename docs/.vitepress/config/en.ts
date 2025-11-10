import { defineConfig, type DefaultTheme } from 'vitepress';

export const en = defineConfig({
  description:
    'Beautiful, accessible components for Vue, React, Angular, React Native, and Flutter - from web to mobile',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/components/': { base: '/components/', items: sidebarComponents() },
      '/charts/': { base: '/charts/', items: sidebarCharts() },
      '/blocks/': { base: '/blocks/', items: sidebarBlocks() },
    },

    editLink: {
      pattern: 'https://github.com/buikevin/galaxy-design/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2025 Bùi Trọng Hiếu (kevinbui)',
    },

    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },

    outline: {
      label: 'On this page',
    },

    lastUpdated: {
      text: 'Last updated',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'short',
      },
    },

    langMenuLabel: 'Change language',
    returnToTopLabel: 'Return to top',
    sidebarMenuLabel: 'Menu',
    darkModeSwitchLabel: 'Appearance',
    lightModeSwitchTitle: 'Switch to light mode',
    darkModeSwitchTitle: 'Switch to dark mode',
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guide',
      link: '/guide/introduction',
      activeMatch: '/guide/',
    },
    {
      text: 'Components',
      link: '/components/overview',
      activeMatch: '/components/',
    },
    {
      text: 'Charts',
      link: '/charts/overview',
      activeMatch: '/charts/',
    },
    {
      text: 'Blocks',
      link: '/blocks/overview',
      activeMatch: '/blocks/',
    },
    {
      text: 'v0.2.0',
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/buikevin/galaxy-design/blob/main/CHANGELOG.md',
        },
        {
          text: 'Contributing',
          link: '/guide/contributing',
        },
      ],
    },
  ];
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [
        { text: 'Introduction', link: 'introduction' },
        { text: 'Installation', link: 'installation' },
        { text: 'CLI Usage', link: 'cli-usage' },
        { text: 'Configuration', link: 'configuration' },
      ],
    },
    {
      text: 'Frameworks',
      collapsed: false,
      items: [
        { text: 'Vue', link: 'frameworks/vue' },
        { text: 'React', link: 'frameworks/react' },
        { text: 'Angular', link: 'frameworks/angular' },
        { text: 'React Native', link: 'frameworks/react-native' },
        { text: 'Flutter', link: 'frameworks/flutter' },
      ],
    },
    {
      text: 'Customization',
      collapsed: false,
      items: [
        { text: 'Theming', link: 'theming' },
        { text: 'Dark Mode', link: 'dark-mode' },
        { text: 'Tailwind Config', link: 'tailwind' },
      ],
    },
  ];
}

function sidebarComponents(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [{ text: 'Overview', link: 'overview' }],
    },
    {
      text: 'Form Components',
      collapsed: false,
      items: [
        { text: 'Button', link: 'button' },
        { text: 'Checkbox', link: 'checkbox' },
        { text: 'Input', link: 'input' },
        { text: 'Label', link: 'label' },
        { text: 'Radio Group', link: 'radio-group' },
        { text: 'Select', link: 'select' },
        { text: 'Slider', link: 'slider' },
        { text: 'Switch', link: 'switch' },
        { text: 'Tags Input', link: 'tags-input' },
        { text: 'Textarea', link: 'textarea' },
        { text: 'Toggle', link: 'toggle' },
        { text: 'Toggle Group', link: 'toggle-group' },
      ],
    },
    {
      text: 'Layout Components',
      collapsed: false,
      items: [
        { text: 'Accordion', link: 'accordion' },
        { text: 'Aspect Ratio', link: 'aspect-ratio' },
        { text: 'Collapsible', link: 'collapsible' },
        { text: 'Resizable', link: 'resizable' },
        { text: 'Scroll Area', link: 'scroll-area' },
        { text: 'Separator', link: 'separator' },
        { text: 'Tabs', link: 'tabs' },
      ],
    },
    {
      text: 'Navigation Components',
      collapsed: false,
      items: [
        { text: 'Command (Web Only)', link: 'command' },
        { text: 'Context Menu (Web Only)', link: 'context-menu' },
        { text: 'Dropdown Menu', link: 'dropdown-menu' },
        { text: 'Hover Card (Web Only)', link: 'hover-card' },
        { text: 'Menubar (Web Only)', link: 'menubar' },
        { text: 'Navigation Menu', link: 'navigation-menu' },
        { text: 'Popover', link: 'popover' },
        { text: 'Sheet', link: 'sheet' },
        { text: 'Tooltip', link: 'tooltip' },
      ],
    },
    {
      text: 'Feedback Components',
      collapsed: false,
      items: [
        { text: 'Alert Dialog', link: 'alert-dialog' },
        { text: 'Dialog', link: 'dialog' },
        { text: 'Progress', link: 'progress' },
      ],
    },
    {
      text: 'Data Display',
      collapsed: false,
      items: [
        { text: 'Avatar', link: 'avatar' },
        { text: 'Empty', link: 'empty' },
        { text: 'Pagination', link: 'pagination' },
        { text: 'Skeleton', link: 'skeleton' },
        { text: 'Table', link: 'table' },
        { text: 'Toolbar', link: 'toolbar' },
      ],
    },
    {
      text: 'Date & Time',
      collapsed: false,
      items: [
        { text: 'Calendar', link: 'calendar' },
        { text: 'Calendar Range', link: 'calendar-range' },
      ],
    },
    {
      text: 'Typography',
      collapsed: false,
      items: [
        { text: 'Kbd', link: 'kbd' },
        { text: 'Typography', link: 'typography' },
      ],
    },
  ];
}

function sidebarCharts(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [{ text: 'Overview', link: 'overview' }],
    },
    {
      text: 'Chart Components',
      collapsed: false,
      items: [
        { text: 'Line Chart', link: 'line-chart' },
        { text: 'Bar Chart', link: 'bar-chart' },
        { text: 'Pie Chart', link: 'pie-chart' },
        { text: 'Donut Chart', link: '/charts/donut-chart' },
        { text: 'Area Chart', link: 'area-chart' },
        { text: 'Radar Chart', link: 'radar-chart' },
        { text: 'Scatter Chart', link: 'scatter-chart' },
        { text: 'Mixed Chart', link: '/charts/mixed-chart' },
        { text: 'Gauge Chart', link: 'gauge-chart' },
      ],
    },
  ];
}

function sidebarBlocks(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Getting Started',
      collapsed: false,
      items: [{ text: 'Overview', link: 'overview' }],
    },
    {
      text: 'Web Blocks',
      collapsed: false,
      items: [
        { text: 'Chat UI', link: 'web/chat-ui' },
        { text: 'Sidebar', link: 'web/sidebar' },
        { text: 'Authentication', link: 'web/authentication' },
        { text: 'Email Client', link: 'web/email' },
        { text: 'Featured Sections', link: 'web/featured' },
      ],
    },
    {
      text: 'Mobile Blocks',
      collapsed: false,
      items: [
        { text: 'Chat UI (Mobile)', link: 'mobile/chat-ui' },
        { text: 'Drawer Navigation', link: 'mobile/sidebar' },
        { text: 'Authentication (Mobile)', link: 'mobile/authentication' },
      ],
    },
  ];
}
