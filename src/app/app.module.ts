import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {CoreModule} from './core/core.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './views/dashboard/dashboard.module';
import { DefaultAppSplashpageComponent } from './views/default-app-splashpage/default-app-splashpage.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultAppSplashpageComponent    
  ],
  imports: [
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    DashboardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
