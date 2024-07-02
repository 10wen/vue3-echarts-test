<template>
  <div class="about">
    <MyECharts :loading="loading" :options="options"></MyECharts>
    <BaseEchart :option="options" :loading="loading"></BaseEchart>
    <BaseEchart :option="option2"></BaseEchart>
  </div>
</template>
<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import MyECharts from '@/components/echarts/MyECharts.vue'
import BaseEchart from '@/components/BaseEchart/BaseEchart.vue'
const loading = ref(false)
const dataEmptyFlag = ref(false)
const options = ref({})
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
const option2 = ref({
  title: {
    text: '知识图谱'
  },
  tooltip: {
    show: true
  },
  legend: [
    {
      data: []
    }
  ],
  animationDuration: 0,
  animationEasingUpdate: 'quinticInOut',
  series: [
    {
      type: 'graph',
      layout: 'force',
      nodes: [
        {
          id: 'A',
          name: '李四',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'B',
          name: '张三',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'C',
          name: '王五',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'D',
          name: '小乖',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'E',
          name: '猫',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'F',
          name: '赵六',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'G',
          name: '老六',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'H',
          name: '超人',
          value: 444,
          itemStyle: {
            color: '#c60'
          },
          symbolSize: 40,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'a1',
          name: '爱',
          value: 444,
          itemStyle: {
            color: '#33c'
          },
          symbolSize: 20,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'a2',
          name: '爱',
          value: 444,
          itemStyle: {
            color: '#33c'
          },
          symbolSize: 20,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'b1',
          name: '是',
          value: 444,
          itemStyle: {
            color: '#33c'
          },
          symbolSize: 20,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'b2',
          name: '是',
          value: 444,
          itemStyle: {
            color: '#33c'
          },
          symbolSize: 20,
          label: {
            fontSize: 10
          }
        },
        {
          id: 'c1',
          name: '服从于',
          value: 444,
          itemStyle: {
            color: '#33c'
          },
          symbolSize: 30,
          label: {
            fontSize: 10
          }
        }
      ],
      links: [
        {
          source: 'A',
          target: 'c1'
        },
        {
          source: 'c1',
          target: 'C'
        },
        {
          source: 'c1',
          target: 'D'
        },
        {
          source: 'B',
          target: 'a2'
        },
        {
          source: 'a2',
          target: 'F'
        },
        {
          source: 'F',
          target: 'a1'
        },
        {
          source: 'a1',
          target: 'B'
        },
        {
          source: 'D',
          target: 'b1'
        },
        {
          source: 'b1',
          target: 'E'
        },
        {
          source: 'G',
          target: 'b2'
        },
        {
          source: 'b2',
          target: 'H'
        }
      ],
      edgeSymbol: ['', 'arrow'],
      categories: [],
      roam: 'scale',
      label: {
        normal: {
          show: true,
          color: '#fff',
          formatter: '{b}',
          fontSize: 8,
          fontStyle: '200',
          position: 'inside'
        }
      },
      force: {
        repulsion: 1000,
        gravity: 0.1,
        edgeLength: 0,
        layoutAnimation: true,
        friction: 0.1
      },
      lineStyle: {
        color: 'source',
        curveness: 0.1
      },
      emphasis: {
        focus: 'adjacency',
        scale: true,
        lineStyle: {
          width: 10
        }
      }
    }
  ]
})

onMounted(loadECharts)
</script>

<style>
.about {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}
</style>
