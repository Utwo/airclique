import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetFlightService} from './get-flight.service';
import {IFlight} from '../shared/flight';
import {BuyTicketService} from './buy-ticket.service';
import {StateService} from '../shared/state.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
})

export class BookFlightComponent implements OnInit {

  flight: IFlight = null;
  errorMessage: string = null;
  agreed : boolean = false;
  nr_of_passengers = 1;
  message: string = null;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private flightService: GetFlightService,
              private state: StateService,
              private buyTicketService: BuyTicketService,
  ) {
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id']; // + trece din string in nr
    this.flightService.getFlight(id)
      .subscribe(
        data => {this.flight = data, console.log(data)},
        err => this.errorMessage = "There was an error showing the details",
      )
  }

  buyTicket(flightId) {
    this.buyTicketService.buyTicket(flightId, this.nr_of_passengers)
      .subscribe(
        data => this.message = "The ticket was bought with success",
        err  => this.message = "There was a problem buying the ticket"
      )
  }

  buyTicketAndLogin(flightId) {
    this.state.storeFlight(flightId);
    this._router.navigate(['login']);
  }
}
