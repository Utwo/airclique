import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {LoginService} from '../core/login.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';


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
      private loginService: LoginService
  ) { }

  ngOnInit() {
  }


  login() {
    this.loginService.login(this.username,this.password)
      .subscribe(
        data => this.router.navigate(['']),
        err  => this.errorMessage = "There was an error when logging in"
      )
    //else
    //errorMessage = 'Username or password is incorrect!'
  }

}
