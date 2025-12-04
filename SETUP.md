# 🚀 Guía de Instalación y Configuración

**Autor:** Maikol Ortiz - CC 1007193445  
**Fecha:** 2025-12-03

## 📋 Prerrequisitos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js**: Versión 18 o superior
  - Verificar: `node --version`
  - Descargar: [nodejs.org](https://nodejs.org/)

- **npm**: Versión 9 o superior (viene con Node.js)
  - Verificar: `npm --version`

- **Git**: (Opcional, para control de versiones)
  - Verificar: `git --version`

## 📥 Instalación del Proyecto

### Paso 1: Clonar o Descargar el Proyecto

Si tienes el proyecto en un repositorio Git:
```bash
git clone <url-del-repositorio>
cd prueba-tecnica-frontend
```

Si tienes el proyecto comprimido:
1. Descomprime el archivo
2. Abre una terminal en la carpeta del proyecto

### Paso 2: Instalar Dependencias

Ejecuta el siguiente comando para instalar todas las dependencias necesarias:

```bash
npm install
```

Este comando instalará:
- Angular 21 y todas sus dependencias
- Angular Material 21
- Bootstrap 5.3
- RxJS
- TypeScript
- Y todas las demás dependencias listadas en `package.json`

**Tiempo estimado:** 2-5 minutos dependiendo de tu conexión a internet.

### Paso 3: Verificar la Instalación

Verifica que todo se instaló correctamente:

```bash
npm list --depth=0
```

Deberías ver todas las dependencias listadas sin errores.

## ▶️ Ejecutar el Proyecto

### Modo Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm start
```

O alternativamente:

```bash
ng serve
```

**El servidor se iniciará en:** `http://localhost:4200/`

El servidor de desarrollo incluye:
- ✅ Hot reload (recarga automática al guardar cambios)
- ✅ Source maps para debugging
- ✅ Errores en consola del navegador
- ✅ Compilación incremental

### Acceder a la Aplicación

1. Abre tu navegador web
2. Navega a: `http://localhost:4200/`
3. La aplicación debería cargar automáticamente mostrando la lista de superhéroes

## 🛠️ Comandos Disponibles

### Desarrollo

```bash
# Iniciar servidor de desarrollo
npm start
# o
ng serve

# Iniciar con puerto específico
ng serve --port 4201

# Abrir automáticamente en el navegador
ng serve --open
```

### Build (Compilación)

```bash
# Build de producción (optimizado)
npm run build
# o
ng build

# Build de desarrollo (con source maps)
ng build --configuration development

# Build con watch mode (recompila al cambiar archivos)
npm run watch
# o
ng build --watch
```

Los archivos compilados se generarán en la carpeta `dist/`.

### Testing

```bash
# Ejecutar pruebas unitarias
npm test
# o
ng test

# Ejecutar pruebas con cobertura
ng test --code-coverage
```

### Linting y Formateo

```bash
# Verificar errores de linting
ng lint

# Formatear código (si tienes Prettier configurado)
npx prettier --write "src/**/*.{ts,html,scss}"
```

## 🔧 Configuración Adicional

### Variables de Entorno

Actualmente el proyecto no requiere variables de entorno. La URL de la API está configurada directamente en:

```
src/app/features/heroes/infrastructure/adapters/hero-api.adapter.ts
```

Si necesitas cambiar la URL de la API, edita la constante `API_BASE_URL` en ese archivo.

### Configurar Proxy (Opcional)

Si necesitas configurar un proxy para desarrollo, crea un archivo `proxy.conf.json`:

```json
{
  "/api": {
    "target": "https://ea1w717ym2.execute-api.us-east-1.amazonaws.com",
    "secure": true,
    "changeOrigin": true
  }
}
```

Y ejecuta:
```bash
ng serve --proxy-config proxy.conf.json
```

### Cambiar el Puerto

Por defecto, Angular usa el puerto 4200. Para cambiar:

```bash
ng serve --port 4201
```

O edita `angular.json`:
```json
"serve": {
  "options": {
    "port": 4201
  }
}
```

## 🐛 Solución de Problemas Comunes

### Error: "Cannot find module"

**Solución:**
```bash
# Eliminar node_modules y reinstalar
rm -rf node_modules package-lock.json
npm install
```

En Windows PowerShell:
```powershell
Remove-Item -Recurse -Force node_modules, package-lock.json
npm install
```

### Error: "Port 4200 is already in use"

**Solución:**
```bash
# Usar otro puerto
ng serve --port 4201

# O encontrar y cerrar el proceso que usa el puerto 4200
```

### Error: "Module not found" o problemas de importación

**Solución:**
1. Verifica que todas las rutas de importación sean correctas
2. Asegúrate de que todos los archivos existan
3. Reinicia el servidor de desarrollo

### La aplicación no carga o muestra errores

**Solución:**
1. Abre la consola del navegador (F12)
2. Revisa los errores en la pestaña "Console"
3. Revisa la pestaña "Network" para ver si hay peticiones fallidas
4. Verifica que la API esté accesible

### Problemas con Angular Material

**Solución:**
```bash
# Reinstalar Angular Material
npm install @angular/material @angular/cdk
```

## 📦 Build para Producción

### Generar Build de Producción

```bash
npm run build
```

Esto generará:
- Archivos optimizados y minificados
- Tree-shaking (eliminación de código no usado)
- Source maps (opcional, para debugging en producción)

### Archivos Generados

Los archivos se generarán en `dist/prueba-tecnica-frontend/`:
- `index.html` - Punto de entrada
- `main-*.js` - Código principal
- `polyfills-*.js` - Polyfills para compatibilidad
- `styles-*.css` - Estilos compilados
- `assets/` - Assets estáticos

### Desplegar

Los archivos en `dist/` están listos para desplegar en:
- **Netlify**: Arrastra la carpeta `dist/`
- **Vercel**: Conecta tu repositorio Git
- **GitHub Pages**: Sube los archivos a la rama `gh-pages`
- **Servidor propio**: Copia los archivos al servidor web

## 🔍 Verificación Post-Instalación

Después de instalar, verifica que todo funciona:

1. ✅ El servidor inicia sin errores
2. ✅ La aplicación carga en el navegador
3. ✅ Se muestra la lista de superhéroes
4. ✅ La paginación funciona
5. ✅ Al hacer clic en un superhéroe, se muestra el detalle
6. ✅ El botón de regreso funciona

## 📞 Soporte

Si encuentras problemas durante la instalación:

1. Revisa la sección "Solución de Problemas Comunes"
2. Verifica que tienes las versiones correctas de Node.js y npm
3. Asegúrate de tener una conexión a internet estable
4. Revisa los logs de error en la consola

---

*Si sigues estos pasos, deberías tener el proyecto funcionando correctamente.*

