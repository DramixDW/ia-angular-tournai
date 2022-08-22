import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reusable-component';
  value: number = 42;
  value2: number = 20;
  isOpened : boolean = false; 

  opened({ isOpened }: {isOpened : boolean}) {
    this.isOpened = !isOpened;
  }

  plusEventFunc({ value }: {value: number}) {
    this.value = Number(value) + 1; 
  }

  minusEventFunc({ value }: {value: number}) {
    this.value--; 
  }

  plusFiveEventFunc({ value }: {value: number}) {
    this.value2 = Number(value) + 5; 
  }

  minusFiveEventFunc({ value }: {value: number}) {
    if (this.value2 === 0) {
      return;
    }
    this.value2 -= 5; 

  }
}
