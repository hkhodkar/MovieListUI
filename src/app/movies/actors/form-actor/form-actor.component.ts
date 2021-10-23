import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActorCreatingModel } from '../model/actor-creating.model';

@Component({
  selector: 'form-actor',
  templateUrl: './form-actor.component.html',
  styleUrls: ['./form-actor.component.css'],
})
export class FormActorComponent implements OnInit {
  public form: FormGroup;

  @Input() model: any;

  @Output() onSaveChanges = new EventEmitter<ActorCreatingModel>();

  constructor(private readonly fb: FormBuilder) {}

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      dateOfBirth: [''],
      image:''
    });
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  onImageSelected(file:File){
    this.form.get('image')?.setValue(file);
  }

  save() {
    this.onSaveChanges.emit(this.form.value);
  }
}
