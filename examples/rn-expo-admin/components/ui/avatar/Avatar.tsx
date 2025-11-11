import * as React from 'react';
import { View, Image, Text, ImageProps } from 'react-native';
import { cn } from '@/lib/utils';

export interface AvatarProps {
  src?: string;
  alt?: string;
  fallback?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  imageClassName?: string;
  fallbackClassName?: string;
}

const sizeClasses = {
  sm: 'h-8 w-8',
  md: 'h-10 w-10',
  lg: 'h-12 w-12',
  xl: 'h-16 w-16',
};

const fallbackSizeClasses = {
  sm: 'text-xs',
  md: 'text-sm',
  lg: 'text-base',
  xl: 'text-xl',
};

const Avatar = React.forwardRef<View, AvatarProps>(
  ({ src, alt, fallback, size = 'md', className, imageClassName, fallbackClassName }, ref) => {
    const [imageError, setImageError] = React.useState(false);

    const showFallback = !src || imageError;
    const fallbackText = fallback || alt?.charAt(0).toUpperCase() || '?';

    return (
      <View
        ref={ref}
        className={cn(
          'relative flex items-center justify-center overflow-hidden rounded-full bg-muted',
          sizeClasses[size],
          className
        )}
      >
        {showFallback ? (
          <Text
            className={cn(
              'font-medium text-muted-foreground',
              fallbackSizeClasses[size],
              fallbackClassName
            )}
          >
            {fallbackText}
          </Text>
        ) : (
          <Image
            source={{ uri: src }}
            accessibilityLabel={alt}
            onError={() => setImageError(true)}
            className={cn('h-full w-full', imageClassName)}
            resizeMode="cover"
          />
        )}
      </View>
    );
  }
);

Avatar.displayName = 'Avatar';

export { Avatar };
