import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

/**
 * Componente atómico: Skeleton de Tarjeta de Superhéroe
 * 
 * @description Componente reutilizable que muestra un placeholder animado
 * mientras se carga la información de un superhéroe. Pertenece a la capa de
 * átomos según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-hero-card-skeleton',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './hero-card-skeleton.component.html',
  styleUrl: './hero-card-skeleton.component.scss'
})
export class HeroCardSkeletonComponent {}

