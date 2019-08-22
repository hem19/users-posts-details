import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

const routes: Routes = [
  { path: "users-list", component: UsersListComponent },
  { path: "users-details/:id", component: UsersDetailsComponent },
  { path: "", redirectTo: "users-list", pathMatch: "full" }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
