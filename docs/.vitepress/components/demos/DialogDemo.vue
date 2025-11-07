<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/ui/button/Button.vue'
import Input from '@/components/ui/input/Input.vue'
import Label from '@/components/ui/label/Label.vue'

const open = ref(false)
const name = ref('')
const email = ref('')

const closeDialog = () => {
  open.value = false
}
</script>

<template>
  <div>
    <Button variant="default" @click="open = true">Open Dialog</Button>

    <Teleport to="body">
      <Transition
        enter-active-class="transition duration-200 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div v-if="open" class="fixed inset-0 z-50 flex items-center justify-center" @click="closeDialog">
          <!-- Overlay -->
          <div class="absolute inset-0 bg-black/80"></div>

          <!-- Dialog Content -->
          <div
            class="relative z-50 grid w-full max-w-[425px] gap-4 border border-border bg-background p-6 shadow-lg sm:rounded-lg mx-4"
            @click.stop
          >
            <!-- Close button -->
            <button
              @click="closeDialog"
              class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="h-4 w-4"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span class="sr-only">Close</span>
            </button>

            <!-- Dialog Header -->
            <div class="flex flex-col space-y-1.5 text-center sm:text-left">
              <h2 class="text-lg font-semibold leading-none tracking-tight">Edit profile</h2>
              <p class="text-sm text-muted-foreground">
                Make changes to your profile here. Click save when you're done.
              </p>
            </div>

            <!-- Dialog Body -->
            <div class="grid gap-4 py-4">
              <div class="grid gap-2">
                <Label for="name">Name</Label>
                <Input id="name" placeholder="Enter your name" v-model="name" />
              </div>
              <div class="grid gap-2">
                <Label for="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" v-model="email" />
              </div>
            </div>

            <!-- Dialog Footer -->
            <div class="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
              <Button variant="outline" @click="closeDialog">Cancel</Button>
              <Button type="submit" @click="closeDialog">Save changes</Button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
