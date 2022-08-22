import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {
  @Input('isOpen') isOpened: boolean = false;
  @Output('divOpen') divToggle = new EventEmitter(); 
  constructor() { }

  ngOnInit(): void {
  }

  opened() {
    this.divToggle.emit({ isOpened: this.isOpened });
  }

}
