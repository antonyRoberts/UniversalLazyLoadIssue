import { Component,
         ViewEncapsulation,
         ViewChild,
         OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MdSidenavModule } from '@angular/material';


@Component({
  selector: 'app',
  styleUrls: ['app.component.css'],
  template: `
    <md-toolbar class="main-toolbar" color="primary">

        <main-header></main-header>
    
    </md-toolbar>
      <md-sidenav #sidenavLeft [mode]="sideNavMode">
      </md-sidenav>
    <router-outlet></router-outlet>
  `,
   encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  constructor( 
    public router: Router,
    private activatedRoute: ActivatedRoute
  ){

  }

  //After Init, check the cookie to see if user is logged in and token is still valid.
  ngOnInit(){
    console.log('after this.userService' )
  }
}
