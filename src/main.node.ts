import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { MaterialModule } from '@angular/material';

import { CookieService } from 'angular2-cookie/services/cookies.service';

import { AuthGuard } from './app/shared/guards/auth-guard.service';
import { AuthService } from './app/shared/guards/auth.service';
import { PageNotFoundComponent } from './app/page-not-found.component';

import { AppComponent } from './app/app.server.component';
import { HomePageComponent } from './app/homePage.server.component'
import { MainToolbarComponent} from './app/mainToolbar.component';


@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent, 
                  HomePageComponent, 
                  PageNotFoundComponent,
                  MainToolbarComponent  ],
  providers: [ CookieService, AuthGuard, AuthService],

  imports: [
    FormsModule,
    MaterialModule.forRoot(),
    //UsersModule,
    UniversalModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent, pathMatch: 'full' },
      { path: '**', pathMatch: 'full', component: PageNotFoundComponent}
    ])
  ]
})
export class MainModule {

}
