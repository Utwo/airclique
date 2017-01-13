import { Component, OnInit } from '@angular/core';
import {CitiesService} from "./all-cities.service"

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  sursa: string = '';
  destinatie: string = '';
  errorMessage = null;

  cities : string[] = [];

  city_departure: string = this.cities[0];
  city_destination: string = this.cities[0];
  flight_date: Date;
  flight_class: string;

  constructor(private citiesService: CitiesService) { }

  ngOnInit() {
    this.citiesService.getCities()
      .subscribe(
        data => this.cities = data,
        err  => this.errorMessage = "There was an error retrieving the cities"
      )
  }

  onChangeCityDeparture(newValue) {
    console.log(newValue,"selected value");
  }

  onChangeCityDestination(newValue) {
    console.log(newValue,"selected value");
  }

  onChangeDate(value) {
    this.flight_date = value;
  }

  onChangeClass(value) {
    this.flight_class = value;
    console.log(value);
  }

  searchFlight(): void {
    console.log(this.city_departure, this.flight_date);
  }

}
