// src/app/auth/token.interceptor.ts
import { HttpInterceptorFn } from '@angular/common/http';

export const TokenInterceptor: HttpInterceptorFn = (req, next) => {
    console.log("hahahahahahahaha")
    const token = localStorage.getItem('token');

    function isAuthRequest(url: string): boolean {
        return url.includes('/auth/login') ||
            url.includes('/auth/registration') ||
            url.includes('/checkotp')
    }

    if (isAuthRequest(req.url)) {
        return next(req);
    }

    if (token) {
        console.log('Token is :', token)
        const cloned = req.clone({
            setHeaders: {
                Authorization: `Bearer ${token}`
            }
        });
        return next(cloned);
    }

    return next(req);
};
