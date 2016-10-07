import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UniversalModule } from 'angular2-universal';

//Importing Routing Module and the Components to be eager Loaded...
import { AppRoutingModule, routerComponents } from './app/app.routing'

//Cookie Service to be used for Authentication etc.
import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AppComponent } from './app/app.browser.component';

//TODO Break Out Header Into Own Module
import { MainToolbarComponent } from './app/mainToolbar.component'
// import Apps Modules
import { HomeModule } from './app/features/home/home.module';
import { AuthGuard } from './app/shared/guards/auth-guard.service';
import { AuthService } from './app/shared/guards/auth.service';

import { CanActivateSignUp } from './app/shared/guards/signup.guard';


//Material Modules, now in one file/import with tree shaking
import { MaterialModule } from '@angular/material';



@NgModule({
  bootstrap: [ 
    AppComponent
   ],
  imports: [
    FormsModule,
    HomeModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
  ],
  providers:[CookieService, AuthGuard, AuthService],
  declarations: [ 
    AppComponent,
    MainToolbarComponent,
    routerComponents
  ]
})
export class MainModule {

}
