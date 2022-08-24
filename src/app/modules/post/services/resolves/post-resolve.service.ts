import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs";

import {PostService} from "../post.service";
import {IPost} from "../../interfaces";

@Injectable({
  providedIn: 'root'
})
export class PostResolveService implements Resolve<IPost>{

  constructor(private postService: PostService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IPost> | Promise<IPost> | IPost {
    // const post = this.router.getCurrentNavigation()?.extras?.state?.['post'];
    const {state: {post}} = history;

    if (post) {
      return post;
    }

    const {id} = route.params;
    return this.postService.getById(id);
  }
}
