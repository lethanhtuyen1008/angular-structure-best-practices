import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './auth/auth.module';
import { ToastsComponent } from './shared/components/toast/toasts.component';
import { LoadingBackdropComponent } from './shared/components/backdrop/loading-backdrop.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    LoadingBackdropComponent,
    ToastsComponent,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
