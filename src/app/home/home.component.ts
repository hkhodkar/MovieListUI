import { Component, OnInit } from '@angular/core';
import { MoviesModel } from '../movies/movies/models/movie.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    setTimeout(() => {
      this.moviesInTheaters = [
        {
          title: 'Spider-Man',
          releaseDate: new Date(),
          poster: '../../../assets/img/spider-man.jpg',
          inTheaters: false,
          summary: 'spiderman summary',
        },
        {
          title: 'Moana',
          releaseDate: new Date('2016-11-14'),
          poster: '../../../assets/img/moana.jpg',
          inTheaters: true,
          summary: 'moana summary',
        },
      ];
      this.moviesInFutures = [];
    }, 1000);
  }
  public moviesInTheaters: MoviesModel[];
  public moviesInFutures: MoviesModel[];
}
