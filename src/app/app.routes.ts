import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'fade-demo',
    loadComponent: () =>
      import('./fade-demo/fade-demo.page').then((m) => m.FadeDemoPage),
  },
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
];
