import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '@mdv2/core-data';

@Component({
  selector: 'mdv2-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  currentCar: Car;

  @Output() saved = new EventEmitter();
  @Output() cancelled = new EventEmitter();

  @Input() set project(value) {
    this.currentCar = {...value};
  };

  constructor() { }

  ngOnInit() {
  }
}
