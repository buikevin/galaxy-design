# Scatter Chart

Display distribution and correlation analysis with customizable scatter plots and bubble charts.

<ComponentPreview name="ScatterChartDemo">
  <template #preview>
    <DemoContainer>
      <ScatterChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScatterChart } from '@/components/ui/charts'

const scatterData = {
  datasets: [
    {
      label: 'Group A',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      color: '#3b82f6',
    },
    {
      label: 'Group B',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <ScatterChart
    :data="scatterData"
    :height="300"
    xAxisLabel="X Axis"
    yAxisLabel="Y Axis"
  />
</template>
```

```tsx [React]
import { ScatterChart } from "@/components/ui/charts"

const scatterData = {
  datasets: [
    {
      label: 'Group A',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      color: '#3b82f6',
    },
    {
      label: 'Group B',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return (
    <ScatterChart
      data={scatterData}
      height={300}
      xAxisLabel="X Axis"
      yAxisLabel="Y Axis"
    />
  )
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { ScatterChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ScatterChartComponent],
  template: `
    <ui-scatter-chart
      [data]="scatterData"
      [height]="300"
      xAxisLabel="X Axis"
      yAxisLabel="Y Axis"
    />
  `
})
export class AppComponent {
  scatterData = {
    datasets: [
      {
        label: 'Group A',
        data: [
          [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
          [35, 45], [40, 50], [45, 55], [50, 60]
        ],
        color: '#3b82f6',
      },
      {
        label: 'Group B',
        data: [
          [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
          [38, 25], [42, 20], [48, 15], [52, 10]
        ],
        color: '#10b981',
      },
    ],
  }
}
```

```tsx [React Native]
import { ScatterChart } from "@/components/ui/charts"

const scatterData = {
  datasets: [
    {
      label: 'Group A',
      data: [
        [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
        [35, 45], [40, 50], [45, 55], [50, 60]
      ],
      color: '#3b82f6',
    },
    {
      label: 'Group B',
      data: [
        [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
        [38, 25], [42, 20], [48, 15], [52, 10]
      ],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return (
    <ScatterChart
      data={scatterData}
      height={300}
      xAxisLabel="X Axis"
      yAxisLabel="Y Axis"
    />
  )
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:galaxy_ui/components/charts.dart';

class MyApp extends StatelessWidget {
  final scatterData = ChartData(
    datasets: [
      ChartDataset(
        label: 'Group A',
        data: [
          [10, 20], [15, 25], [20, 30], [25, 35], [30, 40],
          [35, 45], [40, 50], [45, 55], [50, 60]
        ],
        color: '#3b82f6',
      ),
      ChartDataset(
        label: 'Group B',
        data: [
          [12, 50], [18, 45], [22, 40], [28, 35], [32, 30],
          [38, 25], [42, 20], [48, 15], [52, 10]
        ],
        color: '#10b981',
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyScatterChart(
      data: scatterData,
      height: 300,
      xAxisLabel: 'X Axis',
      yAxisLabel: 'Y Axis',
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
npx galaxy-design@latest add scatter-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add scatter-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add scatter-chart
```

```bash [bun]
bunx galaxy-design@latest add scatter-chart
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

### Basic Scatter Chart

::: code-group

```vue [Vue]
<script setup lang="ts">
import { ScatterChart } from '@/components/ui/charts'

const scatterData = {
  labels: ['Dataset'],
  datasets: [{
    label: 'Sales vs Revenue',
    data: [
      [12, 45],
      [19, 88],
      [25, 68],
      [33, 92],
      [42, 105]
    ],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <ScatterChart
    :data="scatterData"
    :height="400"
    xAxisLabel="Sales (units)"
    yAxisLabel="Revenue ($K)"
  />
</template>
```

```tsx [React]
import { ScatterChart } from "@/components/ui/charts"

const scatterData = {
  labels: ['Dataset'],
  datasets: [{
    label: 'Sales vs Revenue',
    data: [
      [12, 45],
      [19, 88],
      [25, 68],
      [33, 92],
      [42, 105]
    ],
    color: '#3b82f6'
  }]
}

export default function App() {
  return (
    <ScatterChart
      data={scatterData}
      height={400}
      xAxisLabel="Sales (units)"
      yAxisLabel="Revenue ($K)"
    />
  )
}
```

:::

### Multiple Datasets

```vue
<script setup lang="ts">
const data = {
  labels: ['Comparison'],
  datasets: [
    {
      label: 'Product A',
      data: [[12, 45], [19, 88], [25, 68], [33, 92]],
      color: '#3b82f6'
    },
    {
      label: 'Product B',
      data: [[15, 52], [22, 75], [28, 82], [35, 98]],
      color: '#10b981'
    }
  ]
}
</script>

<template>
  <ScatterChart :data="data" :height="400" />
</template>
```

### Bubble Chart (with Size)

```vue
<script setup lang="ts">
const bubbleData = {
  labels: ['Metrics'],
  datasets: [{
    label: 'Market Share',
    // Format: [x, y, size]
    data: [
      [12, 45, 50],
      [19, 88, 120],
      [25, 68, 80],
      [33, 92, 150]
    ],
    color: '#8b5cf6'
  }]
}
</script>

<template>
  <ScatterChart
    :data="bubbleData"
    :height="400"
    :symbolSize="10"
  />
</template>
```

### With Object Data Format

```vue
<script setup lang="ts">
const objectData = {
  labels: ['Dataset'],
  datasets: [{
    label: 'Performance',
    data: [
      { x: 10, y: 45 },
      { x: 20, y: 75 },
      { x: 30, y: 68 },
      { x: 40, y: 92 }
    ],
    color: '#f59e0b'
  }]
}
</script>

<template>
  <ScatterChart :data="objectData" :height="400" />
</template>
```

### Dark Theme

```vue
<template>
  <div class="dark">
    <ScatterChart
      :data="data"
      :height="400"
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
| `data` | `ChartData` | **required** | Chart data with x,y coordinates |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `'100%'` | Chart width |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `legend` | `boolean` | `true` | Show/hide legend |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Legend position |
| `symbolSize` | `number` | `10` | Size of scatter points |
| `opacity` | `number` | `0.8` | Point opacity (0-1) |
| `xAxisLabel` | `string` | - | X-axis label text |
| `yAxisLabel` | `string` | - | Y-axis label text |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyText` | `string` | `'No data available'` | Empty state message |

## Data Format

Scatter Chart supports multiple data formats:

### 1. Array Format `[x, y]`

```typescript
data: [
  [12, 45],
  [19, 88],
  [25, 68]
]
```

### 2. Array with Size `[x, y, size]`

For bubble charts:

```typescript
data: [
  [12, 45, 50],    // size: 50
  [19, 88, 120],   // size: 120
  [25, 68, 80]     // size: 80
]
```

### 3. Object Format `{x, y}`

```typescript
data: [
  { x: 12, y: 45 },
  { x: 19, y: 88 },
  { x: 25, y: 68 }
]
```

### 4. Object with Value `{x, y, value}`

```typescript
data: [
  { x: 12, y: 45, value: 50 },
  { x: 19, y: 88, value: 120 }
]
```

## Use Cases

### 1. Correlation Analysis

Analyze relationship between two variables:

```typescript
const correlationData = {
  labels: ['Correlation'],
  datasets: [{
    label: 'Study Hours vs Test Score',
    data: [
      [2, 65], [3, 72], [4, 78], [5, 85],
      [6, 88], [7, 92], [8, 95]
    ],
    color: '#3b82f6'
  }]
}
```

### 2. Cluster Analysis

Visualize data clusters:

```typescript
const clusterData = {
  labels: ['Clusters'],
  datasets: [
    {
      label: 'Cluster A',
      data: [[12, 45], [14, 48], [16, 50]],
      color: '#3b82f6'
    },
    {
      label: 'Cluster B',
      data: [[25, 75], [27, 78], [29, 80]],
      color: '#10b981'
    }
  ]
}
```

### 3. Market Analysis

Compare product positioning:

```typescript
const marketData = {
  labels: ['Products'],
  datasets: [{
    label: 'Price vs Quality',
    data: [
      [50, 7.5, 100],  // [price, quality, market share]
      [75, 8.2, 150],
      [100, 9.0, 200]
    ],
    color: '#8b5cf6'
  }]
}
```

## Performance Tips

1. **Limit data points**: Keep points under 1000 for smooth performance
2. **Use memoization**: Memoize data that doesn't change frequently
3. **Optimize rendering**: Use `useMemo` (React) or `computed` (Vue)
4. **Reduce symbol size**: Smaller symbols render faster on mobile

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

- [Line Chart](/charts/line-chart) - Display trends over time
- [Bar Chart](/charts/bar-chart) - Compare categorical values
- [Radar Chart](/charts/radar-chart) - Multi-dimensional comparison

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
