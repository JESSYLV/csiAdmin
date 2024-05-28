<template>
    <n-layout>
      <n-layout-header>Dashboard Header</n-layout-header>
      <n-layout-content>
        <n-card>
          <v-chart :option="chartOptions" style="height: 400px;"></v-chart>
        </n-card>
      </n-layout-content>
    </n-layout>
  </template>
  
  <script setup lang="ts">
  import { NLayout, NLayoutHeader, NLayoutContent, NCard } from 'naive-ui'
  import { ref } from 'vue'
  import { useECharts } from '@/hooks/useECharts'
  
  const chartOptions = ref({
    title: {
      text: 'ECharts example'
    },
    tooltip: {},
    xAxis: {
      data: ['shirt', 'cardign', 'chiffon', 'pants', 'heels', 'socks']
    },
    yAxis: {},
    series: [
      {
        name: 'Sales',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
      }
    ]
  })
  
  const { vChart } = useECharts()
  </script>
  