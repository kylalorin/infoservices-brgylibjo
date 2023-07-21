import { Routes } from "@angular/router";

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./admin.component').then(m => m.AdminComponent),
    children: [
      {
        path: 'verification-request',
        loadComponent: () => import('./feature/verification-request/verification-request.component').then(m => m.VerificationRequestComponent),
        data: {
          permissions: {
            only: ['ROLE_ADMIN', 'ROLE_OFFICIAL']
          }
        }
      },
      // {
      //   path: 'register',
      //   component: RegisterComponent
      // }
    ]
  }
];
