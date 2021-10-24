import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {  MoviesModel } from '../models/movie.model';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css'],
})
export class EditMoviesComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  model: MoviesModel = {
    title: 'Spider-Man',
    releaseDate: new Date(),
    poster: '../../../assets/img/spider-man.jpg',
    inTheaters: false,
    summary: 'spiderman summary',
  };

  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      console.log(param);
    });
  }

  save() {}
}
