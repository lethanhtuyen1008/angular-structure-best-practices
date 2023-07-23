import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { heroResolver } from './home.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    resolve: {
      data: heroResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
