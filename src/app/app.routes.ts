// ====== ./app/app.routes.ts ======

// Imports
import { ModuleWithProviders }   from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashComponent } from './dash.component';

const appRoutes: Routes = [
    { path: '', component: DashComponent }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
