import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../core/services';

@Injectable()
export class AuthGuard {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(
    _route: ActivatedRouteSnapshot,
    _state: RouterStateSnapshot,
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.userService.isAuthenticated) {
      this.router.navigate(['/']);
    }
    return this.userService.isAuthenticated;
  }
}
