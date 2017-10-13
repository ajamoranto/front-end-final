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

  constructor(private fs: FoodService) { }

  cityForm: NgForm;
  city = "placeholder";
  foodInfo;
  positionInfo;
  coords: Coordinates;


  ngOnInit() {
    console.log("This is coords on init: " + this.coords)
    this.showPosition();
  }

  onSubmit() {
    this.citySelected.emit(this.city)
  }

  onOtherSubmit(coords) {
    this.fs.getFoodInfoLocation(coords)
    .subscribe(foodInfo => {
      this.foodInfo = foodInfo;
      console.log(this.foodInfo.name)
      console.log(this.foodInfo.description)
      console.log(this.foodInfo)
    })
  }

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
