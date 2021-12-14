import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export type ModalType = "readOnly" | "all-actions" | "confirm-hour-action";


@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  @Input() modalType: ModalType = 'readOnly';
  @Output() onClose = new EventEmitter();
  
  constructor() { }

  ngOnInit(): void {
    
  }

  HandleCloseModal(){
    this.onClose.emit();
  }
  
 

}
