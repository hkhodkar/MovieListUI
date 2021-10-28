import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { UtilityModule } from '../framework/utilities/utility.module';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { RouterModule } from '@angular/router';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';

import { TheatersComponent } from './theaters/theaters.component';
import { IndexMovieTheaterComponent } from './theaters/index-movie-theater/index-movie-theater.component';
import { CreateTheaterComponent } from './theaters/create-theater/create-theater.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { EditActorComponent } from './actors/edit-actor/edit-actor.component';
import { EditGenresComponent } from './genres/edit-genres/edit-genres.component';
import { EditTheaterComponent } from './theaters/edit-theater/edit-theater.component';
import { EditMoviesComponent } from './movies/edit-movies/edit-movies.component';
import { MoviesComponent } from './movies/movies.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterMovieComponent } from './movies/filter-movie/filter-movie.component';
import { FormActorComponent } from './actors/form-actor/form-actor.component';
import { TheaterFormComponent } from './theaters/theater-form/theater-form.component';
import { FormMovieComponent } from './movies/form-movie/form-movie.component';
import { ActorsAutocompeleteComponent } from './actors/actors-autocompelete/actors-autocompelete.component';

@NgModule({
  declarations: [
    MovieListComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    TheatersComponent,
    IndexMovieTheaterComponent,
    CreateTheaterComponent,
    CreateMovieComponent,
    EditActorComponent,
    EditGenresComponent,
    EditTheaterComponent,
    EditMoviesComponent,
    MoviesComponent,
    FilterMovieComponent,
    FormActorComponent,
    TheaterFormComponent,
    FormMovieComponent,
    ActorsAutocompeleteComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    MaterialModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    MovieListComponent
  ]
})
export class MoviesModule { }
