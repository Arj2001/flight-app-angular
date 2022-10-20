import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private myApi:ApiService) { }

  flight_name=""
  flightData:any

  readValues=()=>{
    let data = {
      "flight_name":this.flight_name
    }
    console.log(data)
    this.myApi.searchFlightData(data).subscribe(
      (response)=>{
        this.flightData = response
      }
    )
  }

  ngOnInit(): void {
  }

}
