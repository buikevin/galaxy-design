#!/bin/bash

# Script to check completeness of component documentation

DOCS_DIR="/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui-cli/docs/components"

echo "📋 Checking Documentation Completeness"
echo "======================================"
echo ""

REQUIRED_SECTIONS=(
  "Installation"
  "Usage"
  "API Reference"
  "Accessibility"
  "Author"
  "License"
)

total_files=0
complete_files=0
incomplete_files=0

for file in "$DOCS_DIR"/*.md; do
  if [ -f "$file" ]; then
    total_files=$((total_files + 1))
    filename=$(basename "$file")

    # Count which required sections are present
    missing_sections=()

    for section in "${REQUIRED_SECTIONS[@]}"; do
      if ! grep -q "^## $section" "$file"; then
        missing_sections+=("$section")
      fi
    done

    if [ ${#missing_sections[@]} -eq 0 ]; then
      echo "✅ $filename - COMPLETE"
      complete_files=$((complete_files + 1))
    else
      echo "❌ $filename - Missing: ${missing_sections[*]}"
      incomplete_files=$((incomplete_files + 1))
    fi
  fi
done

echo ""
echo "======================================"
echo "📊 Summary:"
echo "   Total files: $total_files"
echo "   Complete: $complete_files"
echo "   Incomplete: $incomplete_files"
echo "   Completion rate: $((complete_files * 100 / total_files))%"
