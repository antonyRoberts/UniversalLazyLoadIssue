import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { AdminComponent } from './components/adminMain.component';
import { AdminDashboardComponent } from  './components/adminDashboard.component';
import { SiteStatsComponent } from './components/siteStats.component';
import { UserDataComponent } from './components/userData.component';
 
 import { adminRoutes } from './admin.routing';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(adminRoutes),
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        SiteStatsComponent,
        UserDataComponent
    ],
    providers: [],
})
export class AdminModule { }
