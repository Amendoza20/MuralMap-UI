import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuralComponent } from './mural/mural.component';
import { HomeComponent } from './home/home.component';
import { SearchPageComponent } from './search-page/search-page.component';

const routes: Routes = [
   
    {path: '', component: HomeComponent},
    {path: 'search', component: SearchPageComponent},
    {path: 'mural', component: MuralComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
