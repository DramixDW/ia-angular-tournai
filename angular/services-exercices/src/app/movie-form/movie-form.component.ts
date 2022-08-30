import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie } from '../movies.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent implements OnInit {
  declare form: FormGroup;
  @Input() movie: Movie = {
    id: '',
    title: '',
    description: '',
    seen: false,
    rating: 0,
  };
  constructor() { 
    this.form = new FormGroup({
    title: new FormControl(this.movie.title),
    description: new FormControl(this.movie.description),
    seen: new FormControl(this.movie.seen),
    rating: new FormControl(this.movie.rating),
  })

  }

  ngOnInit(): void {
  }

}
