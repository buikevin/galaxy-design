/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Empty state component for displaying no data, no results, or error messages
 */

import * as React from 'react';
import { View, Text } from 'react-native';
import { cn } from '@/lib/utils';

export interface EmptyProps {
  /** Custom icon to display */
  icon?: React.ReactNode;
  /** Title text */
  title?: string;
  /** Description text */
  description?: string;
  /** Action button or component */
  action?: React.ReactNode;
  /** CSS class names for the container */
  className?: string;
  /** Icon size in pixels */
  iconSize?: number;
  /** Spacing between elements in pixels */
  spacing?: number;
}

export const Empty = React.forwardRef<View, EmptyProps>(
  (
    {
      icon,
      title,
      description,
      action,
      className,
      iconSize = 64,
      _spacing = 16,
    },
    ref
  ) => {
    return (
      <View
        ref={ref}
        className={cn('flex-1 items-center justify-center p-8', className)}
      >
        {/* Icon */}
        {icon && (
          <View
            className="mb-4 opacity-40"
            style={{ width: iconSize, height: iconSize }}
          >
            {typeof icon === 'string' ? (
              <Text style={{ fontSize: iconSize }}>{icon}</Text>
            ) : (
              icon
            )}
          </View>
        )}

        {/* Title */}
        {title && (
          <Text className="text-xl font-semibold text-foreground text-center mb-2">
            {title}
          </Text>
        )}

        {/* Description */}
        {description && (
          <Text className="text-base text-muted-foreground text-center mb-4">
            {description}
          </Text>
        )}

        {/* Action */}
        {action && <View className="mt-2">{action}</View>}
      </View>
    );
  }
);

Empty.displayName = 'Empty';

// Factory methods for common empty states
Empty.noData = (
  props: Omit<EmptyProps, 'icon' | 'title' | 'description'> & {
    title?: string;
    description?: string;
  }
) => (
  <Empty
    {...props}
    icon="📥"
    title={props.title || 'No data'}
    description={props.description || 'There is no data to display'}
  />
);

Empty.noResults = (
  props: Omit<EmptyProps, 'icon' | 'title' | 'description'> & {
    title?: string;
    description?: string;
  }
) => (
  <Empty
    {...props}
    icon="🔍"
    title={props.title || 'No results found'}
    description={
      props.description || 'Try adjusting your search or filters'
    }
  />
);

Empty.error = (
  props: Omit<EmptyProps, 'icon' | 'title' | 'description'> & {
    title?: string;
    description?: string;
  }
) => (
  <Empty
    {...props}
    icon="⚠️"
    title={props.title || 'Something went wrong'}
    description={
      props.description || 'An error occurred while loading data'
    }
  />
);

Empty.offline = (
  props: Omit<EmptyProps, 'icon' | 'title' | 'description'> & {
    title?: string;
    description?: string;
  }
) => (
  <Empty
    {...props}
    icon="📡"
    title={props.title || 'No connection'}
    description={
      props.description || 'Please check your internet connection'
    }
  />
);

Empty.emptyList = (
  props: Omit<EmptyProps, 'icon' | 'title' | 'description'> & {
    title?: string;
    description?: string;
  }
) => (
  <Empty
    {...props}
    icon="📋"
    title={props.title || 'Nothing here yet'}
    description={props.description || 'Items you add will appear here'}
  />
);

export type { EmptyProps as EmptyComponentProps };
