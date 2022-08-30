import { Component } from '@angular/core';
import { Movie } from './movies.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'services-exercices';
  declare movie: Movie;

  selectMovie({ movie }: { movie: Movie}) {
    this.movie = movie;
  }
}
