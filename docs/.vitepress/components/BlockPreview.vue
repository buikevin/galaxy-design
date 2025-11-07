<script setup lang="ts">
import { ref } from 'vue'

interface Props {
  name: string
  description?: string
  frameworks?: ('vue' | 'react' | 'angular' | 'react-native' | 'flutter')[]
  codeVue?: string
  codeReact?: string
  codeAngular?: string
  codeRN?: string
  codeFlutter?: string
  isMobile?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  frameworks: () => ['vue'],
  isMobile: false,
})

const activeTab = ref<'preview' | 'code'>('preview')
const activeFramework = ref(props.frameworks[0])

const getInstallCommand = (framework: typeof activeFramework.value) => {
  return `npx galaxy-ui-cli add ${props.name.toLowerCase().replace(/\s+/g, '-')}`
}

const getCode = (framework: typeof activeFramework.value) => {
  switch (framework) {
    case 'vue':
      return props.codeVue
    case 'react':
      return props.codeReact
    case 'angular':
      return props.codeAngular
    case 'react-native':
      return props.codeRN
    case 'flutter':
      return props.codeFlutter
    default:
      return ''
  }
}
</script>

<template>
  <div class="block-preview not-prose">
    <!-- Header -->
    <div class="border-b border-border bg-muted/30 px-4 py-3">
      <div class="flex items-center justify-between">
        <div>
          <h3 class="text-lg font-semibold">{{ name }}</h3>
          <p v-if="description" class="text-sm text-muted-foreground mt-1">
            {{ description }}
          </p>
        </div>
        <div v-if="isMobile" class="text-xs bg-orange-500/10 text-orange-600 dark:text-orange-400 px-2 py-1 rounded">
          Mobile Only
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div class="border-b border-border bg-background">
      <div class="flex items-center px-4">
        <button
          :class="[
            'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
            activeTab === 'preview'
              ? 'border-primary text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          ]"
          @click="activeTab = 'preview'"
        >
          Preview
        </button>
        <button
          :class="[
            'px-4 py-2 text-sm font-medium border-b-2 transition-colors',
            activeTab === 'code'
              ? 'border-primary text-foreground'
              : 'border-transparent text-muted-foreground hover:text-foreground'
          ]"
          @click="activeTab = 'code'"
        >
          Code
        </button>
      </div>
    </div>

    <!-- Content -->
    <div class="p-6">
      <!-- Preview Tab -->
      <div v-if="activeTab === 'preview'" class="preview-container">
        <slot name="preview">
          <div class="flex items-center justify-center p-12 text-muted-foreground border border-dashed rounded-lg">
            <p>Preview not available</p>
          </div>
        </slot>
      </div>

      <!-- Code Tab -->
      <div v-else-if="activeTab === 'code'" class="code-container space-y-4">
        <!-- Framework selector -->
        <div v-if="frameworks.length > 1" class="flex gap-2 flex-wrap">
          <button
            v-for="framework in frameworks"
            :key="framework"
            :class="[
              'px-3 py-1.5 text-sm font-medium rounded-md transition-colors',
              activeFramework === framework
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            ]"
            @click="activeFramework = framework"
          >
            {{ framework === 'react-native' ? 'React Native' : framework.charAt(0).toUpperCase() + framework.slice(1) }}
          </button>
        </div>

        <!-- Install command -->
        <div class="space-y-2">
          <p class="text-sm font-medium">Installation</p>
          <div class="relative">
            <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{{ getInstallCommand(activeFramework) }}</code></pre>
            <button
              class="absolute top-2 right-2 p-2 rounded hover:bg-background"
              @click="navigator.clipboard.writeText(getInstallCommand(activeFramework))"
              title="Copy to clipboard"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>

        <!-- Code example -->
        <div v-if="getCode(activeFramework)" class="space-y-2">
          <p class="text-sm font-medium">Usage</p>
          <div class="relative">
            <slot :name="`code-${activeFramework}`">
              <pre class="bg-muted p-4 rounded-lg overflow-x-auto"><code>{{ getCode(activeFramework) }}</code></pre>
            </slot>
            <button
              class="absolute top-2 right-2 p-2 rounded hover:bg-background"
              @click="navigator.clipboard.writeText(getCode(activeFramework) || '')"
              title="Copy to clipboard"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.block-preview {
  @apply rounded-lg border border-border overflow-hidden my-6;
}

.preview-container {
  @apply min-h-[400px] flex items-center justify-center;
}

pre {
  @apply m-0;
}

code {
  @apply text-sm;
}
</style>
