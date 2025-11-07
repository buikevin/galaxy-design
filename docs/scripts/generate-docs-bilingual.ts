/**
 * Bilingual Documentation Generator for Galaxy UI CLI
 * Generates standardized component documentation in both English and Vietnamese
 *
 * Usage:
 *   bun run docs/scripts/generate-docs-bilingual.ts button
 *   bun run docs/scripts/generate-docs-bilingual.ts --all
 *   bun run docs/scripts/generate-docs-bilingual.ts --list
 */

import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { COMPONENT_CONFIGS, TEMPLATES, type ComponentConfig } from './component-configs';

type Language = 'en' | 'vi';

function toPascalCase(str: string): string {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

function toKebabCase(str: string): string {
  return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function ensureDirectoryExists(filePath: string) {
  const dir = dirname(filePath);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }
}

function generatePreviewSection(pascalName: string, kebabName: string, lang: Language): string {
  return `
<ComponentPreview name="${pascalName}Demo">
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
</ComponentPreview>`;
}

function generateInstallationSection(kebabName: string, lang: Language): string {
  const t = TEMPLATES[lang].installation;

  return `
## ${t.title}

::: code-group

\`\`\`bash [${t.npm}]
npx galaxy-ui-cli@latest add ${kebabName}
\`\`\`

\`\`\`bash [${t.pnpm}]
pnpm dlx galaxy-ui-cli@latest add ${kebabName}
\`\`\`

\`\`\`bash [${t.yarn}]
yarn dlx galaxy-ui-cli@latest add ${kebabName}
\`\`\`

\`\`\`bash [${t.bun}]
bunx galaxy-ui-cli@latest add ${kebabName}
\`\`\`

\`\`\`bash [${t.global}]
# ${t.globalComment}
galaxy-ui add ${kebabName}
\`\`\`

:::`;
}

function generateDependenciesSection(config: ComponentConfig, lang: Language): string {
  const deps = config.dependencies;
  if (!deps || (!deps.react && !deps.vue && !deps.angular)) {
    return '';
  }

  const t = TEMPLATES[lang].installation;
  const lines: string[] = [`::: tip ${t.dependenciesTitle}`, t.dependenciesNote];

  if (deps.react && deps.react.length > 0) {
    lines.push(`- **React**: ${deps.react.map(d => `\`${d}\``).join(', ')}`);
  }
  if (deps.vue && deps.vue.length > 0) {
    lines.push(`- **Vue**: ${deps.vue.map(d => `\`${d}\``).join(', ')}`);
  }
  if (deps.angular && deps.angular.length > 0) {
    lines.push(`- **Angular**: ${deps.angular.map(d => `\`${d}\``).join(', ')}`);
  }

  lines.push('', t.noManualInstall, ':::');

  return '\n\n' + lines.join('\n');
}

function generateUsageSection(lang: Language): string {
  const t = TEMPLATES[lang].usage;
  return `\n## ${t.title}\n\n### ${t.basicExample}\n\n${lang === 'vi' ? 'Ví dụ sử dụng cơ bản sẽ được thêm vào đây.' : 'Basic usage examples will be added here.'}`;
}

function generateAPIReferenceSection(config: ComponentConfig, lang: Language): string {
  if (!config.props || config.props.length === 0) {
    return '';
  }

  const t = TEMPLATES[lang].api;

  let section = `\n## ${t.title}\n\n### ${t.propsTitle}\n\n`;
  section += `| ${t.prop} | ${t.type} | ${t.default} | ${t.description} | ${t.frameworkSupport} |\n`;
  section += '|------|------|---------|-------------|-------------------|\n';

  for (const prop of config.props) {
    let frameworks: string;
    if (prop.frameworks === 'all') {
      frameworks = t.all;
    } else if (prop.frameworks === 'react,vue') {
      frameworks = t.reactVueOnly;
    } else if (prop.frameworks === 'react') {
      frameworks = t.reactOnly;
    } else if (prop.frameworks === 'vue') {
      frameworks = t.vueOnly;
    } else {
      frameworks = t.angularOnly;
    }

    section += `| \`${prop.name}\` | \`${prop.type}\` | \`${prop.default}\` | ${prop.description[lang]} | ${frameworks} |\n`;
  }

  return section;
}

function generateSubcomponentsSection(config: ComponentConfig, lang: Language): string {
  if (!config.hasSubcomponents || !config.subcomponents) {
    return '';
  }

  const t = TEMPLATES[lang].subcomponents;
  let section = `\n## ${t.title}\n\n`;

  for (const sub of config.subcomponents) {
    section += `### ${sub.name}\n\n${sub.description[lang]}\n\n`;
  }

  return section;
}

function generateAccessibilitySection(config: ComponentConfig, lang: Language): string {
  if (!config.hasAccessibilityInfo || !config.accessibilityInfo) {
    return '';
  }

  const t = TEMPLATES[lang].accessibility;
  const a11y = config.accessibilityInfo;

  let section = `\n## ${t.title}\n\n`;

  if (a11y.keyboard) {
    section += `- **${t.keyboard}**: ${a11y.keyboard[lang]}\n`;
  }
  if (a11y.screenReader) {
    section += `- **${t.screenReader}**: ${a11y.screenReader[lang]}\n`;
  }
  if (a11y.focus) {
    section += `- **${t.focus}**: ${a11y.focus[lang]}\n`;
  }
  if (a11y.wcag) {
    section += `- **${t.wcag}**: ${a11y.wcag[lang]}\n`;
  }

  return section;
}

function generateAuthorSection(lang: Language): string {
  const t = TEMPLATES[lang].author;
  return `\n## ${t.title}

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com`;
}

function generateLicenseSection(lang: Language): string {
  const t = TEMPLATES[lang].license;
  return `\n## ${t.title}

MIT © 2025 Bùi Trọng Hiếu (kevinbui)`;
}

function generateComponentDoc(componentName: string, lang: Language = 'en'): string {
  const kebabName = toKebabCase(componentName);
  const pascalName = toPascalCase(kebabName);

  const config = COMPONENT_CONFIGS[kebabName];
  if (!config) {
    throw new Error(`Component config not found for: ${kebabName}`);
  }

  const sections: string[] = [];

  // Title and description
  sections.push(`# ${pascalName}\n\n${config.description[lang]}`);

  // Preview
  sections.push(generatePreviewSection(pascalName, kebabName, lang));

  // Installation
  sections.push(generateInstallationSection(kebabName, lang));

  // Dependencies
  const depsSection = generateDependenciesSection(config, lang);
  if (depsSection) {
    sections.push(depsSection);
  }

  // Usage
  sections.push(generateUsageSection(lang));

  // API Reference
  const apiSection = generateAPIReferenceSection(config, lang);
  if (apiSection) {
    sections.push(apiSection);
  }

  // Subcomponents
  const subSection = generateSubcomponentsSection(config, lang);
  if (subSection) {
    sections.push(subSection);
  }

  // Accessibility
  const a11ySection = generateAccessibilitySection(config, lang);
  if (a11ySection) {
    sections.push(a11ySection);
  }

  // Author
  sections.push(generateAuthorSection(lang));

  // License
  sections.push(generateLicenseSection(lang));

  return sections.join('\n');
}

function generateDocsForComponent(componentName: string) {
  const kebabName = toKebabCase(componentName);

  if (!COMPONENT_CONFIGS[kebabName]) {
    console.error(`❌ Component config not found: ${kebabName}`);
    console.log('\nAvailable components:');
    console.log(Object.keys(COMPONENT_CONFIGS).join(', '));
    return;
  }

  // Generate English docs
  const enPath = join(process.cwd(), 'docs', 'components', `${kebabName}.md`);
  ensureDirectoryExists(enPath);
  const enContent = generateComponentDoc(kebabName, 'en');
  writeFileSync(enPath, enContent, 'utf-8');
  console.log(`✅ Generated EN: docs/components/${kebabName}.md`);

  // Generate Vietnamese docs
  const viPath = join(process.cwd(), 'docs', 'vi', 'components', `${kebabName}.md`);
  ensureDirectoryExists(viPath);
  const viContent = generateComponentDoc(kebabName, 'vi');
  writeFileSync(viPath, viContent, 'utf-8');
  console.log(`✅ Generated VI: docs/vi/components/${kebabName}.md`);
}

function generateAllDocs() {
  const components = Object.keys(COMPONENT_CONFIGS);
  let successCount = 0;

  for (const component of components) {
    try {
      generateDocsForComponent(component);
      successCount++;
    } catch (error) {
      console.error(`❌ Error generating docs for ${component}:`, error);
    }
  }

  console.log(`\n🎉 Generated docs for ${successCount}/${components.length} components!`);
  console.log(`   - English docs: docs/components/`);
  console.log(`   - Vietnamese docs: docs/vi/components/`);
}

// Main execution
const args = process.argv.slice(2);

if (args.length === 0 || args[0] === '--help' || args[0] === '-h') {
  console.log(`
📚 Bilingual Documentation Generator for Galaxy UI CLI

Usage:
  bun run docs/scripts/generate-docs-bilingual.ts <component-name>
  bun run docs/scripts/generate-docs-bilingual.ts --all
  bun run docs/scripts/generate-docs-bilingual.ts --list

Options:
  <component-name>  Generate docs for specific component (e.g., button, accordion)
  --all, -a         Generate docs for all configured components
  --list, -l        List all available components
  --help, -h        Show this help message

Examples:
  bun run docs/scripts/generate-docs-bilingual.ts button
  bun run docs/scripts/generate-docs-bilingual.ts --all
  bun run docs/scripts/generate-docs-bilingual.ts --list
`);
  process.exit(0);
}

if (args[0] === '--list' || args[0] === '-l') {
  console.log('\n📋 Available components:\n');
  const components = Object.keys(COMPONENT_CONFIGS);
  components.forEach((comp, index) => {
    console.log(`  ${index + 1}. ${comp}`);
  });
  console.log(`\nTotal: ${components.length} components\n`);
  process.exit(0);
}

if (args[0] === '--all' || args[0] === '-a') {
  console.log('\n🚀 Generating bilingual docs for all components...\n');
  generateAllDocs();
} else {
  const componentName = args[0];
  console.log(`\n🚀 Generating bilingual docs for: ${componentName}\n`);
  generateDocsForComponent(componentName);
}
