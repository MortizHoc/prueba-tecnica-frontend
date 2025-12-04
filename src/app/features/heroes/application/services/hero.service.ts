import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { HeroRepositoryPort } from '../../domain/ports/hero.repository.port';
import { Hero, HeroesPaginatedResponse, HeroesPaginationParams } from '../../domain/models/hero.model';

/**
 * Servicio de aplicación para la gestión de Superhéroes
 * 
 * @description Servicio que actúa como caso de uso en la capa de aplicación.
 * Utiliza el puerto del repositorio para acceder a los datos sin conocer
 * los detalles de implementación (adaptador HTTP).
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private readonly heroRepository = inject(HeroRepositoryPort);

  /**
   * Obtiene una lista paginada de superhéroes
   * 
   * @param params - Parámetros de paginación (page, size)
   * @returns Observable con la respuesta paginada de superhéroes
   */
  getHeroes(params?: HeroesPaginationParams): Observable<HeroesPaginatedResponse> {
    return this.heroRepository.getHeroes(params);
  }

  /**
   * Obtiene los detalles de un superhéroe por su ID
   * 
   * @param id - Identificador del superhéroe
   * @returns Observable con los detalles del superhéroe
   */
  getHeroById(id: number): Observable<Hero> {
    return this.heroRepository.getHeroById(id);
  }
}

