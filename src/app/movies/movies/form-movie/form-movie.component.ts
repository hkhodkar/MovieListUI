import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateMovieModel, MoviesModel } from '../models/movie.model';

@Component({
  selector: 'form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css'],
})
export class FormMovieComponent implements OnInit {

  @Input() model:MoviesModel;
  @Output() onSaveMovies = new EventEmitter<CreateMovieModel>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.createPlatform();
    if(this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  createPlatform() {
    this.form = this.fb.group({
      title: ['', Validators.required],
      summary: [''],
      inTheaters: false,
      trailer: '',
      releaseDate: '',
      poster: '',
    });
  }

  save() {
    this.onSaveMovies.emit(this.form.value);
  }

  onImageSelected(file:File){
    this.form.get('poster')?.setValue(file);
  }

  changeMarkDown(content:string){
    this.form.get('summary')?.setValue(content);
  }

}
