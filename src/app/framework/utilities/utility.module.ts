import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { GenericListComponent } from './generic-list/generic-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';



@NgModule({
  declarations: [GenericListComponent,StarRatingComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    GenericListComponent,
    StarRatingComponent
  ]
})
export class UtilityModule { }
