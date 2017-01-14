import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {FlightsListComponent} from "./flights-list/flights-list.component"
import {MyTicketsComponent} from "./my-tickets/my-tickets.component"
import {AdditionalDetailsComponent} from "./additional-details/additional-details.component"
import {LoginComponent} from './login/login.component';
import {AboutComponent} from './about/about.component';
import {BookFlightComponent} from './book-flight/book-flight.component';

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'showAll', component: FlightsListComponent},
  {path: 'myTickets', component: MyTicketsComponent},
  {path: 'more-details', component: AdditionalDetailsComponent},
  {path: 'login', component: LoginComponent},
  {path: 'about', component: AboutComponent},
  {path: 'book/flight/:id',component: BookFlightComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
