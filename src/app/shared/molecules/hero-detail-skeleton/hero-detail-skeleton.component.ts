import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';

/**
 * Componente molecular: Skeleton de Detalle de Superhéroe
 * 
 * @description Componente reutilizable que muestra un placeholder animado
 * mientras se cargan los detalles de un superhéroe. Pertenece a la capa de
 * moléculas según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-hero-detail-skeleton',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatExpansionModule],
  templateUrl: './hero-detail-skeleton.component.html',
  styleUrl: './hero-detail-skeleton.component.scss'
})
export class HeroDetailSkeletonComponent {}

