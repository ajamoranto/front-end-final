import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() citySelected = new EventEmitter();
  @Output() latLong = new EventEmitter();

  constructor(private fs: FoodService) { }

  cityForm: NgForm;
  city = "placeholder";
  positionInfo;
  coords;


  ngOnInit() {
  }

  onSubmit(){
    this.citySelected.emit(this.city)
  }

  onLocate(){
    console.log(this.positionInfo)
    this.latLong.emit(this.positionInfo)
  }
}
