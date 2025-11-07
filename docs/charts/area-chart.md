# Area Chart

Visualize cumulative totals over time with filled areas, smooth curves, and gradient support.

<ComponentPreview name="AreaChartDemo">
  <template #preview>
    <DemoContainer>
      <AreaChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AreaChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 45, 35, 50, 45, 60],
      color: '#3b82f6',
    },
    {
      label: 'Revenue',
      data: [20, 35, 30, 45, 55, 50],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <AreaChart :data="salesData" :height="300" gradient />
</template>
```

```tsx [React]
import { AreaChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 45, 35, 50, 45, 60],
      color: '#3b82f6',
    },
    {
      label: 'Revenue',
      data: [20, 35, 30, 45, 55, 50],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return <AreaChart data={salesData} height={300} gradient />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { AreaChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AreaChartComponent],
  template: `<ui-area-chart [data]="salesData" [height]="300" [gradient]="true" />`
})
export class AppComponent {
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Sales',
        data: [30, 45, 35, 50, 45, 60],
        color: '#3b82f6',
      },
      {
        label: 'Revenue',
        data: [20, 35, 30, 45, 55, 50],
        color: '#10b981',
      },
    ],
  }
}
```

```tsx [React Native]
import { AreaChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Sales',
      data: [30, 45, 35, 50, 45, 60],
      color: '#3b82f6',
    },
    {
      label: 'Revenue',
      data: [20, 35, 30, 45, 55, 50],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return <AreaChart data={salesData} height={300} gradient />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:galaxy_ui/components/charts.dart';

class MyApp extends StatelessWidget {
  final salesData = ChartData(
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      ChartDataset(
        label: 'Sales',
        data: [30, 45, 35, 50, 45, 60],
        color: '#3b82f6',
      ),
      ChartDataset(
        label: 'Revenue',
        data: [20, 35, 30, 45, 55, 50],
        color: '#10b981',
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyAreaChart(
      data: salesData,
      height: 300,
      gradient: true,
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
npx galaxy-ui-cli@latest add area-chart
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add area-chart
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add area-chart
```

```bash [bun]
bunx galaxy-ui-cli@latest add area-chart
```

:::

::: tip Dependencies
This component automatically installs the following dependencies:
- **Vue**: `vue-echarts@^7.0.3`, `echarts@^5.5.1`
- **React**: `echarts-for-react@^3.0.2`, `echarts@^5.5.1`
- **Angular**: `ngx-echarts@^18.0.0`, `echarts@^5.5.1`
- **React Native**: `@wuba/react-native-echarts@^3.0.1`, `echarts@^5.5.1`, `@shopify/react-native-skia@^1.6.4`
- **Flutter**: `fl_chart@^0.68.0`
:::

## Usage

### Basic Area Chart

::: code-group

```vue [Vue]
<script setup lang="ts">
import { AreaChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue',
    data: [30, 45, 35, 50, 49, 60],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <AreaChart :data="salesData" :height="300" />
</template>
```

```tsx [React]
import { AreaChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [{
    label: 'Revenue',
    data: [30, 45, 35, 50, 49, 60],
    color: '#3b82f6'
  }]
}

export default function App() {
  return <AreaChart data={salesData} height={300} />
}
```

:::

### With Gradient Fill

```vue
<template>
  <AreaChart
    :data="data"
    :height="300"
    :gradient="true"
    :opacity="0.6"
  />
</template>
```

### Stacked Area Chart

```vue
<script setup lang="ts">
const data = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [
    { label: 'Product A', data: [320, 332, 301, 334, 390], color: '#3b82f6' },
    { label: 'Product B', data: [220, 182, 191, 234, 290], color: '#10b981' },
    { label: 'Product C', data: [150, 232, 201, 154, 190], color: '#f59e0b' }
  ]
}
</script>

<template>
  <AreaChart :data="data" :height="400" :stack="true" />
</template>
```

### Dark Theme

```vue
<template>
  <div class="dark">
    <AreaChart
      :data="data"
      :height="300"
      theme="dark"
      class="bg-gray-900 rounded-lg p-4"
    />
  </div>
</template>
```

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Chart data with labels and datasets |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `'100%'` | Chart width |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `legend` | `boolean` | `true` | Show/hide legend |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Legend position |
| `smooth` | `boolean` | `true` | Smooth curve lines |
| `showPoints` | `boolean` | `true` | Show points on line |
| `pointSize` | `number` | `6` | Size of points |
| `stack` | `boolean` | `false` | Stack multiple datasets |
| `opacity` | `number` | `0.6` | Area fill opacity (0-1) |
| `gradient` | `boolean` | `false` | Enable gradient fill |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyText` | `string` | `'No data available'` | Empty state message |
| `zoom` | `boolean` | `false` | Enable zoom controls (Web only) |

## Performance Tips

1. **Disable animations for real-time data**: Set `animation={false}`
2. **Use memoization**: Use `useMemo` (React) or `computed` (Vue)
3. **Limit data points**: Too many points can impact performance
4. **Lazy load**: Import chart components dynamically

## Browser/Platform Support

| Platform | Support | Notes |
|----------|---------|-------|
| Chrome 90+ | ✅ Full | Recommended |
| Firefox 88+ | ✅ Full | |
| Safari 14+ | ✅ Full | |
| Edge 90+ | ✅ Full | |
| iOS 14+ | ✅ Full | Touch optimized |
| Android 10+ | ✅ Full | Touch optimized |

## Related Components

- [Line Chart](/charts/line-chart) - Display trends without area fill
- [Bar Chart](/charts/bar-chart) - Compare values across categories
- [Pie Chart](/charts/pie-chart) - Show proportional data

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
