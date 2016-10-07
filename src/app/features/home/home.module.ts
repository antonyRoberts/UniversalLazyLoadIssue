//Home Module

import { NgModule } from '@angular/core';

import { MaterialModule } from '@angular/material';

import { HomeRouting } from './home.routing';
import { HomeMainComponent } from './components/homeMain.component';

@NgModule({
    imports: [
        MaterialModule.forRoot(),
        HomeRouting
    ],
    declarations: [HomeMainComponent],
})

export class HomeModule{}