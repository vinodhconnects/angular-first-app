import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxComponent } from './box/box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent
  ], //components, directives and pipes
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],// other modules
  providers: [],//services
  bootstrap: [AppComponent] //components that can be called in index.html
})
export class AppModule { }
