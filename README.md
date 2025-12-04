# 🦸 Prueba Técnica Frontend - Superhéroes

**Desarrollador:** Maikol Ortiz  
**Documento de Identidad:** CC 1007193445  
**Fecha:** 2025-12-03

## 📋 Descripción del Proyecto

Aplicación web desarrollada en Angular para la gestión y visualización de superhéroes. El proyecto implementa una interfaz gráfica moderna y responsive con dos vistas principales:

1. **Lista de Superhéroes**: Vista principal con paginación avanzada que muestra una lista de superhéroes obtenidos desde la API de Software Colombia.
2. **Detalle de Superhéroe**: Vista que muestra información completa de un superhéroe seleccionado con secciones organizadas en acordeones.

## 📚 Documentación Adicional

Para más detalles, consulta la documentación completa:

- 📖 **[SETUP.md](./SETUP.md)** - Guía completa de instalación y configuración
- 🏗️ **[ARCHITECTURE.md](./ARCHITECTURE.md)** - Explicación detallada de la arquitectura

## 🏗️ Arquitectura

El proyecto implementa una arquitectura moderna combinando tres enfoques:

### 🎯 Arquitectura Hexagonal
Separación clara de capas: **Domain** → **Application** → **Infrastructure** → **Presentation**

### 🧩 Atomic Design
Organización de componentes: **Atoms** → **Molecules** → **Pages**

### 📦 Vertical Slicing
Organización por features en lugar de por capas técnicas

> 🏗️ **Para detalles completos**, consulta [ARCHITECTURE.md](./ARCHITECTURE.md)

## 🛠️ Tecnologías Utilizadas

- **Angular 21**: Framework principal
- **Angular Material 21**: Componentes UI (Material Design 3)
- **Bootstrap 5.3**: Sistema de grid y utilidades CSS
- **RxJS**: Programación reactiva
- **TypeScript**: Lenguaje de programación
- **SCSS**: Preprocesador CSS

## 📁 Estructura del Proyecto

```
src/app/
├── features/
│   └── heroes/
│       ├── domain/
│       │   ├── models/          # Modelos de dominio
│       │   └── ports/           # Interfaces (puertos)
│       ├── application/
│       │   └── services/        # Servicios de aplicación
│       ├── infrastructure/
│       │   └── adapters/        # Adaptadores HTTP
│       └── presentation/
│           ├── atoms/            # Componentes atómicos
│           ├── molecules/       # Componentes moleculares
│           ├── organisms/       # Componentes orgánicos
│           └── pages/           # Páginas completas
├── shared/
│   ├── atoms/                   # Componentes compartidos atómicos
│   ├── molecules/               # Componentes compartidos moleculares
│   ├── organisms/                # Componentes compartidos orgánicos
│   └── utils/                    # Utilidades compartidas
└── app.config.ts                # Configuración de la aplicación
```

## 🌐 Demo en Producción

Puedes ver la aplicación desplegada en Vercel aquí:

- **Demo:** [prueba-tecnica-frontend-vecs](https://vercel.com/mortizhocs-projects/prueba-tecnica-frontend-vecs)

## 🚀 Inicio Rápido

### Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Iniciar servidor de desarrollo
npm start

# 3. Abrir en el navegador
# http://localhost:4200/
```

> 📖 **Para instrucciones detalladas**, consulta [SETUP.md](./SETUP.md)

### Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm start` | Inicia el servidor de desarrollo |
| `npm run build` | Compila para producción |
| `npm test` | Ejecuta pruebas unitarias |
| `npm run watch` | Compila en modo watch |

## 📡 API

El proyecto consume la API de Superhéroes de Software Colombia:

- **Base URL**: `https://ea1w717ym2.execute-api.us-east-1.amazonaws.com/api`
- **Endpoints**:
  - `GET /heroes?page={page}&size={size}`: Obtiene lista paginada de superhéroes
  - `GET /hero?id={hero_id}`: Obtiene detalles de un superhéroe

## ✨ Características Principales

### Vista de Lista de Superhéroes
- ✅ Lista paginada con API de Software Colombia
- ✅ Paginación avanzada (primera/última página, elipsis)
- ✅ Cambio de tamaño de página (10, 20, 30, 50)
- ✅ Tarjetas modernas con efectos hover
- ✅ Skeleton loaders para mejor UX durante la carga
- ✅ Estados de carga y error
- ✅ Diseño completamente responsive

### Vista de Detalle de Superhéroe
- ✅ Información completa organizada en acordeones
- ✅ Estadísticas de poder con indicadores de color
- ✅ Secciones: Apariencia, Biografía, Trabajo, Conexiones
- ✅ Imagen grande del superhéroe
- ✅ Skeleton loader durante la carga
- ✅ Navegación de regreso

### Mejoras Técnicas y Robustez
- ✅ HTTP Interceptor para manejo global de errores
- ✅ Validación y sanitización de datos de la API
- ✅ Type guards para seguridad de tipos
- ✅ Manejo robusto de errores con mensajes descriptivos
- ✅ Validación de estructura de respuestas de la API

> ✨ **Para lista completa de características**, consulta [FEATURES.md](./FEATURES.md)

## 📝 Documentación del Código

El código está completamente documentado siguiendo las convenciones de JSDoc:

- Todos los componentes, servicios y modelos incluyen comentarios descriptivos
- Cada método público tiene documentación de parámetros y retornos
- Se incluyen ejemplos de uso cuando es relevante

## 🧪 Testing

El proyecto incluye pruebas unitarias básicas. Para ejecutarlas:

```bash
npm test
```

## 📦 Build para Producción

Para generar el build de producción:

```bash
npm run build
```

Los archivos compilados se generarán en la carpeta `dist/`.

## 🔧 Configuración

### Variables de Entorno

Actualmente no se requieren variables de entorno. La URL de la API está configurada directamente en el adaptador.

### Personalización de Estilos

Los estilos globales se encuentran en `src/styles.scss`. Los estilos específicos de componentes están en sus respectivos archivos `.scss`.

## 📄 Licencia

Este proyecto fue desarrollado como parte de una prueba técnica para Software Colombia Servicios Informáticos S.A.S.

## 👤 Autor

**Maikol Ortiz**  
Documento: CC 1007193445  
Email: maikol.raw@gmail.com

## 📧 Contacto

Para cualquier consulta sobre este proyecto, por favor contactar a:
- **Stefany Rincón**: stefany.rincon@software-colombia.com

---

## 📌 Notas de Entrega

### Instrucciones para Ejecutar el Proyecto

1. Asegúrese de tener Node.js y npm instalados
2. Ejecute `npm install` para instalar las dependencias
3. Ejecute `npm start` para iniciar el servidor de desarrollo
4. Abra su navegador en `http://localhost:4200/`
5. La aplicación mostrará automáticamente la lista de superhéroes

### Archivos a Enviar

Comprimir todos los archivos fuente del proyecto (excluyendo `node_modules` y archivos de build) y enviar como adjunto al correo con el asunto:

**[Maikol Ortiz] - [1007193445] - Prueba Front End**

---

*Desarrollado con ❤️ usando Angular y Material Design*
