import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';

@Injectable()
export class GetFlightService {

  constructor(private http: Http, private router: Router) {
  }

  getFlight(flightId) {
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.get(environment.URL_API + 'flights/' + flightId, {headers: headers})
      .map(res => res.json())
      .catch(error => this.handleError(error));
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
