/**
 * Script to generate standardized component documentation
 *
 * Usage:
 *   bun run docs/scripts/generate-component-docs.ts <component-name>
 *   bun run docs/scripts/generate-component-docs.ts --all  # Update all components
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join } from 'path';

interface ComponentInfo {
  name: string;
  kebabName: string;
  pascalName: string;
  description: string;
  hasSubcomponents: boolean;
  subcomponents?: Array<{
    name: string;
    description: string;
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
    description: string;
    frameworks: 'all' | 'react' | 'vue' | 'angular' | 'react,vue';
  }>;
  hasAccessibilityInfo: boolean;
  accessibilityInfo?: {
    keyboard?: string;
    screenReader?: string;
    focus?: string;
    wcag?: string;
  };
}

// Component configurations
const COMPONENT_CONFIGS: Record<string, Partial<ComponentInfo>> = {
  'button': {
    description: 'A clickable button component with multiple variants and sizes.',
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
        description: 'The visual style of the button',
        frameworks: 'all'
      },
      {
        name: 'size',
        type: "'default' | 'sm' | 'lg' | 'icon'",
        default: "'default'",
        description: 'The size of the button',
        frameworks: 'all'
      },
      {
        name: 'asChild',
        type: 'boolean',
        default: 'false',
        description: 'Render as child element using Radix Slot',
        frameworks: 'react,vue'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: 'false',
        description: 'Whether the button is disabled',
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: 'Space/Enter to activate',
      screenReader: 'Uses semantic <button> element with proper ARIA attributes',
      focus: 'Focus visible with ring styles',
      wcag: 'WCAG 2.1 Level AA compliant'
    }
  },
  'accordion': {
    description: 'A vertically stacked set of interactive headings that each reveal a section of content.',
    hasSubcomponents: true,
    subcomponents: [
      { name: 'AccordionItem', description: 'Container for each accordion item' },
      { name: 'AccordionTrigger', description: 'Clickable trigger to toggle accordion item' },
      { name: 'AccordionContent', description: 'Collapsible content area' }
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
        description: 'Whether multiple items can be open at once',
        frameworks: 'all'
      },
      {
        name: 'collapsible',
        type: 'boolean',
        default: 'false',
        description: 'Allow all items to be closed (single mode only)',
        frameworks: 'all'
      },
      {
        name: 'defaultValue',
        type: 'string | string[]',
        default: 'undefined',
        description: 'Default open item(s)',
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: 'Space/Enter to toggle, Tab to navigate',
      screenReader: 'Uses proper ARIA accordion pattern',
      focus: 'Focus management between triggers',
      wcag: 'WAI-ARIA design pattern compliant'
    }
  },
  'dialog': {
    description: 'A window overlaid on either the primary window or another dialog window.',
    hasSubcomponents: true,
    subcomponents: [
      { name: 'DialogTrigger', description: 'Button to open the dialog' },
      { name: 'DialogContent', description: 'The dialog content container' },
      { name: 'DialogHeader', description: 'Header section of dialog' },
      { name: 'DialogTitle', description: 'Title of the dialog' },
      { name: 'DialogDescription', description: 'Description text' },
      { name: 'DialogFooter', description: 'Footer section for actions' }
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
        description: 'Whether the dialog is open',
        frameworks: 'all'
      },
      {
        name: 'modal',
        type: 'boolean',
        default: 'true',
        description: 'Whether the dialog is modal',
        frameworks: 'all'
      }
    ],
    hasAccessibilityInfo: true,
    accessibilityInfo: {
      keyboard: 'Escape to close, Tab to navigate within',
      screenReader: 'Uses dialog role with proper labeling',
      focus: 'Focus trapped within dialog when open',
      wcag: 'WCAG 2.1 Level AA compliant'
    }
  }
};

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function generateInstallationSection(componentName: string): string {
  return `## Installation

::: code-group

\`\`\`bash [npm]
npx galaxy-ui-cli@latest add ${componentName}
\`\`\`

\`\`\`bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add ${componentName}
\`\`\`

\`\`\`bash [yarn]
yarn dlx galaxy-ui-cli@latest add ${componentName}
\`\`\`

\`\`\`bash [bun]
bunx galaxy-ui-cli@latest add ${componentName}
\`\`\`

\`\`\`bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui add ${componentName}
\`\`\`

:::`;
}

function generateDependenciesSection(deps: ComponentInfo['dependencies']): string {
  if (!deps || (!deps.react && !deps.vue && !deps.angular)) {
    return '';
  }

  const lines: string[] = ['::: tip Dependencies', 'This component automatically installs the following dependencies:'];

  if (deps.react) {
    lines.push(`- **React**: ${deps.react.map(d => `\`${d}\``).join(', ')}`);
  }
  if (deps.vue) {
    lines.push(`- **Vue**: ${deps.vue.map(d => `\`${d}\``).join(', ')}`);
  }
  if (deps.angular) {
    lines.push(`- **Angular**: ${deps.angular.map(d => `\`${d}\``).join(', ')}`);
  }

  lines.push('', 'No manual installation needed!', ':::');

  return '\n\n' + lines.join('\n');
}

function generateAPIReferenceSection(info: ComponentInfo): string {
  if (!info.props || info.props.length === 0) {
    return '';
  }

  let section = '\n## API Reference\n\n### Props\n\n';
  section += '| Prop | Type | Default | Description | Framework Support |\n';
  section += '|------|------|---------|-------------|-------------------|\n';

  for (const prop of info.props) {
    const frameworks = prop.frameworks === 'all' ? 'All' :
                      prop.frameworks === 'react,vue' ? 'React, Vue only' :
                      prop.frameworks.charAt(0).toUpperCase() + prop.frameworks.slice(1) + ' only';

    section += `| \`${prop.name}\` | \`${prop.type}\` | \`${prop.default}\` | ${prop.description} | ${frameworks} |\n`;
  }

  return section;
}

function generateSubcomponentsSection(info: ComponentInfo): string {
  if (!info.hasSubcomponents || !info.subcomponents) {
    return '';
  }

  let section = '\n## Subcomponents\n\n';

  for (const sub of info.subcomponents) {
    section += `### ${sub.name}\n\n${sub.description}\n\n`;
  }

  return section;
}

function generateAccessibilitySection(info: ComponentInfo): string {
  if (!info.hasAccessibilityInfo || !info.accessibilityInfo) {
    return '';
  }

  const a11y = info.accessibilityInfo;
  let section = '\n## Accessibility\n\n';

  if (a11y.keyboard) {
    section += `- **Keyboard Navigation**: ${a11y.keyboard}\n`;
  }
  if (a11y.screenReader) {
    section += `- **Screen Reader**: ${a11y.screenReader}\n`;
  }
  if (a11y.focus) {
    section += `- **Focus Management**: ${a11y.focus}\n`;
  }
  if (a11y.wcag) {
    section += `- **WCAG Compliance**: ${a11y.wcag}\n`;
  }

  return section;
}

function generateComponentDocs(componentName: string): string {
  const kebabName = toKebabCase(componentName);
  const pascalName = toPascalCase(kebabName);

  const config = COMPONENT_CONFIGS[kebabName] || {};
  const info: ComponentInfo = {
    name: componentName,
    kebabName,
    pascalName,
    description: config.description || `${pascalName} component`,
    hasSubcomponents: config.hasSubcomponents || false,
    subcomponents: config.subcomponents,
    dependencies: config.dependencies || {},
    props: config.props || [],
    hasAccessibilityInfo: config.hasAccessibilityInfo || false,
    accessibilityInfo: config.accessibilityInfo
  };

  const sections: string[] = [];

  // Title and description
  sections.push(`# ${pascalName}\n\n${info.description}`);

  // Preview section (placeholder)
  sections.push(`\n<ComponentPreview name="${pascalName}Demo">
  <template #preview>
    <DemoContainer>
      <${pascalName}Demo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

\`\`\`vue [Vue]
<script setup lang="ts">
import { ${pascalName} } from '@/components/ui/${kebabName}'
</script>

<template>
  <${pascalName}>Example content</${pascalName}>
</template>
\`\`\`

\`\`\`tsx [React]
import { ${pascalName} } from "@/components/ui/${kebabName}"

export default function App() {
  return <${pascalName}>Example content</${pascalName}>
}
\`\`\`

\`\`\`typescript [Angular]
import { Component } from '@angular/core';
import { ${pascalName}Component } from '@/components/ui/${kebabName}';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [${pascalName}Component],
  template: \`<ui-${kebabName}>Example content</ui-${kebabName}>\`
})
export class AppComponent {}
\`\`\`

:::

  </template>
</ComponentPreview>`);

  // Installation
  sections.push(generateInstallationSection(kebabName));

  // Dependencies
  const depsSection = generateDependenciesSection(info.dependencies);
  if (depsSection) {
    sections.push(depsSection);
  }

  // Usage section
  sections.push('\n## Usage\n\nBasic usage examples will be added here.');

  // API Reference
  const apiSection = generateAPIReferenceSection(info);
  if (apiSection) {
    sections.push(apiSection);
  }

  // Subcomponents
  const subSection = generateSubcomponentsSection(info);
  if (subSection) {
    sections.push(subSection);
  }

  // Accessibility
  const a11ySection = generateAccessibilitySection(info);
  if (a11ySection) {
    sections.push(a11ySection);
  }

  // Author and License
  sections.push(`\n## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)`);

  return sections.join('\n');
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help') {
  console.log(`
Usage:
  bun run docs/scripts/generate-component-docs.ts <component-name>
  bun run docs/scripts/generate-component-docs.ts --all
  bun run docs/scripts/generate-component-docs.ts --list

Examples:
  bun run docs/scripts/generate-component-docs.ts button
  bun run docs/scripts/generate-component-docs.ts --all
`);
  process.exit(0);
}

if (args[0] === '--list') {
  console.log('Available components:');
  console.log(Object.keys(COMPONENT_CONFIGS).join('\n'));
  process.exit(0);
}

if (args[0] === '--all') {
  const componentsDir = join(process.cwd(), 'docs', 'components');
  const components = Object.keys(COMPONENT_CONFIGS);

  for (const component of components) {
    const filePath = join(componentsDir, `${component}.md`);
    const content = generateComponentDocs(component);

    writeFileSync(filePath, content, 'utf-8');
    console.log(`✅ Generated: ${component}.md`);
  }

  console.log(`\n🎉 Generated ${components.length} component docs!`);
} else {
  const componentName = args[0];
  const kebabName = toKebabCase(componentName);

  const filePath = join(process.cwd(), 'docs', 'components', `${kebabName}.md`);
  const content = generateComponentDocs(kebabName);

  writeFileSync(filePath, content, 'utf-8');
  console.log(`✅ Generated: ${kebabName}.md`);
}
