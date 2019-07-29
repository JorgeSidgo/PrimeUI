import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LoginModule } from './login/login.module';
import { SystemModule } from './system/system.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LoginModule,
    SystemModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
