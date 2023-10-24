import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AddDeleteComponent } from './add-delete/add-delete.component';
import { AppRoutingModule } from './app-routing.module';
import { MultiplyComponent } from './multiply/multiply.component';

@NgModule({
  declarations: [
    AppComponent,
    AddDeleteComponent,
    MultiplyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
