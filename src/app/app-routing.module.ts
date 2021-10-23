import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateActorComponent } from './movies/actors/create-actor/create-actor.component';
import { IndexActorsComponent } from './movies/actors/index-actors/index-actors.component';
import { CreateMovieComponent } from './movies/create-movie/create-movie.component';
import { CreateGenreComponent } from './movies/genres/create-genre/create-genre.component';
import { IndexGenresComponent } from './movies/genres/index-genres/index-genres.component';
import { CreateMovieTheaterComponent } from './movies/theaters/create-movie-theater/create-movie-theater.component';
import { IndexMovieTheaterComponent } from './movies/theaters/index-movie-theater/index-movie-theater.component';

const routes: Routes = [
  {path:'', component:HomeComponent},

  {path:'genres', component:IndexGenresComponent},
  {path:'genres/create', component:CreateGenreComponent},

  {path:'actors', component:IndexActorsComponent},
  {path:'actors/create', component:CreateActorComponent},

  {path:'theaters', component:IndexMovieTheaterComponent},
  {path:'theaters/create', component:CreateMovieTheaterComponent},

  {path:'movies/create', component:CreateMovieComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
