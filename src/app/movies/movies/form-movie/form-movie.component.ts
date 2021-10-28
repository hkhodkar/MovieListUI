import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MultipleSelectorModel } from 'src/app/framework/utilities/multiple-selector/multiple-selector.model';
import { CreateMovieModel, MoviesModel } from '../models/movie.model';

@Component({
  selector: 'form-movie',
  templateUrl: './form-movie.component.html',
  styleUrls: ['./form-movie.component.css'],
})
export class FormMovieComponent implements OnInit {
  @Input() model: MoviesModel;
  @Output() onSaveMovies = new EventEmitter<CreateMovieModel>();
  form: FormGroup;
  constructor(private fb: FormBuilder) {}

  nonSelectedGenres: MultipleSelectorModel[] = [
    { key: 1, value: 'Drama' },
    { key: 2, value: 'Action' },
    { key: 3, value: 'Comedy' },
  ];

  selectedGenres: MultipleSelectorModel[] = [];


  nonSelectedTheaters: MultipleSelectorModel[] = [
    { key: 1, value: 'Agora' },
    { key: 2, value: 'Sambil' },
    { key: 3, value: 'Megacentro' },
  ];


  selectedTheaters: MultipleSelectorModel[] = []


  ngOnInit(): void {
    this.createPlatform();
    if (this.model !== undefined) {
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
      genreIds: [],
      theatersIds:[]
    });
  }

  save() {
    const genreIds = this.selectedGenres.map((value) => value.key);
    const theaterIds = this.selectedTheaters.map((value) => value.key);
    this.form.get('genreIds')?.setValue(genreIds);
    this.form.get('theatersIds')?.setValue(theaterIds);
    this.onSaveMovies.emit(this.form.value);
  }

  onImageSelected(file: File) {
    this.form.get('poster')?.setValue(file);
  }

  changeMarkDown(content: string) {
    this.form.get('summary')?.setValue(content);
  }
}
