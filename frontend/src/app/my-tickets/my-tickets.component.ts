import { Component, OnInit } from '@angular/core';
import {IFlight} from '../flights-list/flight';
import {MyTicketsService} from './my-tickets.service';
import {StateService} from '../shared/state.service';

@Component({
  selector: 'app-my-tickets',
  templateUrl: './my-tickets.component.html'
})
export class MyTicketsComponent implements OnInit {
  token: string;
  flights: IFlight[];
  errorMessage: string = null;

  constructor(private myTicketsService: MyTicketsService) {
    this.myTickets();
  }
  ngOnInit() {
  }

  myTickets() {
    this.myTicketsService.myFlights()
        .subscribe(
            data => this.flights = data,
            err  => this.errorMessage = 'Error on receiving flights'
        );
  }

}
