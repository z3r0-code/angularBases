import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  
public name: string = "iroman";
public age: number = 45;
public  title: string = 'mi primera app';
public Counter: number = 10;

get CapitalizeName(): string{
  return this.name.toUpperCase();
}

getHerodescription():string {
  return `${this.name} - ${this.age}`;
}

ChangeHero():void{
   this.name = "Spiderman";
}

ChangeAge():void{
  this.age = 25;
}

ResetForm():void{
  this.name = "iroman";
  this.age = 45;
}



  
 
 inCreaseBy(value:number):void{
   this.Counter += value;
 }
 
 ResetCounter(){
   this.Counter = 10;

}}
