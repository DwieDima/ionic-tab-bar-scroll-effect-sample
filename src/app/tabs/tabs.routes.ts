import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab1/detail',
        loadComponent: () => import('../tab1/detail.page').then((m) => m.Tab1DetailPage),
      },
      {
        path: 'tab1/detail-effect',
        data: { tabBarScrollEffect: true },
        loadComponent: () => import('../tab1/detail.page').then((m) => m.Tab1DetailPage),
      },
      {
        path: 'tab4',
        loadComponent: () => import('../tab4/tab4.page').then((m) => m.Tab4Page),
      },
      {
        path: 'tab4/footer-hide',
        loadComponent: () => import('../tab4/footer-hide.page').then((m) => m.Tab4FooterHidePage),
      },
      {
        path: 'tab4/footer-fade',
        loadComponent: () => import('../tab4/footer-fade.page').then((m) => m.Tab4FooterFadePage),
      },
      {
        path: 'tab4/multi-toolbar',
        loadComponent: () => import('../tab4/multi-toolbar.page').then((m) => m.Tab4MultiToolbarPage),
      },
      {
        path: 'tab4/large-title',
        loadComponent: () => import('../tab4/large-title.page').then((m) => m.Tab4LargeTitlePage),
      },
      {
        path: 'tab4/large-title-hide',
        loadComponent: () => import('../tab4/large-title-hide.page').then((m) => m.Tab4LargeTitleHidePage),
      },
      {
        path: 'tab4/combined',
        loadComponent: () => import('../tab4/combined.page').then((m) => m.Tab4CombinedPage),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
