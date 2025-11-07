<script setup lang="ts">
import { ref } from 'vue'
import Checkbox from '@/components/ui/checkbox/Checkbox.vue'
import Label from '@/components/ui/label/Label.vue'

const checked = ref(false)
</script>

<template>
  <div class="flex items-center space-x-2">
    <Checkbox id="terms" v-model:checked="checked" />
    <Label for="terms">Accept terms and conditions</Label>
  </div>
</template>
