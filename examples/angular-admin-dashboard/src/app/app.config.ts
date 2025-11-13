import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideRdxDialogConfig } from '@radix-ng/primitives/dialog';
import { provideRdxTooltipConfig } from '@radix-ng/primitives/tooltip2';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideRdxDialogConfig(),
    ...provideRdxTooltipConfig({})
  ]
};
