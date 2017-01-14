import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import {Router} from '@angular/router';
import {StateService} from '../shared/state.service';
import {environment} from '../../environments/environment.prod';
import {Observable} from 'rxjs';


@Injectable()
export class BuyTicketService {

  constructor(private http: Http, private router: Router, private state: StateService) {
  }

  buyTicket(flightId, seats) {
    if(this.state.isLoggedIn()) {
      let token = this.state.getToken();
      let body = JSON.stringify({flight_id: flightId, seats: seats});
      let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token});

      return this.http.post(environment.URL_API + 'user/buy', body, {headers: headers})
        .map(res => res.json)
        .catch(error => this.handleError(error));
    }
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
