# Line Chart

Display data as a responsive line chart with smooth curves, area fills, and customizable styling.

<ComponentPreview name="LineChartDemo">
  <template #preview>
    <DemoContainer>
      <LineChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
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
  ],
}
</script>

<template>
  <LineChart :data="salesData" :height="300" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales 2024',
      data: [30, 45, 35, 50, 49, 60],
      color: '#3b82f6',
    },
  ],
}

export default function App() {
  return <LineChart data={salesData} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { LineChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [LineChartComponent],
  template: `<ui-line-chart [data]="salesData" [height]="300" />`
})
export class AppComponent {
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales 2024',
        data: [30, 45, 35, 50, 49, 60],
        color: '#3b82f6',
      },
    ],
  }
}
```

```tsx [React Native]
import { LineChart } from "@/components/ui/charts"

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

export default function App() {
  return (
    <View className="p-4">
      <LineChart data={salesData} height={300} />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/line_chart.dart';

class MyApp extends StatelessWidget {
  final salesData = ChartData(
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      ChartDataset(
        label: 'Sales 2024',
        data: [30, 45, 35, 50, 49, 60],
        color: Color(0xFF3B82F6),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyLineChart(
      data: salesData,
      height: 300,
    );
  }
}
```

:::

  </template>
</ComponentPreview>

## Installation

::: code-group

```bash [npm]
npx galaxy-design@latest add line-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add line-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add line-chart
```

```bash [bun]
bunx galaxy-design@latest add line-chart
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add line-chart
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **Vue**: `vue-echarts@^7.0.3`, `echarts@^5.5.1`
- **React**: `echarts-for-react@^3.0.2`, `echarts@^5.5.1`
- **Angular**: `ngx-echarts@^18.0.0`, `echarts@^5.5.1`
- **React Native**: `@wuba/react-native-echarts@^3.0.1`, `echarts@^5.5.1`, `@shopify/react-native-skia@^1.6.4`
- **Flutter**: `fl_chart@^0.68.0`

No manual installation needed!
:::

## Usage

### Basic Line Chart

Simple line chart with single dataset:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Revenue',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <LineChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Revenue',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}

export default function Example() {
  return <LineChart data={data} height={300} />
}
```

:::

### Multiple Datasets

Compare multiple data series:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Product A',
      data: [65, 59, 80, 81, 56],
      color: '#3b82f6',
    },
    {
      label: 'Product B',
      data: [28, 48, 40, 19, 86],
      color: '#10b981',
    },
    {
      label: 'Product C',
      data: [18, 38, 50, 29, 76],
      color: '#f59e0b',
    },
  ],
}
</script>

<template>
  <LineChart :data="data" :height="400" />
</template>
```

```tsx [React]
import { LineChart } from "@/components/ui/charts"

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    {
      label: 'Product A',
      data: [65, 59, 80, 81, 56],
      color: '#3b82f6',
    },
    {
      label: 'Product B',
      data: [28, 48, 40, 19, 86],
      color: '#10b981',
    },
    {
      label: 'Product C',
      data: [18, 38, 50, 29, 76],
      color: '#f59e0b',
    },
  ],
}

export default function Example() {
  return <LineChart data={data} height={400} />
}
```

:::

### Area Chart

Fill the area under the line:

::: code-group

```vue [Vue]
<template>
  <LineChart
    :data="data"
    :height="300"
    :area="true"
    :smooth="true"
  />
</template>
```

```tsx [React]
<LineChart
  data={data}
  height={300}
  area
  smooth
/>
```

```typescript [Angular]
<ui-line-chart
  [data]="data"
  [height]="300"
  [area]="true"
  [smooth]="true"
/>
```

:::

### Dark Theme

Perfect for dark mode applications:

::: code-group

```vue [Vue]
<template>
  <div class="dark">
    <LineChart
      :data="data"
      :height="300"
      theme="dark"
      class="bg-gray-900 rounded-lg p-4"
    />
  </div>
</template>
```

```tsx [React]
<div className="dark">
  <LineChart
    data={data}
    height={300}
    theme="dark"
    className="bg-gray-900 rounded-lg p-4"
  />
</div>
```

:::

### Smooth vs Sharp Lines

Toggle between smooth curves and sharp angles:

::: code-group

```vue [Vue]
<!-- Smooth curves (default) -->
<LineChart :data="data" :smooth="true" />

<!-- Sharp angles -->
<LineChart :data="data" :smooth="false" />
```

```tsx [React]
{/* Smooth curves (default) */}
<LineChart data={data} smooth />

{/* Sharp angles */}
<LineChart data={data} smooth={false} />
```

:::

### Custom Legend Position

Control where the legend appears:

::: code-group

```vue [Vue]
<template>
  <!-- Legend at top (default) -->
  <LineChart :data="data" legend-position="top" />

  <!-- Legend at bottom -->
  <LineChart :data="data" legend-position="bottom" />

  <!-- Legend at left -->
  <LineChart :data="data" legend-position="left" />

  <!-- Legend at right -->
  <LineChart :data="data" legend-position="right" />

  <!-- No legend -->
  <LineChart :data="data" :legend="false" />
</template>
```

```tsx [React]
{/* Legend at top (default) */}
<LineChart data={data} legendPosition="top" />

{/* Legend at bottom */}
<LineChart data={data} legendPosition="bottom" />

{/* No legend */}
<LineChart data={data} legend={false} />
```

:::

### With Zoom Controls

Enable zoom for detailed exploration:

::: code-group

```vue [Vue]
<template>
  <LineChart
    :data="data"
    :height="400"
    :zoom="true"
  />
</template>
```

```tsx [React]
<LineChart
  data={data}
  height={400}
  zoom
/>
```

:::

### Loading State

Show loading indicator while data loads:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { LineChart } from '@/components/ui/charts'

const loading = ref(true)
const data = ref(null)

// Simulate API call
setTimeout(() => {
  data.value = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [{ label: 'Sales', data: [10, 20, 30] }]
  }
  loading.value = false
}, 2000)
</script>

<template>
  <LineChart
    :data="data"
    :loading="loading"
    :height="300"
  />
</template>
```

```tsx [React]
import { useState, useEffect } from 'react'
import { LineChart } from "@/components/ui/charts"

export default function Example() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData({
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{ label: 'Sales', data: [10, 20, 30] }]
      })
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <LineChart
      data={data}
      loading={loading}
      height={300}
    />
  )
}
```

:::

### Empty State

Handle no data gracefully:

::: code-group

```vue [Vue]
<template>
  <LineChart
    :data="{ labels: [], datasets: [] }"
    :height="300"
    empty-text="No data available. Please check back later."
  />
