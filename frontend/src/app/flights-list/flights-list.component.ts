import { Component, OnInit } from '@angular/core';
import {IFlight} from "./flight"

@Component({
  selector: 'app-flights-list',
  templateUrl: './flights-list.component.html',
  styleUrls: ['./flights-list.component.css']
})
export class FlightsListComponent implements OnInit {

  flights : IFlight[];

  constructor() { }

  ngOnInit() {

  }

}
