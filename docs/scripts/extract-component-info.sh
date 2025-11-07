#!/bin/bash

# Extract basic info from existing docs to help create configs

DOCS_DIR="/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui-cli/docs/components"

echo "Extracting component information for config generation..."
echo ""

for file in "$DOCS_DIR"/*.md; do
  if [ -f "$file" ]; then
    filename=$(basename "$file" .md)

    # Skip overview
    if [ "$filename" = "overview" ]; then
      continue
    fi

    # Extract title (first H1)
    title=$(grep "^# " "$file" | head -1 | sed 's/^# //')

    # Extract description (first paragraph after title)
    description=$(awk '/^# /{flag=1; next} flag && /^[A-Z]/{print; exit}' "$file" | head -1)

    # Check if has subcomponents (look for ### headers in Subcomponents section)
    has_subs="false"
    if grep -q "^## Subcomponents" "$file"; then
      has_subs="true"
    fi

    echo "'$filename': {"
    echo "  name: '$filename',"
    echo "  description: {"
    echo "    en: '$description',"
    echo "    vi: '[TODO]'"
    echo "  },"
    echo "  hasSubcomponents: $has_subs,"
    echo "  // TODO: Add subcomponents, dependencies, props, accessibility"
    echo "},"
    echo ""
  fi
done
