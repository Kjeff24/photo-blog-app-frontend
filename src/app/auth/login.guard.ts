import { CanActivateFn } from '@angular/router';
import { TokenService } from '../services/token/token.service';
import { inject } from '@angular/core';

export const loginGuard: CanActivateFn = (route, state) => {
  const tokenService = inject(TokenService);

  if (tokenService.isLoggedIn()) {
    return true;
  } else {
    tokenService.login();
    return false;
  }
};
