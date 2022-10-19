import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor() { }

    flightData = [{"id":1,"flight_name":"AW1200","origin":"Kochi","dest":"Trivandrom","capacity":200},{"id":2,"flight_name":"LO142","origin":"Kochi","dest":"Qatar","capacity":250},{"id":3,"flight_name":"AI342","origin":"Mumbai","dest":"Banglore","capacity":150},{"id":4,"flight_name":"EM350","origin":"Dubai","dest":"JFK","capacity":300}]

  ngOnInit(): void {
  }

}
