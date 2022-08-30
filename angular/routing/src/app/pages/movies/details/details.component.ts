import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Movie, MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  declare id: string;
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    seen: new FormControl(false),
    rating: new FormControl(0),
  })
  constructor(private route: ActivatedRoute, private movieService: MoviesService) { }

  get title() {
    return this.form.get('title')?.value;
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') as string;
      this.loadMovie();
    })
  }

  loadMovie() {
    this.movieService.getById(this.id).subscribe(response => {
      const movie = response as Movie;
      this.form.setValue({
        title: movie.title,
        description: movie.description,
        seen: movie.seen,
        rating: movie.rating,
      });
    })
  }

}
