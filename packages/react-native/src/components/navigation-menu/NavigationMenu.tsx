import * as React from 'react';
import { View, Text, Pressable, ScrollView, Modal } from 'react-native';
import { cn } from '@/lib/utils';

export interface NavigationMenuItem {
  id: string;
  label: string;
  icon: React.ReactNode | string; // React node or emoji
  badge?: number | string;
  disabled?: boolean;
}

export type NavigationMenuVariant = 'bottom' | 'drawer';

export interface NavigationMenuProps {
  items: NavigationMenuItem[];
  selectedId?: string;
  onSelect?: (id: string) => void;
  variant?: NavigationMenuVariant;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

export const NavigationMenu = React.forwardRef<View, NavigationMenuProps>(
  (
    {
      items,
      selectedId,
      onSelect,
      variant = 'bottom',
      header,
      footer,
      className,
    },
    ref
  ) => {
    if (variant === 'bottom') {
      return (
        <BottomNavigation
          ref={ref}
          items={items}
          selectedId={selectedId}
          onSelect={onSelect}
          className={className}
        />
      );
    }

    return (
      <DrawerNavigation
        ref={ref}
        items={items}
        selectedId={selectedId}
        onSelect={onSelect}
        header={header}
        footer={footer}
        className={className}
      />
    );
  }
);

NavigationMenu.displayName = 'NavigationMenu';

// Bottom Navigation Component
const BottomNavigation = React.forwardRef<View, NavigationMenuProps>(
  ({ items, selectedId, onSelect, className }, ref) => {
    return (
      <View
        ref={ref}
        className={cn(
          'flex-row bg-background border-t border-border',
          'shadow-lg',
          className
        )}
        style={{ elevation: 8 }}
      >
        {items.map((item) => {
          const isSelected = item.id === selectedId;

          return (
            <Pressable
              key={item.id}
              onPress={() => {
                if (!item.disabled) {
                  onSelect?.(item.id);
                }
              }}
              disabled={item.disabled}
              className={cn(
                'flex-1 items-center justify-center py-2',
                'active:opacity-70',
                item.disabled && 'opacity-40'
              )}
            >
              {/* Icon with Badge */}
              <View className="relative mb-1">
                {typeof item.icon === 'string' ? (
                  <Text
                    className={cn(
                      'text-2xl',
                      isSelected ? 'text-primary' : 'text-muted-foreground'
                    )}
                  >
                    {item.icon}
                  </Text>
                ) : (
                  item.icon
                )}

                {/* Badge */}
                {item.badge && (
                  <View
                    className="absolute -top-1 -right-2 min-w-[18px] h-[18px] bg-destructive rounded-full items-center justify-center px-1"
                  >
                    <Text className="text-destructive-foreground text-[10px] font-bold">
                      {item.badge}
                    </Text>
                  </View>
                )}
              </View>

              {/* Label */}
              <Text
                className={cn(
                  'text-xs',
                  isSelected
                    ? 'text-primary font-semibold'
                    : 'text-muted-foreground'
                )}
                numberOfLines={1}
              >
                {item.label}
              </Text>
            </Pressable>
          );
        })}
      </View>
    );
  }
);

BottomNavigation.displayName = 'BottomNavigation';

// Drawer Navigation Component
const DrawerNavigation = React.forwardRef<View, NavigationMenuProps>(
  ({ items, selectedId, onSelect, header, footer, className }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('flex-1 bg-background', className)}
      >
        <ScrollView className="flex-1">
          {/* Header */}
          {header && (
            <>
              <View className="p-4">{header}</View>
              <View className="h-px bg-border" />
            </>
          )}

          {/* Menu Items */}
          <View className="py-2">
            {items.map((item) => {
              const isSelected = item.id === selectedId;

              return (
                <Pressable
                  key={item.id}
                  onPress={() => {
                    if (!item.disabled) {
                      onSelect?.(item.id);
                    }
                  }}
                  disabled={item.disabled}
                  className={cn(
                    'flex-row items-center px-4 py-3',
                    'active:bg-muted',
                    isSelected && 'bg-primary/10',
                    item.disabled && 'opacity-40'
                  )}
                >
                  {/* Icon */}
                  <View className="mr-4">
                    {typeof item.icon === 'string' ? (
                      <Text
                        className={cn(
                          'text-xl',
                          isSelected ? 'text-primary' : 'text-muted-foreground'
                        )}
                      >
                        {item.icon}
                      </Text>
                    ) : (
                      item.icon
                    )}
                  </View>

                  {/* Label */}
                  <Text
                    className={cn(
                      'flex-1 text-base',
                      isSelected
                        ? 'text-primary font-semibold'
                        : 'text-foreground'
                    )}
                  >
                    {item.label}
                  </Text>

                  {/* Badge */}
                  {item.badge && (
                    <View className="ml-2 min-w-[24px] h-6 bg-destructive rounded-full items-center justify-center px-2">
                      <Text className="text-destructive-foreground text-xs font-bold">
                        {item.badge}
                      </Text>
                    </View>
                  )}
                </Pressable>
              );
            })}
          </View>

          {/* Footer */}
          {footer && (
            <>
              <View className="h-px bg-border" />
              <View className="p-4">{footer}</View>
            </>
          )}
        </ScrollView>
      </View>
    );
  }
);

DrawerNavigation.displayName = 'DrawerNavigation';

// Drawer Modal Wrapper
export interface DrawerMenuProps extends Omit<NavigationMenuProps, 'variant'> {
  visible: boolean;
  onClose: () => void;
  position?: 'left' | 'right';
}

export const DrawerMenu: React.FC<DrawerMenuProps> = ({
  visible,
  onClose,
  position = 'left',
  items,
  selectedId,
  onSelect,
  header,
  footer,
}) => {
  const handleSelect = (id: string) => {
    onSelect?.(id);
    onClose(); // Close drawer after selection
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <Pressable
        className="flex-1 bg-black/50"
        onPress={onClose}
      >
        <Pressable
          className={cn(
            'absolute top-0 bottom-0 w-4/5 max-w-[320px] bg-background shadow-xl',
            position === 'left' ? 'left-0' : 'right-0'
          )}
          onPress={(e) => e.stopPropagation()}
        >
          <NavigationMenu
            variant="drawer"
            items={items}
            selectedId={selectedId}
            onSelect={handleSelect}
            header={header}
            footer={footer}
          />
        </Pressable>
      </Pressable>
    </Modal>
  );
};

// Static method for creating drawer
NavigationMenu.drawer = DrawerMenu;

export { BottomNavigation, DrawerNavigation, DrawerMenu };
