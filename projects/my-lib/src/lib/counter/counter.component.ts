import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  Counter:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  onPlusButton(){
   this.Counter++;
  }
  onMinusButton(){
   if(this.Counter<=0){
    return this.Counter=1;
   }else{
    return this.Counter--;
   }
  }
}
