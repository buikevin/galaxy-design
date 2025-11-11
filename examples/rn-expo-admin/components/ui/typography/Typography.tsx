import * as React from 'react';
import { Text, TextProps, View } from 'react-native';
import { cn } from '@/lib/utils';

export type TypographyVariant =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'p'
  | 'lead'
  | 'large'
  | 'small'
  | 'muted'
  | 'blockquote'
  | 'code';

export type TypographyWeight = 'normal' | 'medium' | 'semiBold' | 'bold';

export interface TypographyProps extends Omit<TextProps, 'children'> {
  children: string;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: string;
  className?: string;
}

export const Typography = React.forwardRef<Text, TypographyProps>(
  (
    {
      children,
      variant = 'p',
      weight,
      color,
      className,
      ...props
    },
    ref
  ) => {
    // Get variant classes
    const variantClasses = getVariantClasses(variant);

    // Get weight classes
    const weightClasses = weight ? getWeightClasses(weight) : '';

    // Special rendering for blockquote and code
    if (variant === 'blockquote') {
      return (
        <View className="pl-4 py-2 border-l-4 border-primary">
          <Text
            ref={ref}
            className={cn(
              variantClasses,
              weightClasses,
              color && `text-[${color}]`,
              className
            )}
            {...props}
          >
            {children}
          </Text>
        </View>
      );
    }

    if (variant === 'code') {
      return (
        <View className="px-2 py-1 bg-muted rounded">
          <Text
            ref={ref}
            className={cn(
              variantClasses,
              weightClasses,
              color && `text-[${color}]`,
              'font-mono',
              className
            )}
            {...props}
          >
            {children}
          </Text>
        </View>
      );
    }

    return (
      <Text
        ref={ref}
        className={cn(
          variantClasses,
          weightClasses,
          color && `text-[${color}]`,
          className
        )}
        {...props}
      >
        {children}
      </Text>
    );
  }
);

Typography.displayName = 'Typography';

// Helper function to get variant classes
function getVariantClasses(variant: TypographyVariant): string {
  switch (variant) {
    case 'h1':
      return 'text-4xl font-extrabold tracking-tight text-foreground';
    case 'h2':
      return 'text-3xl font-semibold tracking-tight text-foreground';
    case 'h3':
      return 'text-2xl font-semibold tracking-tight text-foreground';
    case 'h4':
      return 'text-xl font-semibold tracking-tight text-foreground';
    case 'p':
      return 'text-base leading-7 text-foreground';
    case 'lead':
      return 'text-xl text-muted-foreground';
    case 'large':
      return 'text-lg font-semibold text-foreground';
    case 'small':
      return 'text-sm font-medium leading-none text-foreground';
    case 'muted':
      return 'text-sm text-muted-foreground';
    case 'blockquote':
      return 'text-base italic text-muted-foreground';
    case 'code':
      return 'text-sm bg-muted text-foreground';
    default:
      return 'text-base text-foreground';
  }
}

// Helper function to get weight classes
function getWeightClasses(weight: TypographyWeight): string {
  switch (weight) {
    case 'normal':
      return 'font-normal';
    case 'medium':
      return 'font-medium';
    case 'semiBold':
      return 'font-semibold';
    case 'bold':
      return 'font-bold';
    default:
      return '';
  }
}

// Static methods for each variant
Typography.h1 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="h1" />
);

Typography.h2 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="h2" />
);

Typography.h3 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="h3" />
);

Typography.h4 = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="h4" />
);

Typography.p = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="p" />
);

Typography.lead = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="lead" />
);

Typography.large = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="large" />
);

Typography.small = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="small" />
);

Typography.muted = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="muted" />
);

Typography.blockquote = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="blockquote" />
);

Typography.code = (props: Omit<TypographyProps, 'variant'>) => (
  <Typography {...props} variant="code" />
);

export type { TypographyProps as TypographyComponentProps };
