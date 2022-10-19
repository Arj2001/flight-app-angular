import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-view-flight',
  templateUrl: './view-flight.component.html',
  styleUrls: ['./view-flight.component.css']
})
export class ViewFlightComponent implements OnInit {

  constructor(private myApi:ApiService) {
    this.putFlightData()
   }

    putFlightData=()=>{
      this.myApi.getFlightData().subscribe(
        (data)=>{
          this.flightData = data
        }
      )
    }

    flightData:any = []

  ngOnInit(): void {
  }

}
