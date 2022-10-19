import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor() { }

  flight_name = ""
  origin = ""
  dest = ""
  capacity = ""

  readValues=()=>{
    let data = {
      "flight_name":this.flight_name,
    "origin":this.origin,
    "dest":this.dest,
    "capacity":this.capacity,
    }
    console.log(data)
    this.flight_name = ""
    this.origin = ""
    this.dest = ""
    this.capacity = ""
  }

  ngOnInit(): void {
  }

}
