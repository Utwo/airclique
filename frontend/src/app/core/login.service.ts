import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Http, Headers} from '@angular/http';
import {environment} from '../../environments/environment';
import {StateService} from '../shared/state.service';
import {Router} from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private state: StateService, private http: Http, private router: Router) {
  }

  login (email, password) {
    let body = JSON.stringify({email: email, password: password});
    let headers = new Headers({'Content-Type': 'application/json'});

    return this.http.post(environment.URL_API + 'login', body, {headers: headers})
      .map(res => res.json())
      .do(data => {this.state.storeState(data['token'], data); })
      .catch(error => this.handleError(error));
  }

  logout() {
    this.state.logout();
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}
