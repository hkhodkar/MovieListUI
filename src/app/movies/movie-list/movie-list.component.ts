import { Component, Input, OnInit } from '@angular/core';
import { MoviesModel } from '../models/movie.model';

@Component({
  selector: 'movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  constructor() {}

  @Input() movies: MoviesModel[];;

  ngOnInit(): void {

  }
}
