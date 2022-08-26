import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
  contactMethods: string[] = ['email', 'sms', 'FAX'];
  selected: string = 'email';

  constructor() { }

  ngOnInit(): void {
  }

  submit(f: any) {
    console.log(f);
  }

}
