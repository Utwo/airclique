import { Component, OnInit } from '@angular/core';
import {AllFlightsService} from './all_flights.service';
import {IFlight} from '../shared/flight';

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights : IFlight[];
  errorMessage: string = null;

  constructor(private allFlightsService: AllFlightsService) { }

  ngOnInit() {
    this.allFlightsService.getAllFlights()
      .subscribe(
        data => this.flights = data,
        err => this.errorMessage = "There was an error retrieving the flights",
      )
  }

}
