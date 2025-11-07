#!/bin/bash

# List of all 41 components from registry-angular.json
components=(
  "button"
  "input"
  "label"
  "checkbox"
  "select"
  "radio-group"
  "switch"
  "slider"
  "textarea"
  "accordion"
  "collapsible"
  "separator"
  "tabs"
  "dropdown-menu"
  "menubar"
  "navigation-menu"
  "context-menu"
  "popover"
  "tooltip"
  "dialog"
  "alert-dialog"
  "progress"
  "hover-card"
  "avatar"
  "scroll-area"
  "aspect-ratio"
  "toggle"
  "toggle-group"
  "resizable"
  "empty"
  "skeleton"
  "kbd"
  "typography"
  "pagination"
  "table"
  "calendar"
  "calendar-range"
  "command"
  "sheet"
  "toolbar"
  "tags-input"
)

CLI_PATH="../../packages/cli/dist/index.js"

echo "Adding all Galaxy UI components to Angular example..."
echo "=================================================="

success_count=0
fail_count=0
failed_components=()

for component in "${components[@]}"; do
  echo ""
  echo "Adding: $component"
  echo "---"

  if node "$CLI_PATH" add "$component" --framework angular --yes 2>&1; then
    echo "✓ Successfully added: $component"
    ((success_count++))
  else
    echo "✗ Failed to add: $component"
    ((fail_count++))
    failed_components+=("$component")
  fi
done

echo ""
echo "=================================================="
echo "Summary:"
echo "  Successfully added: $success_count"
echo "  Failed: $fail_count"

if [ ${#failed_components[@]} -gt 0 ]; then
  echo ""
  echo "Failed components:"
  for comp in "${failed_components[@]}"; do
    echo "  - $comp"
  done
fi

echo ""
echo "Checking installed components..."
ls -1 components/ui/
