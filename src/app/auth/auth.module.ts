import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { NoAuthGuard } from './no-auth-guard.service';
import { AuthGuard } from './auth-guard.service';

@NgModule({
  imports: [SharedModule, AuthRoutingModule],
  declarations: [AuthComponent],
  providers: [NoAuthGuard, AuthGuard],
})
export class AuthModule {}
