<script setup lang="ts">
import { ref } from 'vue'
import Switch from '@/components/ui/switch/Switch.vue'
import Label from '@/components/ui/label/Label.vue'

const checked = ref(false)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Switch id="airplane-mode" v-model:checked="checked" />
    <Label for="airplane-mode">Airplane Mode</Label>
  </div>
</template>
