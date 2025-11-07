# Charts Overview

Beautiful, responsive chart components powered by industry-leading charting libraries.

## Features

- **✅ Unified API** - Same props and usage across all frameworks (Vue, React, Angular, React Native, Flutter)
- **✅ Powered by Best-in-Class Libraries** - ECharts for web, fl_chart for Flutter
- **✅ Responsive** - Auto-resize on container changes
- **✅ Theme Support** - Light and dark mode out of the box
- **✅ TypeScript** - Full type safety across all frameworks
- **✅ Accessible** - WCAG 2.1 AA compliant
- **✅ Customizable** - Extensive configuration options
- **✅ Mobile Optimized** - Touch-friendly, performant on mobile devices

## Available Charts

| Chart Type | Status | Description |
|------------|--------|-------------|
| [Line Chart](/charts/line-chart) | ✅ Available | Display data trends over time with smooth curves |
| [Bar Chart](/charts/bar-chart) | ✅ Available | Compare values across categories with vertical/horizontal bars |
| [Pie Chart](/charts/pie-chart) | ✅ Available | Show proportions and percentages in circular format |
| [Donut Chart](/charts/donut-chart) | ✅ Available | Display proportional data with hollow center for emphasis |
| [Area Chart](/charts/area-chart) | ✅ Available | Visualize cumulative totals with filled areas and gradients |
| [Radar Chart](/charts/radar-chart) | ✅ Available | Multi-dimensional data comparison on radial grid |
| [Scatter Chart](/charts/scatter-chart) | ✅ Available | Distribution and correlation analysis with scatter plots |
| [Mixed Chart](/charts/mixed-chart) | ✅ Available | Combine multiple chart types (line, bar, area) in one visualization |

## Design Philosophy

### 1. **Unified API Across All Frameworks**

Same data structure, same props, consistent behavior:

::: code-group

```typescript [Data Structure]
const chartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
  datasets: [{
    label: 'Sales 2024',
    data: [30, 45, 35, 50, 49],
    color: '#3b82f6'
  }]
}
```

```vue [Vue]
<LineChart :data="chartData" :height="350" theme="light" />
```

```tsx [React]
<LineChart data={chartData} height={350} theme="light" />
```

```typescript [Angular]
<ui-line-chart [data]="chartData" [height]="350" theme="light" />
```

```tsx [React Native]
<LineChart data={chartData} height={300} theme="light" />
```

```dart [Flutter]
GalaxyLineChart(
  data: chartData,
  height: 300,
  theme: ChartTheme.light,
)
```

:::

### 2. **Framework-Specific Optimizations**

While the API is unified, each implementation is optimized for its platform:

- **Web (Vue/React/Angular)**: Uses ECharts with full interactivity
- **React Native**: Uses @wuba/react-native-echarts with Skia rendering
- **Flutter**: Uses fl_chart with native Dart performance

### 3. **Production-Ready**

- Tree-shakeable imports
- Lazy loading support
- Minimal bundle impact
- Comprehensive error handling

## Installation

Charts are installed individually via the Galaxy UI CLI:

::: code-group

```bash [npm]
npx galaxy-ui-cli@latest add line-chart
```

```bash [pnpm]
pnpm dlx galaxy-ui-cli@latest add line-chart
```

```bash [yarn]
yarn dlx galaxy-ui-cli@latest add line-chart
```

```bash [bun]
bunx galaxy-ui-cli@latest add line-chart
```

:::

The CLI automatically:
- Copies component files to your project
- Installs required dependencies (ECharts, fl_chart, etc.)
- Sets up TypeScript types
- Configures imports

## Quick Start Example

Here's a complete example showing how to use charts in your app:

::: code-group

```vue [Vue]
<script setup lang="ts">
import { LineChart } from '@/components/ui/charts'
import { ref } from 'vue'

const salesData = ref({
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Revenue',
    data: [45000, 52000, 48000, 61000],
    color: '#3b82f6'
  }]
})
</script>

<template>
  <div class="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-4">Annual Revenue</h2>
    <LineChart
      :data="salesData"
      :height="350"
      theme="light"
      :smooth="true"
    />
  </div>
</template>
```

```tsx [React]
import { LineChart } from '@/components/ui/charts'

const salesData = {
  labels: ['Q1', 'Q2', 'Q3', 'Q4'],
  datasets: [{
    label: 'Revenue',
    data: [45000, 52000, 48000, 61000],
    color: '#3b82f6'
  }]
}

export default function Dashboard() {
  return (
    <div className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4">Annual Revenue</h2>
      <LineChart
        data={salesData}
        height={350}
        theme="light"
        smooth
      />
    </div>
  )
}
```

:::

## Common Props

All chart components share these common props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `data` | `ChartData` | **required** | Chart data with labels and datasets |
| `height` | `number` | `300` | Chart height in pixels |
| `width` | `number \| string` | `'100%'` | Chart width |
| `theme` | `'light' \| 'dark'` | `'light'` | Color theme |
| `legend` | `boolean` | `true` | Show/hide legend |
| `legendPosition` | `'top' \| 'bottom' \| 'left' \| 'right'` | `'top'` | Legend position |
| `animation` | `boolean` | `true` | Enable/disable animations |
| `loading` | `boolean` | `false` | Show loading state |
| `emptyText` | `string` | `'No data available'` | Empty state message |

## Color Schemes

Built-in color schemes for consistent styling:

```typescript
import { ChartColorSchemes } from '@/components/ui/charts'

// Available schemes:
ChartColorSchemes.default    // Modern, vibrant
ChartColorSchemes.pastel      // Soft colors
ChartColorSchemes.vivid       // Bold, saturated
ChartColorSchemes.monochrome  // Grayscale
```

## Performance Tips

1. **Use memoization** for data that doesn't change frequently
2. **Lazy load** chart components for better initial page load
3. **Debounce** real-time data updates
4. **Use `notMerge`** option in React for frequent updates
5. **Implement virtual scrolling** for large datasets

## Browser Support

| Browser | Version |
|---------|---------|
| Chrome/Edge | 90+ |
| Firefox | 88+ |
| Safari | 14+ |
| iOS Safari | 14+ |
| Android Chrome | 90+ |

## Framework Support

| Framework | Status | Library Used |
|-----------|--------|--------------|
| Vue 3 | ✅ Full | ECharts (via vue-echarts) |
| React 18+ | ✅ Full | ECharts (via echarts-for-react) |
| Angular 20 | ✅ Full | ECharts (via ngx-echarts) |
| React Native | ✅ Full | ECharts (via @wuba/react-native-echarts) |
| Flutter | ✅ Full | fl_chart |

## Resources

- [ECharts Documentation](https://echarts.apache.org/)
- [fl_chart Documentation](https://github.com/imaNNeo/fl_chart)
- [Chart Implementation Guide](https://github.com/buikevin/galaxy-design/blob/main/CHARTS_IMPLEMENTATION_GUIDE.md)

## Need Help?

- [GitHub Issues](https://github.com/buikevin/galaxy-design/issues)
- [Discord Community](https://discord.gg/galaxy-ui)

## Author

**Bùi Trọng Hiếu (kevinbui)**
- GitHub: [@buikevin](https://github.com/buikevin)
- Email: kevinbui210191@gmail.com

## License

MIT © 2025 Bùi Trọng Hiếu (kevinbui)
