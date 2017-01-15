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
  errorMessage = null;
  cities: ICity[] = [];
  citiesDestination: ICity[] = [];
  flightsList: IFlight[] = null;

  city_departure: ICity = null;
  city_destination: ICity  = null;
  flight_date: Date;
  minDate : Date = new Date('dd/MM/yyyy');
  flight_class: string;
  nrOfSeats: number = 1;

  constructor(private searchService: SearchService, private http: Http) {
    this.flight_date = new Date();
    this.minDate = new Date('dd/MM/yyyy');
  }

  ngOnInit() {
    this.searchService.getCities()
      .subscribe(
        data => this.cities = data,
        err  => this.errorMessage = 'There was an error retrieving the cities'
      );
  }

  onChangeCityDeparture(newValue) {
    this.city_departure = newValue;
    this.citiesDestination = this.cities.slice();
    this.citiesDestination.splice(this.citiesDestination.indexOf(newValue),1);
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

  searchFlight() {
    this.searchService.searchFlight(this.city_departure.id, this.city_destination.id, this.flight_date, this.nrOfSeats, this.flight_class)
        .subscribe(
            data => this.flightsList = data,
            err  => this.errorMessage = 'No flights available for the selected dates'
        );
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
        error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
