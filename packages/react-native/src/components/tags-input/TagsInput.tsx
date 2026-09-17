/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Tags Input - enter tags with chips + remove
 */

import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { cn } from '@/lib/utils';

export interface TagsInputProps {
  value?: string[];
  onChange?: (tags: string[]) => void;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
}

export function TagsInput({ value = [], onChange, placeholder = 'Add tag...', disabled, className }: TagsInputProps) {
  const [input, setInput] = React.useState('');

  const addTag = () => {
    const tag = input.trim();
    if (!tag || value.includes(tag)) { setInput(''); return; }
    onChange?.([...value, tag]);
    setInput('');
  };

  const removeTag = (tag: string) => onChange?.(value.filter((t) => t !== tag));

  return (
    <View className={cn('flex-row flex-wrap items-center gap-2 rounded-md border border-input bg-background p-2', className)}>
      {value.map((tag) => (
        <View key={tag} className="flex-row items-center gap-1 rounded-md bg-secondary px-2 py-1">
          <Text className="text-sm">{tag}</Text>
          {!disabled && (
            <Pressable onPress={() => removeTag(tag)} hitSlop={8}>
              <Text className="text-muted-foreground">×</Text>
            </Pressable>
          )}
        </View>
      ))}
      <TextInput
        value={input}
        onChangeText={setInput}
        onSubmitEditing={() => { onChange?.([...value, input.trim()]); setInput(''); }}
        onBlur={() => { if (input.trim()) { onChange?.([...value, input.trim()]); setInput(''); } }}
        placeholder={placeholder}
        editable={!disabled}
        className="min-w-[100px] flex-1 text-sm"
      />
    </View>
  );
}
EOF
cat > $DST_RN/tags-input/index.ts <<'IDX'
export { TagsInput } from './TagsInput';
export type { TagsInputProps } from './TagsInput';
IDX

DST_F=packages/flutter/lib/components
mkdir -p $DST_F/tags-input
cat > $DST_F/tags-input/tags_input.dart <<'FL'
// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Tags Input - chip input with remove

import 'package:flutter/material.dart';

class GalaxyTagsInput extends StatefulWidget {
  final List<String> tags;
  final ValueChanged<List<String>> onChanged;
  final String hintText;
  const GalaxyTagsInput({
    super.key,
    this.tags = const [],
    required this.onChanged,
    this.hintText = 'Add tag...',
  });

  @override
  State<GalaxyTagsInput> createState() => _GalaxyTagsInputState();
}

class _GalaxyTagsInputState extends State<GalaxyTagsInput> {
  final _controller = TextEditingController();

  void _add() {
    final tag = _controller.text.trim();
    if (tag.isEmpty || widget.tags.contains(tag)) return;
    widget.onChanged([...widget.tags, tag]);
    _controller.clear();
  }

  @override
  Widget build(BuildContext context) {
    return Wrap(
      spacing: 8,
      runSpacing: 8,
      children: [
        ...widget.tags.map((tag) => Chip(
          label: Text(tag),
          onDeleted: () => widget.onChanged(widget.tags.where((t) => t != tag).toList()),
        )),
        SizedBox(
          width: 120,
          child: TextField(
            controller: _controller,
            onSubmitted: (_) => _add(),
            decoration: const InputDecoration(hintText: 'Add tag...', isDense: true),
          ),
        ),
      ],
    );
  }
}
FL
mkdir -p $DST_F/tags-input
cat > $DST_F/tags-input/index.dart <<'IDX'
export 'tags_input.dart';
IDX

# mark tags-input complete trong manifest
node - <<'EOF'
import { readFileSync, writeFileSync } from 'node:fs';
const p = 'packages/contracts/manifests/tags-input.json';
const m = JSON.parse(readFileSync(p, 'utf8'));
for (const [fw, files, exports] of [
  ['react-native', ['TagsInput.tsx', 'index.ts'], ['TagsInput', 'TagsInputProps']],
  ['flutter', ['tags_input.dart', 'index.dart'], ['GalaxyTagsInput']],
]) {
  m.frameworks[fw] = { status: 'complete', files, entry: 'index.ts', exports: data.exports ?? [], dependencies: [], props: [] };
}
// exports đã có sẵn — giữ nguyên cấu trúc data.exports
writeFileSync(p, JSON.stringify(m, null, 2) + '\n');
console.log('tags-input RN+flutter complete');
EOF
echo tags-input-done