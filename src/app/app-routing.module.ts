import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumniComponent } from './alumni/alumni.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path:"",component:HomeComponent
  },
  {
    path:"alumni",component:AlumniComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
