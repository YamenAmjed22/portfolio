import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const http = inject(HttpClient);

  return http.get<{ isAdmin: boolean }>('http://localhost:9090/api/auth/check-admin').pipe(
    map(res => {
      if (res.isAdmin) {
        return true;
      } else {
        router.navigate(['/home']);
        return false;
      }
    }),
    catchError(err => {
      console.error("Auth Guard Error:", err);
      router.navigate(['/home']);
      return of(false);
    })
  );
};
