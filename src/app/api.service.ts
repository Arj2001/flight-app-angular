import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getFlightData=()=>{
    return this.http.get("http://localhost:8080/viewFlight")
  }

  postFlightData=(data:any)=>{
    return this.http.post("http://localhost:8080/addFlight",data)
  }

  deleteFlightData=(id:any)=>{
    return this.http.post("http://localhost:8080/deleteFlight",id)
  }
  searchFlightData=(name:any)=>{
    return this.http.post("http://localhost:8080/searchFlight",name)
  }
}
