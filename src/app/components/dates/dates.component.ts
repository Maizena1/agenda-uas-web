import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DatesComponent implements OnInit {

  @Output() onClick = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  handleClick(){
    this.onClick.emit()
  }



}
