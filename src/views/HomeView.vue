<template>
  <MyECharts :loading="loading" :options="options" :data-empty-flag="dataEmptyFlag"></MyECharts>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import MyECharts from '../components/echarts/MyECharts.vue'
const loading = ref(false)
const dataEmptyFlag = ref(false)
const options = ref()
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        xData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        yData: [150, 230, 224, 218, 135, 147, 260]
      })
    }, 1000)
  })
// 基本不变的 echarts 属性设置
const baseOption = {
  xAxis: {
    type: 'category',
    data: []
  },
  yAxis: {
    type: 'value'
  },
  series: []
}

const loadECharts = () => {
  loading.value = true
  fetchData()
    .then((res) => {
      if (res) {
        baseOption.xAxis.data = res.xData
        baseOption.series = []
        baseOption.series.push({
          data: res.yData,
          type: 'line'
        })
      } else {
        //没有数据显示空态
        dataEmptyFlag.value = true
      }
      // 赋值操作
      options.value = { ...baseOption }
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(loadECharts)
</script>
