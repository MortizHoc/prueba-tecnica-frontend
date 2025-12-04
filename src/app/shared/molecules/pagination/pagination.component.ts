import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';

/**
 * Componente molecular: Paginación
 * 
 * @description Componente reutilizable para manejar la paginación de listas.
 * Permite navegar entre páginas y cambiar el tamaño de página.
 * Pertenece a la capa de moléculas según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent {
  /**
   * Número de página actual
   */
  @Input() currentPage: number = 1;

  /**
   * Número total de páginas
   */
  @Input() totalPages: number = 1;

  /**
   * Tamaño de página actual
   */
  @Input() pageSize: number = 10;

  /**
   * Opciones de tamaño de página disponibles
   */
  @Input() pageSizeOptions: number[] = [10, 20, 30, 50];

  /**
   * Total de elementos
   */
  @Input() totalItems: number = 0;

  /**
   * Evento emitido cuando cambia la página
   */
  @Output() pageChange = new EventEmitter<number>();

  /**
   * Evento emitido cuando cambia el tamaño de página
   */
  @Output() pageSizeChange = new EventEmitter<number>();

  /**
   * Navega a la página anterior
   */
  previousPage(): void {
    if (this.currentPage > 1) {
      this.pageChange.emit(this.currentPage - 1);
    }
  }

  /**
   * Navega a la página siguiente
   */
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.pageChange.emit(this.currentPage + 1);
    }
  }

  /**
   * Navega a una página específica
   */
  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages && page !== this.currentPage) {
      this.pageChange.emit(page);
    }
  }

  /**
   * Maneja el cambio de tamaño de página
   */
  onPageSizeChange(size: number): void {
    this.pageSizeChange.emit(size);
  }

  /**
   * Obtiene el rango de elementos mostrados
   */
  getRangeText(): string {
    const start = (this.currentPage - 1) * this.pageSize + 1;
    const end = Math.min(this.currentPage * this.pageSize, this.totalItems);
    return `${start} - ${end}`;
  }

  /**
   * Genera un array de números de página para mostrar
   */
  getPageNumbers(): number[] {
    const pages: number[] = [];
    const maxVisible = 5;
    let start = Math.max(1, this.currentPage - Math.floor(maxVisible / 2));
    let end = Math.min(this.totalPages, start + maxVisible - 1);

    if (end - start < maxVisible - 1) {
      start = Math.max(1, end - maxVisible + 1);
    }

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    return pages;
  }

  /**
   * Determina si se debe mostrar la primera página
   */
  shouldShowFirstPage(): boolean {
    const firstVisible = this.getPageNumbers()[0];
    return firstVisible > 2;
  }

  /**
   * Determina si se debe mostrar elipsis después de la primera página
   */
  shouldShowFirstEllipsis(): boolean {
    const firstVisible = this.getPageNumbers()[0];
    return firstVisible > 3;
  }

  /**
   * Determina si se debe mostrar elipsis antes de la última página
   */
  shouldShowLastEllipsis(): boolean {
    const lastVisible = this.getPageNumbers()[this.getPageNumbers().length - 1];
    return lastVisible < this.totalPages - 2;
  }

  /**
   * Determina si se debe mostrar la última página
   */
  shouldShowLastPage(): boolean {
    const lastVisible = this.getPageNumbers()[this.getPageNumbers().length - 1];
    return lastVisible < this.totalPages - 1;
  }
}

