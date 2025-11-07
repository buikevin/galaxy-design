<script setup lang="ts">
import { ref } from 'vue'
import Textarea from '@/components/ui/textarea/Textarea.vue'

const message = ref('')
</script>

<template>
  <Textarea placeholder="Type your message here." v-model="message" />
</template>
