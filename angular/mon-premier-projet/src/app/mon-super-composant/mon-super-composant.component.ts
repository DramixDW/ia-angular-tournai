import { Component, Input, OnInit } from '@angular/core';
import { Movie, MoviesService } from '../movies.service';

@Component({
  selector: 'app-mon-super-composant',
  templateUrl: './mon-super-composant.component.html',
  styleUrls: ['./mon-super-composant.component.css']
})
export class MonSuperComposantComponent implements OnInit {
  @Input('variable') declare cariable: string; 
  fruit:string = 'banane';
  isDisplayed: boolean = true;
  imgSrc: string = 'https://picsum.photos/200/300';
  declare movies: Movie[];
  first: string = 'first';
  coucou: string[] = ['coucou'];
  inputValue: string = 'Deuheeee';

  constructor(private moviesService: MoviesService) {
    this.movies = moviesService.getMovies();
  }

  changeImg() {
      const randId = Math.ceil(Math.random() * 999);
      this.imgSrc = `https://picsum.photos/id/${randId}/200/300`;
  }

  startTimer(): void {
    this.isDisplayed = !this.isDisplayed;
    setInterval(() => {
      this.changeImg();
    }, 1000 )
  }
  
  onKeyUp(foire: HTMLInputElement) {
    this.changeImg();
    this.coucou.push(foire.value);
    this.inputValue = 'coucou';
  }

  ngOnInit(): void {
  }

}
