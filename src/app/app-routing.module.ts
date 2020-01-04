import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuralComponent } from './mural/mural.component';


const routes: Routes = [
  {path: 'mural', component: MuralComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
