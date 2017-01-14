import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {GetFlightService} from './get-flight.service';

@Component({
  selector: 'app-book-flight',
  templateUrl: './book-flight.component.html',
  styleUrls: ['./book-flight.component.css']
})

export class BookFlightComponent implements OnInit {

  constructor(private _route: ActivatedRoute,
              private _router: Router,
              private flightService: GetFlightService) {
  }

  ngOnInit(): void {
    let id = +this._route.snapshot.params['id']; // + trece din string in nr
    //this.pageTitle += `: ${id}`;

  }

}
