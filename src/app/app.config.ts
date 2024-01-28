import { APP_INITIALIZER, ApplicationConfig, LOCALE_ID } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { routeConfig } from './routes';
import { DynamicConfigService } from './dynamic-config.service';
import { DATE_PIPE_DEFAULT_OPTIONS } from '@angular/common';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig, withHashLocation()),
    {
      provide: APP_INITIALIZER,
      deps: [DynamicConfigService],
      multi: true,
      useFactory: (dynamicConfigservice: DynamicConfigService) => {
        return () => dynamicConfigservice.load();
      },
    },
    {
      provide: DATE_PIPE_DEFAULT_OPTIONS,
      useFactory: (localeId: string) => {
        const dateOptions: any = {};

        if (localeId === 'it') {
          dateOptions.dateFormat = 'shortDate';
        }

        return dateOptions;
      },
      deps: [LOCALE_ID],
    },
  ],
};
