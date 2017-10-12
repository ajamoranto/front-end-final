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
  @Output() latLong = new EventEmitter();

  constructor(private fs: FoodService) { }

  cityForm: NgForm;
  city = "placeholder";
  positionInfo;
  coords: Coordinates;


  ngOnInit() {
  }

  onSubmit() {
    this.citySelected.emit(this.city)
  }

  onLocate() {
    console.log(this.positionInfo)
    this.latLong.emit(this.positionInfo)
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
