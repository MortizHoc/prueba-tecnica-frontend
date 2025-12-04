import { HttpInterceptorFn, HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';

/**
 * Interceptor HTTP para manejo global de errores
 * 
 * @description Intercepta todas las peticiones HTTP y maneja errores de forma centralizada.
 * Proporciona mensajes de error más descriptivos y maneja diferentes tipos de errores HTTP.
 * 
 * @author Maikol Ortiz - CC 1007193445
 */
export const httpErrorInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = 'Ha ocurrido un error inesperado. Por favor, intente nuevamente.';

      if (error.error instanceof ErrorEvent) {
        // Error del lado del cliente (red, timeout, etc.)
        errorMessage = 'Error de conexión. Verifique su conexión a internet.';
        console.error('Client-side error:', error.error.message);
      } else {
        // Error del lado del servidor
        switch (error.status) {
          case 0:
            errorMessage = 'No se pudo conectar con el servidor. Verifique su conexión.';
            break;
          case 400:
            errorMessage = 'Solicitud inválida. Por favor, verifique los datos enviados.';
            break;
          case 401:
            errorMessage = 'No autorizado. Por favor, inicie sesión.';
            break;
          case 403:
            errorMessage = 'Acceso denegado. No tiene permisos para realizar esta acción.';
            break;
          case 404:
            errorMessage = 'Recurso no encontrado. El elemento solicitado no existe.';
            break;
          case 408:
            errorMessage = 'Tiempo de espera agotado. Por favor, intente nuevamente.';
            break;
          case 429:
            errorMessage = 'Demasiadas solicitudes. Por favor, espere un momento.';
            break;
          case 500:
            errorMessage = 'Error interno del servidor. Por favor, intente más tarde.';
            break;
          case 502:
            errorMessage = 'Servidor no disponible. Por favor, intente más tarde.';
            break;
          case 503:
            errorMessage = 'Servicio temporalmente no disponible. Por favor, intente más tarde.';
            break;
          case 504:
            errorMessage = 'Tiempo de espera del servidor agotado. Por favor, intente más tarde.';
            break;
          default:
            errorMessage = `Error ${error.status}: ${error.message || 'Error desconocido'}`;
        }
        console.error(`Server-side error [${error.status}]:`, error.message);
      }

      // Retornar error con mensaje descriptivo
      return throwError(() => ({
        message: errorMessage,
        status: error.status,
        originalError: error
      }));
    })
  );
};

