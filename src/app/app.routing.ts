//Main Routing Module
//Import NgModule from angularCore for modules.
declare var System;
import { NgModule } from '@angular/core';

//Import Routes Type and RouterModule from angularRouter
import { Routes, RouterModule } from '@angular/router';

/******************************************************************************
 *  Import the components for pages, eager loading unless otherwise specified.
*******************************************************************************/

// Get rid of these
  import { AboutPageComponent } from './aboutPage.component';
  import { PageNotFoundComponent } from './page-not-found.component';  

/**************************** Lazy Loaded Modules Below ***************************** */
  const adminRoutes: Routes =[{ path: 'admin', 
            loadChildren:  './features/admin/admin.module#AdminModule'
  }]
// make routes available as type Routes via export
export const routes: Routes = [
    //...adminRoutes,
    // can uncomment out ...adminRoutes to load as shown in Router Docs, same Error Not allowed to load local resource
    { path: 'admin', loadChildren: ()=> System.import('./features/admin/admin.module').then(mod => mod.AdminModule)},
    { path: 'about', component: AboutPageComponent },
    { path: '**', pathMatch: 'full', component: PageNotFoundComponent }
] 

//Current Angular Routing Requires this.
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}

//Do not know why I am exporting the components here, believe it may have something to do with eager vs lazy loading
export const routerComponents =[
    PageNotFoundComponent,
    AboutPageComponent
]