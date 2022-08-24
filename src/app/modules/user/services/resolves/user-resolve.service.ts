import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {UserService} from "../user.service";
import {IUser} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<IUser>{

  constructor(private userService: UserService, /*private router: Router*/) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IUser> | Promise<IUser> | IUser {
    // const user = this.router.getCurrentNavigation()?.extras?.state?.['user']; /* this way is faster */
    const {state: {user}} = history;

    if (user) {
      return user;
    }

    const {id} = route.params;
    return this.userService.getById(id);
  }
}
