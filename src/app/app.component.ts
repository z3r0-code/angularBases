import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  
})
export class AppComponent {
 public  title: string = 'mi primera app';
public Counter: number = 10;
 

inCreaseBy(value:number):void{
  this.Counter += value;
}

ResetCounter(){
  this.Counter = 10;
}
}
