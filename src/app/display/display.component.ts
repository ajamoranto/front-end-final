import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  foodInfo;

  constructor(private foodService: FoodService) { }

  getDataFromService(){
  }

  ngOnInit() {

  }

}
