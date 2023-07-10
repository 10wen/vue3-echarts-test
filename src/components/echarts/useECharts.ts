import * as echarts from 'echarts/core'
import { BarChart, LineChart, type LineSeriesOption, PieChart, type PieSeriesOption } from 'echarts/charts'
import {
  LegendComponent,
  type LegendComponentOption,
  TitleComponent,
  // 组件类型的定义后缀都为 ComponentOption
  type TitleComponentOption,
  TooltipComponent,
  type TooltipComponentOption,
  GridComponent,
  type GridComponentOption,
  // 数据集组件
  DatasetComponent,
  type DatasetComponentOption,
  // 内置数据转换器组件 (filter, sort)
  TransformComponent
} from 'echarts/components'

import { LabelLayout, UniversalTransition } from 'echarts/features'
import { CanvasRenderer } from 'echarts/renderers'

import { shallowRef, onMounted, onBeforeUnmount } from 'vue'

// 通过 ComposeOption 来组合出一个只有必须组件和图表的 Option 类型
export type ECOption = echarts.ComposeOption<
  | LineSeriesOption
  | PieSeriesOption
  | LegendComponentOption
  | TitleComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | DatasetComponentOption
>

// 注册必须的组件
echarts.use([
  LegendComponent,
  TitleComponent,
  TooltipComponent,
  GridComponent,
  DatasetComponent,
  TransformComponent,
  BarChart,
  LineChart,
  PieChart,
  LabelLayout,
  UniversalTransition,
  CanvasRenderer
])

export default function useChart() {
  // https://github.com/apache/echarts/issues/13943
  const canvasEl = shallowRef()
  const myChart = shallowRef()

  const resizeFn = () => {
    myChart.value?.resize()
  }

  onMounted(() => {
    myChart.value = echarts.init(canvasEl.value)
    window.addEventListener('resize', resizeFn)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', resizeFn)
    myChart.value?.dispose()
    myChart.value = null
  })

  return {
    myChart,
    canvasEl
  }
}
