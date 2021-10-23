import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filter-movie',
  templateUrl: './filter-movie.component.html',
  styleUrls: ['./filter-movie.component.css']
})
export class FilterMovieComponent implements OnInit {

  form:FormGroup;

  constructor(private fb:FormBuilder) { }

  genres = [{id:1,name:'Dramas'},{id:2,name:'action'}];
  ngOnInit(): void {
    this.createForm();
  }

  createForm(){
    this.form = this.fb.group({
      title :'',
      genreId : 0,
      upcomingRelease :false,
      inTheaters:false
    })
  }

  clearForm(){

  }

}
