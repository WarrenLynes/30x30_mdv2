import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Car } from '@mdv2/core-data';

@Component({
  selector: 'mdv2-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  @Input() cars: Car[];
  @Input() readonly = false;
  @Output() selected = new EventEmitter();
  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
