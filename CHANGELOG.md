# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

---

## [0.2.0] - 2025-11-04 - Blocks System 🧩

### 🎉 Major Features

**Blocks System Added**

Galaxy UI CLI now supports **Blocks** - composite UI patterns built from base components, similar to shadcn/ui blocks!

- ✅ **5 Web Blocks**: Chat UI, Sidebar, Authentication, Email Client, Featured Sections
- ✅ **3 Mobile Blocks**: Chat UI (Mobile), Drawer Navigation, Authentication (Mobile)
- ✅ **Multi-Framework Support**: Vue, React, Angular, React Native, Flutter
- ✅ **CLI Integration**: `galaxy-ui-cli add chat-ui`, `galaxy-ui-cli add sidebar`
- ✅ **Comprehensive Documentation**: Web/Mobile separation with preview, code, and install tabs

### ✨ New Blocks

#### Web Blocks (Vue + React + Angular)

1. **Chat UI Block**
   - Complete chat interface with message list, input, user avatars
   - Auto-scroll to latest message
   - Timestamp formatting
   - Avatar with fallback initials
   - 6 files: types.ts, ChatMessage, MessageList, MessageInput, ChatUI, index

2. **Sidebar Block**
   - Collapsible sidebar with smooth animations
   - Nested menu items support
   - Badge notifications
   - Icon support (emoji or custom components)
   - 4 files: types.ts, Sidebar, SidebarItem, index

3. **Authentication Block**
   - Login form with email/password validation
   - Register form with password confirmation
   - Combined AuthForm with mode switching
   - Social login buttons (Google, GitHub)
   - Loading states and error handling
   - 5 files: types.ts, LoginForm, RegisterForm, AuthForm, index

4. **Email Client Block**
   - Three-column Gmail-like layout (folders, list, reading pane)
   - Search functionality
   - Email actions (star, archive, delete)
   - Smart date formatting (5m ago, Yesterday, etc.)
   - 3 files: types.ts, EmailClient, index

5. **Featured Sections Block**
   - Hero section with 4 variants (default, centered, split, cards)
   - Features grid with 2/3/4 column layouts
   - CTA buttons with primary/secondary actions
   - Image support
   - 4 files: types.ts, HeroSection, FeaturedSection, index

#### Mobile Blocks (React Native + Flutter)

1. **Chat UI (Mobile)**
   - KeyboardAvoidingView for iOS/Android
   - 48x48px minimum touch targets
   - Native ScrollView with auto-scroll
   - Platform-specific behavior
   - StyleSheet optimization

2. **Drawer Navigation**
   - SafeAreaView for notch support
   - Active state styling
   - Badge support
   - Swipe gestures (platform-native)

3. **Authentication (Mobile)**
   - Native TextInput with keyboard types
   - Platform-specific KeyboardAvoidingView
   - Custom checkbox implementation
   - ActivityIndicator for loading
   - Biometric auth ready

### 🔧 CLI Improvements

**Block Registry System**
- ✅ Created `blocks-vue.json`, `blocks-react.json`, `blocks-angular.json`, `blocks-react-native.json`, `blocks-flutter.json`
- ✅ Extended `FrameworkComponent` interface with 'block' type
- ✅ Modified `loadFrameworkRegistry` to merge blocks registries
- ✅ Updated `add` command to detect block vs component type

**File Structure**
- ✅ Blocks installed to `blocks/` directory (components to `components/`)
- ✅ Auto-detection of source folder based on type
- ✅ Registry dependencies properly resolved

### 📚 Documentation

**VitePress Integration**
- ✅ New `/blocks` menu in header (alongside Guide, Components, Charts)
- ✅ Separated Web Blocks and Mobile Blocks in sidebar
- ✅ Created `BlockPreview.vue` component with Preview/Code tabs
- ✅ Framework selector for multi-framework code examples
- ✅ Copy-to-clipboard for install commands and code

