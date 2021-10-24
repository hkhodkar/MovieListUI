import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CreateTheaterModel } from '../models/theater.model';

@Component({
  selector: 'theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css'],
})
export class TheaterFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public form: FormGroup;

  @Input() model: CreateTheaterModel;
  @Output() onSaveChanges = new EventEmitter<CreateTheaterModel>();

  ngOnInit(): void {
    this.createForm();
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
    });
  }
  save() {
    this.onSaveChanges.emit(this.form.value);
  }
}
