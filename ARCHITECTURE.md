# 🏗️ Arquitectura del Proyecto

**Autor:** Maikol Ortiz - CC 1007193445  
**Fecha:** 2025-12-03

## 📐 Principios Arquitectónicos

Este proyecto implementa una arquitectura moderna y escalable combinando tres enfoques complementarios:

### 1. Arquitectura Hexagonal (Ports & Adapters)

La arquitectura hexagonal separa la lógica de negocio de los detalles técnicos, permitiendo que la aplicación sea independiente de frameworks, bases de datos y servicios externos.

```
┌─────────────────────────────────────────┐
│         PRESENTATION LAYER              │
│  (Componentes UI, Páginas, Templates)   │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│       APPLICATION LAYER                 │
│  (Casos de Uso, Servicios de Aplicación)│
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│          DOMAIN LAYER                   │
│  (Modelos, Puertos/Interfaces)         │
└─────────────────┬───────────────────────┘
                  │
┌─────────────────▼───────────────────────┐
│      INFRASTRUCTURE LAYER               │
│  (Adaptadores HTTP, Implementaciones)   │
└─────────────────────────────────────────┘
```

#### Capas Implementadas:

**Domain (Dominio)**
- `models/`: Entidades del dominio (Hero, PowerStats, Biography, etc.)
- `ports/`: Interfaces que definen contratos (HeroRepositoryPort)

**Application (Aplicación)**
- `services/`: Casos de uso y lógica de aplicación (HeroService)

**Infrastructure (Infraestructura)**
- `adapters/`: Implementaciones concretas (HeroApiAdapter - HTTP)

**Presentation (Presentación)**
- Componentes UI organizados por Atomic Design

**Core (Núcleo)**
- `interceptors/`: Interceptores HTTP globales (httpErrorInterceptor)
- `validators/`: Validadores y type guards para datos de dominio

### 2. Atomic Design

Organización de componentes UI en una jerarquía clara y reutilizable:

```
Pages (Páginas)
    └── Organisms (Organismos) - Futuro
        └── Molecules (Moléculas)
            └── Atoms (Átomos)
```

**Atoms (Átomos)**
- Componentes básicos e indivisibles
- Ejemplo: `HeroCardComponent`

**Molecules (Moléculas)**
- Combinación de átomos
- Ejemplos: `PaginationComponent`, `LoadingSpinnerComponent`, `ErrorMessageComponent`

**Pages (Páginas)**
- Vistas completas que combinan moléculas y átomos
- Ejemplos: `HeroListComponent`, `HeroDetailComponent`

### 3. Vertical Slicing

Organización por features (características) en lugar de por capas técnicas:

```
features/
  └── heroes/
      ├── domain/
      ├── application/
      ├── infrastructure/
      └── presentation/
```

**Ventajas:**
- Todo lo relacionado con "heroes" está en un solo lugar
- Fácil de encontrar y modificar
- Escalable: nuevas features se agregan como nuevas carpetas
- Reduce acoplamiento entre features

## 📁 Estructura Detallada del Proyecto

```
src/app/
├── features/                          # Features organizadas por dominio
│   └── heroes/                        # Feature: Gestión de Superhéroes
│       ├── domain/                     # Capa de Dominio
│       │   ├── models/                 # Modelos de dominio
│       │   │   └── hero.model.ts      # Interfaces: Hero, PowerStats, etc.
│       │   ├── ports/                  # Puertos (interfaces)
│       │   │   └── hero.repository.port.ts  # Contrato del repositorio
│       │   └── validators/             # Validadores y type guards
│       │       └── hero.validator.ts  # Validación de datos Hero
│       │
│       ├── application/                # Capa de Aplicación
│       │   └── services/               # Servicios de aplicación
│       │       └── hero.service.ts     # Casos de uso de superhéroes
│       │
│       ├── infrastructure/             # Capa de Infraestructura
│       │   └── adapters/               # Adaptadores
│       │       └── hero-api.adapter.ts # Implementación HTTP del repositorio
│       │
│       └── presentation/                # Capa de Presentación
│           ├── atoms/                  # Componentes atómicos específicos
│           ├── molecules/              # Componentes moleculares específicos
│           ├── organisms/              # Componentes orgánicos (futuro)
│           └── pages/                  # Páginas completas
│               ├── hero-list/          # Vista de lista
│               └── hero-detail/        # Vista de detalle
│
├── shared/                              # Componentes compartidos
│   ├── atoms/                          # Átomos reutilizables
│   │   ├── hero-card/                  # Tarjeta de superhéroe
│   │   └── hero-card-skeleton/         # Skeleton de tarjeta
│   ├── molecules/                      # Moléculas reutilizables
│   │   ├── pagination/                 # Componente de paginación
│   │   ├── loading-spinner/           # Spinner de carga
│   │   ├── error-message/              # Mensaje de error
│   │   └── hero-detail-skeleton/       # Skeleton de detalle
│   ├── organisms/                      # Organismos reutilizables (futuro)
│   └── utils/                          # Utilidades compartidas
│
├── core/                                # Núcleo de la aplicación
│   └── interceptors/                    # Interceptores HTTP
│       └── http-error.interceptor.ts   # Interceptor de errores
│
├── features/                            # Features organizadas por dominio
│   └── heroes/
│       ├── domain/
│       │   ├── models/                 # Modelos de dominio
│       │   ├── ports/                  # Puertos (interfaces)
│       │   └── validators/             # Validadores y type guards
│       │       └── hero.validator.ts   # Validación de datos Hero
│
├── app.config.ts                        # Configuración de la aplicación
├── app.routes.ts                        # Configuración de rutas
├── app.ts                               # Componente raíz
└── app.html                             # Template raíz
```

