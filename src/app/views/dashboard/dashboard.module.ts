import {NgModule} from '@angular/core';
import { BlogListModule } from 'src/app/feature/blog-list/blog-list.module';
import {DashboardComponent} from './dashboard.component';
import {DashboardRoutingModule} from './dashboard.routing';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [DashboardComponent],
  exports: [
    DashboardComponent
  ],
  imports: [
    SharedModule,
    BlogListModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
