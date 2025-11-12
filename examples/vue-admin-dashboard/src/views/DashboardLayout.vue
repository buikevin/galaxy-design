<template>
  <div class="min-h-screen bg-gray-50">
    <!-- Sidebar -->
    <div class="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <div class="p-6">
        <h1 class="text-2xl font-bold text-gray-800">Vue Dashboard</h1>
        <p class="text-sm text-gray-500 mt-1">Galaxy UI Components</p>
      </div>
      <nav class="px-4 space-y-1">
        <router-link
          v-for="item in menuItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center px-4 py-3 text-sm rounded-lg hover:bg-gray-100 transition-colors"
          active-class="bg-gray-100 text-gray-900 font-medium"
        >
          {{ item.label }}
        </router-link>
      </nav>
      <div class="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-200">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-700">{{ user?.name }}</p>
            <p class="text-xs text-gray-500">{{ user?.email }}</p>
          </div>
          <ui-button variant="ghost" size="sm" @click="handleLogout">Logout</ui-button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div class="ml-64">
      <div class="p-8">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useAuth } from '@/composables/useAuth';
import { Button as UiButton } from '@/components/ui/button';

const { user, logout } = useAuth();

const menuItems = [
  { label: 'Home', path: '/dashboard' },
  { label: 'Forms', path: '/dashboard/forms' },
  { label: 'Data Display', path: '/dashboard/data' },
  { label: 'Feedback', path: '/dashboard/feedback' },
  { label: 'Navigation', path: '/dashboard/navigation' },
  { label: 'Layout', path: '/dashboard/layout' },
];

const handleLogout = async () => {
  await logout();
};
</script>
