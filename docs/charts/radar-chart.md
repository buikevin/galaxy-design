# Radar Chart

Display multi-dimensional data comparison on a radial grid with customizable shapes and fill options.

<ComponentPreview name="RadarChartDemo">
  <template #preview>
    <DemoContainer>
      <RadarChartDemo />
    </DemoContainer>
  </template>
  <template #code>

::: code-group

```vue [Vue]
<script setup lang="ts">
import { RadarChart } from '@/components/ui/charts'

const skillsData = {
  labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
  datasets: [
    {
      label: 'Product A',
      data: [80, 90, 70, 85, 75],
      color: '#3b82f6',
    },
    {
      label: 'Product B',
      data: [70, 75, 85, 80, 90],
      color: '#10b981',
    },
  ],
}
</script>

<template>
  <RadarChart :data="skillsData" :height="300" />
</template>
```

```tsx [React]
import { RadarChart } from "@/components/ui/charts"

const skillsData = {
  labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
  datasets: [
    {
      label: 'Product A',
      data: [80, 90, 70, 85, 75],
      color: '#3b82f6',
    },
    {
      label: 'Product B',
      data: [70, 75, 85, 80, 90],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return <RadarChart data={skillsData} height={300} />
}
```

```typescript [Angular]
import { Component } from '@angular/core';
import { RadarChartComponent } from '@/components/ui/charts';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RadarChartComponent],
  template: `<ui-radar-chart [data]="skillsData" [height]="300" />`
})
export class AppComponent {
  skillsData = {
    labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
    datasets: [
      {
        label: 'Product A',
        data: [80, 90, 70, 85, 75],
        color: '#3b82f6',
      },
      {
        label: 'Product B',
        data: [70, 75, 85, 80, 90],
        color: '#10b981',
      },
    ],
  }
}
```

```tsx [React Native]
import { RadarChart } from "@/components/ui/charts"

const skillsData = {
  labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
  datasets: [
    {
      label: 'Product A',
      data: [80, 90, 70, 85, 75],
      color: '#3b82f6',
    },
    {
      label: 'Product B',
      data: [70, 75, 85, 80, 90],
      color: '#10b981',
    },
  ],
}

export default function App() {
  return <RadarChart data={skillsData} height={300} />
}
```

```dart [Flutter]
import 'package:flutter/material.dart';
import 'package:galaxy_ui/components/charts.dart';

class MyApp extends StatelessWidget {
  final skillsData = ChartData(
    labels: ['Speed', 'Reliability', 'Comfort', 'Safety', 'Efficiency'],
    datasets: [
      ChartDataset(
        label: 'Product A',
        data: [80, 90, 70, 85, 75],
        color: '#3b82f6',
      ),
      ChartDataset(
        label: 'Product B',
        data: [70, 75, 85, 80, 90],
        color: '#10b981',
      ),
    ],
  );

  @override
  Widget build(BuildContext context) {
    return GalaxyRadarChart(
      data: skillsData,
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
npx galaxy-design@latest add radar-chart
```

```bash [pnpm]
pnpm dlx galaxy-design@latest add radar-chart
```

```bash [yarn]
yarn dlx galaxy-design@latest add radar-chart
```

```bash [bun]
bunx galaxy-design@latest add radar-chart
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

### Basic Radar Chart

::: code-group

```vue [Vue]
<script setup lang="ts">
import { RadarChart } from '@/components/ui/charts'

const skillsData = {
  labels: ['Speed', 'Strength', 'Defense', 'Agility', 'Intelligence'],
  datasets: [{
    label: 'Player 1',
    data: [85, 72, 65, 90, 78],
    color: '#3b82f6'
  }]
}
</script>

<template>
  <RadarChart :data="skillsData" :height="350" />
</template>
```

```tsx [React]
import { RadarChart } from "@/components/ui/charts"

const skillsData = {
  labels: ['Speed', 'Strength', 'Defense', 'Agility', 'Intelligence'],
  datasets: [{
    label: 'Player 1',
    data: [85, 72, 65, 90, 78],
    color: '#3b82f6'
  }]
}

export default function App() {
  return <RadarChart data={skillsData} height={350} />
}
```

:::

### Multiple Datasets

```vue
<script setup lang="ts">
const teamComparison = {
  labels: ['Attack', 'Defense', 'Speed', 'Stamina', 'Technique'],
  datasets: [
    {
      label: 'Team A',
      data: [90, 75, 80, 85, 70],
      color: '#3b82f6'
    },
    {
      label: 'Team B',
      data: [70, 85, 75, 70, 90],
      color: '#10b981'
    }
  ]
}
</script>

<template>
  <RadarChart :data="teamComparison" :height="400" />
</template>
```

### Circular Shape

```vue
<template>
  <RadarChart
    :data="data"
    :height="350"
    shape="circle"
  />
</template>
```

### Without Fill

```vue
<template>
  <RadarChart
    :data="data"
    :height="350"
    :fill="false"
  />
</template>
```

### Custom Max Values

```vue
<template>
  <RadarChart
    :data="data"
    :height="350"
    :maxValue="100"
    :splitNumber="5"
  />
</template>
```

### Dark Theme

```vue
<template>
  <div class="dark">
    <RadarChart
      :data="data"
      :height="350"
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
| `data` | `ChartData` | **required** | Chart data with labels (indicators) and datasets |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `'100%'` | Chart width |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `legend` | `boolean` | `true` | Show/hide legend |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Legend position |
| `shape` | `'polygon' \| 'circle'` | `'polygon'` | Radar grid shape |
| `splitNumber` | `number` | `4` | Number of concentric circles/lines |
| `maxValue` | `number` | `auto` | Maximum value for all indicators |
| `fill` | `boolean` | `true` | Enable area fill |
| `opacity` | `number` | `0.3` | Area fill opacity (0-1) |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyText` | `string` | `'No data available'` | Empty state message |

## Use Cases

### 1. Performance Metrics

Compare employee performance across multiple dimensions:

```typescript
const performanceData = {
  labels: ['Communication', 'Teamwork', 'Problem Solving', 'Leadership', 'Technical Skills'],
  datasets: [
    { label: 'Q1 2024', data: [85, 90, 78, 82, 88], color: '#3b82f6' },
    { label: 'Q2 2024', data: [88, 92, 85, 87, 90], color: '#10b981' }
  ]
}
```

### 2. Product Comparison

Compare products across different features:

```typescript
const productData = {
  labels: ['Price', 'Quality', 'Support', 'Features', 'Ease of Use'],
  datasets: [
    { label: 'Product A', data: [90, 85, 70, 95, 80], color: '#3b82f6' },
    { label: 'Product B', data: [70, 95, 90, 75, 85], color: '#f59e0b' }
  ]
}
```

### 3. Skills Assessment

Visualize skill levels across different areas:

```typescript
const skillsData = {
  labels: ['JavaScript', 'Python', 'SQL', 'React', 'Node.js', 'Docker'],
  datasets: [{
    label: 'Current Skills',
    data: [90, 75, 85, 88, 80, 70],
    color: '#8b5cf6'
  }]
}
```

## Performance Tips

1. **Limit indicators**: Keep indicators between 3-8 for best readability
2. **Use memoization**: Memoize data that doesn't change frequently
3. **Optimize dataset count**: Limit to 3-4 datasets for clarity
4. **Set explicit maxValue**: Prevents recalculation on data changes

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
- [Bar Chart](/charts/bar-chart) - Compare values across categories
- [Area Chart](/charts/area-chart) - Visualize cumulative totals

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
