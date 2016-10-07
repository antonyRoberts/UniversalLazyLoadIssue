// app/features/home/home.routing.ts

// Routing for Home Page. Should be pretty Spartan for now.

import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMainComponent } from './components/homeMain.component';

/**
 * Remember Routing Module is a ModuleWithProviders and 
 * All but the App's main RouterModule is forChild instead of for Root.
 */

export const HomeRouting: ModuleWithProviders = RouterModule.forChild([
    { path: '', pathMatch:'full',  component: HomeMainComponent }
])