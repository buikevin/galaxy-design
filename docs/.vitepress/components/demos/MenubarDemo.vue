<script setup lang="ts">
import Menubar from '@/components/ui/menubar/Menubar.vue'
import MenubarContent from '@/components/ui/menubar/MenubarContent.vue'
import MenubarItem from '@/components/ui/menubar/MenubarItem.vue'
import MenubarMenu from '@/components/ui/menubar/MenubarMenu.vue'
import MenubarTrigger from '@/components/ui/menubar/MenubarTrigger.vue'
</script>

<template>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>File</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>New File</MenubarItem>
        <MenubarItem>Open</MenubarItem>
        <MenubarItem>Save</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>Edit</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Undo</MenubarItem>
        <MenubarItem>Redo</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
    <MenubarMenu>
      <MenubarTrigger>View</MenubarTrigger>
      <MenubarContent>
        <MenubarItem>Zoom In</MenubarItem>
        <MenubarItem>Zoom Out</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>
