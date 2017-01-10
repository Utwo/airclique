import { Component, OnInit } from '@angular/core';
import {MyTicketsService} from './my-tickets.service';
import {IFlight} from '../shared/flight';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html'
})

export class MyTicketsComponent implements OnInit {
  token: string;
  flightsList: IFlight[];
  flights: IFlight[];
  errorMessage: string = null;
  constructor(private myTicketsService: MyTicketsService) {
  }
  ngOnInit() {
    this.myTickets();
  }

  processFlightsList() {
    this.flightsList = this.flights.map(function(x){
      x.departure_time = new Date(x.departure_time);
      x.arrival_time = new Date(x.arrival_time);
      return x;
    });
  }
  myTickets() {
    this.myTicketsService.myFlights()
        .subscribe(
            data => {
              this.flights = data
              this.processFlightsList();
            },
            err  => this.errorMessage = 'Error on receiving flights'
        );
  }

}
