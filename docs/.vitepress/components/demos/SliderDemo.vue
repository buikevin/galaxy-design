<script setup lang="ts">
import { ref } from 'vue'
import Slider from '@/components/ui/slider/Slider.vue'

const value = ref([50])
</script>

<template>
  <div class="w-full max-w-sm space-y-2">
    <Slider v-model="value" :max="100" :step="1" />
    <div class="text-sm text-slate-500 dark:text-slate-400">Value: {{ value[0] }}</div>
  </div>
</template>
