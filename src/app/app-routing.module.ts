import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinamicOwlComponent } from './components/dinamic-owl/dinamic-owl.component';
import { StaticOwlComponent } from './components/static-owl/static-owl.component';

const routes: Routes = [
  {path:'static',component:StaticOwlComponent},
  {path:'dinamic',component:DinamicOwlComponent},
  { path: '', redirectTo: `/dinamic`, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
