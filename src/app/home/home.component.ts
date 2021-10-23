import { Component, OnInit } from '@angular/core';
import { MoviesModel } from '../movies/movies/models/movie.model';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    setTimeout(() => {
      this.moviesInTheaters= [
        {
          title: 'Spider-Man',
          createDate: new Date(),
          price: 1400.99,
          poster:'../../../assets/img/spider-man.jpg'
        },
        {
          title: 'Moana',
          createDate: new Date('2016-11-14'),
          price: 300.99,
          poster:'../../../assets/img/moana.jpg'
        },
      ];
      this.moviesInFutures =[]
    }, 1000);
  }
  public moviesInTheaters:MoviesModel[];
  public moviesInFutures:MoviesModel[];

}
