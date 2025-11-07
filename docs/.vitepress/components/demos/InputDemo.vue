<script setup lang="ts">
import { ref } from 'vue'
import Input from '@/components/ui/input/Input.vue'

const email = ref('')
const password = ref('')
</script>

<template>
  <div class="w-full max-w-sm space-y-4">
    <Input type="text" placeholder="Email" v-model="email" />
    <Input type="password" placeholder="Password" v-model="password" />
    <Input type="text" placeholder="Disabled" disabled />
  </div>
</template>