**Documentation Pages** (11 pages total)
- ✅ `blocks/overview.md` - Complete blocks guide
- ✅ `blocks/web/chat-ui.md` - Chat UI documentation
- ✅ `blocks/web/sidebar.md` - Sidebar documentation
- ✅ `blocks/web/authentication.md` - Authentication documentation
- ✅ `blocks/web/email.md` - Email Client documentation
- ✅ `blocks/web/featured.md` - Featured Sections documentation
- ✅ `blocks/mobile/chat-ui.md` - Mobile Chat UI documentation
- ✅ `blocks/mobile/sidebar.md` - Mobile Drawer documentation
- ✅ `blocks/mobile/authentication.md` - Mobile Auth documentation

**Documentation Features**
- Live preview sections
- Code examples for all supported frameworks
- Props tables with full type information
- Advanced usage examples
- Platform availability indicators
- Mobile-specific considerations

### 📦 Statistics

**Total Blocks Created**: 8 blocks across 5 frameworks

| Block | Vue | React | Angular | React Native | Flutter | Total Files |
|-------|-----|-------|---------|--------------|---------|-------------|
| Chat UI | ✅ 6 | ✅ 6 | ✅ 3 | ✅ 3 | ✅ 3 | 21 |
| Sidebar | ✅ 4 | ✅ 4 | ✅ 3 | - | - | 11 |
| Drawer | - | - | - | ✅ 3 | ✅ 2 | 5 |
| Authentication | ✅ 5 | ✅ 5 | ✅ 2 | ✅ 3 | ✅ 2 | 17 |
| Email | ✅ 3 | ✅ 3 | ✅ 2 | - | - | 8 |
| Featured | ✅ 4 | ✅ 4 | ✅ 2 | - | - | 10 |

**Total: 72 files created** across 8 blocks and 5 platforms

### 🎯 Key Features

**Blocks vs Components**
- **Components**: Atomic UI elements (Button, Input, Card)
- **Blocks**: Composite patterns (Chat UI, Authentication flows, Email clients)
- Blocks use components as building blocks
- Components are dependencies of blocks

**Web vs Mobile Separation**
- Clear documentation separation for different form factors
- Web blocks: Vue, React, Angular
- Mobile blocks: React Native, Flutter
- Mobile-optimized patterns (48x48 touch targets, native keyboards, gesture support)

**Copy-Paste Philosophy**
- Blocks copied directly into your project
- Full code ownership and customization
- All dependencies installed automatically
- No runtime overhead

### 🚀 Usage Examples

```bash
# Install a web block (auto-detects Vue/React/Angular)
npx galaxy-ui-cli add chat-ui
npx galaxy-ui-cli add sidebar
npx galaxy-ui-cli add authentication

# Install a mobile block (auto-detects React Native/Flutter)
npx galaxy-ui-cli add chat-ui
npx galaxy-ui-cli add drawer
```

### 💡 Breaking Changes

**None** - All changes are additive and backward compatible with existing component system.

---

## [1.1.0] - 2025-11-03 - Mobile Support Complete 🚀📱

### 🎉 Major Features

**Mobile Platform Support Added**

Galaxy UI CLI now supports **React Native** and **Flutter** with complete component libraries!

- ✅ **React Native**: 37 components with NativeWind v4 styling
- ✅ **Flutter**: 37 components with Material Design 3
- ✅ **100% Practical Coverage**: All mobile-suitable components implemented
- ✅ **Unified API**: Consistent API across both mobile platforms
- ✅ **CLI Integration**: Automatic platform detection and mobile support

### ✨ New Components (7 components × 2 platforms = 14 implementations)

#### 1. Badge Component
- **Flutter**: Badge variants (default, secondary, destructive, outline)
- Count badge with max limit (shows "99+")
- Positioned badge wrapper for icons/buttons

#### 2. Sheet Component (React Native + Flutter)
- Multi-directional support (top, bottom, left, right)
- Bottom sheet optimized for mobile
- Dismissible with drag-to-close gesture
- Header, body, footer sections

#### 3. Date Picker Component (React Native + Flutter) - Unified API ⭐
- Single date selection
- Date range selection
- Native pickers (@react-native-community/datetimepicker, showDatePicker)
- Unified props: `selected`, `onChanged`, `minDate`, `maxDate`, `format`
- Custom placeholder and headers

