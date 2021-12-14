import { Component, OnInit} from '@angular/core';

@Component({

  selector: 'app-dates',
  templateUrl: './dates.component.html',
  styleUrls: ['./dates.component.scss']
})
export class DateComponent implements OnInit {

  isOpenModal:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  handleCheckDate(){
    this.isOpenModal = true;
  }

  handleAcceptDate(){
    this.isOpenModal = true;
  }

  handleCloseModal(){
    this.isOpenModal = false;
  }

  handleDeleteDate(){

  }



}
