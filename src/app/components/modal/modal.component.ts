import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  CloseModal:boolean = true;
  
  constructor() { }

  ngOnInit(): void {
    
  }

  HandleCloseModal(){
    this.CloseModal = false;
  }
  
 

}
