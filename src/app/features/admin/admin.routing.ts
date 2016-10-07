import { ModuleWithProviders } from '@angular/core';
import { Routes, 
        CanLoad,
        CanActivate,
        CanActivateChild,
        CanDeactivate,
        RouterModule } from '@angular/router';

import { AuthGuard } from '../../shared/guards/auth-guard.service';

import { AdminComponent } from './components/adminMain.component';
import { AdminDashboardComponent } from './components/adminDashboard.component';
import { SiteStatsComponent } from './components/siteStats.component';
import { UserDataComponent } from './components/userData.component';


export const adminRoutes: Routes = [
  { path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
        { path: '',
          canActivateChild: [AuthGuard],
          children: [
              { path: 'sitestats', component: SiteStatsComponent },
              { path: 'userdata', component: UserDataComponent },
              { path: '', component: AdminDashboardComponent}
          ]   
         }
    ]
 },
];
export const adminRouting: ModuleWithProviders = RouterModule.forChild(adminRoutes);
