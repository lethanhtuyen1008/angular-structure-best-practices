import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class JwtService {
  private refreshTokenUrl = 'YOUR_REFRESH_TOKEN_ENDPOINT'; // Đặt URL của API lấy refresh token tại đây

  constructor() {}
  getToken(): String {
    return window.localStorage['jwtToken'];
  }

  saveToken(token: String) {
    window.localStorage['jwtToken'] = token;
  }

  destroyToken() {
    window.localStorage.removeItem('jwtToken');
  }

  getRefreshToken(): Observable<any> | any {
    return { token: this.refreshTokenUrl };
  }
}
