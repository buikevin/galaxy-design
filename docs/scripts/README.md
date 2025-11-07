# Documentation Generation Scripts

Công cụ tự động tạo documentation chuẩn hóa và song ngữ (English/Vietnamese) cho các components của Galaxy UI CLI.

## 🎯 Mục tiêu

- **Chuẩn hóa format docs** cho tất cả components
- **Hỗ trợ song ngữ** (EN/VI) tự động
- **Dễ dàng bảo trì** và mở rộng
- **Tự động hóa** việc tạo docs

## 📁 File Structure

```
docs/scripts/
├── README.md                      # Hướng dẫn này
├── component-configs.ts           # Config components (bilingual)
├── generate-docs-bilingual.ts     # Script chính để generate docs
└── generate-component-docs.ts     # Script cũ (deprecated)
```

## 🚀 Quick Start

### 1. Generate docs cho 1 component

```bash
cd /path/to/galaxy-ui-cli
bun run docs/scripts/generate-docs-bilingual.ts button
```

### 2. Generate docs cho tất cả components

```bash
bun run docs/scripts/generate-docs-bilingual.ts --all
```

### 3. Xem danh sách components có sẵn

```bash
bun run docs/scripts/generate-docs-bilingual.ts --list
```

### 4. Xem hướng dẫn

```bash
bun run docs/scripts/generate-docs-bilingual.ts --help
```

## 📝 Thêm Component Mới

### Bước 1: Thêm config vào `component-configs.ts`

```typescript
export const COMPONENT_CONFIGS: Record<string, ComponentConfig> = {
  // ... existing configs

  'new-component': {
    name: 'new-component',
    description: {
      en: 'English description',
      vi: 'Mô tả tiếng Việt'
    },
    hasSubcomponents: false, // hoặc true nếu có subcomponents
    dependencies: {
      react: ['@radix-ui/react-*'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'variant',
        type: "'default' | 'primary'",
        default: "'default'",
        description: {
          en: 'Visual variant',
          vi: 'Biến thể hiển thị'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Space/Enter to activate',
        vi: 'Space/Enter để kích hoạt'
      },
      screenReader: {
        en: 'Uses semantic HTML',
        vi: 'Sử dụng HTML ngữ nghĩa'
      },
      focus: {
        en: 'Focus visible',
        vi: 'Focus được hiển thị'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA',
        vi: 'Tuân thủ WCAG 2.1 cấp AA'
      }
    }
  }
}
```

### Bước 2: Generate docs

```bash
bun run docs/scripts/generate-docs-bilingual.ts new-component
```

### Bước 3: Kiểm tra kết quả

Docs sẽ được tạo tại:
- `docs/components/new-component.md` (English)
- `docs/vi/components/new-component.md` (Vietnamese)

## 📋 Component Config Structure

### Required Fields

| Field | Type | Description |
|-------|------|-------------|
| `name` | string | Tên component (kebab-case) |
| `description` | {en, vi} | Mô tả component |
| `hasSubcomponents` | boolean | Component có subcomponents không |
| `dependencies` | object | Dependencies cho từng framework |
| `props` | array | Danh sách props |
| `hasAccessibilityInfo` | boolean | Có thông tin accessibility không |

### Optional Fields

| Field | Type | Description |
|-------|------|-------------|
| `subcomponents` | array | Danh sách subcomponents (nếu có) |
| `accessibilityInfo` | object | Thông tin về accessibility |
| `examples` | array | Các ví dụ sử dụng |

## 📖 Documentation Template Format

Mỗi component docs sẽ có các phần sau (theo thứ tự):

1. **Title & Description** - Tiêu đề và mô tả ngắn
2. **Preview** - Preview component với code examples (React, Vue, Angular)
3. **Installation** - Hướng dẫn cài đặt (npm, pnpm, yarn, bun, global)
4. **Dependencies** - Dependencies tự động cài đặt
5. **Usage** - Cách sử dụng cơ bản
6. **API Reference** - Props và API
7. **Subcomponents** - Các subcomponents (nếu có)
8. **Accessibility** - Thông tin accessibility
9. **Author** - Thông tin tác giả
10. **License** - Giấy phép

## 🎨 Customization

### Thay đổi Template Strings

Edit file `component-configs.ts`, section `TEMPLATES`:

```typescript
export const TEMPLATES = {
  en: {
    installation: {
      title: 'Installation',
      // ... more strings
    },
    // ... more sections
  },
  vi: {
    installation: {
      title: 'Cài đặt',
      // ... more strings
    },
    // ... more sections
  }
};
```

### Thêm Section Mới

1. Thêm template string vào `TEMPLATES`
2. Tạo function `generate{SectionName}Section()` trong `generate-docs-bilingual.ts`
3. Thêm section vào hàm `generateComponentDoc()`

## ⚡ Tips & Best Practices

### 1. Naming Convention

- **Component name**: kebab-case (e.g., `button`, `dialog-content`)
- **PascalCase** sẽ được tự động generate (e.g., `Button`, `DialogContent`)

