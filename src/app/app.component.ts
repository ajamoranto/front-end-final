import { Component, Input, Output } from '@angular/core';

import { FoodService } from './food.service';
import { SessionService } from './session.service';
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
  session;
  result;

  constructor(private fs: FoodService, private ss: SessionService) { }

  ngOnInit() {
    this.ss.validate();

  }

  //main method that uses the two below it so we can search based off city/address or coordinates
  selectCity(location) {

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

      })
  }
  //method for using location
  getWithCoords(coords, radiusSelected) {
    this.fs.getFoodInfoLocation(coords, this.radius)
      .subscribe(foodInfo => {
        this.foodInfo = foodInfo;

      })
  }
  //method for nah button to call getNewFood from service
  getNewFoodItem() {
    this.fs.getNewFood()
      .subscribe(foodInfo => {
        this.foodInfo = foodInfo;

      })
  }

}
