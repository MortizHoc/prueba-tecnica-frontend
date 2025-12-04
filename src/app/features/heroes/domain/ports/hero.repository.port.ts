import { Observable } from 'rxjs';
import { Hero, HeroesPaginatedResponse, HeroesPaginationParams } from '../models/hero.model';

/**
 * Puerto del repositorio de Superhéroes
 * 
 * @description Define el contrato para el acceso a datos de superhéroes
 * siguiendo los principios de Arquitectura Hexagonal.
 * Este puerto define las operaciones que debe implementar cualquier adaptador.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
export abstract class HeroRepositoryPort {
  /**
   * Obtiene una lista paginada de superhéroes
   * 
   * @param params - Parámetros de paginación (page, size)
   * @returns Observable con la respuesta paginada de superhéroes
   */
  abstract getHeroes(params?: HeroesPaginationParams): Observable<HeroesPaginatedResponse>;

  /**
   * Obtiene los detalles de un superhéroe por su ID
   * 
   * @param id - Identificador del superhéroe
   * @returns Observable con los detalles del superhéroe
   */
  abstract getHeroById(id: number): Observable<Hero>;
}

