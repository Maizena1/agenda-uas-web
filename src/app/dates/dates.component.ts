import { Component, OnInit} from '@angular/core';

@Component({

  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DateComponent implements OnInit {

  IsOpenModal:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleModalState(value: boolean){
    this.IsOpenModal = value;
  } 



}
