import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateActorComponent } from './movies/actors/create-actor/create-actor.component';
import { EditActorComponent } from './movies/actors/edit-actor/edit-actor.component';
import { IndexActorsComponent } from './movies/actors/index-actors/index-actors.component';
import { CreateMovieComponent } from './movies/movies/create-movie/create-movie.component';
import { CreateGenreComponent } from './movies/genres/create-genre/create-genre.component';
import { IndexGenresComponent } from './movies/genres/index-genres/index-genres.component';
import { CreateTheaterComponent } from './movies/theaters/create-theater/create-theater.component';
import { IndexMovieTheaterComponent } from './movies/theaters/index-movie-theater/index-movie-theater.component';
import { EditMoviesComponent } from './movies/movies/edit-movies/edit-movies.component';
import { FilterMovieComponent } from './movies/movies/filter-movie/filter-movie.component';
import { EditTheaterComponent } from './movies/theaters/edit-theater/edit-theater.component';

const routes: Routes = [
  { path: '', component: HomeComponent },

  { path: 'genres', component: IndexGenresComponent },
  { path: 'genres/create', component: CreateGenreComponent },

  { path: 'actors', component: IndexActorsComponent },
  { path: 'actors/create', component: CreateActorComponent },
  { path: 'actors/edit/:id', component: EditActorComponent },

  { path: 'theaters', component: IndexMovieTheaterComponent },
  { path: 'theaters/create', component: CreateTheaterComponent },
  { path: 'theaters/edit/:id', component: EditTheaterComponent },

  { path: 'movies/create', component: CreateMovieComponent },
  { path: 'movies/edit/:id', component: EditMoviesComponent },
  { path: 'movies/filter', component: FilterMovieComponent },

  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
