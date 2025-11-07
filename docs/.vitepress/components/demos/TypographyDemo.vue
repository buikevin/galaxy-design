<script setup lang="ts">
</script>

<template>
  <div class="flex flex-col gap-6 max-w-2xl">
    <div>
      <h1 class="text-4xl font-bold tracking-tight mb-2">Heading 1</h1>
      <p class="text-muted-foreground">This is a large heading text</p>
    </div>

    <div>
      <h2 class="text-3xl font-semibold tracking-tight mb-2">Heading 2</h2>
      <p class="text-muted-foreground">Section heading</p>
    </div>

    <div>
      <h3 class="text-2xl font-semibold tracking-tight mb-2">Heading 3</h3>
      <p class="text-muted-foreground">Subsection heading</p>
    </div>

    <div>
      <p class="text-base mb-2">
        This is a regular paragraph text. It provides the main content and information to the reader.
        The text is readable and well-spaced for optimal user experience.
      </p>
    </div>

    <div>
      <p class="text-lg font-medium mb-2">Lead Text</p>
      <p class="text-lg text-muted-foreground">
        This is lead text, typically used for introductions or important content.
      </p>
    </div>

    <div>
      <p class="text-sm text-muted-foreground mb-2">Small Text</p>
      <p class="text-sm">This is smaller text, often used for captions or secondary information.</p>
    </div>

    <div>
      <blockquote class="border-l-4 border-primary pl-4 italic text-muted-foreground">
        "This is a blockquote. It's used for highlighting quotes or important information."
      </blockquote>
    </div>

    <div>
      <p class="mb-2">Inline code: <code class="px-1.5 py-0.5 bg-muted rounded text-sm font-mono">const example = true</code></p>
    </div>
  </div>
</template>
