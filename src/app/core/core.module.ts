import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpTokenInterceptor } from './interceptors/http.token.interceptor';

import { ApiService, JwtService, ProductService, ProfilesService, UserService } from './services';

@NgModule({
  imports: [CommonModule],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true },
    ApiService,
    JwtService,
    ProfilesService,
    UserService,
    ProductService,
  ],
  declarations: [],
})
export class CoreModule {}
