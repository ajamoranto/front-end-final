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

  constructor(private fs: FoodService) { }

  selectCity(selectedCity) {
    if(selectedCity){
      this.city = selectedCity;
    }

    this.fs.getFoodInfo(selectedCity || this.city)
      .subscribe(foodInfo => {
        this.foodInfo = foodInfo;
        console.log(this.foodInfo.name)
        console.log(this.foodInfo.description)
        console.log(this.foodInfo)
      })
  }

}
