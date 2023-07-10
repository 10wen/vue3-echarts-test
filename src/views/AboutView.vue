<template>
  <div class="about">
    <MyECharts :loading="loading" :options="options"></MyECharts>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import MyECharts from '@/components/echarts/MyECharts.vue'
const loading = ref(false)
const dataEmptyFlag = ref(false)
const options = ref()
const fetchData = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      let option = {
        title: {
          text: 'Distribution of Electricity',
          subtext: 'Fake Data'
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          }
        },
        toolbox: {
          show: true,
          feature: {
            saveAsImage: {}
          }
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          // prettier-ignore
          data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
        },
        yAxis: {
          type: 'value',
          axisLabel: {
            formatter: '{value} W'
          },
          axisPointer: {
            snap: true
          }
        },
        visualMap: {
          show: false,
          dimension: 0,
          pieces: [
            {
              lte: 6,
              color: 'green'
            },
            {
              gt: 6,
              lte: 8,
              color: 'red'
            },
            {
              gt: 8,
              lte: 14,
              color: 'green'
            },
            {
              gt: 14,
              lte: 17,
              color: 'red'
            },
            {
              gt: 17,
              color: 'green'
            }
          ]
        },
        series: [
          {
            name: 'Electricity',
            type: 'line',
            smooth: true,
            // prettier-ignore
            data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
            markArea: {
              itemStyle: {
                color: 'rgba(255, 173, 177, 0.4)'
              },
              data: [
                [
                  {
                    name: 'Morning Peak',
                    xAxis: '07:30'
                  },
                  {
                    xAxis: '10:00'
                  }
                ],
                [
                  {
                    name: 'Evening Peak',
                    xAxis: '17:30'
                  },
                  {
                    xAxis: '21:15'
                  }
                ]
              ]
            }
          }
        ]
      }

      resolve(option)
    }, 2000)
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
        // 赋值操作
        options.value = { ...res }
      } else {
        //没有数据显示空态
        dataEmptyFlag.value = true
      }
      
    })
    .finally(() => {
      loading.value = false
    })
}

onMounted(loadECharts)
</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
