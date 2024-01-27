import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routeConfig } from './routes';
import { DynamicConfigService } from './dynamic-config.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routeConfig),
    {
      provide: APP_INITIALIZER,
      deps: [DynamicConfigService],
      multi: true,
      useFactory: (dynamicConfigservice: DynamicConfigService) => {
        return () => dynamicConfigservice.load();
      },
    },
  ],
};
