import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DefaultAppSplashPageComponent} from './default-app-splashpage.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultAppSplashPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DefaultAppSplashPageRoutingModule { }
