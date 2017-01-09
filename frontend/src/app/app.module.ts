import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {routing} from './app.routing';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { LoginComponent } from './login/login.component';
import { FlightsListComponent } from './flights-list/flights-list.component';
import { MyTicketsComponent } from './my-tickets/my-tickets.component';
import { AboutComponent } from './about/about.component';
import { AdditionalDetailsComponent } from './additional-details/additional-details.component';
import {LoginService} from './core/login.service';
import {StateService} from './shared/state.service';
import {MyTicketsService} from './my-tickets/my-tickets.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
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
  providers: [
    LoginService,
    StateService,
    MyTicketsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
