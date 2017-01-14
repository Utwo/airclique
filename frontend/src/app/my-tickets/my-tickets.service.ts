import {Injectable} from '@angular/core';
import {StateService} from '../shared/state.service';
import {Http, Headers, Response} from '@angular/http';
import {Router} from '@angular/router';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs';

@Injectable()
export class MyTicketsService {

    constructor(private state: StateService, private http: Http, private router: Router) {
    }

    myFlights () {
        let token = this.state.getToken();
        let headers = new Headers({'Content-Type': 'application/json', 'Authorization': 'Bearer ' + token});

        return this.http.get(environment.URL_API + 'user/flights', {headers: headers})
            .map(this.extractData)
            .catch(error => this.handleError(error));
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