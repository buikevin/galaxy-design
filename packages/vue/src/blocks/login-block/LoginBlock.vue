<!--
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Login block - Full login page with form
-->
<script setup lang="ts">
import { ref } from 'vue';
import { cn } from '@/lib/utils';

defineOptions({ name: 'UiLoginBlock' });

const props = withDefaults(
  defineProps<{
    title?: string;
    subtitle?: string;
    showSocial?: boolean;
    class?: string;
  }>(),
  {
    title: 'Welcome back',
    subtitle: 'Enter your email to sign in to your account',
    showSocial: true,
  }
);

const emit = defineEmits<{
  submit: [data: { email: string; password: string; remember: boolean }];
}>();

const email = ref('');
const password = ref('');
const remember = ref(false);
</script>

<template>
  <div
    :class="
      cn(
        'flex min-h-screen items-center justify-center bg-background',
        props.class
      )
    "
  >
    <div class="w-full max-w-sm space-y-6 px-4">
      <div class="space-y-2 text-center">
        <h1 class="text-2xl font-semibold tracking-tight">{{ title }}</h1>
        <p class="text-sm text-muted-foreground">{{ subtitle }}</p>
      </div>

      <form
        class="space-y-4"
        @submit.prevent="emit('submit', { email, password, remember })"
      >
        <div class="space-y-2">
          <label for="email" class="text-sm font-medium leading-none"
            >Email</label
          >
          <input
            id="email"
            v-model="email"
            type="email"
            placeholder="m@example.com"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <div class="space-y-2">
          <label for="password" class="text-sm font-medium leading-none"
            >Password</label
          >
          <input
            id="password"
            v-model="password"
            type="password"
            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            required
          />
        </div>
        <div class="flex items-center space-x-2">
          <input
            type="checkbox"
            id="remember"
            v-model="remember"
            class="h-4 w-4 rounded"
          />
          <label for="remember" class="text-sm">Remember me</label>
        </div>
        <button
          type="submit"
          class="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          Sign In
        </button>
      </form>

      <div v-if="showSocial" class="space-y-2">
        <div class="relative">
          <div class="absolute inset-0 flex items-center">
            <span class="w-full border-t" />
          </div>
          <div class="relative flex justify-center text-xs uppercase">
            <span class="bg-background px-2 text-muted-foreground"
              >Or continue with</span
            >
          </div>
        </div>
        <button
          type="button"
          class="w-full inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium hover:bg-accent"
        >
          GitHub
        </button>
      </div>

      <p class="px-8 text-center text-sm text-muted-foreground">
        Don&apos;t have an account?
        <a
          href="/register"
          class="underline underline-offset-4 hover:text-primary"
          >Sign up</a
        >
      </p>
    </div>
  </div>
</template>
