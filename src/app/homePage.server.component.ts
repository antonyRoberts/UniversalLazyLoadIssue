//Home Page Component Simple For Now,
import { Component } from '@angular/core';

// Pretty Sure do not need/want to use UserService on the Server Render.
//import { UserService } from '../shared/services/user.service';

@Component({
    selector:'home-page',
   // providers: [UserService],
    styles: [ require('./styles/home_page.server.scss') ],
    template:`
        <div class="splash">
            Inside Server Home Page 
            <div class="loader"></div>
        </div>
    `  
})

export class HomePageComponent{
    constructor(){

    }


}