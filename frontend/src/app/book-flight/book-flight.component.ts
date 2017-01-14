import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetFlightService} from './get-flight.service';
import {IFlight} from '../shared/flight';
import {BuyTicketService} from './buy-ticket.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})

export class BookFlightComponent implements OnInit {

  flight: IFlight = null;
  errorMessage: string = null;
  agreed : boolean = false;
  nr_of_passengers = null;

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private flightService: GetFlightService,
              private buyTicketService: BuyTicketService,
  ) {
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id']; // + trece din string in nr
    //this.pageTitle += `: ${id}`;
    this.flightService.getFlight(id)
      .subscribe(
        data => {this.flight = data, console.log(data)},
        err => this.errorMessage = "There was an error showing the details",
      )
  }

  buyTicket(flightId) {
    this.buyTicketService(flightId, this.nr_of_passengers)
      .subscribe(
        data =>
      )
  }
}
