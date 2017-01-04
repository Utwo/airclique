import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {HomeComponent} from "../home/home.component";

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
  errorMessage: string = '';

  constructor(
      private router: Router) { }

  ngOnInit() {
  }


  login() {
    //if username and password is correct:
    this.router.navigateByUrl('');
    //else
    //errorMessage = 'Username or password is incorrect!'
  }

}
