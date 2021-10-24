import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateTheaterModel } from '../models/theater.model';

@Component({
  selector: 'app-create-movie-theater',
  templateUrl: './create-theater.component.html',
  styleUrls: ['./create-theater.component.css']
})
export class CreateTheaterComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  save(data:CreateTheaterModel){
    console.log(data);
  }
}