### 2. Props Framework Support

- `'all'`: Tất cả frameworks
- `'react,vue'`: Chỉ React và Vue
- `'react'`: Chỉ React
- `'vue'`: Chỉ Vue
- `'angular'`: Chỉ Angular

### 3. Dependencies

Chỉ list dependencies chính, không cần list:
- `lucide-react`, `lucide-vue-next`, `lucide-angular` (tự động)
- `clsx`, `tailwind-merge` (cơ bản)
- `class-variance-authority` (chỉ khi component có variants)

### 4. Accessibility Info

Luôn thêm accessibility info cho các component:
- **keyboard**: Phím tắt và navigation
- **screenReader**: ARIA labels và roles
- **focus**: Quản lý focus
- **wcag**: Mức độ tuân thủ WCAG

## 🔍 Examples

### Simple Component (No Subcomponents)

```typescript
'badge': {
  name: 'badge',
  description: {
    en: 'A small badge component',
    vi: 'Component huy hiệu nhỏ'
  },
  hasSubcomponents: false,
  dependencies: {
    react: ['class-variance-authority'],
    vue: ['class-variance-authority'],
    angular: ['class-variance-authority']
  },
  props: [
    {
      name: 'variant',
      type: "'default' | 'secondary'",
      default: "'default'",
      description: {
        en: 'Badge variant',
        vi: 'Biến thể badge'
      },
      frameworks: 'all'
    }
  ],
  hasAccessibilityInfo: false
}
```

### Complex Component (With Subcomponents)

```typescript
'dialog': {
  name: 'dialog',
  description: {
    en: 'A modal dialog window',
    vi: 'Cửa sổ dialog modal'
  },
  hasSubcomponents: true,
  subcomponents: [
    {
      name: 'DialogTrigger',
      description: {
        en: 'Trigger button',
        vi: 'Nút kích hoạt'
      }
    },
    {
      name: 'DialogContent',
      description: {
        en: 'Content container',
        vi: 'Container nội dung'
      }
    }
  ],
  dependencies: {
    react: ['@radix-ui/react-dialog'],
    vue: ['radix-vue'],
    angular: ['@radix-ng/primitives']
  },
  props: [
    {
      name: 'open',
      type: 'boolean',
      default: 'false',
      description: {
        en: 'Dialog open state',
        vi: 'Trạng thái mở dialog'
      },
      frameworks: 'all'
    }
  ],
  hasAccessibilityInfo: true,
  accessibilityInfo: {
    keyboard: {
      en: 'Escape to close',
      vi: 'Escape để đóng'
    },
    screenReader: {
      en: 'Uses dialog role',
      vi: 'Sử dụng role dialog'
    },
    focus: {
      en: 'Focus trapped',
      vi: 'Focus bị giữ'
    },
    wcag: {
      en: 'WCAG 2.1 Level AA',
      vi: 'Tuân thủ WCAG 2.1 cấp AA'
    }
  }
}
```

## 📊 Component Status

### Currently Configured (5 components)

- ✅ button
- ✅ accordion
- ✅ dialog
- ✅ input
- ✅ select

### To Be Added (36 components)

Cần thêm config cho các components sau:

**Form Components (4)**
- checkbox
- radio-group
- slider
- switch
- textarea
- label

**Layout Components (4)**
- separator
- collapsible
- tabs

**Navigation Components (4)**
- navigation-menu
- menubar
- context-menu
- dropdown-menu

**Overlay Components (3)**
- alert-dialog
- popover
- tooltip
- hover-card

**Data Display Components (6)**
- avatar
- progress
- table
- pagination
- empty
- skeleton

**Typography & Utilities (2)**
- typography
- kbd

**Date & Time (2)**
- calendar
- calendar-range

**Advanced Components (4)**
- command
- sheet
- toolbar
- tags-input

**Bonus Components (6)**
- aspect-ratio
- badge
- card
- scroll-area
- toggle
- toggle-group

## 🛠️ Troubleshooting

### Error: "Component config not found"

**Nguyên nhân**: Component chưa được config trong `component-configs.ts`

**Giải pháp**: Thêm config cho component hoặc kiểm tra tên component

### Generated docs thiếu section

**Nguyên nhân**: Config thiếu thông tin hoặc flag

**Giải pháp**:
- Set `hasSubcomponents: true` nếu có subcomponents
- Set `hasAccessibilityInfo: true` nếu có accessibility info
- Thêm đầy đủ props vào array `props`

### Lỗi TypeScript

**Nguyên nhân**: Type không khớp với interface

**Giải pháp**: Kiểm tra type definition trong `component-configs.ts`

## 📚 Resources

- [Galaxy UI CLI Docs](https://galaxy-ui-cli.vercel.app)
- [Radix UI](https://radix-ui.com)
- [Radix Vue](https://radix-vue.com)
- [Spartan NG](https://spartan.ng)

## 👤 Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## 📝 License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
