import { Routes } from '@angular/router';

/**
 * Configuración de rutas de la aplicación
 * 
 * @description Define las rutas principales de la aplicación:
 * - /heroes: Lista de superhéroes (ruta principal)
 * - /heroes/:id: Detalle de un superhéroe
 * - /: Redirige a /heroes
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
export const routes: Routes = [
  {
    path: '',
    redirectTo: '/heroes',
    pathMatch: 'full'
  },
  {
    path: 'heroes',
    loadComponent: () => 
      import('./features/heroes/presentation/pages/hero-list/hero-list.component')
        .then(m => m.HeroListComponent)
  },
  {
    path: 'heroes/:id',
    loadComponent: () => 
      import('./features/heroes/presentation/pages/hero-detail/hero-detail.component')
        .then(m => m.HeroDetailComponent)
  },
  {
    path: '**',
    redirectTo: '/heroes'
  }
];
