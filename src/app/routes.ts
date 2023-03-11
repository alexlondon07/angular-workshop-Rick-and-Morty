import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'detail/:id',
    title: 'Detail',
    loadComponent: () =>
      import('./detail/detail.component').then((c) => c.DetailComponent),
  },
  {
    path: '**',
    title: 'HomePage',
    loadComponent: () =>
      import('./home/home.component').then((c) => c.HomeComponent),
  },
];
