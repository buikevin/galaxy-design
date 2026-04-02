declare module '@wuba/react-native-echarts' {
  import * as React from 'react';

  export interface SkiaChartProps {
    option: Record<string, unknown>;
    width: number;
    height: number;
  }

  export const SkiaChart: React.ComponentType<SkiaChartProps>;
}