#### 4. Navigation Menu Component (React Native + Flutter) - Unified API ⭐
- Bottom Navigation (default, mobile-first)
- Drawer Navigation (side menu)
- Icon + label + badge support
- Disabled state for items
- Unified props: `items`, `selectedId`, `onSelect`

#### 5. Pagination Component (React Native + Flutter) - Unified API ⭐
- 3 variants: `compact`, `full`, `loadMore`
- Smart ellipsis for compact mode
- Configurable visible pages
- Load more with loading state
- Mobile-optimized touch targets (48x48)

#### 6. Empty Component (React Native + Flutter) - Unified API ⭐
- 5 presets: `noData`, `noResults`, `error`, `offline`, `emptyList`
- Icon + Title + Description + Action button pattern
- Factory methods for common use cases
- Center-aligned mobile-first layout

#### 7. Typography Component (React Native + Flutter) - Unified API ⭐
- 11 variants: h1, h2, h3, h4, p, lead, large, small, muted, blockquote, code
- 4 weight options: normal, medium, semiBold, bold
- Special styling for blockquote (left border) and code (background)
- Factory methods: `Typography.h1()`, `Typography.p()`, etc.

### 🔧 CLI Improvements

**Platform Detection**
- ✅ React Native detection (via `react-native` dependency + ios/android dirs)
- ✅ Flutter detection (via `pubspec.yaml`)
- ✅ Package manager detection: added `pub` for Flutter
- ✅ Confidence-based detection with evidence tracking

**Component Registry System**
- ✅ Created `registry-react-native.json` (37 components, 6 categories)
- ✅ Created `registry-flutter.json` (37 components, 6 categories)
- ✅ Platform-specific registry loading
- ✅ Component metadata with files, dependencies, exports

**Utility Functions**
- ✅ `platform-detector.ts` - Auto-detect project platform
- ✅ `registry-loader.ts` - Load and query registries
- ✅ `component-copier.ts` - Copy components with validation

**Init Command Updates**
- ✅ React Native support (skip TypeScript prompt, NativeWind setup)
- ✅ Flutter support (Dart-specific config, no TypeScript)
- ✅ Mobile-specific directory structure
- ✅ Framework-specific dependency installation

**Add Command Updates**
- ✅ Platform-aware file copying (.tsx for RN, .dart for Flutter)
- ✅ Target directory detection (src/components for RN, lib/components for Flutter)
- ✅ Dependency validation before copying

### 🧹 Code Cleanup

**Component Unification**
- ✅ Removed redundant "text" component from React Native
- ✅ Typography component replaces "text" with 11 variants
- ✅ Perfect parity: Both platforms now have exactly **37 components**

### 📦 Mobile Registries

**React Native Registry** (37 components):
- **Form** (12): button, checkbox, date-picker, input, label, radio-group, select, slider, switch, textarea, toggle, toggle-group
- **Layout** (5): accordion, aspect-ratio, card, collapsible, separator
- **Navigation** (4): menubar, navigation-menu, pagination, tabs
- **Data Display** (5): avatar, badge, empty, table, typography
- **Overlay** (8): alert-dialog, context-menu, dialog, dropdown-menu, hover-card, popover, sheet, tooltip
- **Feedback** (3): alert, progress, skeleton

**Flutter Registry** (37 components):
- Same 37 components as React Native
- Dart-specific naming (snake_case files, `Galaxy` prefix for classes)
- Material Design theming integration

### 📊 Coverage Statistics

| Platform | Total Components | Practical Coverage | Status |
|----------|-----------------|-------------------|--------|
| **React Native** | 37/41 (90%) | 37/37 (100%) | ✅ Complete |
| **Flutter** | 37/41 (90%) | 37/37 (100%) | ✅ Complete |
| **Vue** | 41/41 (100%) | 41/41 (100%) | ✅ Complete |
| **React** | 41/41 (100%) | 41/41 (100%) | ✅ Complete |
| **Angular** | 41/41 (100%) | 41/41 (100%) | ✅ Complete |

**Total: 5 platforms, 197 components, 100% functional** 🎉

### 🚀 Example Applications

