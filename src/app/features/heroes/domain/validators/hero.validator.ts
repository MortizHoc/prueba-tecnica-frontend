import { Hero, PowerStats, Appearance, Biography, Work, Connections, HeroImages, HeroesPaginatedResponse } from '../models/hero.model';

/**
 * Validadores y Type Guards para modelos de Superhéroes
 * 
 * @description Proporciona funciones de validación y type guards para asegurar
 * que los datos recibidos de la API cumplan con la estructura esperada.
 * Esto previene errores en tiempo de ejecución y mejora la robustez de la aplicación.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */

/**
 * Valida si un objeto es un PowerStats válido
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es un PowerStats válido
 */
export function isValidPowerStats(obj: any): obj is PowerStats {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  const stats = ['intelligence', 'strength', 'speed', 'durability', 'power', 'combat'];
  return stats.every(stat => {
    const value = obj[stat];
    return value === null || value === undefined || 
           typeof value === 'number' ||
           (typeof value === 'string' && (value === 'null' || !isNaN(Number(value))));
  });
}

/**
 * Valida si un objeto es un Appearance válido
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es un Appearance válido
 */
export function isValidAppearance(obj: any): obj is Appearance {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  // Appearance puede tener campos opcionales, validamos estructura básica
  return true;
}

/**
 * Valida si un objeto es un Biography válido
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es un Biography válido
 */
export function isValidBiography(obj: any): obj is Biography {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  // Biography puede tener campos opcionales, validamos estructura básica
  return true;
}

/**
 * Valida si un objeto es un Work válido
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es un Work válido
 */
export function isValidWork(obj: any): obj is Work {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  // Work puede tener campos opcionales, validamos estructura básica
  return true;
}

/**
 * Valida si un objeto es un Connections válido
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es un Connections válido
 */
export function isValidConnections(obj: any): obj is Connections {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  // Connections puede tener campos opcionales, validamos estructura básica
  return true;
}

/**
 * Valida si un objeto es un HeroImages válido
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es un HeroImages válido
 */
export function isValidHeroImages(obj: any): obj is HeroImages {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  // HeroImages debe tener al menos una URL válida
  const imageFields = ['xs', 'sm', 'md', 'lg'];
  return imageFields.some(field => {
    const value = obj[field];
    return value && typeof value === 'string' && value.trim().length > 0;
  });
}

/**
 * Valida si un objeto es un Hero válido
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es un Hero válido
 */
export function isValidHero(obj: any): obj is Hero {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  // Validar campos requeridos
  if (typeof obj.id !== 'number' || obj.id <= 0) {
    return false;
  }

  if (!obj.name || typeof obj.name !== 'string' || obj.name.trim().length === 0) {
    return false;
  }

  if (!obj.slug || typeof obj.slug !== 'string' || obj.slug.trim().length === 0) {
    return false;
  }

  // Validar objetos anidados si existen
  if (obj.powerstats && !isValidPowerStats(obj.powerstats)) {
    return false;
  }

  if (obj.appearance && !isValidAppearance(obj.appearance)) {
    return false;
  }

  if (obj.biography && !isValidBiography(obj.biography)) {
    return false;
  }

  if (obj.work && !isValidWork(obj.work)) {
    return false;
  }

  if (obj.connections && !isValidConnections(obj.connections)) {
    return false;
  }

  if (obj.images && !isValidHeroImages(obj.images)) {
    return false;
  }

  return true;
}

/**
 * Valida si un objeto es una HeroesPaginatedResponse válida
 * 
 * @param obj - Objeto a validar
 * @returns true si el objeto es una HeroesPaginatedResponse válida
 */
export function isValidHeroesPaginatedResponse(obj: any): obj is HeroesPaginatedResponse {
  if (!obj || typeof obj !== 'object') {
    return false;
  }

  // Validar campos requeridos de paginación
  if (typeof obj.length !== 'number' || obj.length < 0) {
    return false;
  }

  if (typeof obj.size !== 'number' || obj.size <= 0) {
    return false;
  }

  if (typeof obj.page !== 'number' || obj.page < 1) {
    return false;
  }

  if (typeof obj.firstPage !== 'number' || obj.firstPage < 1) {
    return false;
  }

  if (typeof obj.lastPage !== 'number' || obj.lastPage < 1) {
    return false;
  }

  if (typeof obj.startIndex !== 'number' || obj.startIndex < 0) {
    return false;
  }

  if (typeof obj.endIndex !== 'number' || obj.endIndex < 0) {
    return false;
  }

  // Validar que items sea un array
  if (!Array.isArray(obj.items)) {
    return false;
  }

  // Validar cada item del array si existe
  if (obj.items.length > 0) {
    const invalidItems = obj.items.filter((item: any) => !isValidHero(item));
    if (invalidItems.length > 0) {
      console.warn(`Found ${invalidItems.length} invalid hero items in paginated response`);
    }
  }

  return true;
}

/**
 * Sanitiza y normaliza un Hero, proporcionando valores por defecto para campos faltantes
 * 
 * @param hero - Hero a sanitizar
 * @returns Hero sanitizado con valores por defecto
 */
export function sanitizeHero(hero: any): Hero {
  if (!isValidHero(hero)) {
    throw new Error('Invalid hero data structure');
  }

  return {
    id: hero.id,
    name: hero.name.trim(),
    slug: hero.slug.trim(),
    powerstats: hero.powerstats || null,
    appearance: hero.appearance || null,
    biography: hero.biography || null,
    work: hero.work || null,
    connections: hero.connections || null,
    images: hero.images || {
      xs: '',
      sm: '',
      md: '',
      lg: ''
    }
  };
}

/**
 * Sanitiza y normaliza una HeroesPaginatedResponse
 * 
 * @param response - Respuesta a sanitizar
 * @returns HeroesPaginatedResponse sanitizada
 */
export function sanitizeHeroesPaginatedResponse(response: any): HeroesPaginatedResponse {
  if (!isValidHeroesPaginatedResponse(response)) {
    throw new Error('Invalid paginated response structure');
  }

  return {
    length: response.length,
    size: response.size,
    page: response.page,
    firstPage: response.firstPage,
    lastPage: response.lastPage,
    startIndex: response.startIndex,
    endIndex: response.endIndex,
    items: response.items.map((item: any) => {
      try {
        return sanitizeHero(item);
      } catch (error) {
        console.warn('Failed to sanitize hero item:', item, error);
        // Retornar un hero básico como fallback
        return {
          id: item.id || 0,
          name: item.name || 'Unknown Hero',
          slug: item.slug || 'unknown-hero',
          powerstats: null,
          appearance: null,
          biography: null,
          work: null,
          connections: null,
          images: {
            xs: item.images?.xs || '',
            sm: item.images?.sm || '',
            md: item.images?.md || '',
            lg: item.images?.lg || ''
          }
        };
      }
    })
  };
}

