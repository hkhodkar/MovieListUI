import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'input-mardown',
  templateUrl: './input-mardown.component.html',
  styleUrls: ['./input-mardown.component.css']
})
export class InputMardownComponent implements OnInit {


@Output() changeMarkDown = new EventEmitter<string>();

  constructor() { }

  @Input()   markDownContent= '';

  ngOnInit(): void {
  }

}
