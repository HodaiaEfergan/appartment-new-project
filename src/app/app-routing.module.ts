import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ActivatedRoute, Router } from '@angular/router';
import { SolutionComponent } from './components/solution/solution.component';
import { AddDepartmentComponent } from './components/add-department/add-department.component';
import { SearchComponent } from './components/search/search.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'add-department', component: AddDepartmentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
