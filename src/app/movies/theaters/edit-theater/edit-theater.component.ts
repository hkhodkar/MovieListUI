import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TheaterModel } from '../models/theater.model';

@Component({
  selector: 'app-edit-theater',
  templateUrl: './edit-theater.component.html',
  styleUrls: ['./edit-theater.component.css']
})
export class EditTheaterComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  model:TheaterModel ={name:'test',latitude:1,longtitude:1}

  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      console.log(param)
    })
  }

  save(data:any){
    console.log(data);
  }

}
