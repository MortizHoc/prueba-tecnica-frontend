import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { HeroRepositoryPort } from '../../domain/ports/hero.repository.port';
import { Hero, HeroesPaginatedResponse, HeroesPaginationParams } from '../../domain/models/hero.model';
import { 
  sanitizeHero, 
  sanitizeHeroesPaginatedResponse,
  isValidHero,
  isValidHeroesPaginatedResponse 
} from '../../domain/validators/hero.validator';

/**
 * URL base de la API de Superhéroes de Software Colombia
 */
const API_BASE_URL = 'https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api';

/**
 * Adaptador HTTP para el repositorio de Superhéroes
 * 
 * @description Implementa el puerto HeroRepositoryPort utilizando HttpClient
 * para realizar peticiones HTTP a la API de Software Colombia.
 * Este adaptador pertenece a la capa de infraestructura en la arquitectura hexagonal.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Injectable({
  providedIn: 'root'
})
export class HeroApiAdapter extends HeroRepositoryPort {
  private readonly http = inject(HttpClient);

  /**
   * Obtiene una lista paginada de superhéroes desde la API
   * 
   * @param params - Parámetros de paginación (page, size)
   * @returns Observable con la respuesta paginada de superhéroes
   */
  override getHeroes(params?: HeroesPaginationParams): Observable<HeroesPaginatedResponse> {
    let httpParams = new HttpParams();

    if (params?.page) {
      httpParams = httpParams.set('page', params.page.toString());
    }

    if (params?.size) {
      httpParams = httpParams.set('size', params.size.toString());
    }

    return this.http.get<HeroesPaginatedResponse>(`${API_BASE_URL}/heroes`, {
      params: httpParams
    }).pipe(
      map(response => {
        // Validar y sanitizar la respuesta
        if (!isValidHeroesPaginatedResponse(response)) {
          throw new Error('Invalid paginated response structure from API');
        }
        return sanitizeHeroesPaginatedResponse(response);
      }),
      catchError(error => {
        console.error('Error in getHeroes:', error);
        return throwError(() => error);
      })
    );
  }

  /**
   * Obtiene los detalles de un superhéroe por su ID desde la API
   * 
   * @param id - Identificador del superhéroe
   * @returns Observable con los detalles del superhéroe
   */
  override getHeroById(id: number): Observable<Hero> {
    const params = new HttpParams().set('id', id.toString());
    
    return this.http.get<Hero>(`${API_BASE_URL}/hero`, {
      params
    }).pipe(
      map(response => {
        // Validar y sanitizar el hero
        if (!isValidHero(response)) {
          throw new Error('Invalid hero data structure from API');
        }
        return sanitizeHero(response);
      }),
      catchError(error => {
        console.error('Error in getHeroById:', error);
        return throwError(() => error);
      })
    );
  }
}

