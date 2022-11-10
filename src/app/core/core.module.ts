import {NgModule, SkipSelf, Optional, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import { BlogsService } from './services/blogs.service';

// Components

// Singleton Services

// Environment Configuration

import {HttpClientModule} from '@angular/common/http';
import { BlogsClient } from '@services/blogs-api-client';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  exports: [],
  providers: [
    BlogsService,
    BlogsClient
  ]
})

export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import only in AppModule');
    }
  }
}