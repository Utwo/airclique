import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  sursa: string = '';
  destinatie: string = '';

  cities_departure: string[] = ['Cluj','Bucuresti', 'Timisoara'];
  cities_destination: string[] = ['Botosani','Harghita', 'Constanta'];

  city_departure: string = this.cities_departure[0];
  city_destination: string = this.cities_destination[0];
  flight_date: Date;

  constructor() { }

  ngOnInit() {

  }

  onChangeCityDeparture(newValue) {
    console.log(newValue,"selected value");
  }

  onChangeCityDestination(newValue) {
    console.log(newValue,"selected value");
  }

  onChangeDate(value) {
    this.flight_date = value;
    console.log(value);
  }

  searchFlight(): void {
    console.log(this.city_departure, this.flight_date);
  }

}
