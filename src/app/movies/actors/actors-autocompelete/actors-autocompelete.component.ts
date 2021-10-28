import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';
import { SelectActorModel } from '../model/actor-creating.model';

@Component({
  selector: 'actors-autocompelete',
  templateUrl: './actors-autocompelete.component.html',
  styleUrls: ['./actors-autocompelete.component.css'],
})
export class ActorsAutocompeleteComponent implements OnInit {
  constructor() {}

  control: FormControl = new FormControl();

  columnsToDisplay = ['picture', 'name', 'character', 'actions'];

  @ViewChild(MatTable) table: MatTable<any>;
  ngOnInit(): void {
    this.control.valueChanges.subscribe((value) => {
      this.actors = this.originalActors;
      this.actors = this.actors.filter(
        (actor) => actor.name.indexOf(value) !== -1
      );
    });
  }

  actors = [
    {
      name: 'Tom Holand',
      picture:
        'https://m.media-amazon.com/images/M/MV5BNzZiNTEyNTItYjNhMS00YjI2LWIwMWQtZmYwYTRlNjMyZTJjXkEyXkFqcGdeQXVyMTExNzQzMDE0._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
      name: 'Tom Harvey',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ3ODEyNjA4Nl5BMl5BanBnXkFtZTgwMTE4ODMyMjE@._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
    {
      name: 'Samuel l.Jackson',
      picture:
        'https://m.media-amazon.com/images/M/MV5BMTQ1NTQwMTYxNl5BMl5BanBnXkFtZTYwMjA1MzY1._V1_UX214_CR0,0,214,317_AL_.jpg',
    },
  ];

  originalActors = this.actors;
  selectedActors: SelectActorModel[] = [];

  optionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedActors.push(event.option.value);
    this.control.patchValue('');
    if (this.table !== undefined) {
      this.table.renderRows();
    }
  }

  remove(actor: any) {
    const index = this.selectedActors.findIndex((a) => a.name === actor.name);
    this.selectedActors.splice(index, 1);
    this.table.renderRows;
  }

  dropped(event:CdkDragDrop<any[]>){
    const previousIndex = this.selectedActors.findIndex(actor => actor === event.item.data);
    moveItemInArray(this.selectedActors,previousIndex,event.currentIndex);
    this.table.renderRows();

  }
}
