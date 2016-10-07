import { Component, ViewEncapsulation, OnInit } from '@angular/core';


@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  template: `
    <md-toolbar class="main-toolbar" color="primary">
      <main-header></main-header> Server Side
    </md-toolbar>
    <router-outlet></router-outlet>
  `,
   encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  constructor(  ){

  }

  //After Init, check the cookie to see if user is logged in and token is still valid.

}
