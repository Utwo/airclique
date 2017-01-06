import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { AboutComponent } from './about/about.component';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    FlightsListComponent,
    MyTicketsComponent,
    AboutComponent,
    AdditionalDetailsComponent
  ],
  imports: [
    routing,
    BrowserModule,
    FormsModule,
    HttpModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
