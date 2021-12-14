import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DatesComponent implements OnInit {

  condition:boolean = true;
  
  
  @Output() onClickUser = new EventEmitter();
  @Output() onAccept = new EventEmitter();
  @Output() onDelete = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
  }

  handleClickUser(){
    this.onClickUser.emit(this.condition);
  }

  handleClickAccept(){
    this.onAccept.emit(this.condition)
  }

  handleDelete(){
    this.onDelete.emit()
  }
  


}
