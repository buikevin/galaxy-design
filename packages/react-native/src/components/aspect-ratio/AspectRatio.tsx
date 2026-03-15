/**
 * @author Bùi Trọng Hiếu
 * @email kevinbui210191@gmail.com
 * @desc Aspect ratio component for maintaining consistent width/height ratios
 */

import * as React from 'react';
import * as AspectRatioPrimitive from '@rn-primitives/aspect-ratio';
import { cn } from '@/lib/utils';

const AspectRatio = React.forwardRef<
  React.ElementRef<typeof AspectRatioPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof AspectRatioPrimitive.Root>
>(({ className, ...props }, ref) => (
  <AspectRatioPrimitive.Root
    ref={ref}
    className={cn('relative', className)}
    {...props}
  />
));
AspectRatio.displayName = AspectRatioPrimitive.Root.displayName;

export { AspectRatio };
