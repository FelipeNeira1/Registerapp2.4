import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './auth.service';

import { take, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.checkUserObs.pipe(
      take(1),
      map((user) => {
        if (!user) {
          if (state.url.indexOf("login") != -1) {
            return true;
          } else {
            this.router.navigateByUrl("/home");
            return false;
          }
        } else {
          if(state.url.indexOf("login") != -1){
            this.router.navigateByUrl("/login");
            return false;
          }else{
            return true;
          }
        }
      }
      )
    );
  }
  
}
