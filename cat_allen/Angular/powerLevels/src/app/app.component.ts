import { Component } from '@angular/core';
import { Evolve } from './evolve'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  basePower: number;
  currentPower: number;
  evolves: Evolve[];
constructor(){
  this.evolves = [
    new Evolve("Human", 1),
    {name:'Saiyan', modifier: 10},
    {name:'SuperSaiyan', modifier: 90},
    {name:'SuperSaiyanTwo', modifier: 150},
    {name:'SuperSaiyanThree', modifier: 250},
    {name:'SuperSaiyanFour', modifier: 500}
  ]
  this.currentPower = 0;
}
  onSubmit(event){
    event.preventDefault();
    this.currentPower = this.basePower;
  }
}
