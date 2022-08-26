import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
  declare movies: Movie[];
  url: string = 'http://localhost:3000/movies';

  constructor(private movie: MoviesService) {}

  loadMovies() {
    this.movie.get()
             .subscribe(movies => {
                this.movies = movies as Movie[];
                this.movies = this.movies.reverse();
              });
  }

  ngOnInit(): void {
    this.loadMovies();
  }

  addMovie(title: HTMLInputElement) {
    this.movie
      .post({
        title: title.value,
        description: 'Emma nue ne serais pas dire -Emmanuel',
        seen: false,
        rating: 8,
      })
      .subscribe(() => {
        title.value = '';
        this.loadMovies();
      });
  }

  updateMovie(movie: Movie) {
    this.movie.patch({
      id: movie.id,
      seen: !movie.seen,
    }).subscribe(res => {
      this.loadMovies();
    })
  }

  deleteMovie(id: number) {
    this.movie.delete(id.toString()).subscribe(res => {
      this.loadMovies();
    })
  }
}
