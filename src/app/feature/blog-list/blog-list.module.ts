import {NgModule} from '@angular/core';
import {BlogListComponent} from './blog-list.component';
import {BlogListRoutingModule} from './blog-list.routing';
import {NgxDatatableModule} from '@swimlane/ngx-datatable';
import { BlogsService } from '@services/blogs.service';
import { API_BLOGS_URL, BlogsClient } from '@services/blogs-api-client';
import {SharedModule} from '@shared/shared.module';

@NgModule({
  declarations: [BlogListComponent],
  exports: [BlogListComponent],
  imports: [
    SharedModule,
    NgxDatatableModule,
    BlogListRoutingModule
  ],
  providers: [
    BlogsService,
    BlogsClient
  ]
})
export class BlogListModule { }
