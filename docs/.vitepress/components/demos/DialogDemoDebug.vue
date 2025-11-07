<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Dialog from '@/components/ui/dialog/Dialog.vue'
import DialogContent from '@/components/ui/dialog/DialogContent.vue'
import DialogDescription from '@/components/ui/dialog/DialogDescription.vue'
import DialogHeader from '@/components/ui/dialog/DialogHeader.vue'
import DialogTitle from '@/components/ui/dialog/DialogTitle.vue'
import DialogTrigger from '@/components/ui/dialog/DialogTrigger.vue'

const open = ref(false)

onMounted(() => {
  console.log('DialogDemoDebug mounted')
})
</script>

<template>
  <div>
    <p class="text-sm text-muted-foreground mb-2">Debug: Dialog open state = {{ open }}</p>
    <Dialog v-model:open="open">
      <DialogTrigger as-child>
        <Button variant="default" @click="console.log('Button clicked')">
          Open Dialog (Debug)
        </Button>
      </DialogTrigger>
      <DialogContent class="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit profile (Debug)</DialogTitle>
          <DialogDescription>
            This is a debug version to test if Radix Dialog works.
          </DialogDescription>
        </DialogHeader>
        <div class="p-4">
          <p>If you can see this, the dialog is working!</p>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</template>
