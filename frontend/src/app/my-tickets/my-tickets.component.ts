import { Component, OnInit } from '@angular/core';
import {MyTicketsService} from './my-tickets.service';
import {StateService} from '../shared/state.service';
import {IFlight} from '../shared/flight';

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
