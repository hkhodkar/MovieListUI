import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MaterialModule } from './framework/utilities/material/material/material.module';
import { ThemeModule } from './theme/theme/theme.module';
import { StarRatingComponent } from './framework/utilities/star-rating/star-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    StarRatingComponent,
  ],
  imports: [
     ThemeModule,
    BrowserModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
