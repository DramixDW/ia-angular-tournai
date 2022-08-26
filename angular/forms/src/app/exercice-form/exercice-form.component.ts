import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { doesContains, passwordStrength } from './exercice-form.validator';

@Component({
  selector: 'app-exercice-form',
  templateUrl: './exercice-form.component.html',
  styleUrls: ['./exercice-form.component.css']
})
export class ExerciceFormComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', doesContains('@')),
    password: new FormControl('', undefined, passwordStrength),
  })

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }

  submit() {
    console.log(this.form);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
