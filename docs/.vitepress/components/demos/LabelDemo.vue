<script setup lang="ts">
import Label from '@/components/ui/label/Label.vue'
import Input from '@/components/ui/input/Input.vue'
</script>

<template>
  <div class="space-y-2">
    <Label for="email">Your email</Label>
    <Input id="email" type="email" placeholder="email@example.com" />
  </div>
</template>
