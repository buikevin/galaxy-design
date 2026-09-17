/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Pricing Block - pricing tiers
 */

import * as React from 'react';
import { View, Text, Pressable } from 'react-native';
import { cn } from '@/lib/utils';

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
}

export interface PricingBlockProps {
  tiers: PricingTier[];
  title?: string;
  subtitle?: string;
  onSelect?: (tier: PricingTier) => void;
  className?: string;
}

export function PricingBlock({ tiers, title = 'Pricing', subtitle = 'Choose a plan that works for you', onSelect, className }: PricingBlockProps) {
  return (
    <View className={cn('p-6', className)}>
      <Text className="text-3xl font-bold text-center mb-2">{title}</Text>
      <Text className="text-lg text-muted-foreground text-center mb-8">{subtitle}</Text>
      <View className="gap-6">
        {tiers.map((tier) => (
          <View
            key={tier.name}
            className={cn(
              'rounded-lg border border-border bg-card p-6',
              tier.highlighted && 'border-primary ring-2 ring-primary'
            )}
          >
            <Text className="text-lg font-semibold">{tier.name}</Text>
            <Text className="text-sm text-muted-foreground mt-1">{tier.description}</Text>
            <Text className="mt-4 text-3xl font-bold">
              {tier.price}
              <Text className="text-sm font-normal text-muted-foreground">/mo</Text>
            </Text>
            {tier.features.map((f) => (
              <Text key={f} className="mt-2 text-sm">• {f}</Text>
            ))}
            <Pressable
              className={cn(
                'mt-6 h-10 items-center justify-center rounded-md',
                tier.highlighted ? 'bg-primary' : 'border border-input'
              )}
              onPress={() => onSelect?.(tier)}
            >
              <Text className={cn('text-sm font-medium', tier.highlighted && 'text-primary-foreground')}>
                {tier.ctaText || `Get ${tier.name}`}
              </Text>
            </Pressable>
          </View>
        ))}
      </View>
    </View>
  );
}
EOF
mkdir -p packages/react-native/src/blocks/pricing-block
cat > packages/react-native/src/blocks/pricing-block/index.ts <<'IDX'
export { PricingBlock } from './PricingBlock';
export type { PricingBlockProps, PricingTier } from './PricingBlock';
IDX

# ===== Flutter: pricing-block =====
mkdir -p packages/flutter/lib/blocks/pricing-block
cat > packages/flutter/lib/blocks/pricing-block/pricing_block.dart <<'FL'
// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Pricing Block - pricing tiers

import 'package:flutter/material.dart';

class GalaxyPricingTier {
  final String name;
  final String price;
  final String description;
  final List<String> features;
  final bool highlighted;
  const GalaxyPricingTier({
    required this.name,
    required this.price,
    required this.description,
    required this.features,
    this.highlighted = false,
  });
}

class GalaxyPricingBlock extends StatelessWidget {
  final List<GalaxyPricingTier> tiers;
  const GalaxyPricingBlock({super.key, required this.tiers});

  @override
  Widget build(BuildContext context) {
    return Column(
      children: tiers.map((tier) => Card(child: Padding(
        padding: const EdgeInsets.all(16),
        child: Column(crossAxisAlignment: CrossAxisAlignment.start, children: [
          Text(tier.name, style: Theme.of(context).textTheme.titleMedium),
          Text(tier.description, style: Theme.of(context).textTheme.bodySmall),
          Text(tier.price, style: Theme.of(context).textTheme.headlineSmall),
          ...tier.features.map((f) => Text('• $f')),
        ]),
      ))).toList(),
    );
  }
}
FL
mkdir -p packages/flutter/lib/blocks/pricing-block
cat > packages/flutter/lib/blocks/pricing-block/index.dart <<'IDX'
export 'pricing_block.dart';
IDX

# ===== RN: login-block =====
mkdir -p packages/react-native/src/blocks/login-block
cat > packages/react-native/src/blocks/login-block/LoginBlock.tsx <<'RN'
/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Login Block - email/password form
 */

import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
import { cn } from '@/lib/utils';

export interface LoginBlockProps {
  title?: string;
  subtitle?: string;
  onSubmit?: (values: { email: string; password: string }) => void;
  className?: string;
}

export function LoginBlock({ title = 'Welcome back', subtitle = 'Enter your email to sign in to your account', onSubmit, className }: LoginBlockProps) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <View className={cn('w-full max-w-sm gap-6', className)}>
      <View className="gap-2 items-center">
        <Text className="text-2xl font-semibold">{title}</Text>
        <Text className="text-sm text-muted-foreground">{subtitle}</Text>
      </View>
      <View className="gap-4">
        <View className="gap-2">
          <Text className="text-sm font-medium">Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
            placeholder="m@example.com"
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          />
        </View>
        <View className="gap-2">
          <Text className="text-sm font-medium">Password</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            className="h-10 rounded-md border border-input bg-background px-3 text-sm"
          />
        </View>
        <Pressable
          className="h-10 items-center justify-center rounded-md bg-primary"
          onPress={() => onSubmit?.({ email, password })}
        >
          <Text className="text-sm font-medium text-primary-foreground">Sign In</Text>
        </Pressable>
      </View>
    </View>
  );
}
EOF
cat > packages/react-native/src/blocks/login-block/index.ts <<'IDX'
export { LoginBlock } from './LoginBlock';
export type { LoginBlockProps } from './LoginBlock';
IDX

# ===== Flutter: login-block =====
mkdir -p packages/flutter/lib/blocks/login-block
cat > packages/flutter/lib/blocks/login-block/login_block.dart <<'FL'
// * @author Bùi Trọng Hiếu
// * @email kevinbui210191@gmail.com
// * @desc Login Block - email/password form

import 'package:flutter/material.dart';

class GalaxyLoginBlock extends StatefulWidget {
  final void Function(String email, String password)? onSubmit;
  const GalaxyLoginBlock({super.key, this.onSubmit});

  @override
  State<GalaxyLoginBlock> createState() => _GalaxyLoginBlockState();
}

class _GalaxyLoginBlockState extends State<GalaxyLoginBlock> {
  final email = TextEditingController();
  final password = TextEditingController();

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        TextField(controller: email, decoration: const InputDecoration(labelText: 'Email'), keyboardType: TextInputType.emailAddress),
        TextField(controller: password, obscureText: true, decoration: const InputDecoration(labelText: 'Password')),
        const SizedBox(height: 16),
        FilledButton(
          onPressed: () => widget.onSubmit?.(email.text, password.text),
          child: const Text('Sign In'),
        ),
      ],
    );
  }
}
FL
mkdir -p packages/flutter/lib/blocks/login-block
cat > packages/flutter/lib/blocks/login-block/index.dart <<'IDX'
export 'login_block.dart';
IDX
echo p3-3-ports-done