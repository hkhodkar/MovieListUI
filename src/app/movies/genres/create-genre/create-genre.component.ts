import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {  FirstLetterUppercaseValidator } from 'src/app/framework/validators/first-letter-upper-case';

@Component({
  selector: 'app-create-genre',
  templateUrl: './create-genre.component.html',
  styleUrls: ['./create-genre.component.css']
})
export class CreateGenreComponent implements OnInit {

  constructor(private router:Router,private fb:FormBuilder) { }

  public form:FormGroup;

  ngOnInit(): void {
    this.ceateForm();
  }

  ceateForm(){
    this.form = this.fb.group({
      name:['',Validators.compose([Validators.required,Validators.minLength(3),FirstLetterUppercaseValidator()])]
    })
  }

  getErrorMessageFieldName(){
    const field = this.form.get('name');

    if(field?.hasError('required')){
      return 'the name field is required'
    }

    if(field?.hasError('minlength')){
      return 'the min length is 3'
    }

    if(field?.hasError('FirstLetterUppercaseValidator')){
      return field.getError('FirstLetterUppercaseValidator').message;
    }

    return '';

  }
  save(){
    this.router.navigate(['/genres']);
  }
}

