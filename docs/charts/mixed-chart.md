# Mixed Chart

Combine multiple chart types (line, bar, area) in a single visualization for powerful multi-dimensional data analysis.

<ComponentPreview name="MixedChartDemo">
  <template #preview>
    <DemoContainer>
      <MixedChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { MixedChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [30, 45, 35, 50, 45, 60],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Sales',
      data: [20, 35, 30, 45, 55, 50],
      type: 'bar',
      color: '#10b981',
    },
    {
      label: 'Profit',
      data: [15, 25, 22, 30, 35, 40],
      type: 'area',
      color: '#f59e0b',
    },
  ],
}
</script>

<template>
  <MixedChart :data="salesData" :height="350" />
</template>
```

```tsx [React]
import { MixedChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [30, 45, 35, 50, 45, 60],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Sales',
      data: [20, 35, 30, 45, 55, 50],
      type: 'bar',
      color: '#10b981',
    },
    {
      label: 'Profit',
      data: [15, 25, 22, 30, 35, 40],
      type: 'area',
      color: '#f59e0b',
    },
  ],
}

export default function App() {
  return <MixedChart data={salesData} height={350} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { MixedChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MixedChartComponent],
  template: `<ui-mixed-chart [data]="salesData" [height]="350" />`
})
export class AppComponent {
  salesData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue',
        data: [30, 45, 35, 50, 45, 60],
        type: 'line',
        color: '#3b82f6',
      },
      {
        label: 'Sales',
        data: [20, 35, 30, 45, 55, 50],
        type: 'bar',
        color: '#10b981',
      },
      {
        label: 'Profit',
        data: [15, 25, 22, 30, 35, 40],
        type: 'area',
        color: '#f59e0b',
      },
    ],
  }
}
```

```tsx [React Native]
import { MixedChart } from "@/components/ui/charts"

const salesData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
  datasets: [
    {
      label: 'Revenue',
      data: [30, 45, 35, 50, 45, 60],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Sales',
      data: [20, 35, 30, 45, 55, 50],
      type: 'bar',
      color: '#10b981',
    },
    {
      label: 'Profit',
      data: [15, 25, 22, 30, 35, 40],
      type: 'area',
      color: '#f59e0b',
    },
  ],
}

