import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { JwtService } from './auth/jwt.service';
import { User } from '../models';
import { distinctUntilChanged } from 'rxjs/operators';

@Injectable()
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject.asObservable().pipe(distinctUntilChanged());

  private isAuthenticatedSubject = false;
  public isAuthenticated = this.isAuthenticatedSubject;

  constructor(private jwtService: JwtService) {}

  populate() {
    if (this.jwtService.getToken()) {
      this.setAuth({
        bio: 'bio',
        email: 'tuyenlt@gmail.com',
        image: '',
        token: 'token',
        username: 'tuyenlt',
      });
    } else {
      this.purgeAuth();
    }
  }

  setAuth(user: User) {
    this.jwtService.saveToken(user.token);
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject = true;
  }

  purgeAuth() {
    this.jwtService.destroyToken();
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject = false;
  }

  attemptAuth(type: any, credentials: any) {
    this.setAuth({
      bio: 'bio',
      email: 'tuyenlt@gmail.com',
      image: '',
      token: 'token',
      username: 'tuyenlt',
    });
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  update(user: User) {}
}
