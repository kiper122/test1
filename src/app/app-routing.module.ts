import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { UsersListComponent } from './components/users-list/users-list.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {path:'users',component:UsersListComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
