import { AuthGuard } from './auth/auth-interceptor.guard';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () =>
      import('./components/home/home.component').then((m) => m.HomeComponent),
    canActivate: [AuthGuard],
    children: [
      {
        path: 'vocabulary-list',
        loadComponent: () =>
          import(
            './components/features/vocabulary-list/vocabulary-list.component'
          ).then((m) => m.VocabularyListComponent),
      },
    ],
  },
  {
    path: 'auth',
    loadComponent: () =>
      import('./auth/auth-page.component').then((c) => c.AuthPageComponent),
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./auth/login-page/login-page.component').then(
            (m) => m.LoginPageComponent
          ),
      },
      {
        path: 'sign-up',
        loadComponent: () =>
          import('./auth/sign-up/sign-up.component').then(
            (m) => m.SignUpComponent
          ),
      },
    ],
  },

  // {
  //   path: 'home',
  //   loadComponent:
  // }
];
