import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Input('initialValue') value: number = 20;
  @Output('plus') plus = new EventEmitter(); 
  @Output('minus') minus = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  increment() {
    console.log('increment');
    this.plus.emit({ value: this.value })
  }  


  decrement() {
    console.log('decremnt');
    this.minus.emit({ value: this.value })
  }  
}
