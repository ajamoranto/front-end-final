import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from '../food.service';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {

  

  @Output() nah = new EventEmitter();
  @Output() yah = new EventEmitter();
  
  constructor(private fs: FoodService) { }
  
  ngOnInit() {
  }

  onNah(){
    this.nah.emit()
  }

  onYah() {
    this.yah.emit()
  }

}
