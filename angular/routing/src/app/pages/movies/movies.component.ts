import { Component, OnInit } from '@angular/core';
import { Movie, MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  declare movies: Movie[];
  constructor(private movieService: MoviesService) { }

  ngOnInit(): void {
    this.loadMovies();
  }

  loadMovies() {
    this.movieService.list().subscribe(response=> {
      this.movies = response as Movie[];
    })
  }

}
