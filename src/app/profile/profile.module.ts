import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [SharedModule, ProfileRoutingModule],
  declarations: [ProfileComponent],
  providers: [],
})
export class ProfileModule {}
