import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateTheaterModel } from '../models/theater.model';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  model:CreateTheaterModel ={name:'test'}

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      console.log(param)
    })
  }

  save(data:any){
    console.log(data);
  }

}
