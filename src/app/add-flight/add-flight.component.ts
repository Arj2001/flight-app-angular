import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  constructor(private myApi:ApiService) { }

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
    this.myApi.postFlightData(data).subscribe(
      (response)=>{
        
      }
    )
    alert("Value inserted")
    this.flight_name = ""
    this.origin = ""
    this.dest = ""
    this.capacity = ""
  }

  ngOnInit(): void {
  }

}
