import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { GenericListComponent } from './generic-list/generic-list.component';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { InputImgComponent } from './input-img/input-img.component';
import { InputMardownComponent } from './input-mardown/input-mardown.component';
import { FormsModule } from '@angular/forms';
import { MarkdownModule } from 'ngx-markdown';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MultipleSelectorComponent } from './multiple-selector/multiple-selector.component';

@NgModule({
  declarations: [
    GenericListComponent,
    StarRatingComponent,
    InputImgComponent,
    InputMardownComponent,
    MapComponent,
    MultipleSelectorComponent,
  ],
  imports: [
    CommonModule,
    LeafletModule,
    MaterialModule,
    FormsModule,
    MarkdownModule.forRoot(),
  ],
  exports: [
    GenericListComponent,
    StarRatingComponent,
    InputImgComponent,
    InputMardownComponent,
    MapComponent,
    MultipleSelectorComponent
  ],
})
export class UtilityModule {}
