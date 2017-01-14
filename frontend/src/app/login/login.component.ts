import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {LoginService} from '../core/login.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import {StateService} from '../shared/state.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  imageURL: string = './assets/images/login.png';
  imageTitle: string = 'Login';
  imageWidth: number = 25;
  imageHeight: number = 25;

  username: string = '';
  password: string = '';
  errorMessage: string = null;

  constructor(
      private router: Router,
      private loginService: LoginService,
      private state: StateService,
  ) { }

  ngOnInit() {
  }


  login() {
    this.loginService.login(this.username, this.password)
      .subscribe(
        data => this.handleLogin(),
        err  => this.errorMessage = 'There was an error when logging in'
      );
  }

  handleLogin() {
    if(this.state.getFlight() != null){ //the user wants to proceed with booking
      this.router.navigate(['/book/flight', this.state.getFlight()])
      this.state.deleteFlight();
    }
    else {
      this.router.navigate([''])
    }
  }
}
