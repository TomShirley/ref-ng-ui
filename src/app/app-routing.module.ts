import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from './views/dashboard/dashboard.component';
import { DefaultAppSplashpageComponent } from './views/default-app-splashpage/default-app-splashpage.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'ng-splashpage'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'ng-splashpage',
    component: DefaultAppSplashpageComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
