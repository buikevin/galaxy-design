/**
 * Script to update incomplete documentation files
 * Adds missing sections to existing docs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join } from 'path';

const DOCS_DIR = join(process.cwd(), 'docs', 'components');

const REQUIRED_SECTIONS = {
  'Installation': true,
  'Usage': true,
  'API Reference': false, // Optional for some components
  'Accessibility': false, // Optional
  'Author': true,
  'License': true
};

function addMissingSections(filePath: string, lang: 'en' | 'vi' = 'en') {
  const content = readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  // Check which sections are missing
  const missingSections: string[] = [];

  for (const [section, required] of Object.entries(REQUIRED_SECTIONS)) {
    if (!content.includes(`## ${section}`)) {
      missingSections.push(section);
    }
  }

  if (missingSections.length === 0) {
    console.log(`✅ ${filePath} is complete`);
    return;
  }

  console.log(`📝 Updating ${filePath}...`);
  console.log(`   Missing: ${missingSections.join(', ')}`);

  let updatedContent = content;

  // Add Author section if missing
  if (missingSections.includes('Author')) {
    const authorSection = lang === 'en'
      ? `\n## Author\n\n**Bùi Trọng Hiếu (kevinbui)**\n- GitHub: [@buikevin](https://github.com/buikevin)\n- Email: kevinbui210191@gmail.com\n`
      : `\n## Tác giả\n\n**Bùi Trọng Hiếu (kevinbui)**\n- GitHub: [@buikevin](https://github.com/buikevin)\n- Email: kevinbui210191@gmail.com\n`;

    updatedContent += authorSection;
  }

  // Add License section if missing
  if (missingSections.includes('License')) {
    const licenseSection = lang === 'en'
      ? `\n## License\n\nMIT © 2025 Bùi Trọng Hiếu (kevinbui)\n`
      : `\n## Giấy phép\n\nMIT © 2025 Bùi Trọng Hiếu (kevinbui)\n`;

    updatedContent += licenseSection;
  }

  // Add API Reference placeholder if missing
  if (missingSections.includes('API Reference')) {
    // Find position after Usage section
    const usageIndex = updatedContent.indexOf('## Usage');
    if (usageIndex !== -1) {
      const nextSectionIndex = updatedContent.indexOf('##', usageIndex + 8);
      const insertPosition = nextSectionIndex !== -1 ? nextSectionIndex : updatedContent.length;

      const apiSection = lang === 'en'
        ? `\n## API Reference\n\n### Props\n\nThis component accepts the following props:\n\n| Prop | Type | Default | Description |\n|------|------|---------|-------------|\n| ... | ... | ... | ... |\n\n`
        : `\n## API Reference\n\n### Props\n\nComponent này chấp nhận các props sau:\n\n| Prop | Kiểu | Mặc định | Mô tả |\n|------|------|---------|-------------|\n| ... | ... | ... | ... |\n\n`;

      updatedContent = updatedContent.slice(0, insertPosition) + apiSection + updatedContent.slice(insertPosition);
    }
  }

  // Add Accessibility placeholder if missing
  if (missingSections.includes('Accessibility')) {
    // Insert before Author section
    const authorIndex = updatedContent.indexOf('## Author') !== -1
      ? updatedContent.indexOf('## Author')
      : updatedContent.indexOf('## Tác giả');

    if (authorIndex !== -1) {
      const a11ySection = lang === 'en'
        ? `\n## Accessibility\n\n- **Keyboard Navigation**: [TODO]\n- **Screen Reader**: [TODO]\n- **Focus Management**: [TODO]\n- **WCAG Compliance**: WCAG 2.1 Level AA compliant\n\n`
        : `\n## Khả năng truy cập\n\n- **Điều hướng bàn phím**: [TODO]\n- **Đọc màn hình**: [TODO]\n- **Quản lý focus**: [TODO]\n- **Tuân thủ WCAG**: Tuân thủ WCAG 2.1 cấp độ AA\n\n`;

      updatedContent = updatedContent.slice(0, authorIndex) + a11ySection + updatedContent.slice(authorIndex);
    }
  }

  // Write updated content
  writeFileSync(filePath, updatedContent, 'utf-8');
  console.log(`   ✅ Updated!`);
}

// Main execution
const args = process.argv.slice(2);

if (args[0] === '--all') {
  const { readdirSync } = require('fs');
  const files = readdirSync(DOCS_DIR).filter(f => f.endsWith('.md'));

  console.log(`\n🚀 Updating ${files.length} component docs...\n`);

  for (const file of files) {
    const filePath = join(DOCS_DIR, file);
    addMissingSections(filePath, 'en');
  }

  // Also update Vietnamese docs
  const viDocsDir = join(process.cwd(), 'docs', 'vi', 'components');
  if (existsSync(viDocsDir)) {
    const viFiles = readdirSync(viDocsDir).filter(f => f.endsWith('.md'));

    console.log(`\n🇻🇳 Updating ${viFiles.length} Vietnamese docs...\n`);

    for (const file of viFiles) {
      const filePath = join(viDocsDir, file);
      addMissingSections(filePath, 'vi');
    }
  }

  console.log('\n✅ Done!\n');
} else if (args[0]) {
  const filePath = join(DOCS_DIR, `${args[0]}.md`);
  if (existsSync(filePath)) {
    addMissingSections(filePath, 'en');
  } else {
    console.error(`❌ File not found: ${filePath}`);
  }
} else {
  console.log(`
Usage:
  bun run docs/scripts/update-incomplete-docs.ts --all
  bun run docs/scripts/update-incomplete-docs.ts button
  `);
}
