import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';

const appRoutes: Routes = [
   {path: '', component: HomeComponent, pathMatch: 'full'},
   {path: 'search', component: SearchComponent},
   {path: 'login', component: LoginComponent},
   {path: 'about', component: AboutComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
