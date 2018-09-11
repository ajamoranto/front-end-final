import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FoodService } from '../food.service';
declare var $:any;

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {



  @Output() nah = new EventEmitter();
  @Output() yah = new EventEmitter();
  @Input() foodInfo;

  constructor(private fs: FoodService) { }

  ngOnInit() {
  }

  onNah() {
    this.nah.emit()
  }

  onYah() {
    $('#myModal').modal('show');
  }

}
