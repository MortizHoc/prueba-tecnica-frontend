/**
 * Modelo de dominio para un Superhéroe
 * 
 * @description Representa la entidad Superhéroe con toda su información
 * según la API de Software Colombia
 * 
 * @author Maikol Ortiz - CC 1007193445
 */

/**
 * Estadísticas de poder de un superhéroe
 */
export interface PowerStats {
  intelligence: number;
  strength: number;
  speed: number;
  durability: number;
  power: number;
  combat: number;
}

/**
 * Apariencia física de un superhéroe
 */
export interface Appearance {
  gender: string;
  race: string;
  height: string[];
  weight: string[];
  eyeColor: string;
  hairColor: string;
}

/**
 * Biografía de un superhéroe
 */
export interface Biography {
  fullName: string;
  alterEgos: string;
  aliases: string[];
  placeOfBirth: string;
  firstAppearance: string;
  publisher: string;
  alignment: string;
}

/**
 * Información laboral de un superhéroe
 */
export interface Work {
  occupation: string;
  base: string;
}

/**
 * Conexiones de un superhéroe
 */
export interface Connections {
  groupAffiliation: string;
  relatives: string;
}

/**
 * Imágenes de un superhéroe en diferentes tamaños
 */
export interface HeroImages {
  xs: string;
  sm: string;
  md: string;
  lg: string;
}

/**
 * Modelo completo de un Superhéroe
 */
export interface Hero {
  id: number;
  name: string;
  slug: string;
  powerstats: PowerStats;
  appearance: Appearance;
  biography: Biography;
  work: Work;
  connections: Connections;
  images: HeroImages;
}

/**
 * Modelo para la respuesta paginada de la lista de superhéroes
 */
export interface HeroesPaginatedResponse {
  length: number;
  size: number;
  page: number;
  firstPage: number;
  lastPage: number;
  startIndex: number;
  endIndex: number;
  items: Hero[];
}

/**
 * Parámetros para la paginación de superhéroes
 */
export interface HeroesPaginationParams {
  page?: number;
  size?: number;
}

