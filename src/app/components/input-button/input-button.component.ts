import { Component, OnInit, Input } from '@angular/core';

interface InputButtonProps{
  value: string;
  class: string;

}

@Component({
  selector: 'app-input-button',
  templateUrl: './input-button.component.html',
  styleUrls: ['./input-button.component.scss']
})
export class InputButtonComponent implements OnInit {

  @Input () props : InputButtonProps={value : "", class : ""}; 

  constructor() { }

  ngOnInit(): void {
  }

}
