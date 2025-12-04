import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

/**
 * Componente molecular: Spinner de carga
 * 
 * @description Componente reutilizable para mostrar un indicador de carga.
 * Pertenece a la capa de moléculas según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-loading-spinner',
  standalone: true,
  imports: [CommonModule, MatProgressSpinnerModule],
  templateUrl: './loading-spinner.component.html',
  styleUrl: './loading-spinner.component.scss'
})
export class LoadingSpinnerComponent {
  /**
   * Mensaje opcional a mostrar junto al spinner
   */
  @Input() message: string = 'Cargando...';
}

