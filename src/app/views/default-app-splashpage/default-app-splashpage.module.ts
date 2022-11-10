import {NgModule} from '@angular/core';
import { BlogListModule } from 'src/app/feature/blog-list/blog-list.module';
import {DefaultAppSplashpageComponent} from './default-app-splashpage.component';
import {DefaultAppSplashPageRoutingModule} from './default-app-splashpage.routing';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [DefaultAppSplashpageComponent],
  exports: [
    DefaultAppSplashpageComponent
  ],
  imports: [
    SharedModule,
    BlogListModule,
    DefaultAppSplashPageRoutingModule
  ]
})
export class DashboardModule { }
