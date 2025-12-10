import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/lista-chamados/lista-chamados').then((m) => m.ListaChamados),
  },
  {
    path: 'novoChamado',
    loadComponent: () => import('./pages/novo-chamado/novo-chamado').then((m) => m.NovoChamado),
  },
];
