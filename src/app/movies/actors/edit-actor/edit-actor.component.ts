import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorCreatingModel, ActorModel } from '../model/actor-creating.model';

@Component({
  selector: 'app-edit-actor',
  templateUrl: './edit-actor.component.html',
  styleUrls: ['./edit-actor.component.css']
})
export class EditActorComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  model:ActorModel = {name:'tom holland',dateOfBirth:new Date(),image:'asd'}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      console.log(params);
    })
  }

  save(actorModel:ActorCreatingModel){
    console.log(actorModel);
  }

}
