import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateSignUp implements CanActivate {

	constructor(
		private _router: Router
	) {

	}

 // this is never called because constructor fails
 // due to no provider error for snapshot
	canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
		var self = this;
		console.log(state.url);
		return true;
	}
}