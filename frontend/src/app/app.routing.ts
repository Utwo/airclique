import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';

const appRoutes: Routes = [
   {path: '', component: HomeComponent, pathMatch: 'full'},
   {path: 'search', component: SearchComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
