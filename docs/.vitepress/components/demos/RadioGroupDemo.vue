<script setup lang="ts">
import { ref } from 'vue'
import RadioGroup from '@/components/ui/radio-group/RadioGroup.vue'
import RadioGroupItem from '@/components/ui/radio-group/RadioGroupItem.vue'
import Label from '@/components/ui/label/Label.vue'

const selectedValue = ref('default')
</script>

<template>
  <RadioGroup v-model="selectedValue">
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="default" value="default" />
      <Label for="default">Default</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="comfortable" value="comfortable" />
      <Label for="comfortable">Comfortable</Label>
    </div>
    <div class="flex items-center space-x-2">
      <RadioGroupItem id="compact" value="compact" />
      <Label for="compact">Compact</Label>
    </div>
  </RadioGroup>
</template>
