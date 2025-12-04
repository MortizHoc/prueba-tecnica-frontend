import { Component, OnInit, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatIconModule } from '@angular/material/icon';
import { HeroService } from '../../../application/services/hero.service';
import { Hero, HeroesPaginatedResponse } from '../../../domain/models/hero.model';
import { HeroCardComponent } from '../../../../../shared/atoms/hero-card/hero-card.component';
import { HeroCardSkeletonComponent } from '../../../../../shared/atoms/hero-card-skeleton/hero-card-skeleton.component';
import { PaginationComponent } from '../../../../../shared/molecules/pagination/pagination.component';
import { ErrorMessageComponent } from '../../../../../shared/molecules/error-message/error-message.component';

/**
 * Componente de página: Lista de Superhéroes
 * 
 * @description Vista principal que muestra una lista paginada de superhéroes.
 * Permite navegar entre páginas y ver los detalles de cada superhéroe.
 * Pertenece a la capa de páginas según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-hero-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatGridListModule,
    MatProgressSpinnerModule,
    MatIconModule,
    HeroCardComponent,
    HeroCardSkeletonComponent,
    PaginationComponent,
    ErrorMessageComponent
  ],
  templateUrl: './hero-list.component.html',
  styleUrl: './hero-list.component.scss'
})
export class HeroListComponent implements OnInit {
  // Estado de la aplicación usando signals
  private readonly heroesData = signal<HeroesPaginatedResponse | null>(null);
  private readonly loading = signal<boolean>(true); // Inicializado en true para mostrar skeletons en primera carga
  private readonly error = signal<string | null>(null);
  readonly currentPage = signal<number>(1);
  readonly pageSize = signal<number>(10);

  // Computed values
  readonly heroes = computed(() => this.heroesData()?.items || []);
  readonly totalPages = computed(() => this.heroesData()?.lastPage || 1);
  readonly totalItems = computed(() => this.heroesData()?.length || 0);
  readonly isLoading = computed(() => this.loading());
  readonly hasError = computed(() => this.error() !== null);
  readonly errorMessage = computed(() => this.error());

  constructor(private readonly heroService: HeroService) {}

  /**
   * Inicializa el componente cargando la primera página de superhéroes
   */
  ngOnInit(): void {
    this.loadHeroes();
  }

  /**
   * Carga la lista de superhéroes desde la API
   */
  loadHeroes(): void {
    this.loading.set(true);
    this.error.set(null);

    this.heroService.getHeroes({
      page: this.currentPage(),
      size: this.pageSize()
    }).subscribe({
      next: (response) => {
        this.heroesData.set(response);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los superhéroes. Por favor, intente nuevamente.');
        this.loading.set(false);
        console.error('Error loading heroes:', err);
      }
    });
  }

  /**
   * Maneja el cambio de página
   */
  onPageChange(page: number): void {
    this.currentPage.set(page);
    this.loadHeroes();
    // Scroll al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  /**
   * Maneja el cambio de tamaño de página
   */
  onPageSizeChange(size: number): void {
    this.pageSize.set(size);
    this.currentPage.set(1); // Reset a la primera página
    this.loadHeroes();
  }

  /**
   * Reintenta cargar los superhéroes en caso de error
   */
  retry(): void {
    this.loadHeroes();
  }
}