</template>
```

```tsx [React]
<LineChart
  data={{ labels: [], datasets: [] }}
  height={300}
  emptyText="No data available. Please check back later."
/>
```

:::

## API Reference

### Props

| Prop | Type | Default | Description | Framework Support |
|------|------|---------|-------------|-------------------|
| `data` | `ChartData` | **required** | Chart data with labels and datasets | All |
| `height` | `number` | `300` | Chart height in pixels | All |
| `width` | `number \| string` | `'100%'` | Chart width (number in pixels or string like "100%") | All |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme | All |
| `legend` | `boolean` | `true` | Show/hide legend | All |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Legend position | All |
| `grid` | `boolean \| GridConfig` | `true` | Show/hide or configure grid lines | All |
| `tooltip` | `boolean \| TooltipConfig` | `true` | Show/hide or configure tooltip | All |
| `animation` | `boolean` | `true` | Enable/disable animations | All |
| `smooth` | `boolean` | `true` | Smooth curve lines (vs sharp angles) | All |
| `showPoints` | `boolean` | `true` | Show points on line | All |
| `pointSize` | `number` | `6` | Size of points in pixels | All |
| `area` | `boolean` | `false` | Fill area under line | All |
| `stack` | `boolean` | `false` | Stack multiple datasets | All |
| `zoom` | `boolean` | `false` | Enable zoom controls (Web only) | Vue, React, Angular |
| `dataLabels` | `boolean` | `false` | Show data labels on points | All |
| `loading` | `boolean` | `false` | Show loading state | All |
| `emptyText` | `string` | `'No data available'` | Empty state message | All |
| `className` | `string` | `undefined` | Custom CSS class | Vue, React, Angular, RN |
| `options` | `object` | `{}` | Advanced ECharts/fl_chart options | All |

### ChartData Type

The data structure is consistent across all frameworks:

```typescript
interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

interface ChartDataset {
  label: string
  data: number[]
  color?: string           // Line color
  borderColor?: string     // Border color (overrides color)
  backgroundColor?: string // Area fill color
  borderWidth?: number     // Line thickness
  fill?: boolean          // Fill area under line
  smooth?: boolean        // Override global smooth setting
}
```

### GridConfig Type

```typescript
interface GridConfig {
  show?: boolean
  left?: string | number
  right?: string | number
  top?: string | number
  bottom?: string | number
  containLabel?: boolean
}
```

### TooltipConfig Type

```typescript
interface TooltipConfig {
  show?: boolean
  trigger?: 'axis' | 'item'
  backgroundColor?: string
  textColor?: string
  fontSize?: number
}
```

## Color Schemes

Use built-in color schemes for consistent styling:

```typescript
import { ChartColorSchemes } from '@/components/ui/charts'

