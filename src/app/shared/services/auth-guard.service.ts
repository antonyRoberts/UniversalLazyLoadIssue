import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild
}                           from '@angular/router';
import { AuthService }      from './auth.service';
@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthService, private router: Router) {}
  //
 
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }
  checkLogin(url: string): boolean {
    console.log('Inside of Check Login, about to use authService')
    let me = 'me'
    let meCall = this.authService.isLoggedIn
    if (me) { return true; }
   // if (this.authService.isLoggedIn) { return true; }
    // Store the attempted URL for redirecting
    //this.authService.redirectUrl = url;
    // Navigate to the login page
    this.router.navigate(['/login']);
    return false;
  }
}