**React Native Example** (`/examples/react-native-example/`)
- ✅ 37 screen examples showcasing all components
- ✅ Complete package.json with dependencies
- ✅ Pre-configured components.json
- ✅ Comprehensive README with setup guide
- ✅ Setup script for generating all screens

**Flutter Example** (`/examples/flutter-example/`)
- ✅ 37 page examples showcasing all components
- ✅ Complete pubspec.yaml configuration
- ✅ Pre-configured components.json
- ✅ Comprehensive README with Dart examples
- ✅ Setup script for generating all pages

### 📚 Documentation

**New Documentation Files**:
- ✅ `CLI_MOBILE_INTEGRATION_COMPLETE.md` - Complete CLI integration guide
- ✅ `MOBILE_REGISTRIES_COMPLETE.md` - Registry system documentation
- ✅ `SESSION_SUMMARY_2025_11_03.md` - Complete implementation session summary
- ✅ `CLEANUP_TEXT_COMPONENT.md` - Component unification rationale
- ✅ `QUICK_REFERENCE.md` - Quick reference for mobile components

### 🎯 Key Technical Decisions

**Mobile-First Design**
- Default to mobile patterns (bottom navigation, native pickers)
- Touch-optimized sizes (48x48 minimum touch targets)
- Native platform capabilities over custom implementations

**Unified API Philosophy**
- Same prop names across platforms (`selected`/`onChanged`, `currentPage`/`totalPages`)
- Same enums/types (TypeScript enums ↔ Dart enums)
- Same factory methods (`.noData()`, `.h1()`, `.compact()`)
- Platform-specific implementations under unified interface

**Platform-Specific Adaptations**
- **React Native**: NativeWind v4, native DateTimePicker, Modal + ScrollView
- **Flutter**: Material Design 3, showDatePicker, BottomNavigationBar, showModalBottomSheet

### 🧪 Testing & Validation

**CLI Testing**
- ✅ All tests passed in `test-simple.cjs`
- ✅ Registry loading verified (37 components each)
- ✅ Platform detection working correctly
- ✅ Component copying validated

**Build System**
- ✅ Zero build errors
- ✅ TypeScript strict mode enabled
- ✅ Fast build times (~164ms for CLI)

### 📝 Migration Guide

**For Existing React Native Projects**:
1. Run `npx galaxy-ui-cli@latest init` to detect React Native
2. Choose your preferences (Tailwind config, icon library)
3. Add components: `npx galaxy-ui-cli@latest add button input card`
4. Components copied to `src/components/` or `components/`

**For Existing Flutter Projects**:
1. Run `galaxy-ui-cli init` to detect Flutter
2. Choose your preferences (base color, theme options)
3. Add components: `galaxy-ui-cli add button input card`
4. Components copied to `lib/components/`

### 💡 Breaking Changes

**None** - All changes are additive and backward compatible with existing web framework support.

### 🔗 Related Links

- Documentation: https://galaxy-ui-cli.vercel.app
- GitHub: https://github.com/buikevin/galaxy-ui-cli
- npm: https://www.npmjs.com/package/galaxy-ui-cli

---

## [1.0.0] - 2025-10-30

### ✨ Features

**Angular Components - Complete Radix NG Integration** (21/21 components refactored)

*All Angular components have been refactored to use `@radix-ng/primitives` for proper accessibility and state management.*

**Form Components (8):**
1. **Button** - RdxPrimitiveDirective for flexible rendering with asChild pattern
2. **Label** - RdxLabelDirective for proper form associations and accessibility
3. **Checkbox** - RdxCheckboxRootDirective + RdxCheckboxIndicatorDirective with indeterminate state
4. **Select** - Complete integration with 9 Radix directives (Root, Trigger, Value, Content, Viewport, Item, etc.)
5. **Switch** - RdxSwitchRootDirective + RdxSwitchThumbDirective with smooth animations
6. **Slider** - RdxSliderRootDirective + Track, Range, Thumb directives
7. **Radio Group** - RdxRadioGroupRootDirective + RdxRadioGroupItemDirective
8. **Separator** - RdxSeparatorDirective for horizontal/vertical dividers

