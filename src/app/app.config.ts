import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptorsFromDi, withInterceptors } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { HeroRepositoryPort } from './features/heroes/domain/ports/hero.repository.port';
import { HeroApiAdapter } from './features/heroes/infrastructure/adapters/hero-api.adapter';
import { httpErrorInterceptor } from './core/interceptors/http-error.interceptor';

/**
 * Configuración principal de la aplicación Angular
 * 
 * @description Configura los proveedores globales necesarios para la aplicación:
 * - Router para navegación
 * - HttpClient para peticiones HTTP
 * - Animaciones de Angular Material
 * - Manejo global de errores
 * - Inyección de dependencias para arquitectura hexagonal
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptorsFromDi(),
      withInterceptors([httpErrorInterceptor])
    ),
    provideAnimations(),
    // Inyección de dependencias para arquitectura hexagonal
    {
      provide: HeroRepositoryPort,
      useClass: HeroApiAdapter
    }
  ]
};
