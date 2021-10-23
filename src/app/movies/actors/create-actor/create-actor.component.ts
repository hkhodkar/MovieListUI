import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActorCreatingModel } from '../model/actor-creating.model';

@Component({
  selector: 'app-create-actor',
  templateUrl: './create-actor.component.html',
  styleUrls: ['./create-actor.component.css']
})
export class CreateActorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  save(value:ActorCreatingModel){
    console.log(value);
  }



}
