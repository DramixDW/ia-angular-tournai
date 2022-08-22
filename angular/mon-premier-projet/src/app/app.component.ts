import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mon-regretté-café';
  value: number = 42;
  isOpened : boolean = false; 

  opened({ isOpened }: {isOpened : boolean}) {
    this.isOpened = !isOpened;
  }
}
