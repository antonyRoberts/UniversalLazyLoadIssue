//Home Page Component Simple For Now,
import { Component } from '@angular/core';

import { Router, Route } from '@angular/router'

@Component({
    selector:'home-main',
    providers: [],
    styles: [ require('../styles/home_main.component.scss') ],
    template:`
        <div >
          <br/>
         {{title}}

             <br/>
            This is the Simple Home Page, <br/>
            Admin Lazy Load Fails with Not Allowed to Load Local Resource.
            <br/>
            <md-card style="width:420px">
                Simple Card Should <br/>
                Have Some Stuff In It.
            </md-card>
            <br/>
                <button md-raised-button [routerLink]="['/about']" color="primary">About Page (Sync)</button>
                <br/>
                <button md-raised-button [routerLink]="['/admin']" color="primary">Admin Page (Lazy)</button>
               <br/>

           
        </div>
    `  
})

export class HomeMainComponent{
     title='Feris Bueler';

    constructor( private router: Router ){
    }


        goToMyFlat(){
            this.router.navigate(['user-flat'])
        }
}