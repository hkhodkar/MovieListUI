import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MoviesModule } from './movies/movies.module';
import { ThemeModule } from './theme/theme/theme.module';
import { MaterialModule } from './material/material.module';
import { UtilityModule } from './framework/utilities/utility.module';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MarkdownModule} from 'ngx-markdown'

@NgModule({
  declarations: [AppComponent, HomeComponent],
  imports: [
    ThemeModule,
    FormsModule,
    RouterModule,
    MoviesModule,
    BrowserModule,
    UtilityModule,
    MarkdownModule.forChild(),
    MaterialModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
