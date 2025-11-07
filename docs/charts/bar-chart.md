# Bar Chart

Display data as vertical or horizontal bars with support for stacked and grouped layouts.

<ComponentPreview name="BarChartDemo">
  <template #preview>
    <DemoContainer>
      <BarChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { BarChart } from '@/components/ui/charts'

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
  <BarChart :data="salesData" :height="300" />
</template>
```

```tsx [React]
import { BarChart } from "@/components/ui/charts"

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
  return <BarChart data={salesData} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { BarChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [BarChartComponent],
  template: `<ui-bar-chart [data]="salesData" [height]="300" />`
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
import { BarChart } from "@/components/ui/charts"

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
      <BarChart data={salesData} height={300} />
    </View>
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:your_app/components/ui/charts/bar_chart.dart';

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
    return GalaxyBarChart(
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
npx galaxy-ui-cli@latest add bar-chart
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add bar-chart
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add bar-chart
```

```bash [bun]
bunx galaxy-ui-cli@latest add bar-chart
```

```bash [global]
# If you have installed galaxy-ui-cli globally
galaxy-ui-cli add bar-chart
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

### Basic Bar Chart

Simple vertical bar chart with single dataset:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { BarChart } from '@/components/ui/charts'

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
  <BarChart :data="data" :height="300" />
</template>
```

```tsx [React]
import { BarChart } from "@/components/ui/charts"

const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [{
    label: 'Revenue',
    data: [120, 190, 300, 500, 420],
    color: '#3b82f6'
  }]
}

export default function Example() {
  return <BarChart data={data} height={300} />
}
```

:::

### Horizontal Bar Chart

Display bars horizontally for better label readability:

::: code-group

```vue [Vue]
<template>
  <BarChart
    :data="data"
    :height="300"
    :horizontal="true"
  />
</template>
```

```tsx [React]
<BarChart
  data={data}
  height={300}
  horizontal
/>
```

```typescript [Angular]
<ui-bar-chart
  [data]="data"
  [height]="300"
  [horizontal]="true"
/>
```

:::

### Grouped Bar Chart

Compare multiple datasets side by side:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { BarChart } from '@/components/ui/charts'

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: '2023',
      data: [65, 59, 80, 81],
      color: '#3b82f6',
    },
    {
      label: '2024',
      data: [75, 68, 90, 95],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <BarChart :data="data" :height="400" />
</template>
```

```tsx [React]
import { BarChart } from "@/components/ui/charts"

const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: '2023',
      data: [65, 59, 80, 81],
      color: '#3b82f6',
    },
    {
      label: '2024',
      data: [75, 68, 90, 95],
      color: '#10b981',
    },
  ],
}

export default function Example() {
  return <BarChart data={data} height={400} />
}
```

:::

### Stacked Bar Chart

Stack multiple datasets to show total composition:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { BarChart } from '@/components/ui/charts'

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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
  <BarChart
    :data="data"
    :height="400"
    :stacked="true"
  />
</template>
```

```tsx [React]
import { BarChart } from "@/components/ui/charts"

const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
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

export default function Example() {
  return <BarChart data={data} height={400} stacked />
}
```

:::

### With Data Labels

Show values on top of bars:

::: code-group

```vue [Vue]
<template>
  <BarChart
    :data="data"
    :height="300"
    :show-data-labels="true"
  />
</template>
```

```tsx [React]
<BarChart
  data={data}
  height={300}
  showDataLabels
/>
```

```typescript [Angular]
<ui-bar-chart
  [data]="data"
  [height]="300"
  [showDataLabels]="true"
/>
```

:::

### Dark Theme

Perfect for dark mode applications:

::: code-group

```vue [Vue]
<template>
  <div class="dark">
    <BarChart
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
  <BarChart
    data={data}
    height={300}
    theme="dark"
    className="bg-gray-900 rounded-lg p-4"
  />
</div>
```

:::

### Custom Bar Width and Gap

Control bar appearance:

::: code-group

```vue [Vue]
<template>
  <BarChart
    :data="data"
    :height="300"
    bar-width="30"
    bar-gap="20%"
  />
</template>
```

```tsx [React]
<BarChart
  data={data}
  height={300}
  barWidth={30}
  barGap="20%"
/>
```

:::

### With Gradient

Add gradient fill to bars:

::: code-group

```vue [Vue]
<template>
  <BarChart
    :data="data"
    :height="300"
    :gradient="true"
  />
</template>
```

```tsx [React]
<BarChart
  data={data}
  height={300}
  gradient
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
| `horizontal` | `boolean` | `false` | Horizontal bar layout | All |
| `stacked` | `boolean` | `false` | Stack multiple datasets | All |
| `showDataLabels` | `boolean` | `false` | Show data labels on bars | All |
| `barWidth` | `string \| number` | `undefined` | Bar width (px or %) | All |
| `barGap` | `string \| number` | `undefined` | Gap between bars (px or %) | All |
| `gradient` | `boolean` | `false` | Enable gradient fill | All |
| `zoom` | `boolean` | `false` | Enable zoom controls (Web only) | Vue, React, Angular |
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
  color?: string           // Bar color
  borderColor?: string     // Border color (overrides color)
  backgroundColor?: string // Background color
  borderWidth?: number     // Border thickness
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

### Horizontal Stacked Bar Chart

```vue
<script setup lang="ts">
const data = {
  labels: ['Product A', 'Product B', 'Product C', 'Product D'],
  datasets: [
    {
      label: 'Online Sales',
      data: [4200, 5300, 4100, 6200],
      color: '#3b82f6',
    },
    {
      label: 'In-store Sales',
      data: [3800, 4200, 5500, 3900],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <BarChart
    :data="data"
    :height="400"
    :horizontal="true"
    :stacked="true"
  />
</template>
```

### With Custom Grid Configuration

```vue
<template>
  <BarChart
    :data="data"
    :grid="{
      show: true,
      left: '15%',
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
import { BarChart } from '@/components/ui/charts'

const data = ref({
  labels: ['0s', '1s', '2s', '3s', '4s'],
  datasets: [{
    label: 'Requests/sec',
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
    data.value.datasets[0].data.push(Math.floor(Math.random() * 100))
  }, 1000)
})

onUnmounted(() => {
  clearInterval(interval)
})
</script>

<template>
  <BarChart :data="data" :height="300" :animation="false" />
</template>
```

## Performance Tips

1. **Disable animations for real-time data**: Set `animation={false}` for frequently updating charts
2. **Use key prop in React**: Add a unique key when data changes completely
3. **Memoize data**: Use `useMemo` (React) or `computed` (Vue) for expensive data transformations
4. **Limit data points**: Too many bars can impact performance (consider pagination)
5. **Lazy load**: Import chart components dynamically for better initial load time

```tsx
// React example
const BarChart = lazy(() => import('@/components/ui/charts/BarChart'))
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

### Bars overlapping

Adjust bar width and gap:

```vue
<BarChart
  :data="data"
  bar-width="20"
  bar-gap="10%"
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

- [Line Chart](/charts/line-chart) - Display trends over time
- [Pie Chart](/charts/pie-chart) - Show proportional data
- [Area Chart](/charts/area-chart) - Coming soon

## Resources

- [ECharts Bar Chart Documentation](https://echarts.apache.org/en/option.html#series-bar)
- [fl_chart Bar Chart Documentation](https://github.com/imaNNeo/fl_chart/blob/main/repo_files/documentations/bar_chart.md)
- [Chart Colors Guide](/guide/theming#chart-colors)

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
