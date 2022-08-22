import { Injectable } from '@angular/core';

export interface Movie {
  title: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor() { }

  getMovies() {
    return [
      {
        title: 'Forrest Gump',
        description: 'Il cours mais pas la maladie d\'amour'
      }, {
        title: 'Alice au pays des merveilles',
        description: 'Une petite fille perdu et un lapin formateur'
      }, {
        title: '300',
        description: 'This is sparta'
      }
    ]
  }
}
