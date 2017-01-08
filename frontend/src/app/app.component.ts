import { Component } from '@angular/core';
import {StateService} from './shared/state.service';
import {LoginService} from './core/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Airclique Company';

  constructor(
    private state: StateService,
    private loginService: LoginService,
    private router: Router)
  {}

  logout() {
    this.loginService.logout();
    this.router.navigate(['/']);
  }
}
