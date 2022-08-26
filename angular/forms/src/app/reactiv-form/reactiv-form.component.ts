import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { hasUpperCase, isTaken } from './username.validators';

@Component({
  selector: 'app-reactiv-form',
  templateUrl: './reactiv-form.component.html',
  styleUrls: ['./reactiv-form.component.css']
})
export class ReactivFormComponent implements OnInit {
  form = new FormGroup({
    username: new FormControl('guest', [
      Validators.required,
      Validators.minLength(7),
      hasUpperCase(),
    ], isTaken),
    password: new FormControl('', Validators.required)
  })

  get Username() {
    return this.form.get('username');
  }
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form);
  }

}
