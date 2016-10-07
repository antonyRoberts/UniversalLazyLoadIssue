import { Injectable }       from '@angular/core';
import {
  CanActivate, Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  NavigationExtras,
  CanLoad, Route
}                           from '@angular/router';
import { AuthService }      from './auth.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

@Injectable()
export class AuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor( private authService: AuthService,
               private cookieService: CookieService,
               private router: Router) {}
  //
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;

    return this.checkLogin(url);
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  canLoad(route: Route): boolean {
    let url = `/${route.path}`;
    console.log('Can Load Url?', url)
    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    let me ='me';
    
    let getCookie = this.cookieService.getObject('session')
    console.log('getCookie', getCookie)

    console.log('About to Call this authService from guard folder url is', url)
    let meDo = this.authService.isLoggedIn
   
   //Don't want someone logged in, in signUp.
    if(url == '/signup' && getCookie!=undefined){
        console.log('Already logged in, redirecting')
        this.router.navigate(['']);
        return false;
    }
   // if (this.authService.isLoggedIn) { return true; }

    // Store the attempted URL for redirecting
    //this.authService.redirectUrl = url;

    // Create a dummy session id
    let sessionId = 123456789;
    
    // Fake check to get access to url.

    if(getCookie!=undefined){
      return true; 
    }

    // Set our navigation extras object
    // that contains our global query params and fragment
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': sessionId },
      fragment: 'anchor'
    };

    // Navigate to the login page with extras
    this.router.navigate(['/login'], navigationExtras);
    return false;
  }
}