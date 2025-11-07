/**
 * Component configurations for bilingual documentation generation
 * Supports both English and Vietnamese
 */

export interface ComponentConfig {
  name: string;
  description: {
    en: string;
    vi: string;
  };
  hasSubcomponents: boolean;
  subcomponents?: Array<{
    name: string;
    description: {
      en: string;
      vi: string;
    };
  }>;
  dependencies: {
    react?: string[];
    vue?: string[];
    angular?: string[];
  };
  props: Array<{
    name: string;
    type: string;
    default: string;
    description: {
      en: string;
      vi: string;
    };
    frameworks: 'all' | 'react' | 'vue' | 'angular' | 'react,vue';
  }>;
  hasAccessibilityInfo: boolean;
  accessibilityInfo?: {
    keyboard: { en: string; vi: string };
    screenReader: { en: string; vi: string };
    focus: { en: string; vi: string };
    wcag: { en: string; vi: string };
  };
  examples?: Array<{
    title: { en: string; vi: string };
    description?: { en: string; vi: string };
    code: {
      vue: string;
      react: string;
      angular: string;
    };
  }>;
}

export const COMPONENT_CONFIGS: Record<string, ComponentConfig> = {
  'button': {
    name: 'button',
    description: {
      en: 'A clickable button component with multiple variants and sizes.',
      vi: 'Component nút bấm với nhiều biến thể và kích thước khác nhau.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-slot', 'class-variance-authority'],
      vue: ['radix-vue', 'class-variance-authority'],
      angular: ['@radix-ng/primitives', 'class-variance-authority']
    },
    props: [
      {
        name: 'variant',
        type: "'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link'",
        default: "'default'",
        description: {
          en: 'The visual style of the button',
          vi: 'Kiểu hiển thị của nút'
        },
        frameworks: 'all'
      },
      {
        name: 'size',
        type: "'default' | 'sm' | 'lg' | 'icon'",
        default: "'default'",
        description: {
          en: 'The size of the button',
          vi: 'Kích thước của nút'
        },
        frameworks: 'all'
      },
      {
        name: 'asChild',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Render as child element using Radix Slot',
          vi: 'Render như phần tử con sử dụng Radix Slot'
        },
        frameworks: 'react,vue'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the button is disabled',
          vi: 'Nút có bị vô hiệu hóa hay không'
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
        en: 'Uses semantic `<button>` element with proper ARIA attributes',
        vi: 'Sử dụng thẻ `<button>` ngữ nghĩa với thuộc tính ARIA phù hợp'
      },
      focus: {
        en: 'Focus visible with ring styles',
        vi: 'Focus được hiển thị với viền ring'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'accordion': {
    name: 'accordion',
    description: {
      en: 'A vertically stacked set of interactive headings that each reveal a section of content.',
      vi: 'Tập hợp các tiêu đề tương tác xếp chồng theo chiều dọc, mỗi tiêu đề hiển thị một phần nội dung.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'AccordionItem',
        description: {
          en: 'Container for each accordion item',
          vi: 'Container cho mỗi mục accordion'
        }
      },
      {
        name: 'AccordionTrigger',
        description: {
          en: 'Clickable trigger to toggle accordion item',
          vi: 'Nút bấm để đóng/mở mục accordion'
        }
      },
      {
        name: 'AccordionContent',
        description: {
          en: 'Collapsible content area',
          vi: 'Vùng nội dung có thể thu gọn'
        }
      }
    ],
    dependencies: {
      react: ['@radix-ui/react-accordion'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'type',
        type: "'single' | 'multiple'",
        default: "'single'",
        description: {
          en: 'Whether multiple items can be open at once',
          vi: 'Cho phép mở nhiều mục cùng lúc hay không'
        },
        frameworks: 'all'
      },
      {
        name: 'collapsible',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Allow all items to be closed (single mode only)',
          vi: 'Cho phép đóng tất cả các mục (chỉ ở chế độ single)'
        },
        frameworks: 'all'
      },
      {
        name: 'defaultValue',
        type: 'string | string[]',
        default: 'undefined',
        description: {
          en: 'Default open item(s)',
          vi: 'Mục mở mặc định'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Space/Enter to toggle, Tab to navigate',
        vi: 'Space/Enter để đóng/mở, Tab để điều hướng'
      },
      screenReader: {
        en: 'Uses proper ARIA accordion pattern',
        vi: 'Sử dụng mẫu ARIA accordion chuẩn'
      },
      focus: {
        en: 'Focus management between triggers',
        vi: 'Quản lý focus giữa các trigger'
      },
      wcag: {
        en: 'WAI-ARIA design pattern compliant',
        vi: 'Tuân thủ mẫu thiết kế WAI-ARIA'
      }
    }
  },

  'dialog': {
    name: 'dialog',
    description: {
      en: 'A window overlaid on either the primary window or another dialog window.',
      vi: 'Cửa sổ được đặt chồng lên cửa sổ chính hoặc cửa sổ dialog khác.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'DialogTrigger',
        description: {
          en: 'Button to open the dialog',
          vi: 'Nút để mở dialog'
        }
      },
      {
        name: 'DialogContent',
        description: {
          en: 'The dialog content container',
          vi: 'Container chứa nội dung dialog'
        }
      },
      {
        name: 'DialogHeader',
        description: {
          en: 'Header section of dialog',
          vi: 'Phần header của dialog'
        }
      },
      {
        name: 'DialogTitle',
        description: {
          en: 'Title of the dialog',
          vi: 'Tiêu đề của dialog'
        }
      },
      {
        name: 'DialogDescription',
        description: {
          en: 'Description text',
          vi: 'Văn bản mô tả'
        }
      },
      {
        name: 'DialogFooter',
        description: {
          en: 'Footer section for actions',
          vi: 'Phần footer cho các hành động'
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
          en: 'Whether the dialog is open',
          vi: 'Dialog có đang mở hay không'
        },
        frameworks: 'all'
      },
      {
        name: 'modal',
        type: 'boolean',
        default: 'true',
        description: {
          en: 'Whether the dialog is modal',
          vi: 'Dialog có phải là modal hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Escape to close, Tab to navigate within',
        vi: 'Escape để đóng, Tab để điều hướng bên trong'
      },
      screenReader: {
        en: 'Uses dialog role with proper labeling',
        vi: 'Sử dụng role dialog với nhãn phù hợp'
      },
      focus: {
        en: 'Focus trapped within dialog when open',
        vi: 'Focus bị giữ trong dialog khi mở'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'input': {
    name: 'input',
    description: {
      en: 'A text input field with label and validation states.',
      vi: 'Trường nhập liệu văn bản với nhãn và trạng thái xác thực.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: [],
      vue: [],
      angular: []
    },
    props: [
      {
        name: 'type',
        type: "'text' | 'password' | 'email' | 'number' | ...",
        default: "'text'",
        description: {
          en: 'The input type',
          vi: 'Loại input'
        },
        frameworks: 'all'
      },
      {
        name: 'placeholder',
        type: 'string',
        default: '""',
        description: {
          en: 'Placeholder text',
          vi: 'Văn bản placeholder'
        },
        frameworks: 'all'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the input is disabled',
          vi: 'Input có bị vô hiệu hóa hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Standard input keyboard navigation',
        vi: 'Điều hướng bàn phím chuẩn cho input'
      },
      screenReader: {
        en: 'Uses semantic `<input>` element with labels',
        vi: 'Sử dụng thẻ `<input>` ngữ nghĩa với nhãn'
      },
      focus: {
        en: 'Focus visible with ring styles',
        vi: 'Focus được hiển thị với viền ring'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'select': {
    name: 'select',
    description: {
      en: 'Displays a list of options for the user to pick from—triggered by a button.',
      vi: 'Hiển thị danh sách các tùy chọn để người dùng chọn—được kích hoạt bởi một nút.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'SelectTrigger',
        description: {
          en: 'Button that opens the select dropdown',
          vi: 'Nút mở dropdown select'
        }
      },
      {
        name: 'SelectContent',
        description: {
          en: 'Container for select options',
          vi: 'Container cho các tùy chọn select'
        }
      },
      {
        name: 'SelectItem',
        description: {
          en: 'Individual selectable option',
          vi: 'Tùy chọn có thể chọn riêng lẻ'
        }
      },
      {
        name: 'SelectValue',
        description: {
          en: 'Displays the selected value',
          vi: 'Hiển thị giá trị đã chọn'
        }
      }
    ],
    dependencies: {
      react: ['@radix-ui/react-select'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'value',
        type: 'string',
        default: 'undefined',
        description: {
          en: 'The selected value',
          vi: 'Giá trị đã chọn'
        },
        frameworks: 'all'
      },
      {
        name: 'defaultValue',
        type: 'string',
        default: 'undefined',
        description: {
          en: 'Default selected value',
          vi: 'Giá trị mặc định được chọn'
        },
        frameworks: 'all'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the select is disabled',
          vi: 'Select có bị vô hiệu hóa hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Arrow keys to navigate, Enter to select, Escape to close',
        vi: 'Phím mũi tên để điều hướng, Enter để chọn, Escape để đóng'
      },
      screenReader: {
        en: 'Uses proper ARIA select pattern',
        vi: 'Sử dụng mẫu ARIA select chuẩn'
      },
      focus: {
        en: 'Focus management between trigger and options',
        vi: 'Quản lý focus giữa trigger và các tùy chọn'
      },
      wcag: {
        en: 'WAI-ARIA design pattern compliant',
        vi: 'Tuân thủ mẫu thiết kế WAI-ARIA'
      }
    }
  },

  'label': {
    name: 'label',
    description: {
      en: 'Renders an accessible label associated with controls.',
      vi: 'Hiển thị nhãn có thể truy cập được liên kết với các điều khiển.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-label'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'htmlFor',
        type: 'string',
        default: 'undefined',
        description: {
          en: 'The id of the element the label is associated with',
          vi: 'Id của phần tử mà nhãn được liên kết với'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Clicking label focuses associated input',
        vi: 'Click vào nhãn sẽ focus vào input liên kết'
      },
      screenReader: {
        en: 'Uses semantic `<label>` element',
        vi: 'Sử dụng thẻ `<label>` ngữ nghĩa'
      },
      focus: {
        en: 'Automatically associates with form controls',
        vi: 'Tự động liên kết với các điều khiển form'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'alert-dialog': {
    name: 'alert-dialog',
    description: {
      en: 'A modal dialog that interrupts the user with important content and expects a response.',
      vi: 'Hộp thoại modal làm gián đoạn người dùng với nội dung quan trọng và chờ phản hồi.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'AlertDialogTrigger',
        description: {
          en: 'Button to open the alert dialog',
          vi: 'Nút để mở alert dialog'
        }
      },
      {
        name: 'AlertDialogContent',
        description: {
          en: 'The alert dialog content container',
          vi: 'Container chứa nội dung alert dialog'
        }
      },
      {
        name: 'AlertDialogTitle',
        description: {
          en: 'Title of the alert',
          vi: 'Tiêu đề của alert'
        }
      },
      {
        name: 'AlertDialogDescription',
        description: {
          en: 'Description text',
          vi: 'Văn bản mô tả'
        }
      },
      {
        name: 'AlertDialogAction',
        description: {
          en: 'Confirm action button',
          vi: 'Nút xác nhận hành động'
        }
      },
      {
        name: 'AlertDialogCancel',
        description: {
          en: 'Cancel button',
          vi: 'Nút hủy bỏ'
        }
      }
    ],
    dependencies: {
      react: ['@radix-ui/react-alert-dialog'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the alert dialog is open',
          vi: 'Alert dialog có đang mở hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Escape to close, Tab to navigate within',
        vi: 'Escape để đóng, Tab để điều hướng bên trong'
      },
      screenReader: {
        en: 'Uses alertdialog role with proper labeling',
        vi: 'Sử dụng role alertdialog với nhãn phù hợp'
      },
      focus: {
        en: 'Focus trapped within dialog when open',
        vi: 'Focus bị giữ trong dialog khi mở'
      },
      wcag: {
        en: 'WAI-ARIA design pattern compliant',
        vi: 'Tuân thủ mẫu thiết kế WAI-ARIA'
      }
    }
  },

  'avatar': {
    name: 'avatar',
    description: {
      en: 'An image element with a fallback for representing the user.',
      vi: 'Phần tử hình ảnh với dự phòng để đại diện cho người dùng.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'AvatarImage',
        description: {
          en: 'The avatar image',
          vi: 'Hình ảnh avatar'
        }
      },
      {
        name: 'AvatarFallback',
        description: {
          en: 'Fallback content when image fails to load',
          vi: 'Nội dung dự phòng khi hình ảnh không tải được'
        }
      }
    ],
    dependencies: {
      react: ['@radix-ui/react-avatar'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'src',
        type: 'string',
        default: 'undefined',
        description: {
          en: 'The image source URL',
          vi: 'URL nguồn hình ảnh'
        },
        frameworks: 'all'
      },
      {
        name: 'alt',
        type: 'string',
        default: '""',
        description: {
          en: 'Alt text for the image',
          vi: 'Văn bản thay thế cho hình ảnh'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'No keyboard interaction required',
        vi: 'Không cần tương tác bàn phím'
      },
      screenReader: {
        en: 'Uses img with alt text',
        vi: 'Sử dụng img với văn bản alt'
      },
      focus: {
        en: 'Not focusable',
        vi: 'Không thể focus'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'checkbox': {
    name: 'checkbox',
    description: {
      en: 'A control that allows the user to toggle between checked and not checked.',
      vi: 'Điều khiển cho phép người dùng chuyển đổi giữa đã chọn và chưa chọn.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-checkbox'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'checked',
        type: 'boolean | "indeterminate"',
        default: 'false',
        description: {
          en: 'The controlled checked state',
          vi: 'Trạng thái checked được điều khiển'
        },
        frameworks: 'all'
      },
      {
        name: 'defaultChecked',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'The default checked state',
          vi: 'Trạng thái checked mặc định'
        },
        frameworks: 'all'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the checkbox is disabled',
          vi: 'Checkbox có bị vô hiệu hóa hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Space to toggle',
        vi: 'Space để chuyển đổi'
      },
      screenReader: {
        en: 'Uses checkbox role with proper ARIA attributes',
        vi: 'Sử dụng role checkbox với thuộc tính ARIA phù hợp'
      },
      focus: {
        en: 'Focus visible with ring styles',
        vi: 'Focus được hiển thị với viền ring'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'switch': {
    name: 'switch',
    description: {
      en: 'A control that allows users to toggle between checked and unchecked.',
      vi: 'Điều khiển cho phép người dùng chuyển đổi giữa đã chọn và chưa chọn.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-switch'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'checked',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'The controlled checked state',
          vi: 'Trạng thái checked được điều khiển'
        },
        frameworks: 'all'
      },
      {
        name: 'defaultChecked',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'The default checked state',
          vi: 'Trạng thái checked mặc định'
        },
        frameworks: 'all'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the switch is disabled',
          vi: 'Switch có bị vô hiệu hóa hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Space to toggle',
        vi: 'Space để chuyển đổi'
      },
      screenReader: {
        en: 'Uses switch role with proper ARIA attributes',
        vi: 'Sử dụng role switch với thuộc tính ARIA phù hợp'
      },
      focus: {
        en: 'Focus visible with ring styles',
        vi: 'Focus được hiển thị với viền ring'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'slider': {
    name: 'slider',
    description: {
      en: 'An input where the user selects a value from within a given range.',
      vi: 'Đầu vào mà người dùng chọn một giá trị trong phạm vi cho trước.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-slider'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'value',
        type: 'number[]',
        default: 'undefined',
        description: {
          en: 'The controlled value',
          vi: 'Giá trị được điều khiển'
        },
        frameworks: 'all'
      },
      {
        name: 'defaultValue',
        type: 'number[]',
        default: 'undefined',
        description: {
          en: 'The default value',
          vi: 'Giá trị mặc định'
        },
        frameworks: 'all'
      },
      {
        name: 'min',
        type: 'number',
        default: '0',
        description: {
          en: 'The minimum value',
          vi: 'Giá trị tối thiểu'
        },
        frameworks: 'all'
      },
      {
        name: 'max',
        type: 'number',
        default: '100',
        description: {
          en: 'The maximum value',
          vi: 'Giá trị tối đa'
        },
        frameworks: 'all'
      },
      {
        name: 'step',
        type: 'number',
        default: '1',
        description: {
          en: 'The step increment',
          vi: 'Bước tăng'
        },
        frameworks: 'all'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the slider is disabled',
          vi: 'Slider có bị vô hiệu hóa hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Arrow keys to adjust value, Home/End for min/max',
        vi: 'Phím mũi tên để điều chỉnh giá trị, Home/End cho min/max'
      },
      screenReader: {
        en: 'Uses slider role with proper ARIA attributes',
        vi: 'Sử dụng role slider với thuộc tính ARIA phù hợp'
      },
      focus: {
        en: 'Focus visible on thumb',
        vi: 'Focus hiển thị trên thumb'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'dropdown-menu': {
    name: 'dropdown-menu',
    description: {
      en: 'Displays a menu to the user—such as a set of actions or functions—triggered by a button.',
      vi: 'Hiển thị menu cho người dùng—chẳng hạn như một tập hợp các hành động hoặc chức năng—được kích hoạt bởi một nút.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'DropdownMenuTrigger',
        description: {
          en: 'Button that opens the dropdown menu',
          vi: 'Nút mở dropdown menu'
        }
      },
      {
        name: 'DropdownMenuContent',
        description: {
          en: 'Container for menu items',
          vi: 'Container cho các mục menu'
        }
      },
      {
        name: 'DropdownMenuItem',
        description: {
          en: 'Individual menu item',
          vi: 'Mục menu riêng lẻ'
        }
      },
      {
        name: 'DropdownMenuSeparator',
        description: {
          en: 'Visual separator between menu items',
          vi: 'Dấu phân cách trực quan giữa các mục menu'
        }
      },
      {
        name: 'DropdownMenuLabel',
        description: {
          en: 'Label for a section of menu items',
          vi: 'Nhãn cho một phần của các mục menu'
        }
      }
    ],
    dependencies: {
      react: ['@radix-ui/react-dropdown-menu'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the dropdown is open',
          vi: 'Dropdown có đang mở hay không'
        },
        frameworks: 'all'
      },
      {
        name: 'modal',
        type: 'boolean',
        default: 'true',
        description: {
          en: 'Whether the dropdown is modal',
          vi: 'Dropdown có phải là modal hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Arrow keys to navigate, Enter to select, Escape to close',
        vi: 'Phím mũi tên để điều hướng, Enter để chọn, Escape để đóng'
      },
      screenReader: {
        en: 'Uses menu role with proper ARIA attributes',
        vi: 'Sử dụng role menu với thuộc tính ARIA phù hợp'
      },
      focus: {
        en: 'Focus management between trigger and menu items',
        vi: 'Quản lý focus giữa trigger và các mục menu'
      },
      wcag: {
        en: 'WAI-ARIA design pattern compliant',
        vi: 'Tuân thủ mẫu thiết kế WAI-ARIA'
      }
    }
  },

  'tooltip': {
    name: 'tooltip',
    description: {
      en: 'A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.',
      vi: 'Popup hiển thị thông tin liên quan đến một phần tử khi phần tử nhận focus từ bàn phím hoặc chuột di chuyển qua nó.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'TooltipProvider',
        description: {
          en: 'Wraps your app to provide global tooltip configuration',
          vi: 'Bao bọc ứng dụng để cung cấp cấu hình tooltip toàn cục'
        }
      },
      {
        name: 'TooltipTrigger',
        description: {
          en: 'Element that triggers the tooltip',
          vi: 'Phần tử kích hoạt tooltip'
        }
      },
      {
        name: 'TooltipContent',
        description: {
          en: 'The tooltip content',
          vi: 'Nội dung tooltip'
        }
      }
    ],
    dependencies: {
      react: ['@radix-ui/react-tooltip'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'open',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the tooltip is open',
          vi: 'Tooltip có đang mở hay không'
        },
        frameworks: 'all'
      },
      {
        name: 'delayDuration',
        type: 'number',
        default: '700',
        description: {
          en: 'Delay before showing tooltip (ms)',
          vi: 'Độ trễ trước khi hiển thị tooltip (ms)'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Appears on focus, dismissed on blur',
        vi: 'Xuất hiện khi focus, biến mất khi blur'
      },
      screenReader: {
        en: 'Uses tooltip role with proper ARIA attributes',
        vi: 'Sử dụng role tooltip với thuộc tính ARIA phù hợp'
      },
      focus: {
        en: 'Non-interactive, does not trap focus',
        vi: 'Không tương tác, không giữ focus'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  'toggle-group': {
    name: 'toggle-group',
    description: {
      en: 'A set of two-state buttons that can be toggled on or off.',
      vi: 'Tập hợp các nút có hai trạng thái có thể bật hoặc tắt.'
    },
    hasSubcomponents: true,
    subcomponents: [
      {
        name: 'ToggleGroupItem',
        description: {
          en: 'Individual toggle item',
          vi: 'Mục toggle riêng lẻ'
        }
      }
    ],
    dependencies: {
      react: ['@radix-ui/react-toggle-group'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'type',
        type: "'single' | 'multiple'",
        default: "'single'",
        description: {
          en: 'Whether a single or multiple items can be pressed',
          vi: 'Một hoặc nhiều mục có thể được nhấn'
        },
        frameworks: 'all'
      },
      {
        name: 'value',
        type: 'string | string[]',
        default: 'undefined',
        description: {
          en: 'The controlled value',
          vi: 'Giá trị được điều khiển'
        },
        frameworks: 'all'
      },
      {
        name: 'variant',
        type: "'default' | 'outline'",
        default: "'default'",
        description: {
          en: 'The visual style',
          vi: 'Kiểu hiển thị'
        },
        frameworks: 'all'
      },
      {
        name: 'size',
        type: "'default' | 'sm' | 'lg'",
        default: "'default'",
        description: {
          en: 'The size of the toggle group',
          vi: 'Kích thước của toggle group'
        },
        frameworks: 'all'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'Whether the toggle group is disabled',
          vi: 'Toggle group có bị vô hiệu hóa hay không'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: {
        en: 'Space/Enter to toggle, Arrow keys to navigate',
        vi: 'Space/Enter để chuyển đổi, Phím mũi tên để điều hướng'
      },
      screenReader: {
        en: 'Uses proper ARIA toggle pattern',
        vi: 'Sử dụng mẫu ARIA toggle chuẩn'
      },
      focus: {
        en: 'Roving tabindex for keyboard navigation',
        vi: 'Roving tabindex cho điều hướng bàn phím'
      },
      wcag: {
        en: 'WCAG 2.1 Level AA compliant',
        vi: 'Tuân thủ WCAG 2.1 cấp độ AA'
      }
    }
  },

  // Note: For remaining components without full config details, we'll add basic configs
  // that can be enhanced later as needed

  'toggle': {
    name: 'toggle',
    description: {
      en: 'A two-state button that can be either on or off.',
      vi: 'Nút có hai trạng thái có thể bật hoặc tắt.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-toggle'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      {
        name: 'pressed',
        type: 'boolean',
        default: 'false',
        description: {
          en: 'The controlled pressed state',
          vi: 'Trạng thái pressed được điều khiển'
        },
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Space/Enter to toggle', vi: 'Space/Enter để chuyển đổi' },
      screenReader: { en: 'Uses button role with aria-pressed', vi: 'Sử dụng role button với aria-pressed' },
      focus: { en: 'Focus visible with ring styles', vi: 'Focus được hiển thị với viền ring' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'tabs': {
    name: 'tabs',
    description: {
      en: 'A set of layered sections of content—known as tab panels—that are displayed one at a time.',
      vi: 'Tập hợp các phần nội dung nhiều lớp—được gọi là tab panels—được hiển thị từng phần một.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'TabsList', description: { en: 'Container for tab triggers', vi: 'Container cho các tab trigger' } },
      { name: 'TabsTrigger', description: { en: 'Button to activate tab', vi: 'Nút kích hoạt tab' } },
      { name: 'TabsContent', description: { en: 'Content panel for each tab', vi: 'Panel nội dung cho mỗi tab' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-tabs'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'value', type: 'string', default: 'undefined', description: { en: 'The controlled active tab value', vi: 'Giá trị tab đang hoạt động được điều khiển' }, frameworks: 'all' },
      { name: 'defaultValue', type: 'string', default: 'undefined', description: { en: 'The default active tab', vi: 'Tab hoạt động mặc định' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to navigate tabs, Tab to move focus', vi: 'Phím mũi tên để điều hướng tabs, Tab để di chuyển focus' },
      screenReader: { en: 'Uses tablist, tab, and tabpanel roles', vi: 'Sử dụng roles tablist, tab và tabpanel' },
      focus: { en: 'Focus management between tabs', vi: 'Quản lý focus giữa các tabs' },
      wcag: { en: 'WAI-ARIA design pattern compliant', vi: 'Tuân thủ mẫu thiết kế WAI-ARIA' }
    }
  },

  'table': {
    name: 'table',
    description: {
      en: 'A responsive table component for displaying tabular data.',
      vi: 'Component bảng responsive để hiển thị dữ liệu dạng bảng.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'TableHeader', description: { en: 'Table header section', vi: 'Phần header của bảng' } },
      { name: 'TableBody', description: { en: 'Table body section', vi: 'Phần body của bảng' } },
      { name: 'TableRow', description: { en: 'Table row', vi: 'Hàng bảng' } },
      { name: 'TableCell', description: { en: 'Table cell', vi: 'Ô bảng' } },
      { name: 'TableHead', description: { en: 'Table header cell', vi: 'Ô header của bảng' } }
    ],
    dependencies: { react: [], vue: [], angular: [] },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Standard table navigation', vi: 'Điều hướng bảng chuẩn' },
      screenReader: { en: 'Uses semantic table elements', vi: 'Sử dụng các thẻ table ngữ nghĩa' },
      focus: { en: 'Focus on interactive cells', vi: 'Focus trên các ô tương tác' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'textarea': {
    name: 'textarea',
    description: {
      en: 'A multi-line text input field.',
      vi: 'Trường nhập liệu văn bản nhiều dòng.'
    },
    hasSubcomponents: false,
    dependencies: { react: [], vue: [], angular: [] },
    props: [
      { name: 'rows', type: 'number', default: '3', description: { en: 'Number of visible text lines', vi: 'Số dòng văn bản hiển thị' }, frameworks: 'all' },
      { name: 'placeholder', type: 'string', default: '""', description: { en: 'Placeholder text', vi: 'Văn bản placeholder' }, frameworks: 'all' },
      { name: 'disabled', type: 'boolean', default: 'false', description: { en: 'Whether disabled', vi: 'Có bị vô hiệu hóa không' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Standard textarea navigation', vi: 'Điều hướng textarea chuẩn' },
      screenReader: { en: 'Uses semantic textarea element', vi: 'Sử dụng thẻ textarea ngữ nghĩa' },
      focus: { en: 'Focus visible with ring styles', vi: 'Focus được hiển thị với viền ring' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'radio-group': {
    name: 'radio-group',
    description: {
      en: 'A set of checkable buttons—known as radio buttons—where no more than one can be checked at a time.',
      vi: 'Tập hợp các nút có thể chọn—được gọi là radio buttons—trong đó không quá một nút có thể được chọn cùng lúc.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'RadioGroupItem', description: { en: 'Individual radio button', vi: 'Nút radio riêng lẻ' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-radio-group'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'value', type: 'string', default: 'undefined', description: { en: 'The controlled value', vi: 'Giá trị được điều khiển' }, frameworks: 'all' },
      { name: 'defaultValue', type: 'string', default: 'undefined', description: { en: 'The default value', vi: 'Giá trị mặc định' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to navigate, Space to select', vi: 'Phím mũi tên để điều hướng, Space để chọn' },
      screenReader: { en: 'Uses radiogroup and radio roles', vi: 'Sử dụng roles radiogroup và radio' },
      focus: { en: 'Roving tabindex for keyboard navigation', vi: 'Roving tabindex cho điều hướng bàn phím' },
      wcag: { en: 'WAI-ARIA design pattern compliant', vi: 'Tuân thủ mẫu thiết kế WAI-ARIA' }
    }
  },

  'progress': {
    name: 'progress',
    description: {
      en: 'Displays an indicator showing the completion progress of a task.',
      vi: 'Hiển thị chỉ báo cho biết tiến trình hoàn thành của một tác vụ.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-progress'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'value', type: 'number', default: '0', description: { en: 'The progress value (0-100)', vi: 'Giá trị tiến trình (0-100)' }, frameworks: 'all' },
      { name: 'max', type: 'number', default: '100', description: { en: 'The maximum value', vi: 'Giá trị tối đa' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not keyboard interactive', vi: 'Không tương tác bàn phím' },
      screenReader: { en: 'Uses progressbar role with value announcements', vi: 'Sử dụng role progressbar với thông báo giá trị' },
      focus: { en: 'Not focusable', vi: 'Không thể focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'popover': {
    name: 'popover',
    description: {
      en: 'Displays rich content in a portal, triggered by a button.',
      vi: 'Hiển thị nội dung phong phú trong một portal, được kích hoạt bởi một nút.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'PopoverTrigger', description: { en: 'Button that opens the popover', vi: 'Nút mở popover' } },
      { name: 'PopoverContent', description: { en: 'The popover content container', vi: 'Container nội dung popover' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-popover'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: { en: 'Whether the popover is open', vi: 'Popover có đang mở hay không' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Escape to close', vi: 'Escape để đóng' },
      screenReader: { en: 'Uses proper ARIA attributes', vi: 'Sử dụng thuộc tính ARIA phù hợp' },
      focus: { en: 'Focus management between trigger and content', vi: 'Quản lý focus giữa trigger và nội dung' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'pagination': {
    name: 'pagination',
    description: {
      en: 'Navigation for paged content.',
      vi: 'Điều hướng cho nội dung phân trang.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'PaginationContent', description: { en: 'Container for pagination items', vi: 'Container cho các mục pagination' } },
      { name: 'PaginationItem', description: { en: 'Individual pagination item', vi: 'Mục pagination riêng lẻ' } },
      { name: 'PaginationLink', description: { en: 'Clickable pagination link', vi: 'Link pagination có thể click' } },
      { name: 'PaginationPrevious', description: { en: 'Previous page button', vi: 'Nút trang trước' } },
      { name: 'PaginationNext', description: { en: 'Next page button', vi: 'Nút trang sau' } }
    ],
    dependencies: { react: [], vue: [], angular: [] },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Tab to navigate, Enter to activate', vi: 'Tab để điều hướng, Enter để kích hoạt' },
      screenReader: { en: 'Uses nav element with proper labels', vi: 'Sử dụng thẻ nav với nhãn phù hợp' },
      focus: { en: 'Focus visible on interactive elements', vi: 'Focus hiển thị trên các phần tử tương tác' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'navigation-menu': {
    name: 'navigation-menu',
    description: {
      en: 'A collection of links for navigating websites.',
      vi: 'Tập hợp các liên kết để điều hướng trang web.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'NavigationMenuItem', description: { en: 'Individual menu item', vi: 'Mục menu riêng lẻ' } },
      { name: 'NavigationMenuTrigger', description: { en: 'Trigger for submenu', vi: 'Trigger cho submenu' } },
      { name: 'NavigationMenuContent', description: { en: 'Submenu content', vi: 'Nội dung submenu' } },
      { name: 'NavigationMenuLink', description: { en: 'Navigation link', vi: 'Link điều hướng' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-navigation-menu'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to navigate, Enter to activate', vi: 'Phím mũi tên để điều hướng, Enter để kích hoạt' },
      screenReader: { en: 'Uses navigation role with proper ARIA', vi: 'Sử dụng role navigation với ARIA phù hợp' },
      focus: { en: 'Focus management between menu items', vi: 'Quản lý focus giữa các mục menu' },
      wcag: { en: 'WAI-ARIA design pattern compliant', vi: 'Tuân thủ mẫu thiết kế WAI-ARIA' }
    }
  },

  'menubar': {
    name: 'menubar',
    description: {
      en: 'A visually persistent menu common in desktop applications.',
      vi: 'Menu hiển thị liên tục phổ biến trong các ứng dụng desktop.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'MenubarMenu', description: { en: 'Individual menu', vi: 'Menu riêng lẻ' } },
      { name: 'MenubarTrigger', description: { en: 'Menu trigger button', vi: 'Nút trigger menu' } },
      { name: 'MenubarContent', description: { en: 'Menu content container', vi: 'Container nội dung menu' } },
      { name: 'MenubarItem', description: { en: 'Menu item', vi: 'Mục menu' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-menubar'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to navigate, Enter to select', vi: 'Phím mũi tên để điều hướng, Enter để chọn' },
      screenReader: { en: 'Uses menubar role with proper ARIA', vi: 'Sử dụng role menubar với ARIA phù hợp' },
      focus: { en: 'Focus management between menus', vi: 'Quản lý focus giữa các menu' },
      wcag: { en: 'WAI-ARIA design pattern compliant', vi: 'Tuân thủ mẫu thiết kế WAI-ARIA' }
    }
  },

  'hover-card': {
    name: 'hover-card',
    description: {
      en: 'For sighted users to preview content available behind a link.',
      vi: 'Cho người dùng có thị giác xem trước nội dung đằng sau một liên kết.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'HoverCardTrigger', description: { en: 'Element that triggers the hover card', vi: 'Phần tử kích hoạt hover card' } },
      { name: 'HoverCardContent', description: { en: 'The hover card content', vi: 'Nội dung hover card' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-hover-card'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'openDelay', type: 'number', default: '700', description: { en: 'Delay before showing (ms)', vi: 'Độ trễ trước khi hiển thị (ms)' }, frameworks: 'all' },
      { name: 'closeDelay', type: 'number', default: '300', description: { en: 'Delay before hiding (ms)', vi: 'Độ trễ trước khi ẩn (ms)' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not keyboard accessible, mouse-only interaction', vi: 'Không truy cập được bằng bàn phím, chỉ tương tác bằng chuột' },
      screenReader: { en: 'Content announced when shown', vi: 'Nội dung được thông báo khi hiển thị' },
      focus: { en: 'Does not receive focus', vi: 'Không nhận focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'context-menu': {
    name: 'context-menu',
    description: {
      en: 'Displays a menu to the user—such as a set of actions—triggered by right click.',
      vi: 'Hiển thị menu cho người dùng—chẳng hạn như một tập hợp các hành động—được kích hoạt bằng cách nhấp chuột phải.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'ContextMenuTrigger', description: { en: 'Element that triggers context menu on right click', vi: 'Phần tử kích hoạt context menu khi nhấp chuột phải' } },
      { name: 'ContextMenuContent', description: { en: 'Container for menu items', vi: 'Container cho các mục menu' } },
      { name: 'ContextMenuItem', description: { en: 'Individual menu item', vi: 'Mục menu riêng lẻ' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-context-menu'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Shift+F10 or Context Menu key to open', vi: 'Shift+F10 hoặc phím Context Menu để mở' },
      screenReader: { en: 'Uses menu role with proper ARIA', vi: 'Sử dụng role menu với ARIA phù hợp' },
      focus: { en: 'Focus management within menu', vi: 'Quản lý focus trong menu' },
      wcag: { en: 'WAI-ARIA design pattern compliant', vi: 'Tuân thủ mẫu thiết kế WAI-ARIA' }
    }
  },

  'command': {
    name: 'command',
    description: {
      en: 'Fast, composable command menu for React.',
      vi: 'Menu lệnh nhanh, có thể kết hợp cho React.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'CommandInput', description: { en: 'Search input', vi: 'Ô nhập tìm kiếm' } },
      { name: 'CommandList', description: { en: 'List of command items', vi: 'Danh sách các mục lệnh' } },
      { name: 'CommandItem', description: { en: 'Individual command item', vi: 'Mục lệnh riêng lẻ' } },
      { name: 'CommandGroup', description: { en: 'Group of related commands', vi: 'Nhóm các lệnh liên quan' } }
    ],
    dependencies: {
      react: ['cmdk'],
      vue: [],
      angular: []
    },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to navigate, Enter to select, Escape to close', vi: 'Phím mũi tên để điều hướng, Enter để chọn, Escape để đóng' },
      screenReader: { en: 'Uses combobox role with proper ARIA', vi: 'Sử dụng role combobox với ARIA phù hợp' },
      focus: { en: 'Focus management between input and items', vi: 'Quản lý focus giữa input và các mục' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'collapsible': {
    name: 'collapsible',
    description: {
      en: 'An interactive component which expands/collapses a panel.',
      vi: 'Component tương tác mở rộng/thu gọn một panel.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'CollapsibleTrigger', description: { en: 'Button to toggle collapse state', vi: 'Nút chuyển đổi trạng thái thu gọn' } },
      { name: 'CollapsibleContent', description: { en: 'Collapsible content area', vi: 'Vùng nội dung có thể thu gọn' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-collapsible'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'open', type: 'boolean', default: 'false', description: { en: 'Whether the collapsible is open', vi: 'Collapsible có đang mở hay không' }, frameworks: 'all' },
      { name: 'defaultOpen', type: 'boolean', default: 'false', description: { en: 'The default open state', vi: 'Trạng thái mở mặc định' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Space/Enter to toggle', vi: 'Space/Enter để chuyển đổi' },
      screenReader: { en: 'Uses button with aria-expanded', vi: 'Sử dụng button với aria-expanded' },
      focus: { en: 'Focus on trigger button', vi: 'Focus trên nút trigger' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'calendar': {
    name: 'calendar',
    description: {
      en: 'A date field component that allows users to enter and edit date.',
      vi: 'Component trường ngày cho phép người dùng nhập và chỉnh sửa ngày.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['react-day-picker', 'date-fns'],
      vue: ['v-calendar'],
      angular: []
    },
    props: [
      { name: 'mode', type: "'single' | 'multiple' | 'range'", default: "'single'", description: { en: 'Selection mode', vi: 'Chế độ chọn' }, frameworks: 'all' },
      { name: 'selected', type: 'Date | Date[]', default: 'undefined', description: { en: 'Selected date(s)', vi: 'Ngày được chọn' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to navigate dates, Enter to select', vi: 'Phím mũi tên để điều hướng ngày, Enter để chọn' },
      screenReader: { en: 'Uses grid role with proper date announcements', vi: 'Sử dụng role grid với thông báo ngày phù hợp' },
      focus: { en: 'Focus management between days', vi: 'Quản lý focus giữa các ngày' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'calendar-range': {
    name: 'calendar-range',
    description: {
      en: 'A calendar component for selecting date ranges.',
      vi: 'Component lịch để chọn khoảng ngày.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['react-day-picker', 'date-fns'],
      vue: ['v-calendar'],
      angular: []
    },
    props: [
      { name: 'selected', type: '{from: Date, to: Date}', default: 'undefined', description: { en: 'Selected date range', vi: 'Khoảng ngày được chọn' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to navigate, Enter to select range', vi: 'Phím mũi tên để điều hướng, Enter để chọn khoảng' },
      screenReader: { en: 'Announces range selection', vi: 'Thông báo lựa chọn khoảng' },
      focus: { en: 'Focus management for range selection', vi: 'Quản lý focus cho lựa chọn khoảng' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'aspect-ratio': {
    name: 'aspect-ratio',
    description: {
      en: 'Displays content within a desired ratio.',
      vi: 'Hiển thị nội dung trong tỷ lệ mong muốn.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-aspect-ratio'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'ratio', type: 'number', default: '1', description: { en: 'Aspect ratio (width/height)', vi: 'Tỷ lệ khung hình (width/height)' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not interactive', vi: 'Không tương tác' },
      screenReader: { en: 'Transparent to screen readers', vi: 'Trong suốt với trình đọc màn hình' },
      focus: { en: 'Not focusable', vi: 'Không thể focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'separator': {
    name: 'separator',
    description: {
      en: 'Visually or semantically separates content.',
      vi: 'Phân tách nội dung một cách trực quan hoặc ngữ nghĩa.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-separator'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'orientation', type: "'horizontal' | 'vertical'", default: "'horizontal'", description: { en: 'The orientation of the separator', vi: 'Hướng của separator' }, frameworks: 'all' },
      { name: 'decorative', type: 'boolean', default: 'false', description: { en: 'Whether purely decorative', vi: 'Có phải chỉ mang tính trang trí' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not interactive', vi: 'Không tương tác' },
      screenReader: { en: 'Uses separator role when not decorative', vi: 'Sử dụng role separator khi không chỉ trang trí' },
      focus: { en: 'Not focusable', vi: 'Không thể focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'scroll-area': {
    name: 'scroll-area',
    description: {
      en: 'Augments native scroll functionality for custom, cross-browser styling.',
      vi: 'Tăng cường chức năng cuộn native cho kiểu dáng tùy chỉnh, đa trình duyệt.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-scroll-area'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'type', type: "'auto' | 'always' | 'scroll' | 'hover'", default: "'hover'", description: { en: 'Scrollbar visibility', vi: 'Hiển thị thanh cuộn' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Standard scroll navigation', vi: 'Điều hướng cuộn chuẩn' },
      screenReader: { en: 'Preserves native scroll behavior', vi: 'Giữ nguyên hành vi cuộn native' },
      focus: { en: 'Focus on scrollable content', vi: 'Focus trên nội dung có thể cuộn' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'resizable': {
    name: 'resizable',
    description: {
      en: 'Accessible resizable panel groups and layouts.',
      vi: 'Nhóm panel và bố cục có thể thay đổi kích thước có thể truy cập.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'ResizablePanel', description: { en: 'Resizable panel', vi: 'Panel có thể thay đổi kích thước' } },
      { name: 'ResizableHandle', description: { en: 'Handle for resizing', vi: 'Tay cầm để thay đổi kích thước' } }
    ],
    dependencies: {
      react: ['react-resizable-panels'],
      vue: [],
      angular: []
    },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Arrow keys to resize', vi: 'Phím mũi tên để thay đổi kích thước' },
      screenReader: { en: 'Announces resize operations', vi: 'Thông báo các thao tác thay đổi kích thước' },
      focus: { en: 'Focus on resize handle', vi: 'Focus trên tay cầm thay đổi kích thước' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'sheet': {
    name: 'sheet',
    description: {
      en: 'Extends the Dialog component to display content that complements the main content of the screen.',
      vi: 'Mở rộng component Dialog để hiển thị nội dung bổ sung cho nội dung chính của màn hình.'
    },
    hasSubcomponents: true,
    subcomponents: [
      { name: 'SheetTrigger', description: { en: 'Button to open the sheet', vi: 'Nút mở sheet' } },
      { name: 'SheetContent', description: { en: 'The sheet content container', vi: 'Container nội dung sheet' } },
      { name: 'SheetHeader', description: { en: 'Header section', vi: 'Phần header' } },
      { name: 'SheetTitle', description: { en: 'Title of the sheet', vi: 'Tiêu đề của sheet' } },
      { name: 'SheetDescription', description: { en: 'Description text', vi: 'Văn bản mô tả' } }
    ],
    dependencies: {
      react: ['@radix-ui/react-dialog'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [
      { name: 'side', type: "'top' | 'right' | 'bottom' | 'left'", default: "'right'", description: { en: 'Side from which sheet slides in', vi: 'Bên mà sheet trượt vào' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Escape to close, Tab to navigate', vi: 'Escape để đóng, Tab để điều hướng' },
      screenReader: { en: 'Uses dialog role with proper labels', vi: 'Sử dụng role dialog với nhãn phù hợp' },
      focus: { en: 'Focus trapped within sheet', vi: 'Focus bị giữ trong sheet' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'skeleton': {
    name: 'skeleton',
    description: {
      en: 'Use to show a placeholder while content is loading.',
      vi: 'Sử dụng để hiển thị placeholder trong khi nội dung đang tải.'
    },
    hasSubcomponents: false,
    dependencies: { react: [], vue: [], angular: [] },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not interactive', vi: 'Không tương tác' },
      screenReader: { en: 'Uses aria-busy and aria-label', vi: 'Sử dụng aria-busy và aria-label' },
      focus: { en: 'Not focusable', vi: 'Không thể focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'tags-input': {
    name: 'tags-input',
    description: {
      en: 'An input field for entering and managing tags.',
      vi: 'Trường nhập liệu để nhập và quản lý thẻ.'
    },
    hasSubcomponents: false,
    dependencies: { react: [], vue: [], angular: [] },
    props: [
      { name: 'value', type: 'string[]', default: '[]', description: { en: 'Array of tag values', vi: 'Mảng các giá trị thẻ' }, frameworks: 'all' },
      { name: 'placeholder', type: 'string', default: '""', description: { en: 'Placeholder text', vi: 'Văn bản placeholder' }, frameworks: 'all' }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Enter to add tag, Backspace to remove', vi: 'Enter để thêm thẻ, Backspace để xóa' },
      screenReader: { en: 'Announces tag additions and removals', vi: 'Thông báo thêm và xóa thẻ' },
      focus: { en: 'Focus on input field', vi: 'Focus trên trường nhập' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'toolbar': {
    name: 'toolbar',
    description: {
      en: 'A container for grouping a set of controls.',
      vi: 'Container để nhóm một tập hợp các điều khiển.'
    },
    hasSubcomponents: false,
    dependencies: {
      react: ['@radix-ui/react-toolbar'],
      vue: ['radix-vue'],
      angular: ['@radix-ng/primitives']
    },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Tab to navigate between controls', vi: 'Tab để điều hướng giữa các điều khiển' },
      screenReader: { en: 'Uses toolbar role', vi: 'Sử dụng role toolbar' },
      focus: { en: 'Roving tabindex within toolbar', vi: 'Roving tabindex trong toolbar' },
      wcag: { en: 'WAI-ARIA design pattern compliant', vi: 'Tuân thủ mẫu thiết kế WAI-ARIA' }
    }
  },

  'typography': {
    name: 'typography',
    description: {
      en: 'Styles for headings, paragraphs, lists...etc.',
      vi: 'Kiểu cho tiêu đề, đoạn văn, danh sách...v.v.'
    },
    hasSubcomponents: false,
    dependencies: { react: [], vue: [], angular: [] },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not interactive', vi: 'Không tương tác' },
      screenReader: { en: 'Uses semantic HTML elements', vi: 'Sử dụng các thẻ HTML ngữ nghĩa' },
      focus: { en: 'Not focusable', vi: 'Không thể focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'kbd': {
    name: 'kbd',
    description: {
      en: 'A component for displaying keyboard shortcuts.',
      vi: 'Component để hiển thị phím tắt bàn phím.'
    },
    hasSubcomponents: false,
    dependencies: { react: [], vue: [], angular: [] },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not interactive', vi: 'Không tương tác' },
      screenReader: { en: 'Uses kbd semantic element', vi: 'Sử dụng thẻ kbd ngữ nghĩa' },
      focus: { en: 'Not focusable', vi: 'Không thể focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'empty': {
    name: 'empty',
    description: {
      en: 'A component for displaying empty states.',
      vi: 'Component để hiển thị trạng thái trống.'
    },
    hasSubcomponents: false,
    dependencies: { react: [], vue: [], angular: [] },
    props: [],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: { en: 'Not interactive', vi: 'Không tương tác' },
      screenReader: { en: 'Descriptive text announced', vi: 'Văn bản mô tả được thông báo' },
      focus: { en: 'Not focusable', vi: 'Không thể focus' },
      wcag: { en: 'WCAG 2.1 Level AA compliant', vi: 'Tuân thủ WCAG 2.1 cấp độ AA' }
    }
  },

  'overview': {
    name: 'overview',
    description: {
      en: 'Overview and introduction to the component library.',
      vi: 'Tổng quan và giới thiệu về thư viện component.'
    },
    hasSubcomponents: false,
    dependencies: { react: [], vue: [], angular: [] },
    props: [],
    hasAccessibilityInfo: false
  }
};

// Template strings for different sections
export const TEMPLATES = {
  en: {
    installation: {
      title: 'Installation',
      npm: 'npm',
      pnpm: 'pnpm',
      yarn: 'yarn',
      bun: 'bun',
      global: 'global',
      globalComment: 'If you have installed galaxy-ui-cli globally',
      dependenciesTitle: 'Dependencies',
      dependenciesNote: 'This component automatically installs the following dependencies:',
      noManualInstall: 'No manual installation needed!'
    },
    usage: {
      title: 'Usage',
      basicExample: 'Basic Example'
    },
    api: {
      title: 'API Reference',
      propsTitle: 'Props',
      prop: 'Prop',
      type: 'Type',
      default: 'Default',
      description: 'Description',
      frameworkSupport: 'Framework Support',
      all: 'All',
      reactVueOnly: 'React, Vue only',
      reactOnly: 'React only',
      vueOnly: 'Vue only',
      angularOnly: 'Angular only'
    },
    subcomponents: {
      title: 'Subcomponents'
    },
    accessibility: {
      title: 'Accessibility',
      keyboard: 'Keyboard Navigation',
      screenReader: 'Screen Reader',
      focus: 'Focus Management',
      wcag: 'WCAG Compliance'
    },
    author: {
      title: 'Author'
    },
    license: {
      title: 'License'
    }
  },
  vi: {
    installation: {
      title: 'Cài đặt',
      npm: 'npm',
      pnpm: 'pnpm',
      yarn: 'yarn',
      bun: 'bun',
      global: 'global',
      globalComment: 'Nếu bạn đã cài galaxy-ui-cli global',
      dependenciesTitle: 'Dependencies',
      dependenciesNote: 'Component này tự động cài đặt các dependencies sau:',
      noManualInstall: 'Không cần cài đặt thủ công!'
    },
    usage: {
      title: 'Sử dụng',
      basicExample: 'Ví dụ cơ bản'
    },
    api: {
      title: 'API Reference',
      propsTitle: 'Props',
      prop: 'Prop',
      type: 'Kiểu',
      default: 'Mặc định',
      description: 'Mô tả',
      frameworkSupport: 'Hỗ trợ Framework',
      all: 'Tất cả',
      reactVueOnly: 'Chỉ React, Vue',
      reactOnly: 'Chỉ React',
      vueOnly: 'Chỉ Vue',
      angularOnly: 'Chỉ Angular'
    },
    subcomponents: {
      title: 'Subcomponents'
    },
    accessibility: {
      title: 'Khả năng truy cập',
      keyboard: 'Điều hướng bàn phím',
      screenReader: 'Đọc màn hình',
      focus: 'Quản lý focus',
      wcag: 'Tuân thủ WCAG'
    },
    author: {
      title: 'Tác giả'
    },
    license: {
      title: 'Giấy phép'
    }
  }
};
