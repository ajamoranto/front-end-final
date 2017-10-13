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

  constructor(private fs: FoodService) { }

  selectCity(location) {
    if(location && location.city) {
      this.city = location.city;
      this.getWithCity(this.city)
    } else if (location && location.coords) {
      this.coords = location.coords
      this.getWithCoords(this.coords)
    } else {
      this.getWithCity(this.city)
    }
  }

  getWithCity(selectedCity) {
    this.fs.getFoodInfo(selectedCity || this.city)
    .subscribe(foodInfo => {
      this.foodInfo = foodInfo;
      console.log(this.foodInfo.name)
      console.log(this.foodInfo.description)
      console.log(this.foodInfo)
    })
  }
  
  getWithCoords(coords) {
    this.fs.getFoodInfoLocation(coords)
    .subscribe(foodInfo => {
      this.foodInfo = foodInfo;
      console.log(this.foodInfo.name)
      console.log(this.foodInfo.description)
      console.log(this.foodInfo)
    })
  }

}
