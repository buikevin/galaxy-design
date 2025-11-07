# Galaxy UI Charts

Beautiful, responsive chart components with **unified API** across all frameworks.

## Features

✅ **Unified API** - Same props and usage across Vue, React, Angular, React Native, and Flutter
✅ **Powered by ECharts** - Professional, feature-rich charting library
✅ **Responsive** - Auto-resize on container changes
✅ **Theme Support** - Light and dark mode out of the box
✅ **TypeScript** - Full type safety
✅ **Accessible** - WCAG compliant
✅ **Customizable** - Extensive configuration options

## Installation

### Vue 3

```bash
# Install the chart component
galaxy-design add line-chart

# Dependencies will be automatically installed:
# - vue-echarts
# - echarts
```

### React

```bash
galaxy-design add line-chart

# Dependencies:
# - echarts-for-react
# - echarts
```

## Usage

### Vue 3

```vue
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#3b82f6',
    },
    {
      label: 'Sales 2023',
      data: [20, 30, 28, 40, 38, 45],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <div class="p-6 bg-white rounded-lg shadow">
    <h2 class="text-xl font-bold mb-4">Sales Overview</h2>
    <LineChart
      :data="salesData"
      :height="350"
      theme="light"
      :smooth="true"
      :area="false"
    />
  </div>
</template>
```

### React

```tsx
import { LineChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#3b82f6',
    },
    {
      label: 'Sales 2023',
      data: [20, 30, 28, 40, 38, 45],
      color: '#10b981',
    },
  ],
}

export default function Dashboard() {
  return (
    <div className="p-6 bg-white rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Sales Overview</h2>
      <LineChart
        data={salesData}
        height={350}
        theme="light"
        smooth
        area={false}
      />
    </div>
  )
}
```

### Angular

```typescript
import { Component } from '@angular/core'
import { LineChartComponent } from '@/components/ui/charts'

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [LineChartComponent],
  template: `
    <div class="p-6 bg-white rounded-lg shadow">
      <h2 class="text-xl font-bold mb-4">Sales Overview</h2>
      <ui-line-chart
        [data]="salesData"
        [height]="350"
        theme="light"
        [smooth]="true"
        [area]="false"
      />
    </div>
  `
})
export class DashboardComponent {
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [30, 45, 35, 50, 49, 60],
        color: '#3b82f6',
      },
      {
        label: 'Sales 2023',
        data: [20, 30, 28, 40, 38, 45],
        color: '#10b981',
      },
    ],
  }
}
```

### React Native

```tsx
import { View, Text } from 'react-native'
import { LineChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#007AFF',
    },
  ],
}

export default function DashboardScreen() {
  return (
    <View className="p-4 bg-white">
      <Text className="text-xl font-bold mb-4">Sales Overview</Text>
      <LineChart
        data={salesData}
        height={300}
        theme="light"
      />
    </View>
  )
}
```

## API Reference

### LineChart Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Chart data with labels and datasets |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `'100%'` | Chart width |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `legend` | `boolean` | `true` | Show/hide legend |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Legend position |
| `grid` | `boolean \| GridConfig` | `true` | Show/hide grid lines |
| `tooltip` | `boolean \| TooltipConfig` | `true` | Tooltip configuration |
| `animation` | `boolean` | `true` | Enable/disable animations |
| `smooth` | `boolean` | `true` | Smooth curve lines |
| `showPoints` | `boolean` | `true` | Show points on line |
| `pointSize` | `number` | `6` | Size of points |
| `area` | `boolean` | `false` | Fill area under line |
| `stack` | `boolean` | `false` | Stack multiple datasets |
| `zoom` | `boolean` | `false` | Enable zoom controls |
| `dataLabels` | `boolean` | `false` | Show data labels |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyText` | `string` | `'No data available'` | Empty state message |
| `className` | `string` | `undefined` | Custom CSS class |
| `options` | `object` | `{}` | Advanced ECharts options |

### ChartData Type

```typescript
interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

interface ChartDataset {
  label: string
  data: number[]
  color?: string
  borderColor?: string
  backgroundColor?: string | string[]
  borderWidth?: number
  fill?: boolean
  smooth?: boolean
}
```

## Advanced Examples

### Area Chart with Gradient

```tsx
// Vue
<LineChart
  :data="data"
  :area="true"
  :smooth="true"
/>

// React
<LineChart
  data={data}
  area
  smooth
/>
```

### Stacked Line Chart

```tsx
const stackedData = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Direct',
      data: [320, 332, 301, 334, 390],
      color: '#3b82f6',
    },
    {
      label: 'Email',
      data: [220, 182, 191, 234, 290],
      color: '#10b981',
    },
    {
      label: 'Referral',
      data: [150, 232, 201, 154, 190],
      color: '#f59e0b',
    },
  ],
}

<LineChart :data="stackedData" :stack="true" />
```

### Dark Theme

```tsx
<LineChart
  :data="data"
  theme="dark"
  class="bg-gray-900 rounded-lg p-4"
/>
```

### With Custom Grid

```tsx
<LineChart
  :data="data"
  :grid="{
    show: true,
    left: '5%',
    right: '5%',
    top: '20%',
    bottom: '10%',
    containLabel: true
  }"
/>
```

### With Zoom Controls

```tsx
<LineChart
  :data="data"
  :zoom="true"
  :height="400"
/>
```

## Color Schemes

Use predefined color schemes:

```typescript
import { ChartColorSchemes } from '@/components/ui/charts'

// Available schemes:
// - default: Modern, vibrant colors
// - pastel: Soft, pastel colors
// - vivid: Bold, saturated colors
// - monochrome: Grayscale colors

const customData = {
  labels: ['A', 'B', 'C'],
  datasets: [
    {
      label: 'Series 1',
      data: [10, 20, 30],
      color: ChartColorSchemes.default[0],
    },
  ],
}
```

## Responsive Behavior

Charts automatically resize when container changes size:

```tsx
// Full width, auto height
<LineChart :data="data" width="100%" :height="300" />

// Fixed dimensions
<LineChart :data="data" :width="800" :height="400" />

// Responsive in grid
<div class="grid grid-cols-2 gap-4">
  <LineChart :data="data1" />
  <LineChart :data="data2" />
</div>
```

## Performance Tips

1. **Use `notMerge` for frequent updates** (React):
```tsx
<LineChart data={data} key={dataKey} />
```

2. **Lazy loading**:
```tsx
const LineChart = lazy(() => import('@/components/ui/charts'))
```

3. **Optimize data updates**:
```typescript
// Only update when data actually changes
const memoizedData = useMemo(() => computeData(), [deps])
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- iOS Safari 14+
- Android Chrome 90+

## License

MIT © Galaxy UI
