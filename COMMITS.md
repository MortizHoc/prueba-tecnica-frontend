# 📝 Guía de Commits para el Proyecto

**Autor:** Maikol Ortiz - CC 1007193445

## 🎯 Estrategia de Commits

Esta guía contiene los commits organizados siguiendo las convenciones de **Conventional Commits** y agrupados por funcionalidad.

## 📦 Secuencia de Commits Recomendada

> 🌐 **Demo en producción:** el resultado final de esta secuencia de commits puede verse desplegado en Vercel en  
> [prueba-tecnica-frontend-vecs](https://vercel.com/mortizhocs-projects/prueba-tecnica-frontend-vecs)

### Commit 1: Configuración inicial del proyecto
```bash
git add package.json package-lock.json angular.json tsconfig*.json .editorconfig .gitignore .vscode/
git commit -m "chore: configuración inicial del proyecto Angular 21

- Configuración de Angular CLI
- Dependencias: Angular Material, Bootstrap, RxJS
- TypeScript y Prettier configurados
- Estructura base del proyecto"
```

### Commit 2: Estilos globales y configuración de la aplicación
```bash
git add src/styles.scss src/index.html src/app/app.config.ts src/app/app.ts src/app/app.html src/app/app.scss src/app/app.routes.ts
git commit -m "feat: configuración de aplicación y estilos globales

- Configuración de Angular Material y Bootstrap
- Variables CSS globales (Design System)
- Configuración de HttpClient y animaciones
- Rutas base configuradas
- Fuente Material Icons agregada"
```

### Commit 3: Arquitectura hexagonal - Domain Layer
```bash
git add src/app/features/heroes/domain/
git commit -m "feat: implementación de capa de dominio (arquitectura hexagonal)

- Modelos de dominio: Hero, PowerStats, Biography, etc.
- Puerto del repositorio: HeroRepositoryPort
- Interfaces bien definidas y documentadas"
```

### Commit 4: Arquitectura hexagonal - Application Layer
```bash
git add src/app/features/heroes/application/
git commit -m "feat: implementación de capa de aplicación

- Servicio HeroService con casos de uso
- Lógica de aplicación desacoplada de infraestructura"
```

### Commit 5: Arquitectura hexagonal - Infrastructure Layer
```bash
git add src/app/features/heroes/infrastructure/
git commit -m "feat: implementación de adaptador HTTP (infraestructura)

- HeroApiAdapter implementando HeroRepositoryPort
- Integración con API de Software Colombia
- Manejo de parámetros de paginación"
```

### Commit 6: Componentes atómicos compartidos
```bash
git add src/app/shared/atoms/
git commit -m "feat: componentes atómicos (Atomic Design)

- HeroCardComponent: tarjeta de superhéroe reutilizable
- Diseño moderno con efectos hover
- Navegación integrada"
```

### Commit 7: Componentes moleculares compartidos
```bash
git add src/app/shared/molecules/
git commit -m "feat: componentes moleculares (Atomic Design)

- PaginationComponent: paginación avanzada con primera/última página
- LoadingSpinnerComponent: spinner de carga
- ErrorMessageComponent: mensajes de error
- Diseño responsive y accesible"
```

### Commit 8: Vista de lista de superhéroes
```bash
git add src/app/features/heroes/presentation/pages/hero-list/
git commit -m "feat: vista de lista de superhéroes con paginación

- HeroListComponent: página principal
- Integración con API paginada
- Grid responsive de tarjetas
- Estados de carga, error y vacío
- Navegación a detalle"
```

### Commit 9: Vista de detalle de superhéroe
```bash
git add src/app/features/heroes/presentation/pages/hero-detail/
git commit -m "feat: vista de detalle de superhéroe con acordeones

- HeroDetailComponent: página de detalle
- Secciones organizadas en acordeones desplegables
- Estadísticas de poder con indicadores visuales
- Layout responsive (sticky en desktop)
- Navegación de regreso"
```

### Commit 10: Mejoras de diseño y UX/UI
```bash
git add src/styles.scss src/app/features/heroes/presentation/pages/*/**.scss src/app/shared/**/*.scss
git commit -m "style: mejoras de diseño, UX/UI y responsive

- Sistema de diseño con variables CSS
- Animaciones y transiciones suaves
- Diseño mobile-first completamente responsive
- Mejoras de accesibilidad
- Efectos hover y estados interactivos
- Scrollbar personalizado"
```

### Commit 11: Documentación completa
```bash
git add README.md SETUP.md ARCHITECTURE.md
git commit -m "docs: documentación completa del proyecto

- README.md: descripción y guía principal
- SETUP.md: guía detallada de instalación
- ARCHITECTURE.md: explicación de arquitectura
- Instrucciones de ejecución y build"
```

### Commit 12: Configuración final y assets
```bash
git add public/assets/ package.json
git commit -m "chore: configuración final y mejoras de package.json

- Carpeta assets creada
- Scripts adicionales en package.json
- Información del proyecto y autor
- Engines especificados"
```

### Commit 13: HTTP Interceptor y manejo global de errores
```bash
git add src/app/core/interceptors/
git commit -m "feat: HTTP interceptor para manejo global de errores

- Interceptor centralizado para todas las peticiones HTTP
- Mensajes de error descriptivos por código de estado
- Manejo de errores de cliente y servidor
- Logging estructurado de errores"
```

### Commit 14: Skeleton loaders para mejor UX
```bash
git add src/app/shared/atoms/hero-card-skeleton/ src/app/shared/molecules/hero-detail-skeleton/
git commit -m "feat: skeleton loaders para mejor experiencia de usuario

- HeroCardSkeletonComponent: placeholder animado para tarjetas
- HeroDetailSkeletonComponent: placeholder animado para detalles
- Reemplazo de spinners por skeletons más profesionales
- Animaciones shimmer para feedback visual"
```

### Commit 15: Validación y sanitización de datos
```bash
git add src/app/features/heroes/domain/validators/ src/app/features/heroes/infrastructure/adapters/hero-api.adapter.ts src/app/features/heroes/domain/models/hero.model.ts
git commit -m "feat: validación y sanitización de datos de la API

- Validadores y type guards para modelos Hero
- Sanitización de respuestas de la API
- Validación de estructura de datos
- Manejo robusto de datos faltantes o malformados
- Modelo Hero actualizado con campos nullable"
```

## 🚀 Comandos Rápidos (Todos los Commits)

Si prefieres hacer todos los commits de una vez, aquí están en orden:

```bash
# 1. Configuración inicial
git add package.json package-lock.json angular.json tsconfig*.json .editorconfig .gitignore .vscode/
git commit -m "chore: configuración inicial del proyecto Angular 21"

# 2. Estilos y configuración de app
git add src/styles.scss src/index.html src/app/app.config.ts src/app/app.ts src/app/app.html src/app/app.scss src/app/app.routes.ts
git commit -m "feat: configuración de aplicación y estilos globales"

# 3. Domain Layer
git add src/app/features/heroes/domain/
git commit -m "feat: implementación de capa de dominio (arquitectura hexagonal)"

# 4. Application Layer
git add src/app/features/heroes/application/
git commit -m "feat: implementación de capa de aplicación"

# 5. Infrastructure Layer
git add src/app/features/heroes/infrastructure/
git commit -m "feat: implementación de adaptador HTTP (infraestructura)"

# 6. Componentes atómicos
git add src/app/shared/atoms/
git commit -m "feat: componentes atómicos (Atomic Design)"

# 7. Componentes moleculares
git add src/app/shared/molecules/
git commit -m "feat: componentes moleculares (Atomic Design)"

# 8. Vista de lista
git add src/app/features/heroes/presentation/pages/hero-list/
git commit -m "feat: vista de lista de superhéroes con paginación"

# 9. Vista de detalle
git add src/app/features/heroes/presentation/pages/hero-detail/
git commit -m "feat: vista de detalle de superhéroe con acordeones"

# 10. Mejoras de diseño
git add src/styles.scss src/app/features/heroes/presentation/pages/*/**.scss src/app/shared/**/*.scss
git commit -m "style: mejoras de diseño, UX/UI y responsive"

# 11. Documentación
git add README.md SETUP.md ARCHITECTURE.md
git commit -m "docs: documentación completa del proyecto"

# 12. Configuración final
git add public/assets/ package.json
git commit -m "chore: configuración final y mejoras de package.json"

# 13. HTTP Interceptor
git add src/app/core/interceptors/
git commit -m "feat: HTTP interceptor para manejo global de errores"

# 14. Skeleton Loaders
git add src/app/shared/atoms/hero-card-skeleton/ src/app/shared/molecules/hero-detail-skeleton/
git commit -m "feat: skeleton loaders para mejor experiencia de usuario"

# 15. Validación de datos
git add src/app/features/heroes/domain/validators/ src/app/features/heroes/infrastructure/adapters/hero-api.adapter.ts src/app/features/heroes/domain/models/hero.model.ts
git commit -m "feat: validación y sanitización de datos de la API"
```

## 📋 Convenciones de Commits Utilizadas

- **chore**: Cambios en configuración, build, herramientas
- **feat**: Nueva funcionalidad
- **style**: Cambios de formato, estilos (sin afectar lógica)
- **docs**: Documentación
- **fix**: Corrección de bugs
- **refactor**: Refactorización de código

## 💡 Tips

1. **Revisa antes de commitear**: `git status` para ver qué archivos se agregarán
2. **Commits pequeños**: Cada commit debe representar un cambio lógico
3. **Mensajes claros**: Describe qué y por qué, no cómo
4. **Un commit por feature**: Agrupa cambios relacionados

---

*Esta guía te ayudará a mantener un historial de Git limpio y profesional.*

