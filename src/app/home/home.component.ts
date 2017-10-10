import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() cityString = new EventEmitter();

  constructor(private fs: FoodService) { }

  cityForm: NgForm;
  city = "placeholder";
  foodInfo;

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.city)
    // this.cityString.emit(this.city);
    this.fs.getFoodInfo(this.city)
    .subscribe(
      foodInfo => {
        this.foodInfo = foodInfo[0];
        console.log(this.foodInfo)
    })
  }
}
