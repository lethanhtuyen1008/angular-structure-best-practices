import { NgModule } from '@angular/core';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';
import { SharedModule } from '@/app/shared/shared.module';

@NgModule({
  imports: [SharedModule, ProfileRoutingModule],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {}
