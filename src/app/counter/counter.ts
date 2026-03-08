import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.html',
  styleUrl: './counter.css',
})
export class Counter {
    count : number = 0;

    incr = ()=>{
      this.count++;
    }

    decr = ()=>{
      if(this.count>0){
        this.count--;
      }
    }

    reset(){
      this.count =0;
    }
}
