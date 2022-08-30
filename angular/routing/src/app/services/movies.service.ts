import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Movie {
  id: string;
  title: string;
  description: string;
  rating: number;
  seen: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  url: string = 'http://localhost:3000/movies'

  constructor(private http: HttpClient) { }


  getById(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }

  list() {
    return this.http.get(this.url);
  }

  update(movie: Movie) {
    return this.http.patch(`${this.url}/${movie.id}`, movie);
  }

  delete(id: string) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
