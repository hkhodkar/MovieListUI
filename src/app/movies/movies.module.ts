import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { UtilityModule } from '../framework/utilities/utility.module';
import { CreateGenreComponent } from './genres/create-genre/create-genre.component';
import { RouterModule } from '@angular/router';
import { IndexActorsComponent } from './actors/index-actors/index-actors.component';
import { CreateActorComponent } from './actors/create-actor/create-actor.component';
import { IndexGenresComponent } from './genres/index-genres/index-genres.component';

import { TheatersComponent } from './theaters/theaters.component';
import { IndexMovieTheaterComponent } from './theaters/index-movie-theater/index-movie-theater.component';
import { CreateMovieTheaterComponent } from './theaters/create-movie-theater/create-movie-theater.component';
import { CreateMovieComponent } from './create-movie/create-movie.component';

@NgModule({
  declarations: [
    MovieListComponent,
    IndexGenresComponent,
    CreateGenreComponent,
    IndexActorsComponent,
    CreateActorComponent,
    TheatersComponent,
    IndexMovieTheaterComponent,
    CreateMovieTheaterComponent,
    CreateMovieComponent
  ],
  imports: [
    CommonModule,
    UtilityModule,
    MaterialModule,
    RouterModule
  ],
  exports:[
    MovieListComponent
  ]
})
export class MoviesModule { }
