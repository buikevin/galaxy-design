# Donut Chart

Display proportional data as a donut chart with a hollow center, perfect for dashboards and data visualization.

<ComponentPreview name="DonutChartDemo">
  <template #preview>
    <DemoContainer>
      <DonutChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { DonutChart } from '@/components/ui/charts'

const marketShare = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  datasets: [{
    label: 'Browser Usage',
    data: [45, 25, 15, 10, 5],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  }],
}
</script>

<template>
  <DonutChart :data="marketShare" :height="300" />
</template>
```

```tsx [React]
import { DonutChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  datasets: [{
    label: 'Browser Usage',
    data: [45, 25, 15, 10, 5],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  }],
}

export default function App() {
  return <DonutChart data={marketShare} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { DonutChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DonutChartComponent],
  template: `<ui-donut-chart [data]="marketShare" [height]="300" />`
})
export class AppComponent {
  marketShare = {
    labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
    datasets: [{
      label: 'Browser Usage',
      data: [45, 25, 15, 10, 5],
      backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
    }],
  }
}
```

```tsx [React Native]
import { DonutChart } from "@/components/ui/charts"

const marketShare = {
  labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
  datasets: [{
    label: 'Browser Usage',
    data: [45, 25, 15, 10, 5],
    backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
  }],
}

export default function App() {
  return <DonutChart data={marketShare} height={300} />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:galaxy_ui/components/charts.dart';

class MyApp extends StatelessWidget {
  final marketShare = ChartData(
    labels: ['Chrome', 'Safari', 'Firefox', 'Edge', 'Other'],
    datasets: [
      ChartDataset(
        label: 'Browser Usage',
        data: [45, 25, 15, 10, 5],
        backgroundColor: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'],
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyDonutChart(
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
npx galaxy-design@latest add donut-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add donut-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add donut-chart
```

```bash [bun]
bunx galaxy-design@latest add donut-chart
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

- 🍩 **Hollow Center** - Distinctive donut shape with customizable inner radius
- 📊 **Data Visualization** - Perfect for showing proportions and percentages
- 🎨 **Customizable** - Full control over colors, labels, and styling
- 📱 **Responsive** - Adapts to all screen sizes
- 🌓 **Dark Mode** - Built-in dark theme support
- ⚡ **Performance** - Optimized rendering for smooth interactions

## Use Cases

- **Dashboard KPIs** - Display key metrics with visual impact
- **Market Share** - Show distribution across categories
- **Budget Allocation** - Visualize spending or resource distribution
- **Progress Tracking** - Show completion status
- **Survey Results** - Display poll or survey data

## API Reference

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Chart data with labels and datasets |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `"100%"` | Chart width |
| `theme` | `"light" \| "dark"` | `"light"` | Color theme |
| `legend` | `boolean` | `true` | Show/hide legend |
| `legendPosition` | `"top" \| "bottom" \| "left" \| "right"` | `"right"` | Legend position |
| `innerRadius` | `number` | `50` | Inner radius percentage (0-100) |
| `outerRadius` | `number` | `70` | Outer radius percentage (0-100) |
| `showPercentage` | `boolean` | `true` | Show percentage in labels |
| `labelPosition` | `"inside" \| "outside" \| "center"` | `"outside"` | Label position |
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
  backgroundColor?: string[]
}
```

## Examples

### Custom Inner Radius

Adjust the hollow center size:

::: code-group

```vue [Vue]
<DonutChart :data="data" :innerRadius="60" />
```

```tsx [React]
<DonutChart data={data} innerRadius={60} />
```

:::

### Inside Labels

Display labels inside the segments:

::: code-group

```vue [Vue]
<DonutChart :data="data" labelPosition="inside" />
```

```tsx [React]
<DonutChart data={data} labelPosition="inside" />
```

:::

### Dark Theme

::: code-group

```vue [Vue]
<DonutChart :data="data" theme="dark" />
```

```tsx [React]
<DonutChart data={data} theme="dark" />
```

:::

## Related Components

- [Pie Chart](/charts/pie-chart) - For pie charts without hollow center
- [Bar Chart](/charts/bar-chart) - For categorical comparisons
- [Line Chart](/charts/line-chart) - For trends over time
