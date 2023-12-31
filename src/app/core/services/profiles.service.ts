import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiService } from './auth/api.service';
import { map } from 'rxjs/operators';
import { Profile } from '../models';

@Injectable()
export class ProfilesService {
  constructor(private apiService: ApiService) {}

  get(username: string): Observable<Profile> {
    return this.apiService.get('/profiles/' + username);
  }

  follow(username: string): Observable<Profile> {
    return this.apiService.post('/profiles/' + username + '/follow');
  }

  unfollow(username: string): Observable<Profile> {
    return this.apiService.delete('/profiles/' + username + '/follow');
  }
}