**Layout Components (3):**
9. **Tabs** - RdxTabsRootDirective + List, Trigger, Content directives with data-[state] styling
10. **Accordion** - RdxAccordionRootDirective + Item, Trigger, Content directives
11. **Collapsible** - RdxCollapsibleRootDirective + Trigger, Content directives

**Navigation Components (4):**
12. **Dropdown Menu** - 5 sub-components with Root, Trigger, Content, Item, Separator directives
13. **Hover Card** - RdxHoverCardRootDirective with openDelay/closeDelay support
14. **Menubar** - 5 sub-components with Root, Trigger, Content, Item, Separator directives
15. **Navigation Menu** - 8 sub-components including Root, List, Item, Trigger, Content, Link, Viewport, Indicator

**Modal & Overlay Components (5):**
16. **Tooltip** - RdxTooltipRootDirective + Trigger, Content, Arrow with portal support
17. **Dialog** - 5 sub-components with Portal, Overlay, Content, Title, Description directives
18. **Popover** - RdxPopoverRootDirective + Trigger, Content, Arrow with positioning
19. **Alert Dialog** - 8 sub-components with full accessibility support
20. **Context Menu** - 4 sub-components with Root, Trigger, Content, Item directives

**Other Components (1):**
21. **Avatar** - RdxAvatarRootDirective + Image, Fallback with automatic fallback handling

**Key Improvements:**
- Automatic WAI-ARIA attributes for all interactive components
- Proper keyboard navigation (Tab, Arrow keys, Enter, Escape)
- Enhanced screen reader support with live regions
- data-[state] and data-[disabled] CSS selectors for dynamic styling
- Automatic focus management and focus trap for modals
- Portal support for overlays (tooltips, popovers, dialogs)
- Collision detection and positioning for floating elements
- OnPush change detection strategy for performance

**Note:** Input and Textarea components don't use Radix primitives as they're native HTML form controls with proper ControlValueAccessor implementation.

### 🐛 Bug Fixes

**CLI Tool Improvements**
- Fixed `files.ts` not being compiled during build
- Fixed package manager detection to properly use full bun path (`~/.bun/bin/bun`)
- Fixed `installDependencies` function signature in init.ts and add.ts
- Fixed component file copying to read from actual source packages instead of placeholders
- Fixed registry configurations to include all component files (main component, variants.ts, index.ts)
- Fixed case-sensitive file name detection (Button.vue vs button.vue)
- Added `@radix-ng/primitives` as dependency for Angular init command

**Package Manager Support**
- Enhanced bun detection to check multiple possible paths
- Proper bun path resolution in `package-manager.ts`
- Fixed command execution to use full executable paths

**Component Registry**
- Updated Vue registry to include Button.vue, variants.ts, and index.ts
- Updated React registry to include Button.tsx, variants.ts, and index.ts
- Updated Angular registry to include button.component.ts, variants.ts, and index.ts
- Added Label component to Angular registry
- Updated all Angular components to declare `@radix-ng/primitives` dependency

### ✅ Testing Completed

**Vue Example**
- ✅ CLI init command working
- ✅ CLI add command successfully copies components
- ✅ Button component with all 3 files (Button.vue, variants.ts, index.ts)
- ✅ Input component copied successfully
- ✅ Dependencies installed automatically

**React Example**
- ✅ CLI init command working
- ✅ CLI add command successfully copies components
- ✅ Button component with all 3 files (Button.tsx, variants.ts, index.ts)
- ✅ Input component copied successfully
- ✅ Dependencies installed automatically

**Angular Example**
- ✅ CLI init command working (with @radix-ng/primitives)
- ✅ CLI add command successfully copies components
- ✅ Button component with all 3 files (button.component.ts, variants.ts, index.ts)
- ✅ Label, Checkbox components with Radix NG integration
- ✅ Select component with full Radix NG primitives
- ✅ Dependencies (@radix-ng/primitives) installed automatically

## [1.0.0] - 2025-10-30

### 🎉 Initial Release

Complete multi-framework component library with Vue, React, and Angular support.

### ✨ Features

