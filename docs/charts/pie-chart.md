# Pie Chart

Display proportional data as a pie or donut chart with customizable labels and legend.

<ComponentPreview name="PieChartDemo">
  <template #preview>
    <DemoContainer>
      <PieChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { PieChart } from '@/components/ui/charts'

const marketShare = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Market Share',
      data: [35, 25, 20, 20],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    },
  ],
}
</script>

<template>
  <PieChart :data="marketShare" :height="300" />
</template>
```

```tsx [React]
import { PieChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Market Share',
      data: [35, 25, 20, 20],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
    },
  ],
}

export default function App() {
  return <PieChart data={marketShare} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { PieChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [PieChartComponent],
  template: `<ui-pie-chart [data]="marketShare" [height]="300" />`
})
export class AppComponent {
  marketShare = {
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      {
        label: 'Market Share',
        data: [35, 25, 20, 20],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'],
      },
    ],
  }
}
```

```tsx [React Native]
import { PieChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Market Share',
      data: [35, 25, 20, 20],
      backgroundColor: ['#007AFF', '#34C759', '#FF9500', '#FF3B30'],
    },
  ],
}

export default function App() {
  return (
    <View className="p-4">
      <PieChart data={marketShare} height={300} />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/pie_chart.dart';

class MyApp extends StatelessWidget {
  final marketShare = ChartData(
    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
    datasets: [
      ChartDataset(
        label: 'Market Share',
        data: [35, 25, 20, 20],
        backgroundColor: [
          Color(0xFF3B82F6),
          Color(0xFF10B981),
          Color(0xFFF59E0B),
          Color(0xFFEF4444),
        ],
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyPieChart(
      data: marketShare,
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
npx galaxy-design@latest add pie-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add pie-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add pie-chart
```

```bash [bun]
bunx galaxy-design@latest add pie-chart
```

```bash [global]
# If you have installed galaxy-design globally
galaxy-design add pie-chart
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

### Basic Pie Chart

Simple pie chart with single dataset:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { PieChart } from '@/components/ui/charts'

const data = {
  labels: ['Direct', 'Email', 'Social', 'Referral'],
  datasets: [{
    label: 'Traffic Sources',
    data: [30, 25, 20, 25],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
  }]
}
</script>

<template>
  <PieChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { PieChart } from "@/components/ui/charts"

const data = {
  labels: ['Direct', 'Email', 'Social', 'Referral'],
  datasets: [{
    label: 'Traffic Sources',
    data: [30, 25, 20, 25],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444']
  }]
}

export default function Example() {
  return <PieChart data={data} height={300} />
}
```

:::

### Donut Chart

Create a donut chart using innerRadius:

::: code-group

```vue [Vue]
<template>
  <PieChart
    :data="data"
    :height="300"
    :inner-radius="50"
  />
</template>
```

```tsx [React]
<PieChart
  data={data}
  height={300}
  innerRadius={50}
/>
```

```typescript [Angular]
<ui-pie-chart
  [data]="data"
  [height]="300"
  [innerRadius]="50"
/>
```

:::

### With Percentages

Show percentage labels on slices:

::: code-group

```vue [Vue]
<template>
  <PieChart
    :data="data"
    :height="300"
    :show-percentage="true"
  />
</template>
```

```tsx [React]
<PieChart
  data={data}
  height={300}
  showPercentage
/>
```

```typescript [Angular]
<ui-pie-chart
  [data]="data"
  [height]="300"
  [showPercentage]="true"
/>
```

:::

### Label Position

Control where labels appear:

::: code-group

```vue [Vue]
<template>
  <!-- Outside labels (default) -->
  <PieChart :data="data" label-position="outside" />

  <!-- Inside labels -->
  <PieChart :data="data" label-position="inside" />

  <!-- Center labels -->
  <PieChart :data="data" label-position="center" />
</template>
```

```tsx [React]
{/* Outside labels (default) */}
<PieChart data={data} labelPosition="outside" />

{/* Inside labels */}
<PieChart data={data} labelPosition="inside" />

{/* Center labels */}
<PieChart data={data} labelPosition="center" />
```

:::

### Dark Theme

Perfect for dark mode applications:

::: code-group

```vue [Vue]
<template>
  <div class="dark">
    <PieChart
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
  <PieChart
    data={data}
    height={300}
    theme="dark"
    className="bg-gray-900 rounded-lg p-4"
  />
</div>
```

:::

### Custom Legend Position

Control where the legend appears:

::: code-group

```vue [Vue]
<template>
  <!-- Legend at right (default) -->
  <PieChart :data="data" legend-position="right" />

  <!-- Legend at bottom -->
  <PieChart :data="data" legend-position="bottom" />

  <!-- Legend at top -->
  <PieChart :data="data" legend-position="top" />

  <!-- Legend at left -->
  <PieChart :data="data" legend-position="left" />

  <!-- No legend -->
  <PieChart :data="data" :legend="false" />
</template>
```

```tsx [React]
{/* Legend at right (default) */}
<PieChart data={data} legendPosition="right" />

{/* Legend at bottom */}
<PieChart data={data} legendPosition="bottom" />

{/* No legend */}
<PieChart data={data} legend={false} />
```

:::

### Custom Radius

Adjust inner and outer radius:

::: code-group

```vue [Vue]
<template>
  <!-- Small donut -->
  <PieChart
    :data="data"
    :inner-radius="60"
    :outer-radius="80"
  />

  <!-- Large pie -->
  <PieChart
    :data="data"
    :inner-radius="0"
    :outer-radius="90"
  />
</template>
```

```tsx [React]
{/* Small donut */}
<PieChart
  data={data}
  innerRadius={60}
  outerRadius={80}
/>

{/* Large pie */}
<PieChart
  data={data}
  innerRadius={0}
  outerRadius={90}
/>
```

:::

### Loading State

Show loading indicator while data loads:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ref } from 'vue'
import { PieChart } from '@/components/ui/charts'

const loading = ref(true)
const data = ref(null)

// Simulate API call
setTimeout(() => {
  data.value = {
    labels: ['A', 'B', 'C'],
    datasets: [{ label: 'Data', data: [30, 40, 30] }]
  }
  loading.value = false
}, 2000)
</script>

<template>
  <PieChart
    :data="data"
    :loading="loading"
    :height="300"
  />
</template>
```

```tsx [React]
import { useState, useEffect } from 'react'
import { PieChart } from "@/components/ui/charts"

export default function Example() {
  const [loading, setLoading] = useState(true)
  const [data, setData] = useState(null)

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData({
        labels: ['A', 'B', 'C'],
        datasets: [{ label: 'Data', data: [30, 40, 30] }]
      })
      setLoading(false)
    }, 2000)
  }, [])

  return (
    <PieChart
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
  <PieChart
    :data="{ labels: [], datasets: [] }"
    :height="300"
    empty-text="No data available. Please check back later."
  />
</template>
```

```tsx [React]
<PieChart
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
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'right'` | Legend position | All |
| `animation` | `boolean` | `true` | Enable/disable animations | All |
| `innerRadius` | `number` | `0` | Inner radius (0 = pie, >0 = donut) | All |
| `outerRadius` | `number` | `70` | Outer radius percentage | All |
| `showPercentage` | `boolean` | `true` | Show percentage labels | All |
| `labelPosition` | `'inside' \| 'outside' \| 'center'` | `'outside'` | Label position | Vue, React, Angular, RN |
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
  backgroundColor?: string[]  // Array of colors for each slice
  borderColor?: string        // Border color
  borderWidth?: number        // Border thickness
}
```

## Color Schemes

Use built-in color schemes for consistent styling:

```typescript
import { ChartColorSchemes } from '@/components/ui/charts'

const data = {
  labels: ['A', 'B', 'C', 'D'],
  datasets: [{
    label: 'Data',
    data: [25, 25, 25, 25],
    backgroundColor: ChartColorSchemes.default
  }]
}

// Available schemes:
// - ChartColorSchemes.default (vibrant, modern)
// - ChartColorSchemes.pastel (soft, muted)
// - ChartColorSchemes.vivid (bold, saturated)
// - ChartColorSchemes.monochrome (grayscale)
```

## Advanced Examples

### Nested Donut Chart

```vue
<script setup lang="ts">
const data = {
  labels: ['Desktop', 'Mobile', 'Tablet'],
  datasets: [{
    label: 'Device Usage',
    data: [55, 35, 10],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b']
  }]
}
</script>

<template>
  <div class="relative">
    <PieChart
      :data="data"
      :height="400"
      :inner-radius="40"
      :outer-radius="70"
    />
    <div class="absolute inset-0 flex items-center justify-center">
      <div class="text-center">
        <p class="text-3xl font-bold">100%</p>
        <p class="text-sm text-muted-foreground">Total</p>
      </div>
    </div>
  </div>
</template>
```

### With Custom Tooltip

```vue
<template>
  <PieChart
    :data="data"
    :tooltip="{
      formatter: (params) => {
        return `${params.name}: ${params.value} (${params.percent}%)`
      }
    }"
  />
</template>
```

### Real-time Data Updates

```vue
<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { PieChart } from '@/components/ui/charts'

const data = ref({
  labels: ['Active', 'Idle', 'Offline'],
  datasets: [{
    label: 'Server Status',
    data: [60, 30, 10],
    backgroundColor: ['#10b981', '#f59e0b', '#ef4444']
  }]
})

let interval: NodeJS.Timeout

onMounted(() => {
  interval = setInterval(() => {
    // Update data randomly
    data.value.datasets[0].data = [
      Math.floor(Math.random() * 50) + 40,
      Math.floor(Math.random() * 30) + 10,
      Math.floor(Math.random() * 20)
    ]
  }, 3000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <PieChart :data="data" :height="300" />
</template>
```

## Performance Tips

1. **Limit number of slices**: Too many slices can make the chart hard to read (group small values)
2. **Use key prop in React**: Add a unique key when data changes completely
3. **Memoize data**: Use `useMemo` (React) or `computed` (Vue) for expensive data transformations
4. **Disable animations for frequent updates**: Set `animation={false}` for real-time data
5. **Lazy load**: Import chart components dynamically for better initial load time

```tsx
// React example
const PieChart = lazy(() => import('@/components/ui/charts/PieChart'))
```

## Accessibility

- **Keyboard Navigation**: Accessible via keyboard (tooltip interaction)
- **Screen Reader**: Chart data accessible via ARIA labels
- **Focus Management**: Proper focus handling for interactive elements
- **WCAG Compliance**: WCAG 2.1 Level AA compliant
- **High Contrast**: Works in high contrast mode
- **Color Blind Friendly**: Use patterns or labels alongside colors

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

### Slices not visible

Ensure data values are positive numbers:

```vue
// ✅ Correct
const data = { data: [30, 40, 30] }

// ❌ Wrong - negative values
const data = { data: [-10, 40, 30] }
```

### Labels overlapping

Use inside labels or adjust radius:

```vue
<PieChart
  :data="data"
  label-position="inside"
  :outer-radius="80"
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

## Best Practices

1. **Limit slices to 5-7**: Too many slices make the chart hard to read
2. **Sort slices by value**: Place largest slices first for better readability
3. **Use contrasting colors**: Ensure adjacent slices have distinct colors
4. **Show percentages**: Help users understand proportions at a glance
5. **Consider donut for center text**: Use innerRadius to add totals or summaries

## Related Components

- [Line Chart](/charts/line-chart) - Display trends over time
- [Bar Chart](/charts/bar-chart) - Compare values across categories
- [Area Chart](/charts/area-chart) - Coming soon

## Resources

- [ECharts Pie Chart Documentation](https://echarts.apache.org/en/option.html#series-pie)
- [fl_chart Pie Chart Documentation](https://github.com/imaNNeo/fl_chart/blob/main/repo_files/documentations/pie_chart.md)
- [Chart Colors Guide](/guide/theming#chart-colors)

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
