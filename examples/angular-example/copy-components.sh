#!/bin/bash

SOURCE_DIR="/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui-cli/packages/angular/src/components"
TARGET_DIR="/Users/buitronghieu/Desktop/Project/person-work-project/galaxy-ui-cli/examples/angular-example/components/ui"

# Create target directory if it doesn't exist
mkdir -p "$TARGET_DIR"

echo "Copying all Angular components..."
echo "Source: $SOURCE_DIR"
echo "Target: $TARGET_DIR"
echo "=================================================="

# Get list of all component directories
components=$(ls -1 "$SOURCE_DIR")

count=0
for component in $components; do
  source_path="$SOURCE_DIR/$component"
  target_path="$TARGET_DIR/$component"

  if [ -d "$source_path" ]; then
    echo "Copying: $component"
    cp -r "$source_path" "$target_path"
    ((count++))
  fi
done

echo "=================================================="
echo "Copied $count components successfully!"
echo ""
echo "Components in target directory:"
ls -1 "$TARGET_DIR" | wc -l
ls -1 "$TARGET_DIR"
