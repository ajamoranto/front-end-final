import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  cityForm: NgForm;
  city = "placeholder";

  ngOnInit() {
  }

  onSubmit(cityForm){
    console.log(this.city)
  }

}
