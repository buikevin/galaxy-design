<script setup lang="ts">
import { ref } from 'vue'

const activeTab = ref<'vue' | 'react' | 'angular'>('vue')

const tabs = [
  { id: 'vue', label: 'Vue' },
  { id: 'react', label: 'React' },
  { id: 'angular', label: 'Angular' }
] as const
</script>

<template>
  <div class="framework-tabs">
    <div class="tabs-header">
      <button
        v-for="tab in tabs"
        :key="tab.id"
        class="tab-button"
        :class="{ active: activeTab === tab.id }"
        @click="activeTab = tab.id"
      >
        {{ tab.label }}
      </button>
    </div>

    <div class="tabs-content">
      <div v-show="activeTab === 'vue'" class="tab-panel">
        <slot name="vue" />
      </div>
      <div v-show="activeTab === 'react'" class="tab-panel">
        <slot name="react" />
      </div>
      <div v-show="activeTab === 'angular'" class="tab-panel">
        <slot name="angular" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.framework-tabs {
  border: 1px solid var(--vp-c-divider);
  border-radius: 8px;
  margin: 16px 0;
  overflow: hidden;
}

.tabs-header {
  display: flex;
  background-color: var(--vp-c-bg-soft);
  border-bottom: 1px solid var(--vp-c-divider);
}

.tab-button {
  flex: 1;
  padding: 10px 16px;
  font-size: 14px;
  font-weight: 500;
  color: var(--vp-c-text-2);
  background: transparent;
  border: none;
  border-right: 1px solid var(--vp-c-divider);
  cursor: pointer;
  transition: all 0.2s;
  position: relative;
}

.tab-button:last-child {
  border-right: none;
}

.tab-button:hover {
  color: var(--vp-c-text-1);
  background-color: var(--vp-c-bg);
}

.tab-button.active {
  color: var(--vp-c-brand);
  background-color: var(--vp-c-bg);
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 2px;
  background-color: var(--vp-c-brand);
}

.tabs-content {
  background-color: var(--vp-c-bg);
}

.tab-panel :deep(div[class*="language-"]) {
  margin: 0;
  border-radius: 0;
  border: none;
}

.tab-panel :deep(pre) {
  margin: 0;
}
</style>
