// src/app/auth/token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token');
  const router = inject(Router);

  function isAuthRequest(url: string): boolean {
    return url.includes('/auth/login') ||
      url.includes('/auth/registration') ||
      url.includes('/checkotp');
  }

  if (isAuthRequest(req.url)) {
    return next(req);
  }

  const clonedReq = token
    ? req.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      })
    : req;

  return next(clonedReq).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 401) {
        // 🔥 Token is invalid or expired → logout the user
        console.warn('Token expired or unauthorized. Logging out...');
        localStorage.removeItem('token');
        router.navigate(['/login']);
      }

      return throwError(() => error);
    })
  );
};
