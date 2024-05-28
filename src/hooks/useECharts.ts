import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

export function useECharts() {
  const chartInstance = ref<echarts.ECharts | null>(null)

  onMounted(() => {
    chartInstance.value = echarts.init(document.getElementById('chart') as HTMLElement)
  })

  return {
    vChart: chartInstance
  }
}
