import { Component, OnInit } from '@angular/core';
import { movie } from './models/movie.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'MovieListUI';
  moviesList:movie[] = [];

  ngOnInit(): void {
    this.moviesList = [
      {
        title: 'Spider-Man',
        createDate: new Date(),
        price: 1400.99,
      },
      {
        title: 'Moana',
        createDate: new Date('2016-11-14'),
        price: 300.99,
      },
    ];
  }
}
