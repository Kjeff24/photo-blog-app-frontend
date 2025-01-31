import { HttpInterceptorFn } from '@angular/common/http';
import { TokenService } from '../services/token/token.service';
import { inject } from '@angular/core';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const tokenService = inject(TokenService);
  if (req.url.includes('/blog')) {
    const token = tokenService.getIdToken();
    if (token) {
      const clonedReq = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      return next(clonedReq);
    }
  }
  return next(req);
};
