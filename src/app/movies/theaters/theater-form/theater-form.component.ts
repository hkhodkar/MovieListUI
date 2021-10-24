import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CorditnatesModel } from 'src/app/framework/utilities/map/cordinate.model';
import { CreateTheaterModel, TheaterModel } from '../models/theater.model';

@Component({
  selector: 'theater-form',
  templateUrl: './theater-form.component.html',
  styleUrls: ['./theater-form.component.css'],
})
export class TheaterFormComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  public form: FormGroup;
  public initialCordinate: CorditnatesModel[] = [];

  @Input() model: TheaterModel;
  @Output() onSaveChanges = new EventEmitter<CreateTheaterModel>();

  ngOnInit(): void {
    this.createForm();
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
      this.initialCordinate.push({
        latitude: this.model.latitude,
        longtitude: this.model.longtitude,
      });
    }
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      longtitude: [null, Validators.required],
      latitude: [null, Validators.required],
    });
  }

  getCordinate(cordinate: CorditnatesModel) {
    this.form.get('longtitude')?.setValue(cordinate.longtitude);
    this.form.get('latitude')?.setValue(cordinate.latitude);
  }

  save() {
    this.onSaveChanges.emit(this.form.value);
  }
}
