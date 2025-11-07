import * as React from 'react';
import { View, Text, Pressable, ActivityIndicator } from 'react-native';
import { cn } from '@/lib/utils';

export type PaginationVariant = 'compact' | 'full' | 'loadMore';

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  variant?: PaginationVariant;
  visiblePages?: number; // Number of visible page buttons in compact mode
  loadMoreText?: string;
  isLoading?: boolean;
  className?: string;
}

export const Pagination = React.forwardRef<View, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      variant = 'compact',
      visiblePages = 5,
      loadMoreText = 'Load More',
      isLoading = false,
      className,
    },
    ref
  ) => {
    if (totalPages <= 1) {
      return null;
    }

    const renderContent = () => {
      switch (variant) {
        case 'compact':
          return (
            <CompactPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              visiblePages={visiblePages}
            />
          );
        case 'full':
          return (
            <FullPagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          );
        case 'loadMore':
          return (
            <LoadMorePagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
              loadMoreText={loadMoreText}
              isLoading={isLoading}
            />
          );
      }
    };

    return (
      <View ref={ref} className={cn('items-center py-4', className)}>
        {renderContent()}
      </View>
    );
  }
);

Pagination.displayName = 'Pagination';

// Compact Pagination Component
interface CompactPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  visiblePages: number;
}

const CompactPagination: React.FC<CompactPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  visiblePages,
}) => {
  const pages = getVisiblePages(currentPage, totalPages, visiblePages);

  return (
    <View className="flex-row items-center">
      {/* Previous button */}
      <IconButton
        icon="‹"
        onPress={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage <= 1}
      />

      <View className="mx-2 flex-row">
        {pages.map((page, index) => {
          if (page === -1) {
            // Ellipsis
            return (
              <View key={`ellipsis-${index}`} className="px-2">
                <Text className="text-muted-foreground">...</Text>
              </View>
            );
          }

          const isSelected = page === currentPage;

          return (
            <PageButton
              key={page}
              page={page}
              isSelected={isSelected}
              onPress={() => onPageChange?.(page)}
            />
          );
        })}
      </View>

      {/* Next button */}
      <IconButton
        icon="›"
        onPress={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage >= totalPages}
      />
    </View>
  );
};

// Full Pagination Component
interface FullPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
}

const FullPagination: React.FC<FullPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  return (
    <View className="flex-row items-center">
      {/* Previous button */}
      <IconButton
        icon="‹"
        onPress={() => onPageChange?.(currentPage - 1)}
        disabled={currentPage <= 1}
      />

      <View className="mx-2 flex-row flex-wrap justify-center">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
          const isSelected = page === currentPage;

          return (
            <PageButton
              key={page}
              page={page}
              isSelected={isSelected}
              onPress={() => onPageChange?.(page)}
            />
          );
        })}
      </View>

      {/* Next button */}
      <IconButton
        icon="›"
        onPress={() => onPageChange?.(currentPage + 1)}
        disabled={currentPage >= totalPages}
      />
    </View>
  );
};

// Load More Pagination Component
interface LoadMorePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange?: (page: number) => void;
  loadMoreText: string;
  isLoading: boolean;
}

const LoadMorePagination: React.FC<LoadMorePaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  loadMoreText,
  isLoading,
}) => {
  const hasMore = currentPage < totalPages;

  if (!hasMore) {
    return null;
  }

  return (
    <Pressable
      onPress={() => onPageChange?.(currentPage + 1)}
      disabled={isLoading}
      className={cn(
        'px-6 py-3 bg-primary rounded-lg',
        'active:opacity-80',
        isLoading && 'opacity-70'
      )}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text className="text-primary-foreground font-semibold">
          {loadMoreText}
        </Text>
      )}
    </Pressable>
  );
};

// Page Button Component
interface PageButtonProps {
  page: number;
  isSelected: boolean;
  onPress: () => void;
}

const PageButton: React.FC<PageButtonProps> = ({
  page,
  isSelected,
  onPress,
}) => {
  return (
    <Pressable
      onPress={onPress}
      className={cn(
        'w-10 h-10 items-center justify-center rounded-lg mx-1',
        'active:opacity-70',
        isSelected
          ? 'bg-primary'
          : 'border border-border'
      )}
    >
      <Text
        className={cn(
          'text-base',
          isSelected
            ? 'text-primary-foreground font-semibold'
            : 'text-foreground'
        )}
      >
        {page}
      </Text>
    </Pressable>
  );
};

// Icon Button Component
interface IconButtonProps {
  icon: string;
  onPress: () => void;
  disabled: boolean;
}

const IconButton: React.FC<IconButtonProps> = ({
  icon,
  onPress,
  disabled,
}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      className={cn(
        'w-10 h-10 items-center justify-center rounded-lg',
        'border border-border',
        'active:opacity-70',
        disabled && 'opacity-30'
      )}
    >
      <Text className="text-foreground text-xl">{icon}</Text>
    </Pressable>
  );
};

// Helper function to get visible pages
function getVisiblePages(
  currentPage: number,
  totalPages: number,
  visiblePages: number
): number[] {
  if (totalPages <= visiblePages) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  const half = Math.floor(visiblePages / 2);
  let start = currentPage - half;
  let end = currentPage + half;

  if (start < 1) {
    start = 1;
    end = visiblePages;
  }

  if (end > totalPages) {
    end = totalPages;
    start = totalPages - visiblePages + 1;
  }

  const pages: number[] = [];

  // Always show first page
  if (start > 1) {
    pages.push(1);
    if (start > 2) {
      pages.push(-1); // Ellipsis
    }
  }

  // Show visible range
  for (let i = start; i <= end; i++) {
    pages.push(i);
  }

  // Always show last page
  if (end < totalPages) {
    if (end < totalPages - 1) {
      pages.push(-1); // Ellipsis
    }
    pages.push(totalPages);
  }

  return pages;
}

// Static methods for creating variants
Pagination.compact = (props: Omit<PaginationProps, 'variant'>) => (
  <Pagination {...props} variant="compact" />
);

Pagination.full = (props: Omit<PaginationProps, 'variant'>) => (
  <Pagination {...props} variant="full" />
);

Pagination.loadMore = (
  props: Omit<PaginationProps, 'variant'> & {
    loadMoreText?: string;
    isLoading?: boolean;
  }
) => <Pagination {...props} variant="loadMore" />;

export { CompactPagination, FullPagination, LoadMorePagination };
