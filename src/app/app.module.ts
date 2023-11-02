import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { AddDeleteComponent } from './add-delete/add-delete.component';
import { AppRoutingModule } from './app-routing.module';
import { MultiplyComponent } from './multiply/multiply.component';
import { TimeTableComponent } from './time-table/time-table.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddDeleteComponent,
    MultiplyComponent,
    TimeTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
