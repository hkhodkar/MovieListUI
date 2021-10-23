import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { MovieListComponent } from './movie-list/movie-list.component';
import { GenericListComponent } from '../framework/utilities/generic-list/generic-list.component';



@NgModule({
  declarations: [
    MovieListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports:[
    MovieListComponent
  ]
})
export class MoviesModule { }
