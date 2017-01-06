import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {HomeComponent} from './home/home.component';
import {SearchComponent} from './search/search.component';
import {FlightsListComponent} from "./flights-list/flights-list.component"
import {MyTicketsComponent} from "./my-tickets/my-tickets.component"
import {AdditionalDetailsComponent} from "./additional-details/additional-details.component"

const appRoutes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'search', component: SearchComponent},
  {path: 'showAll', component: FlightsListComponent},
  {path: 'myTickets', component: MyTicketsComponent},
  {path: 'more-details', component: AdditionalDetailsComponent}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
