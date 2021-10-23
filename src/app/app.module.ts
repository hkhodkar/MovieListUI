import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { ThemeModule } from './theme/theme/theme.module';
import { MaterialModule } from './material/material.module';
import { UtilityModule } from './framework/utilities/utility.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    ThemeModule,
    MoviesModule,
    BrowserModule,
    UtilityModule,
    MaterialModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
