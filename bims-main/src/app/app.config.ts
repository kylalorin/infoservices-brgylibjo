import { provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideClientHydration } from '@angular/platform-browser';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemDataService } from './shared/services/in-mem-data.service';
import { HotToastModule } from '@ngneat/hot-toast';
import { AuthGuard } from './core/authentication/auth.guard';
import { appInitializerProviders } from './core/initializers';
import { NgxPermissionsGuard, NgxPermissionsModule } from 'ngx-permissions';
import { httpInterceptorProviders } from './core/interceptors';

export const appConfig: ApplicationConfig = {
  providers: [
    httpInterceptorProviders,
    appInitializerProviders,
    provideRouter([
      {
        path: '',
        canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        loadComponent: () => import('./layout/layout.component'),
        loadChildren: () => import('./layout/layout.routes'),
      },
      {
        path: 'auth',
        loadComponent: () =>
          import('./auth/auth.component').then((m) => m.AuthComponent),
        loadChildren: () =>
          import('./auth/auth.routes').then((auth) => auth.AUTH_ROUTES),
      },
      { path: '**', redirectTo: 'homepage' },
    ]),
    provideHttpClient(withInterceptorsFromDi()),

    importProvidersFrom(
      HotToastModule.forRoot(),
      NgxPermissionsModule.forRoot(),
      HttpClientInMemoryWebApiModule.forRoot(InMemDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
      })
    )
  ],
};
