import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {UsersComponent} from "./components/users/users.component";
import {UserDetailsComponent} from "./components/user-details/user-details.component";
import {UserResolveService} from "./services";
import {UserGuardGuard} from "./guards";

const routes: Routes = [
  {
    path: '', component: UsersComponent, canActivate: [UserGuardGuard],
    children: [
      {path: ':id', component: UserDetailsComponent, resolve: {data: UserResolveService}}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
