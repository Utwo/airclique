import {Injectable} from '@angular/core';
import {StateService} from '../shared/state.service';
import {Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';


@Injectable()
export class AllFlightsService {

  constructor(private http: Http, private router: Router) {
  }

  getAllFlights() {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    return this.http.get(environment.URL_API + 'flights', {headers: headers})
      .map(res => res.json())
      .catch(error => this.handleError(error))
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
