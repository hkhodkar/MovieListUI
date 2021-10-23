import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-movies',
  templateUrl: './edit-movies.component.html',
  styleUrls: ['./edit-movies.component.css']
})
export class EditMoviesComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }



  ngOnInit(): void {
    this.route.params.subscribe(param =>{
      console.log(param)
    })
  }

}