const data = {
  labels: ['A', 'B', 'C'],
  datasets: [
    {
      label: 'Series 1',
      data: [10, 20, 30],
      color: ChartColorSchemes.default[0]
    },
    {
      label: 'Series 2',
      data: [15, 25, 35],
      color: ChartColorSchemes.default[1]
    }
  ]
}

// Available schemes:
// - ChartColorSchemes.default (vibrant, modern)
// - ChartColorSchemes.pastel (soft, muted)
// - ChartColorSchemes.vivid (bold, saturated)
// - ChartColorSchemes.monochrome (grayscale)
```

## Advanced Examples

### Stacked Area Chart

```vue
<script setup lang="ts">
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
</script>

<template>
  <LineChart
    :data="stackedData"
    :height="400"
    :area="true"
    :stack="true"
  />
</template>
```

### Custom Grid Configuration

```vue
<template>
  <LineChart
    :data="data"
    :grid="{
      show: true,
      left: '10%',
      right: '10%',
      top: '20%',
      bottom: '15%',
      containLabel: true
    }"
  />
</template>
```

### Real-time Data Updates

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { LineChart } from '@/components/ui/charts'

const data = ref({
  labels: ['0s', '1s', '2s', '3s', '4s'],
  datasets: [{
    label: 'CPU Usage',
    data: [0, 0, 0, 0, 0],
    color: '#3b82f6'
  }]
})

let interval: NodeJS.Timeout

onMounted(() => {
  interval = setInterval(() => {
    // Shift labels and data
    data.value.labels.shift()
    data.value.labels.push(`${data.value.labels.length}s`)

    data.value.datasets[0].data.shift()
    data.value.datasets[0].data.push(Math.random() * 100)
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <LineChart :data="data" :height="300" :animation="false" />
</template>
```

## Performance Tips

1. **Disable animations for real-time data**: Set `animation={false}` for frequently updating charts
2. **Use key prop in React**: Add a unique key when data changes completely
3. **Memoize data**: Use `useMemo` (React) or `computed` (Vue) for expensive data transformations
4. **Debounce updates**: Debounce rapid data updates to reduce re-renders
5. **Lazy load**: Import chart components dynamically for better initial load time

```tsx
// React example
const LineChart = lazy(() => import('@/components/ui/charts/LineChart'))
```

## Accessibility

- **Keyboard Navigation**: Accessible via keyboard (zoom, tooltip interaction)
- **Screen Reader**: Chart data accessible via ARIA labels
- **Focus Management**: Proper focus handling for interactive elements
- **WCAG Compliance**: WCAG 2.1 Level AA compliant
- **High Contrast**: Works in high contrast mode

## Browser/Platform Support

| Platform | Support | Notes |
|----------|---------|-------|
| Chrome 90+ | ✅ Full | Recommended |
| Firefox 88+ | ✅ Full | |
| Safari 14+ | ✅ Full | |
| Edge 90+ | ✅ Full | |
| iOS 14+ | ✅ Full | Touch optimized |
| Android 10+ | ✅ Full | Touch optimized |

## Troubleshooting

### Chart not rendering

Make sure you've installed the dependencies:

```bash
# Check if dependencies are installed
npm list echarts vue-echarts  # Vue
npm list echarts echarts-for-react  # React
```

### Chart too small/large

Set explicit height and width:

```vue
<LineChart
  :data="data"
  :height="400"
  width="100%"
/>
```

### Data not updating

Ensure data is reactive:

```vue
// ✅ Correct - reactive
const data = ref({ ... })

// ❌ Wrong - not reactive
const data = { ... }
```

## Related Components

- [Bar Chart](/charts/bar-chart) - Coming soon
- [Pie Chart](/charts/pie-chart) - Coming soon
- [Area Chart](/charts/area-chart) - Coming soon

## Resources

- [ECharts Documentation](https://echarts.apache.org/en/option.html)
- [fl_chart Documentation](https://github.com/imaNNeo/fl_chart/blob/main/repo_files/documentations/line_chart.md)
- [Chart Colors Guide](/guide/theming#chart-colors)

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