export default function App() {
  return <MixedChart data={salesData} height={350} />
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
        label: 'Revenue',
        data: [30, 45, 35, 50, 45, 60],
        type: 'line',
        color: Color(0xFF3b82f6),
      ),
      ChartDataset(
        label: 'Sales',
        data: [20, 35, 30, 45, 55, 50],
        type: 'bar',
        color: Color(0xFF10b981),
      ),
      ChartDataset(
        label: 'Profit',
        data: [15, 25, 22, 30, 35, 40],
        type: 'area',
        color: Color(0xFFf59e0b),
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyMixedChart(
      data: salesData,
      height: 350,
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
npx galaxy-ui-cli@latest add mixed-chart
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add mixed-chart
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add mixed-chart
```

```bash [bun]
bunx galaxy-ui-cli@latest add mixed-chart
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

## Features

- 📊 **Multiple Chart Types** - Combine line, bar, and area charts in one visualization
- 🎨 **Per-Dataset Styling** - Each dataset can have its own chart type and colors
- 📈 **Advanced Analysis** - Compare different metrics with appropriate visualizations
- 📱 **Responsive** - Adapts to all screen sizes seamlessly
- 🌓 **Dark Mode** - Built-in dark theme support
- ⚡ **Performance** - Optimized rendering even with multiple datasets

## Use Cases

- **Business Dashboards** - Compare revenue, sales, and profit in one view
- **Analytics** - Visualize multiple KPIs with appropriate chart types
- **Financial Reports** - Mix actual vs. forecast with different visualizations
- **Performance Monitoring** - Track multiple metrics over time
- **Multi-Metric Analysis** - Combine related data points with suitable chart types

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Chart data with labels and datasets |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `"100%"` | Chart width |
| `theme` | `"light" \| "dark"` | `"light"` | Color theme |
| `legend` | `boolean` | `true` | Show/hide legend |
| `legendPosition` | `"top" \| "bottom" \| "left" \| "right"` | `"top"` | Legend position |
| `grid` | `boolean \| GridConfig` | `true` | Show/hide grid lines or custom grid config |
| `tooltip` | `boolean \| TooltipConfig` | `true` | Enable/disable tooltip or custom config |
| `animation` | `boolean` | `true` | Enable/disable animations |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyText` | `string` | `"No data available"` | Text shown when no data |

### ChartData Interface

```typescript
interface ChartData {
  labels: string[]
  datasets: ChartDataset[]
}

interface ChartDataset {
  label: string
  data: number[]
  type?: 'line' | 'bar' | 'area'  // Specify chart type per dataset
  color?: string
  smooth?: boolean  // For line/area charts
}
```

## Examples

### Line + Bar Combination

Compare trends with exact values:

::: code-group

```vue [Vue]
<script setup lang="ts">
const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Target',
      data: [100, 120, 140, 160],
      type: 'line',
      color: '#8b5cf6',
    },
    {
      label: 'Actual',
      data: [90, 130, 135, 155],
      type: 'bar',
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <MixedChart :data="data" />
</template>
```

```tsx [React]
const data = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [
    {
      label: 'Target',
      data: [100, 120, 140, 160],
      type: 'line',
      color: '#8b5cf6',
    },
    {
      label: 'Actual',
      data: [90, 130, 135, 155],
      type: 'bar',
      color: '#10b981',
    },
  ],
}

<MixedChart data={data} />
```

:::

### Multiple Lines + Area

Show ranges with trends:

::: code-group

```vue [Vue]
<script setup lang="ts">
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Users',
      data: [1200, 1900, 1500, 2100, 1800],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Sessions',
      data: [2000, 2800, 2200, 3100, 2700],
      type: 'line',
      color: '#10b981',
    },
    {
      label: 'Bandwidth',
      data: [800, 1200, 900, 1500, 1100],
      type: 'area',
      color: '#f59e0b',
    },
  ],
}
</script>

<template>
  <MixedChart :data="data" :height="400" />
</template>
```

```tsx [React]
const data = {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  datasets: [
    {
      label: 'Users',
      data: [1200, 1900, 1500, 2100, 1800],
      type: 'line',
      color: '#3b82f6',
    },
    {
      label: 'Sessions',
      data: [2000, 2800, 2200, 3100, 2700],
      type: 'line',
      color: '#10b981',
    },
    {
      label: 'Bandwidth',
      data: [800, 1200, 900, 1500, 1100],
      type: 'area',
      color: '#f59e0b',
    },
  ],
}

<MixedChart data={data} height={400} />
```

:::

### Dark Theme

::: code-group

```vue [Vue]
<MixedChart :data="data" theme="dark" />
```

```tsx [React]
<MixedChart data={data} theme="dark" />
```

:::

### Legend Position

::: code-group

```vue [Vue]
<MixedChart :data="data" legendPosition="bottom" />
```

```tsx [React]
<MixedChart data={data} legendPosition="bottom" />
```

:::

## Tips

- **Consistent Scales**: Ensure all datasets use comparable value ranges
- **Type Selection**: Use lines for trends, bars for comparisons, areas for volumes
- **Color Contrast**: Choose distinct colors for each dataset
- **Legend Clarity**: Position legend for easy reference without blocking data
- **Dataset Order**: Place most important data in front (last in array)

## Related Components

- [Line Chart](/charts/line-chart) - For pure line visualizations
- [Bar Chart](/charts/bar-chart) - For categorical comparisons
- [Area Chart](/charts/area-chart) - For filled area visualizations
