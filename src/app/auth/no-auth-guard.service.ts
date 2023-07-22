import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserService } from '../core';
import { Router } from '@angular/router';

@Injectable()
export class NoAuthGuard {
  constructor(private userService: UserService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (this.userService.isAuthenticated) {
      this.router.navigate(['/']);
    }
    return this.userService.isAuthenticated;
  }
}
