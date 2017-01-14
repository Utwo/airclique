import {Injectable} from '@angular/core';

@Injectable()
export class StateService {

  constructor() {
  }

  storeState(token, user) {
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
  }

  getToken() {
    return localStorage.getItem('token');
  }

  storeFlight(flightId) {
    localStorage.setItem('flightId', flightId);
  }

  deleteFlight() {
    localStorage.removeItem('flightId');
  }

  getFlight() {
    return localStorage.getItem('flightId');
  }

  setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    return JSON.parse(localStorage.getItem('user'));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return localStorage['token'];
  }
}
