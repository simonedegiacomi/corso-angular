import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routeConfig } from './routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig)
  ]
};
