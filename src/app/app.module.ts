import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ViewFlightComponent } from './view-flight/view-flight.component';

const addRoute :Routes = [
  {
    path:"",component:ViewFlightComponent
  },
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ViewFlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(addRoute)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
