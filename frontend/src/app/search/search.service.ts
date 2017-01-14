import {Injectable} from '@angular/core';
import {Headers, Http} from '@angular/http';
import {environment} from '../../environments/environment';
import {Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class SearchService {

  constructor(private http: Http, private router: Router) {}

  searchFlight(cityDepartureId, cityDestinationId, departureTime, seatsNumber, flightClass) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let url = 'flights?';
    url = url + 'city_departure_id=' + cityDepartureId + '&';
    url = url + 'city_destination_id=' + cityDestinationId + '&';
    url = url + 'departure_time=' + departureTime + '&';
    // url = url + 'seats=' + seatsNumber + '&';
    url = url + 'class=' + flightClass;

    return this.http.get(environment.URL_API + url, {headers: headers})
    // .map(res => res.json(), console.log(res)})
        .map(res => res.json())
        .catch(error => this.handleError(error));
  }

  getCities() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      }
    );

    return this.http.get(environment.URL_API + 'cities', {headers: headers})
        .map(res => res.json())
        .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}

