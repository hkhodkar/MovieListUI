import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { GenericListComponent } from './generic-list/generic-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { InputImgComponent } from './input-img/input-img.component';
import { InputMardownComponent } from './input-mardown/input-mardown.component';



@NgModule({
  declarations: [GenericListComponent,StarRatingComponent, InputImgComponent, InputMardownComponent],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports:[
    GenericListComponent,
    StarRatingComponent,
    InputImgComponent
  ]
})
export class UtilityModule { }
