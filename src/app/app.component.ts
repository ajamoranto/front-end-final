import { Component, Input, Output } from '@angular/core';

import { FoodService } from './food.service';
import { HomeComponent } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() erroMessage: string;
  city;
  foodInfo;
  coords;
  radius;

  constructor(private fs: FoodService) { }
  //main method that uses the two below it so we can search based off city/address or coordinates
  selectCity(location) {
    console.log(location);
    if (location && location.city) {
      this.city = location.city;
      this.radius = location.radius;
      this.getWithCity(this.city, this.radius)
    } else if (location && location.coords) {
      this.coords = location.coords;
      this.radius = location.radius;
      this.getWithCoords(this.coords, this.radius)
    } else {
      this.getWithCity(this.city, this.radius)
    }
  }
  //method for using city/address
  getWithCity(selectedCity, radiusSelected) {
    this.fs.getFoodInfo(selectedCity || this.city, this.radius)
      .subscribe(foodInfo => {
        this.foodInfo = foodInfo;
        console.log(this.radius)
        console.log(this.city)
        console.log(this.foodInfo.name)
        console.log(this.foodInfo.description)
        console.log(this.foodInfo)
      })
  }
  //method for using location
  getWithCoords(coords, radiusSelected) {
    this.fs.getFoodInfoLocation(coords, this.radius)
      .subscribe(foodInfo => {
        this.foodInfo = foodInfo;
        console.log(this.foodInfo.name)
        console.log(this.foodInfo.description)
        console.log(this.foodInfo)
        console.log(this.radius)
      })
  }

}
