<template>
  <n-layout>
    <n-layout-header>Header</n-layout-header>
    <n-layout-sider>Sidebar</n-layout-sider>
    <n-layout-content>
      <router-view />
    </n-layout-content>
  </n-layout>
</template>

<script setup>
import { NLayout, NLayoutHeader, NLayoutSider, NLayoutContent } from 'naive-ui'
</script>
