import React from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native'
import type { DrawerProps, DrawerItem } from './types'

export const Drawer: React.FC<DrawerProps> = ({
  items,
  onItemPress,
  header,
  footer,
}) => {
  const handleItemPress = (item: DrawerItem) => {
    if (item.onPress) {
      item.onPress()
    }
    onItemPress?.(item)
  }

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      {header ? (
        <View style={styles.header}>{header}</View>
      ) : (
        <View style={styles.header}>
          <View style={styles.logo} />
          <Text style={styles.headerTitle}>Menu</Text>
        </View>
      )}

      {/* Menu Items */}
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.menuItem,
              item.active && styles.menuItemActive,
            ]}
            onPress={() => handleItemPress(item)}
            activeOpacity={0.7}
          >
            {/* Icon */}
            {typeof item.icon === 'string' ? (
              <Text style={styles.menuIcon}>{item.icon}</Text>
            ) : item.icon ? (
              <View style={styles.menuIcon}>{item.icon}</View>
            ) : null}

            {/* Label */}
            <Text
              style={[
                styles.menuLabel,
                item.active && styles.menuLabelActive,
              ]}
            >
              {item.label}
            </Text>

            {/* Badge */}
            {item.badge && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>{item.badge}</Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Footer */}
      {footer && <View style={styles.footer}>{footer}</View>}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 8,
    backgroundColor: '#007AFF',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    padding: 8,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16,
    borderRadius: 8,
    marginBottom: 4,
    // Minimum 48x48 touch target
    minHeight: 48,
  },
  menuItemActive: {
    backgroundColor: '#E5F1FB',
  },
  menuIcon: {
    fontSize: 20,
    marginRight: 12,
    width: 24,
    textAlign: 'center',
  },
  menuLabel: {
    flex: 1,
    fontSize: 16,
    color: '#000000',
  },
  menuLabelActive: {
    color: '#007AFF',
    fontWeight: '600',
  },
  badge: {
    backgroundColor: '#007AFF',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    minWidth: 20,
    alignItems: 'center',
  },
  badgeText: {
    color: '#FFFFFF',
    fontSize: 12,
    fontWeight: '600',
  },
  footer: {
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
})
