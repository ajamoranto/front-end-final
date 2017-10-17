import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodService } from '../food.service';

interface Coordinates {
  latitude?: number;
  longitude?: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() citySelected = new EventEmitter();
  @Output() locationSelected = new EventEmitter();
  @Output() radiusSelected = new EventEmitter();

  constructor(private fs: FoodService) { }

  cityForm: NgForm;
  city = "";
  radius = "2";
  foodInfo;
  positionInfo;
  coords: Coordinates;
  useLocation;


  //loading position on init to reduce waiting time to use location
  ngOnInit() {
    console.log("This is coords on init: " + this.coords)
    this.showPosition();
  }

  //this method waits for location permission and emits location and radius if allowed, uses city and radius if not
  onSubmit(locationPermission) {
    if (locationPermission) {
      this.citySelected.emit({ coords: this.coords, radius: this.radius })
      console.log("coords rad: " + this.radius)
    } else {
      this.citySelected.emit({ city: this.city, radius: this.radius })
      console.log("city rad: " + this.radius)
    }
  }

  onLocate() {
    console.log(this.positionInfo)

  }

  //this method is used to get the coordinates used for "use my location", alerts if not supported
  showPosition() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.coords = position.coords;
        // Whatever. Talk to Trace. Fucker. -- Ernest Hemingway

      });
    } else {
      alert("Sorry, your browser does not support HTML5 geolocation.");
    }
  }
}
