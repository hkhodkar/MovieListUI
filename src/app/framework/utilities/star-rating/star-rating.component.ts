import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnInit {

  @Input() maxRate:number = 5;
  public rateArray:Array<number> = [];
  public selectedRate:number = 1;
  public rate:number=1;

  constructor() { }

  ngOnInit(): void {
    this.rateArray = Array(this.maxRate).fill(0);
  }

  onMouseEnter(index:number){
    this.selectedRate = index +1;
  }

  onMouseLeave(){
      this.selectedRate = this.rate;

  }

  saveRate(index:number){
    this.selectedRate = index+1;
    this.rate = this.selectedRate;
  }

}
