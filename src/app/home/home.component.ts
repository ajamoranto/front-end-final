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



  ngOnInit() {
    console.log("This is coords on init: " + this.coords)
    this.showPosition();
  }

  onSubmit(locationPermission) {
    if (locationPermission) {
      this.citySelected.emit({ coords: this.coords, radius: this.radius })
      console.log ("coords rad: " + this.radius)
    } else {
      this.citySelected.emit({ city: this.city, radius: this.radius })
      console.log ("city rad: " + this.radius)
    }
  }

  // onOtherSubmit(message) {
  //   console.log("This is coords after submit: " + this.coords)
  //   this.fs.getFoodInfoLocation(this.coords)
  //     .subscribe(
  //       foodInfo => {
  //         this.locationSelected.emit(message + ' on success')
  //         this.foodInfo = foodInfo;
  //         console.log(this.foodInfo.name)
  //         console.log(this.foodInfo.description)
  //         console.log(this.foodInfo)
  //       },
  //       error => {
  //         this.locationSelected.emit(message + ' on error') //TODO: remove
  //       }
  //     )
  // }

  // onOtherSubmit(){
  //   getFoodInfoLocation(this.coords)
  // }

  onLocate() {
    console.log(this.positionInfo)
    
  }

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
