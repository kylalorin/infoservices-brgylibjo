import { Routes } from "@angular/router";
import { LoginComponent } from "./feature/login/login.component";
import { RegisterComponent } from "./feature/register/register.component";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./auth.component').then(m => m.AuthComponent),
    children: [
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      }
    ]
  }
];
