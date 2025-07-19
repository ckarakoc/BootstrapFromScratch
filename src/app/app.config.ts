import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withInMemoryScrolling, withRouterConfig } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes,
      withHashLocation(),
      withInMemoryScrolling({ anchorScrolling: "enabled" }),
      withRouterConfig({
        paramsInheritanceStrategy: 'always',
        urlUpdateStrategy: 'eager',
      })),
    provideHttpClient(),
  ]
};
