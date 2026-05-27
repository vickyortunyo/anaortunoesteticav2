import { inject } from '@angular/core';
import { Router, CanActivateFn } from '@angular/router';
import { Auth, authState } from '@angular/fire/auth';
import { map } from 'rxjs';

export const adminGuard: CanActivateFn = () => {
  const router = inject(Router);
  const auth = inject(Auth);

  return authState(auth).pipe(
    map(user => {
      if (user) {
        return true;
      } else {
        return router.createUrlTree(['/login']);
      }
    })
  );
};
