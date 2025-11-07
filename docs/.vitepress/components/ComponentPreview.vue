<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  name: string
  description?: string
}>()

const showCode = ref(false)
</script>

<template>
  <div class="component-preview">
    <div v-if="description" class="preview-description">
      {{ description }}
    </div>

    <div class="preview-container">
      <div class="preview-content">
        <slot name="preview" />
      </div>
    </div>

    <div class="preview-actions">
      <button
        class="preview-toggle"
        @click="showCode = !showCode"
      >
        <svg v-if="!showCode" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="16 18 22 12 16 6"></polyline>
          <polyline points="8 6 2 12 8 18"></polyline>
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
        <span>{{ showCode ? 'Hide Code' : 'View Code' }}</span>
      </button>
    </div>

    <div v-if="showCode" class="preview-code">
      <slot name="code" />
    </div>
  </div>
</template>

<style scoped>
.component-preview {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.preview-description {
  padding: 12px 16px;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
  font-size: 14px;
  color: var(--vp-c-text-2);
}

.preview-container {
  padding: 32px 24px;
  background-color: var(--vp-c-bg);
}

.preview-content {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100px;
}

.preview-actions {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 8px 16px;
  background-color: var(--vp-c-bg-soft);
  border-top: 1px solid var(--vp-c-divider);
}

.preview-toggle {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  font-size: 13px;
  color: var(--vp-c-text-1);
  background: transparent;
  border: 1px solid var(--vp-c-divider);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s;
}

.preview-toggle:hover {
  background-color: var(--vp-c-bg);
  border-color: var(--vp-c-brand);
  color: var(--vp-c-brand);
}

.preview-code {
  border-top: 1px solid var(--vp-c-divider);
}

.preview-code :deep(div[class*="language-"]) {
  margin: 0;
  border-radius: 0;
}

.preview-code :deep(.vp-code-group) {
  margin: 0;
}

.preview-code :deep(.vp-code-group .tabs) {
  border-bottom: 1px solid var(--vp-c-divider);
}
</style>
