import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { JwtService } from '../services';

@Injectable()
export class HttpTokenInterceptor implements HttpInterceptor {
  constructor(private jwtService: JwtService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: '',
    };

    const token = this.jwtService.getToken();

    if (token) {
      headersConfig['Authorization'] = `Token ${token}`;
    }

    const request = req.clone({ setHeaders: headersConfig });

    // Thêm phần kiểm tra token hết hạn và gọi API refresh token
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401 && !req.url.endsWith('/refresh_token')) {
          // Kiểm tra xem có lỗi 401 (Unauthorized) và không phải API refresh token
          const refreshToken = this.jwtService.getRefreshToken();

          if (refreshToken) {
            return this.jwtService.getRefreshToken().pipe(
              switchMap((response: any) => {
                const newToken = response.access_token; // Lấy token mới từ response
                console.log({ refreshToken });

                // Lưu trữ token mới vào nơi lưu trữ (localStorage, cookie, vv.)
                // ... Code lưu trữ token mới vào đây ...

                // Thực hiện yêu cầu lại với token mới
                const newHeadersConfig = {
                  ...headersConfig,
                  Authorization: `Token ${newToken}`,
                };
                const newRequest = req.clone({ setHeaders: newHeadersConfig });
                return next.handle(newRequest);
              }),
              catchError((refreshError) => {
                // Xử lý lỗi khi gọi API refresh token không thành công (tùy vào yêu cầu của ứng dụng)
                // ... Code xử lý lỗi refresh token vào đây ...

                // Nếu không muốn tiếp tục gửi yêu cầu, có thể throw error hoặc trả về một Observable error
                return throwError(refreshError);
              }),
            );
          }
        }

        // Nếu không phải lỗi 401 hoặc không có refresh token, tiếp tục trả về lỗi ban đầu
        return throwError(error);
      }),
    );
  }
}
