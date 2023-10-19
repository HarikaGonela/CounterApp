import { NgModule } from '@angular/core';
import { AddDeleteComponent } from './add-delete/add-delete.component';
import { RouterModule, Routes } from '@angular/router';
import { MultiplyComponent } from './multiply/multiply.component';
import { AppComponent } from './app.component';

const routes : Routes = [ {path: 'add-delete', component : AddDeleteComponent},
{path: 'multiply', component : MultiplyComponent}
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
