import { Routes } from '@angular/router';
import { LayoutContainerComponent } from './components/layout-container/layout-container.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutContainerComponent,
    children: [
      {
        path: '',
        loadComponent: () => import('./views/main/main.component').then((m) => m.MainComponent),
        data: { animation: 'main' },
      },
      {
        path: 'visual',
        loadComponent: () =>
          import('./views/visual/visual.component').then((m) => m.VisualComponent),
        data: { animation: 'visual' },
      },
      {
        path: 'technical',
        loadComponent: () =>
          import('./views/technical/technical.component').then((m) => m.TechnicalComponent),
        data: { animation: 'technical' },
      },
      { path: '**', redirectTo: '' },
    ],
  },
];