#### Multi-Framework Support
- **23 Production-Ready Components** across all 3 frameworks
- **Vue 3** - Composition API with `<script setup>`
- **React 18+** - Hooks with forwardRef pattern
- **Angular 20** - Standalone components with Signals

#### Component Library
**Form Components (9)**
- Button, Label, Input, Checkbox, Radio Group, Switch, Select, Slider, Textarea

**Layout Components (4)**
- Separator, Tabs, Accordion, Collapsible

**Navigation Components (7)**
- Context Menu, Dropdown Menu, Hover Card, Menubar, Navigation Menu, Popover, Tooltip

**Modal & Overlay Components (2)**
- Alert Dialog, Dialog

**Other Components (1)**
- Avatar

#### CLI Tool
- **`galaxy-ui init`** - Framework auto-detection, dependency installation
- **`galaxy-ui add`** - Component installation with registry system
- **Framework Support** - Vue, React, Angular detection from package.json
- **Package Manager Support** - npm, pnpm, yarn, bun detection

#### Design System
- **Radix Primitives** - Accessible components for Vue and React
- **Radix NG** - Angular primitives integration
- **Tailwind CSS** - Utility-first styling with full customization
- **Dark Mode** - First-class dark theme support
- **TypeScript** - Full type safety across all frameworks

#### Documentation
- **VitePress** - Modern documentation site
- **Bilingual** - English and Vietnamese support
- **46 Pages** - Complete component documentation (23 EN + 23 VI)
- **Usage Examples** - Code samples for all 3 frameworks

### 📦 Packages

- `@galaxy-ui/vue` - 23 Vue 3 components
- `@galaxy-ui/react` - 23 React components
- `@galaxy-ui/angular` - 23 Angular components
- `@galaxy-ui/cli` - CLI tool (init, add commands)
- `@galaxy-ui/core` - Shared utilities
- `@galaxy-ui/tailwind-preset` - Tailwind configuration

### 🏗️ Architecture

**Monorepo Structure**
- Nx workspace with Bun package manager
- TypeScript strict mode
- ESLint + Prettier configuration
- Consistent build and test setup

**Component Patterns**
- Radix primitives for accessibility
- Class Variance Authority (CVA) for variants
- `cn()` utility for className merging
- Framework-specific registries

### 📊 Statistics

- **Components**: 23 Tier-1 components
- **Implementations**: 69 (23 × 3 frameworks)
- **Code**: ~11,000 lines
- **Documentation**: 46 pages
- **Files Created**: 210+

### 🎯 Philosophy

**Copy-Paste Components**
- Components copied directly into projects
- Full code ownership
- No npm dependencies for components
- Complete customization control

**Developer Experience**
- Framework auto-detection
- Type-safe with full TypeScript support
- Consistent API across frameworks
- Beautiful terminal UI

**Accessibility**
- WAI-ARIA compliant
- Keyboard navigation
- Screen reader support
- Built on Radix primitives

### 💡 Inspiration

- **[shadcn/ui](https://ui.shadcn.com/)** - Copy-paste philosophy
- **[shadcn-vue](https://www.shadcn-vue.com/)** - Vue implementation
- **[Radix UI](https://www.radix-ui.com/)** - Accessible primitives
- **[Radix Vue](https://www.radix-vue.com/)** - Vue primitives
- **[Radix NG](https://github.com/radix-ng/primitives)** - Angular primitives

### 🔧 Technical Stack

- **Vue 3.5** - Composition API, `<script setup>`
- **React 18** - Hooks, forwardRef
- **Angular 20** - Standalone components, Signals
- **TypeScript 5.9** - Strict mode
- **Tailwind CSS 3.4** - Utility-first styling
- **VitePress** - Documentation framework
- **Nx** - Monorepo tooling
- **Bun** - Package manager

### 📄 License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)

### 👤 Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

### 🔗 Links

- **Repository**: https://github.com/buikevin/galaxy-ui-cli
- **Documentation**: [Coming Soon]
- **npm Package**: [Coming Soon]

---

**Built with ❤️ using Vue, React, Angular, TypeScript, and Tailwind CSS**
