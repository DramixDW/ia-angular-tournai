import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Movie, MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  declare movies: Movie[];
  form = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    seen: new FormControl(false),
    rating: new FormControl(0),
  })
  declare selectedMovie: Movie;
  constructor(private movie: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movie.list().subscribe(movies => {
      this.movies = movies as Movie[];
    })
  }

  deleteMovie(id: string) {
    this.movie.delete(id).subscribe(response => {
      this.loadMovies();
    });
  }

  updateMovie() {
    this.movie.update({
      id: this.selectedMovie?.id,
      title: this.form.value.title ?? '',
      description: this.form.value.description ?? '',
      seen: this.form.value.seen || false,
      rating: this.form.value.rating ?? 0
    }).subscribe(response => {
      this.loadMovies();
      this.selectedMovie = response as Movie;
    })

  }

  selectMovie(movie: Movie) {
    this.selectedMovie = movie;
    this.form.setValue(movie)
  }

}
