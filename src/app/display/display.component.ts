import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  @Input() city;
  
  foodInfo;
  
  constructor(private fs: FoodService) { }

  getDataFromService(){
  }

  
  ngOnInit() {
  }

  onNah(){
    console.log(this.city)
    this.fs.getNewFood(this.city)
    .subscribe(
      foodInfo => {
        this.foodInfo = foodInfo[0];
        console.log(this.foodInfo)
    })
  }



}
