import { Component, OnInit, Input } from '@angular/core';

interface InputProps {
  placeholder: string;
  name?: string;
  class: string;
}

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.scss']
})
export class TextboxComponent implements OnInit {

  @Input () props: InputProps={placeholder : "", name : "", class : ""};
  
  constructor() { }

  ngOnInit(): void {
  }

}
