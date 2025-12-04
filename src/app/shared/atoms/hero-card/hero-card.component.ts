import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Hero } from '../../../features/heroes/domain/models/hero.model';

/**
 * Componente atómico: Tarjeta de Superhéroe
 * 
 * @description Componente reutilizable que muestra la información básica
 * de un superhéroe en formato de tarjeta. Pertenece a la capa de átomos
 * según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-hero-card',
  standalone: true,
  imports: [CommonModule, RouterModule, MatCardModule, MatChipsModule],
  templateUrl: './hero-card.component.html',
  styleUrl: './hero-card.component.scss'
})
export class HeroCardComponent {
  /**
   * Datos del superhéroe a mostrar
   */
  @Input() hero!: Hero;

  /**
   * Obtiene la imagen del superhéroe en tamaño mediano
   * 
   * @returns URL de la imagen o imagen por defecto
   */
  getHeroImage(): string {
    return this.hero?.images?.md || this.hero?.images?.sm || 'assets/default-hero.png';
  }

  /**
   * Obtiene el nombre completo o el nombre del superhéroe
   * 
   * @returns Nombre completo o nombre del superhéroe
   */
  getHeroName(): string {
    return this.hero?.biography?.fullName || this.hero?.name || 'Sin nombre';
  }

  /**
   * Obtiene el publisher del superhéroe
   * 
   * @returns Publisher o 'Desconocido'
   */
  getPublisher(): string {
    return this.hero?.biography?.publisher || 'Desconocido';
  }
}

