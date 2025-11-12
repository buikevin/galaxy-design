<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50">
    <ui-card class="w-full max-w-md">
      <ui-card-header>
        <ui-card-title class="text-2xl">Welcome Back</ui-card-title>
        <ui-card-description>Sign in to your account to continue</ui-card-description>
      </ui-card-header>
      <ui-card-content>
        <form @submit.prevent="handleLogin" class="space-y-4">
          <div class="space-y-2">
            <ui-label for="email">Email</ui-label>
            <ui-input
              id="email"
              v-model="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
          <div class="space-y-2">
            <ui-label for="password">Password</ui-label>
            <ui-input
              id="password"
              v-model="password"
              type="password"
              placeholder="Enter your password"
              required
            />
          </div>
          <ui-button type="submit" class="w-full">Sign In</ui-button>
        </form>
      </ui-card-content>
    </ui-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useAuth } from '@/composables/useAuth';
import { Card as UiCard, CardHeader as UiCardHeader, CardTitle as UiCardTitle, CardDescription as UiCardDescription, CardContent as UiCardContent } from '@/components/ui/card';
import { Button as UiButton } from '@/components/ui/button';
import { Input as UiInput } from '@/components/ui/input';
import { Label as UiLabel } from '@/components/ui/label';

const { login } = useAuth();
const email = ref('admin@example.com');
const password = ref('password');

const handleLogin = async () => {
  await login(email.value, password.value);
};
</script>
