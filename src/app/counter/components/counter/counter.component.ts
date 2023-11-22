import { Component } from '@angular/core';

@Component({
  selector: 'App-Counter',
  template: "<h1>hola mundo</h1>",
  
})
export class CounterComponent {
 public  title: string = 'mi primera app';
public Counter: number = 10;
 

inCreaseBy(value:number):void{
  this.Counter += value;
}

ResetCounter(){
  this.Counter = 10;
}
}