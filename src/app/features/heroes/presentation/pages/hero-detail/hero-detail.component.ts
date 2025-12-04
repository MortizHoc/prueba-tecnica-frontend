import { Component, OnInit, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { HeroService } from '../../../application/services/hero.service';
import { Hero } from '../../../domain/models/hero.model';
import { HeroDetailSkeletonComponent } from '../../../../../shared/molecules/hero-detail-skeleton/hero-detail-skeleton.component';
import { ErrorMessageComponent } from '../../../../../shared/molecules/error-message/error-message.component';

/**
 * Componente de página: Detalle de Superhéroe
 * 
 * @description Vista que muestra los detalles completos de un superhéroe.
 * Permite ver toda la información del superhéroe seleccionado.
 * Pertenece a la capa de páginas según Atomic Design.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatChipsModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    HeroDetailSkeletonComponent,
    ErrorMessageComponent
  ],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.scss'
})
export class HeroDetailComponent implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly heroService = inject(HeroService);

  // Estado de la aplicación usando signals
  private readonly heroData = signal<Hero | null>(null);
  private readonly loading = signal<boolean>(false);
  private readonly error = signal<string | null>(null);

  // Computed values
  readonly hero = computed(() => this.heroData());
  readonly isLoading = computed(() => this.loading());
  readonly hasError = computed(() => this.error() !== null);
  readonly errorMessage = computed(() => this.error());

  /**
   * Inicializa el componente cargando los detalles del superhéroe
   */
  ngOnInit(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.loadHero(parseInt(heroId, 10));
    } else {
      this.error.set('ID de superhéroe no válido');
    }
  }

  /**
   * Carga los detalles del superhéroe desde la API
   */
  loadHero(id: number): void {
    this.loading.set(true);
    this.error.set(null);

    this.heroService.getHeroById(id).subscribe({
      next: (hero) => {
        this.heroData.set(hero);
        this.loading.set(false);
      },
      error: (err) => {
        this.error.set('Error al cargar los detalles del superhéroe. Por favor, intente nuevamente.');
        this.loading.set(false);
        console.error('Error loading hero:', err);
      }
    });
  }

  /**
   * Navega de vuelta a la lista de superhéroes
   */
  goBack(): void {
    this.router.navigate(['/heroes']);
  }

  /**
   * Reintenta cargar los detalles del superhéroe
   */
  retry(): void {
    const heroId = this.route.snapshot.paramMap.get('id');
    if (heroId) {
      this.loadHero(parseInt(heroId, 10));
    }
  }

  /**
   * Obtiene la imagen del superhéroe en tamaño grande
   */
  getHeroImage(): string {
    const hero = this.hero();
    return hero?.images?.lg || hero?.images?.md || hero?.images?.sm || 'assets/default-hero.png';
  }

  /**
   * Obtiene el valor de una estadística de poder
   */
  getStatValue(stat: number | undefined | null): number {
    return stat ?? 0;
  }

  /**
   * Obtiene el color de una estadística basado en su valor
   */
  getStatColor(value: number | undefined | null): string {
    const numValue = value ?? 0;
    if (numValue >= 80) return 'success';
    if (numValue >= 50) return 'accent';
    return 'warn';
  }

  /**
   * Obtiene los aliases del superhéroe como string
   */
  getAliases(): string {
    const aliases = this.hero()?.biography?.aliases;
    return aliases && aliases.length > 0 ? aliases.join(', ') : '';
  }

  /**
   * Obtiene la altura del superhéroe como string
   */
  getHeight(): string {
    const height = this.hero()?.appearance?.height;
    return height && height.length > 0 ? height.join(' ') : 'Desconocida';
  }

  /**
   * Obtiene el peso del superhéroe como string
   */
  getWeight(): string {
    const weight = this.hero()?.appearance?.weight;
    return weight && weight.length > 0 ? weight.join(' ') : 'Desconocido';
  }
}

