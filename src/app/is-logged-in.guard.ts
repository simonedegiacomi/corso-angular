import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const isLoggedInGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const loggedIn = await authService.isLoggedIn();
  if (!loggedIn) {
    router.navigateByUrl('/login');
    return false;
  }

  return true;
};
