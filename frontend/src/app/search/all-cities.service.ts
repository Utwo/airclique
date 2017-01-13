import {Injectable} from "@angular/core"
import {Headers, Http} from "@angular/http"
import {environment} from "../../environments/environment"
import {Router} from "@angular/router"
import {Observable} from "rxjs"

@Injectable()
export class CitiesService {

  constructor(private http: Http, private router: Router) {

  }

  getCities() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      }
    );

    return this.http.get(environment.URL_API + 'cities', {headers: headers})
        .map(res => res.json())
        .catch(error => this.handleError(error))
  }

  private handleError(error: any) {
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    return Observable.throw(errMsg);
  }
}

