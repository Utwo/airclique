import { Component, OnInit } from '@angular/core';
import {SearchService} from './search.service';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {ICity} from '../shared/city';
import {Observable} from 'rxjs';
import {IFlight} from '../shared/flight';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  sursa: string = '';
  destinatie: string = '';
  errorMessage = null;

  cities: ICity[] = [];

  city_departure: ICity = this.cities[0];
  city_destination: ICity  = this.cities[0];
  flight_date: Date;
  flight_class: string;
  nrOfSeats: number;
  flightsList: IFlight;

  constructor(private searchService: SearchService, private http: Http) { }

  ngOnInit() {
    this.searchService.getCities()
      .subscribe(
        data => this.cities = data,
        err  => this.errorMessage = 'There was an error retrieving the cities'
      );
  }

  onChangeCityDeparture(newValue) {
    this.city_departure = newValue;
  }

  onChangeCityDestination(newValue) {
    this.city_destination = newValue;
  }

  onChangeDate(value) {
    this.flight_date = value;
  }

  onChangeSeats(value) {
    this.nrOfSeats = value;
  }

  onChangeClass(value) {
    this.flight_class = value;
  }
// data default -> data de azi (sa fie si default 1 la pasageri)
  searchFlight() {
    this.searchService.searchFlight(this.city_departure.id, this.city_destination.id, this.flight_date, this.nrOfSeats, this.flight_class)
        .subscribe(
            data => this.flightsList = data,
            err  => this.errorMessage = 'No flight available.'
        );
    console.log(this.flightsList);
  }
  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