## 🔄 Flujo de Datos

### 1. Solicitud de Lista de Superhéroes

```
HeroListComponent (Presentation)
    ↓ llama
HeroService (Application)
    ↓ usa
HeroRepositoryPort (Domain - Interface)
    ↓ implementado por
HeroApiAdapter (Infrastructure)
    ↓ hace petición HTTP
API de Software Colombia
    ↓ retorna datos
HeroApiAdapter transforma respuesta
    ↓ retorna
HeroService procesa datos
    ↓ retorna
HeroListComponent muestra en UI
```

### 2. Solicitud de Detalle de Superhéroe

```
HeroDetailComponent (Presentation)
    ↓ llama
HeroService (Application)
    ↓ usa
HeroRepositoryPort (Domain - Interface)
    ↓ implementado por
HeroApiAdapter (Infrastructure)
    ↓ hace petición HTTP
API de Software Colombia
    ↓ retorna datos
HeroApiAdapter transforma respuesta
    ↓ retorna
HeroService procesa datos
    ↓ retorna
HeroDetailComponent muestra en UI
```

## 🔌 Inyección de Dependencias

La aplicación utiliza el sistema de inyección de dependencias de Angular para conectar las capas:

```typescript
// app.config.ts
{
  provide: HeroRepositoryPort,        // Interface (Puerto)
  useClass: HeroApiAdapter            // Implementación (Adaptador)
}
```

**Ventajas:**
- Fácil cambio de implementación (ej: cambiar de HTTP a GraphQL)
- Testeable: se pueden crear mocks del repositorio
- Desacoplamiento: la aplicación no conoce detalles de infraestructura

## 🎯 Patrones de Diseño Utilizados

### 1. Repository Pattern
- Abstrae el acceso a datos
- Implementado mediante `HeroRepositoryPort` y `HeroApiAdapter`

### 2. Dependency Injection
- Angular maneja la inyección automáticamente
- Facilita testing y mantenimiento

### 3. Observer Pattern
- RxJS Observables para programación reactiva
- Manejo asíncrono de datos

### 4. Component Pattern
- Componentes reutilizables y desacoplados
- Comunicación mediante @Input/@Output

## 📊 Separación de Responsabilidades

| Capa | Responsabilidad | Ejemplo |
|------|----------------|---------|
| **Domain** | Lógica de negocio, modelos puros | `Hero`, `PowerStats` |
| **Application** | Casos de uso, orquestación | `HeroService.getHeroes()` |
| **Infrastructure** | Detalles técnicos, APIs externas | `HeroApiAdapter` (HTTP) |
| **Presentation** | UI, interacción con usuario | `HeroListComponent` |

## 🚀 Escalabilidad

Esta arquitectura permite:

1. **Agregar nuevas features**: Crear nueva carpeta en `features/`
2. **Cambiar implementación**: Cambiar adaptador sin afectar lógica
3. **Agregar nuevas fuentes de datos**: Nuevos adaptadores implementando el mismo puerto
4. **Reutilizar componentes**: Componentes en `shared/` disponibles para todas las features

## 🔒 Ventajas de esta Arquitectura

✅ **Testeable**: Cada capa se puede testear independientemente  
✅ **Mantenible**: Código organizado y fácil de encontrar  
✅ **Escalable**: Fácil agregar nuevas features  
✅ **Desacoplado**: Cambios en una capa no afectan otras  
✅ **Reutilizable**: Componentes y servicios reutilizables  
✅ **Claro**: Separación clara de responsabilidades  

---

*Esta arquitectura sigue las mejores prácticas de la industria y facilita el mantenimiento y escalabilidad del proyecto.*

