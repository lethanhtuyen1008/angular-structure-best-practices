import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent, HeaderComponent, SharedModule } from './shared';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { HomeModule } from './pages/home/home.module';
import { AuthModule } from './auth/auth.module';
import { NgbdToastGlobal } from './shared/components/toast/toast-global.component';
import { ToastsContainer } from './shared/components/toast/toasts-container.component';

@NgModule({
  declarations: [AppComponent, FooterComponent, HeaderComponent],
  imports: [
    BrowserModule,
    ToastsContainer,
    CoreModule,
    SharedModule,
    HomeModule,
    AuthModule,
    AppRoutingModule,
  ],

  bootstrap: [AppComponent],
})
export class AppModule {}
