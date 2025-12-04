import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

/**
 * Componente molecular: Mensaje de error
 * 
 * @description Componente reutilizable para mostrar mensajes de error.
 * Pertenece a la capa de moléculas según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-error-message',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule],
  templateUrl: './error-message.component.html',
  styleUrl: './error-message.component.scss'
})
export class ErrorMessageComponent {
  /**
   * Mensaje de error a mostrar
   */
  @Input() message: string = 'Ha ocurrido un error';

  /**
   * Texto del botón de acción
   */
  @Input() actionText: string = 'Reintar';

  /**
   * Evento emitido cuando se hace clic en el botón de acción
   */
  @Input() onAction?: () => void;
}

